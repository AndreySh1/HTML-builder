const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit} = process;

const stream = fs.createWriteStream('./02-write-file/output.txt');


stdout.write('Файл создан\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') exit();
  stream.write(data.toString());
});

process.on('exit', () => stdout.write('До встречи\n'));
process.on('SIGINT', exit);
