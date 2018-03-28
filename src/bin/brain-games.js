#!/usr/bin/env node
import { getName, greeting } from '../index';

console.log('Welcome to the Brain Games\n');
const userName = getName();
greeting(userName);
