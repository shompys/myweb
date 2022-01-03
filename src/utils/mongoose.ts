import { connect, connection, Error } from 'mongoose';

let isConnected : boolean;

export const connDB = async () => {

    if(isConnected) return;

    const db = await connect(process.env.MONGODB as string);

    isConnected = db.connections[0].readyState ? true : false;

    console.log('Database name: ', db.connection.db.databaseName);

};

connection.on('connected', () => {
    console.log('Mongo is connected')
});
connection.on('reconnected', () => {
    console.log('Reconnected Mongo')
});
connection.on('error', (err: Error) => {
    console.log(err);
});