const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Configuring Smoother SCSS library...');

// Default options
let useBetterize = true;
let targetDirectory = 'sass/vendor';

// Question 1: Ask about using Betterize
rl.question('Would you like to use Betterize? (yes/no) [yes]: ', (answer) => {
  useBetterize = answer.toLowerCase() !== 'no';
