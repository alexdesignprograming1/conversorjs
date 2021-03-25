const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWriter");

const reader = new Reader();
const writer = new Writer();


async function main() {
  const dados = await reader.Read("./username.csv");
  const dadosProcessados = Processor.Process(dados);
  const users = new Table(dadosProcessados);
  const html = await HtmlParser.Parse(users)
 
  writer.Write(Date.now() +".html", html);
  PDFWriter.WritePDF(Date.now() +"PDF", html);
 
}

main();