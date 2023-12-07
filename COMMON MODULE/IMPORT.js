//common js modules
const im = require("../MODULES/COMMON_MODULE/EXPORT");
im.hello(); //paras raut
im.ahello("Paras"); //cool paras


//destructing
const { hello, ahello } = require("../MODULES/COMMON_MODULE/EXPORT");
hello(); //paras raut
ahello("Paras"); //cool paras