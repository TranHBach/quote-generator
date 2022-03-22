import { useState } from "react";

const allQuote = [
  {
    quoteText: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },

  {
    quoteText: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },

  { quoteText: "Get busy living or get busy dying.", author: "Stephen King" },

  {
    quoteText: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quoteText:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },

  {
    quoteText:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quoteText:
      "Never let the fear of striking out keep you from playing the game.",
    author: " Babe Ruth",
  },
  {
    quoteText:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    quoteText:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: " Steve Jobs",
  },

  {
    quoteText: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
];

function Quote() {
  const [quote, setQuote] = useState(
    allQuote[Math.floor(Math.random() * allQuote.length)]
  );

  function changeQuote() {
    setQuote(allQuote[Math.floor(Math.random() * allQuote.length)]);
  }
  return (
    <div id="quote-box" className="quote">
      <i className="fa-solid fa-quote-left quoteIcon"></i>
      <span className="textSize" id="text">
        {quote.quoteText}
      </span>
      <figure className="text-end">
        <figcaption className="blockquote-footer textSize" id="author">
          {quote.author}
        </figcaption>
      </figure>
      <button
        className="btn btn-outline-success"
        onClick={changeQuote}
        id="new-quote"
      >
        New Quote
      </button>
      <a rel="noreferrer" target={"_blank"} id="tweet-quote" href="https://twitter.com/intent/tweet" className="box">
        <i class="fa-brands fa-twitter textSize"></i>
      </a>
    </div>
  );
}

export default Quote;
