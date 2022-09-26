import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'notedData';

enablePromise(true);

export const getDbConnection = async () => {
    // connect to database
    return openDatabase({name: 'noted-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
    // create table if one does not exist
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(value TEXT NOT NULL);`;
    await db.executeSql(query);
}