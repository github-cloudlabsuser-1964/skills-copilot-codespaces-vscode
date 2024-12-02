import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const reverseSentence = (sentence) => {
  const reversed = sentence.split(' ').reverse().join(' ');
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

// Example usage
const sentence = "hello world";
console.log(reverseSentence(sentence)); // Output: "World hello"

export const getCurrentDateAndLeapYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return {
    date: today.toLocaleDateString(),
    isLeapYear: isLeapYear
  };
};

// Example usage
const dateInfo = getCurrentDateAndLeapYear();
console.log(`Today's date is ${dateInfo.date} and it is ${dateInfo.isLeapYear ? '' : 'not '}a leap year.`);

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
        rows="10" 
        cols="50"
      />
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
