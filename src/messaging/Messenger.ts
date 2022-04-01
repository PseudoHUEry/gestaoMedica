import { AmqpConnectionManager, ChannelWrapper } from 'amqp-connection-manager';
import { v4 as generateID } from 'uuid';
import store from './store';
import { ActionType, AmqpRequest, AmqpResponse, DestinyType } from './types';

export default class Messenger {
	private readonly channel: ChannelWrapper;
	private readonly connection: AmqpConnectionManager;
	private readonly queueName: string;
	private readonly queueESB = 'barramento-queue';

	constructor(
		connection: AmqpConnectionManager,
		channel: ChannelWrapper,
		queueName: string
	) {
		this.channel = channel;
		this.connection = connection;
		this.queueName = queueName;
	}

	public async get(
		action: ActionType,
		destiny: DestinyType,
		params: any[]
	): Promise<AmqpResponse> {
		const requestID = generateID();

		const message: AmqpRequest = {
			$id: requestID,
			$action: action,
			$params: params,
			$origin: 'gestaoMedica',
			$destiny: destiny,
		};

		console.log('[x]: Sent: %s', message);

		this.channel.sendToQueue(
			this.queueESB,
			Buffer.from(JSON.stringify(message))
		);

		return new Promise(async (resolve, reject) => {
			let msg: AmqpResponse;
			const timeout = setTimeout(async () => {
				reject('Timeout!');
			}, 10000);
			msg = await this.getMessage(requestID);
			clearTimeout(timeout);
			resolve(msg);
		});
	}
	private async getMessage(requestID: string): Promise<AmqpResponse> {
		return new Promise((resolve) => {
			let msg: AmqpResponse;
			const fn = () => {
				msg = store.getById(requestID);
				if (!msg) {
					setTimeout(fn, 0);
				} else {
					resolve(msg);
				}
			};
			setTimeout(fn, 0);
		});
	}
}