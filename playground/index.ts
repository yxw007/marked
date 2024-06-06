import { _Lexer as Lexer } from "../src/Lexer"

const lexer = new Lexer();
const actual = lexer.lex("paragraph 1\n\nparagraph 2");

console.log(actual);
