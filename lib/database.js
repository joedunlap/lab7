/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
import { MongoClient } from 'mongodb';
import Constants from './constants.js';

class Database {
  _instance = null;

  // config has all DB settings
  // TODO: Add connection pool
  init = async (config) => {
    const client = new MongoClient(config.url, {
      minPoolSize: config.minPoolSize,
      maxPoolSize: config.maxPoolSize,
    });
    await client.connect();
    // eslint-disable-next-line no-underscore-dangle
    this._instance = client.db(config.database);
  };

  getDb = () => {
    return this._instance;
  };

  dbTODOS = () => {
    return this._instance.collection(Constants.TODOS_COLLECTION);
  };
}

// eslint-disable-next-line import/prefer-default-export
export const db = new Database();
