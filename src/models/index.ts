import mongoose = require("mongoose");
import * as BPromise from "bluebird";

import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = new MongoMemoryServer();

mongoose.Promise = BPromise;

export const bootstrap = async (mongoUrl: string) => {
  let uri = await mongoServer.getUri()
  await mongoose.connect(uri, { useMongoClient: true });
  require("./articles");
};


