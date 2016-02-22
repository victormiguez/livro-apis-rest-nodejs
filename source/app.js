'use strict';
import express from 'express';
import consign from 'consign';

const app = express();


consign({
  cwd: process.cwd() + '\\build\\'
})
  .include('database.js')
  .then('models')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);
