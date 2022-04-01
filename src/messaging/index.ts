import amqp, {
	AmqpConnectionManager,
	ChannelWrapper,
} from 'amqp-connection-manager';
import Store from './store';
import { AmqpRequest, AmqpResponse } from './types';

//@ts-ignore
export default async () => {
	try {
		const queueESB = 'barramento-queue';
		const queueName: string = process.env.RMQ_QUEUE ?? 'gestaoMedica-queue';
		const responseQueueName: string =
			process.env.RMQ_QUEUE_RESPONSE ?? 'gestaoMedica-responseQueue';
		const connection: AmqpConnectionManager = amqp.connect(
			`amqp://${process.env.RMQ_USER}:${process.env.RMQ_PASS}@${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`
		);

		const handlerMessage = async (msg: any) => {
			const Msg = JSON.parse(msg.content.toString()) as AmqpRequest;
			const data = await Store.getAction(Msg.$action)(...Msg?.$params);

			const response = JSON.stringify({
				...{
					$id: Msg?.$id,
					$origin: Msg?.$origin,
					$destiny: Msg?.$destiny,
					$flow: true,
				},
				$body: data,
			} as AmqpResponse);

			channel.sendToQueue(queueESB, Buffer.from(response));
		};
		const senderMessage = async (msg: any) => {
			if (!msg) {
				return;
			}
			const Msg = JSON.parse(msg.content.toString());
			console.log(' [x] Received %s', Msg);

			Store.push(Msg);
		};

		const channel: ChannelWrapper = connection.createChannel();

		await channel.waitForConnect();
		await channel.assertQueue(queueName, { durable: true });
		await channel.assertQueue(responseQueueName, { durable: true });
		//@ts-ignore
		await channel.consume(queueName, handlerMessage, { noAck: true });
		//@ts-ignore
		await channel.consume(responseQueueName, senderMessage, { noAck: true });
		return { connection, channel, queueName, responseQueueName };
	} catch (e) {
		console.log('Error: ' + e);
	}
};