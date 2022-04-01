import AmqpController from '../infraestructure/controller/AmqpController'
import startAMQP from '../messaging/index';
import Messenger from '../messaging/Messenger';
import Store from '../messaging/store';

//@ts-ignore
export default async () => {
	try {
		console.log('⏳ AMQP Starting...');
		const { connection, channel, queueName, responseQueueName }: any =
			await startAMQP();
		Store.addAction(AmqpController);
		Store.messenger = new Messenger(connection, channel, queueName);
		console.log(`✅ AMQP Connected! \nRunning amqp on queue ${queueName} and ${responseQueueName}`);
		return true;
	} catch (e) {
		console.log(e);
	}
};