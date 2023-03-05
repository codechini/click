import React from 'react';

const ChildProcessSpawn = () => {
  const options = {
    pythonPath: 'C://DELL/AppData/Local/Programs/Python/Python311',
  };
  const { spawn } = require('child_process');
  const childPython = spawn('python', ['options', 'hello.py']);
  childPython.stdout.on('data', (data) => {
    console.log();
  })
  childPython.stderr.on('data', (data) => {
    console.error(`stdout: ${data}`);
  })
  childPython.stdout.on('close', (code) => {
    console.log(`child process exited with code: ${code}`);
  })
  return (
    <div>ChildProcessSpawn</div>
  )
}

export default ChildProcessSpawn;
