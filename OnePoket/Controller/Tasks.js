const express = require("express");
const fs = require('fs');

// Controller function Task1 for printing Hello World message. 
exports.Task1 = (req, res) => {
  try{
     res.send("Hello World");
     console.log("Hello World")
  }catch(err){
    console.log("msg "+err)
  }
};

// Controller function Task1 for printing Sum of an Array.
exports.Task2 = (req, res) => {
    try{
      let arr = [2, 4, 6, 5, 3, 2];

      let sum = 0;

      for (let i = 0; i < arr.length; i++ ) {
         sum += arr[i];
      }
      res.send(`<h1>Sum of Array ${sum}</h1>`);
      console.log("Sum of Array "+sum);

    }catch(err){
      console.log("msg "+err)
    }
  };


// Controller function Task3 for Count & Print number of word in file data.txt.
exports.Task3 = (req, res)=> {

    const filePath = 'data.txt';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
       console.error('Error in file:', err);
    }

      const wordCount = countWords(data);
      console.log('Total word count:', wordCount);
  });

  function countWords(text) {
      const words = text.trim().split(/\s+/);
        return words.length;
   }

};