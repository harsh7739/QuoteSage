import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import QuoteButton from './QuoteButton';
import ThemeToggle from './ThemeToggle';
import FontSizeSelector from './FontSizeSelector';

const Quote = () => {
  const [quote, setQuote] = useState({ q: '', a: '' });
  const [liked, setLiked] = useState(false);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('16px');

async function  fetchQuote(){
    try {
        let res = await axios.get("https://zenquotes.io/api/random");//this api is not working fine
    // console.log(res.data)
    setQuote(res.data[0]);
    setLiked(false);
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <FontSizeSelector onChange={handleFontSizeChange} />
      <QuoteCard
        quote={quote.q}
        author={quote.a}
        liked={liked}
        onLike={() => setLiked(!liked)}
        fontSize={fontSize}
        theme={theme}
      />
      <QuoteButton onClick={fetchQuote} label="New Quote" />
    </div>
  );
};

export default Quote;
