const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteList = {
  quote: "1",
  author: "1",

  quote: "2",
  author: "2",

  quote: "3",
  author: "3",

  quote: "4",
  author: "4",

  quote: "5",
  author: "5",

  quote: "6",
  author: "6",

  quote: "7",
  author: "7",

  quote: "8",
  author: "8",
};
const quotes = quoteList.quote;
const authors = quoteList.author;

function paintQuote() {
  const random = Math.floor(Math.random() * 7);
  quote.innerText = quotes[parseInt(random)];
  author.innerText = authors[parseInt(random)];
}
paintQuote();

console.log(quotes[0]);
