"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

  const [quotes, setQuotes] = useState({ text: '', author: '' });
  const getQuote = () => {
      fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum])
      })
  }

  useEffect(()=> {
  getQuote();
  },[])


  return (
    <div className="flex justify-center mt-64">
      <div className="bg-slate-600 box-border rounded-lg w-4/5 h-64">
      <p className="flex justify-center text-red-100 py-2 font-bold text-lg md:text-2xl px-2">Random Quote Generator</p>
        <div>
          <p className="flex justify-center text-gray-100 py-2 font-bold text-lg md:text-2xl px-2">{quotes.text}</p>
          <p className="flex justify-center text-gray-100 py-2 font-bold text-lg md:text-2xl px-2">{quotes.author}</p>
        </div>
        <div className="flex justify-center">
          <button className="text-yellow-200 text-lg md:text-2xl bg-amber-800 mt-10 font-bold rounded-lg px-4 py-2" onClick={getQuote}>Get Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App;