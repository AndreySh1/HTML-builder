const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;


process.on('SIGINT', function(){
    process.exit();
});
fs.writeFile(
      path.join('./02-write-file/output.txt'), '', (error) => {
        if (error) throw error;
        stdout.write('Файл создан\n');
}
);
process.on('exit', () => stdout.write('До встречи\n'));
stdin.on('data', data => {
      if (data.toString().trim() === 'exit') process.exit();
});