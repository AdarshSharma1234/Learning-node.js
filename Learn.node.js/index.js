//const fs = require("fs");

//creating a new file

//fs.writeFileSync("read.txt", "i am adarsh");
//fs.writeFileSync("read.txt", "hello dovloper , i am adarsh");//data overwite then create a txt-file


//fs.appendFileSync('read.txt',"javascript  runtime built-in google-crome v8 engine");



// const buf_data = fs.readFileSync('read.txt');


// org_data = buf_data.toString();
// console.log(org_data)

//Node.js includes an additional data type called Buffer
//(note available in browser's store javaScript).
//Buffer is mainly used to store binary data,
//while reading from a file or receving packets over the network.

//<Buffer 68 65 6c 6c 6f 20 64 6f 76 6c 6f 70 65 72 20 2c 20 69 20 61 6d 20 61 64 61 72 73 68 0d 0a 0d 0a 6a 61 76 61 73 63 72 69 70 74 20 20 72 75 6e 74 69 6d 
//... 87 more bytes>


// to rename the file

//fs.renameSync("read.txt", "readwrite.txt");

///////////////////////CRUD Operation using FS Module in nodeJS///////////////////////////////////