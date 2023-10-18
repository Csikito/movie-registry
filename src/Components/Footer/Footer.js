import React, { useState } from "react";

const Footer = () => {
  const [quote, setQuote] = useState(false);
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-slate-900 py-2 ">
      <p className=" font-bold">Which movie is this quote from?</p>
      {quote ? (
        <p
          className="text-green-500 font-bold cursor-pointer"
          onClick={() => setQuote(!quote)}
        >
          The Terminator, 1984
        </p>
      ) : (
        <p
          className="text-red-500 font-bold cursor-pointer"
          onClick={() => setQuote(!quote)}
        >
          "I'll be back."
        </p>
      )}
    </footer>
  );
};

export default Footer;
