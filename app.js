#!/usr/bin/env node

'use strict'

/*
 The process.arg property returns an array containing the command line arguements passed when the node.js process was
 launched.  The first element will be process.execPath. The second element will be path to the JavaScript file being
 executed. The remaining elements will be any additional command line arguments.

 Example: ['node', 'path/to/your/js', 'arg1', 'arg2',... ]
 Url: https://nodejs.org/api/process.html#process_process_argv
 */

//1 extract the name of the app/file name
const appName = process.argv[1].split('/').pop();

//2 save the first provided argument as the username
const name = process.argv[2];

//3 check if the name was provided

if(!name) {
    //give the user an example of how to use the app
    console.log(`Missing arguement \n\n\tExample: ${appName} YOUR_NAME\n`);

    //exit the app if error.  the nr1 tells the system that the app quit with an error, thus another command won't be
    //executed.  for example:
    //hello && ls  -> won't execute ls
    //hello david && ls -> will execute ls
    process.exit(1);
}

//4. display a message in the console
console.log(`Hello, ${name}!`);