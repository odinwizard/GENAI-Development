import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const userQuery = "Hey! there i am anindya manna";

const tokens = enc.encode(userQuery);

console.log(tokens);

const inputTokens = [
  25216,    0,   1354,
    575,  939,    448,
    521, 2090, 116893 
] ;

const decoded = enc.decode(inputTokens);
console.log({decoded});
