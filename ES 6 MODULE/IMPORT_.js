//"type": "module", add this in package.json
import p, { hello, ahello } from "./EXPORT_.js";
hello();

ahello("Paras");

p(); //without decosntruct ;