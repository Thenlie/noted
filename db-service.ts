import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { ToDoItem } from './models';

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
};

export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoItem[]> => {
    // get all todo items, return as array
    try {
        const todoItems: ToDoItem[] = [];
        const results = await db.executeSql(`SELECT rowid as id, value FROM ${tableName}`);
        results.forEach(result => {
            for (let i = 0; i < result.rows.length; i++) {
                todoItems.push(result.rows.item(i))
            }
        });
        return todoItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get todoItems!');
    }
};

export const saveTodoItems = async (db: SQLiteDatabase, todoItems: ToDoItem[]) => {
    // save an array of todo items
    const insertQuery = `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
        todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');
    return db.executeSql(insertQuery);
}

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
    // delete a single todo item
    const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
};
  
export const deleteTable = async (db: SQLiteDatabase) => {
    // delete entire table specified at top of file
    const query = `drop table ${tableName}`;
    await db.executeSql(query);
};