const quoteGenerator = document.getElementById('quotes');
const quoteAuthors = document.getElementById('author');

const clickBtn = document.getElementById('button');

clickBtn.addEventListener('click', () => {
  const randomOutput = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomOutput];
  quoteGenerator.textContent = randomQuote.quote;
  quoteAuthors.textContent = randomQuote.author;

});   

const quotes = [
  {
    quote: "History will be kind to me for I intend to write it.",
    author: "Winston Churchill"
  },
  {
    quote: "Those who do not learn history are doomed to repeat it.",
    author: "George Santayana"
  },
  {
    quote: "The more you know about the past, the better prepared you are for the future.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "We are not makers of history. We are made by history.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "Study the past if you would define the future.",
    author: "Confucius"
  },
  {
    quote: "I've failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan"
  },
  {
    quote: "Champions keep playing until they get it right.",
    author: "Billie Jean King"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke"
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi"
  }
];



