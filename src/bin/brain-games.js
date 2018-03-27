#!/usr/bin/nodejs
// import { readline } from '../index';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// readline();
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
