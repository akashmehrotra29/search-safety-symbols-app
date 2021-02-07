import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emote, setEmote] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    setEmote(userInput);

    var meaning = emojiDictionary[userInput];
    if (meaning !== undefined) {
      setMeaning(meaning);
    } else setMeaning("Sorry, we don't know this");
  }

  function emojiClickHandler(emoji) {
    setEmote(emoji);
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Outdoor Safety Symbols</h1>

      <h2>
        <strong>
          <span style={{ color: "#4B5563" }}> Search </span>{" "}
          <span style={{ color: "#BE185D" }}>Below</span>
        </strong>
      </h2>

      <input
        placeholder={" Paste symbol and search"}
        onChange={emojiInputHandler}
      ></input>

      <h2> {emote} </h2>
      <h3>{meaning}</h3>

      <h4>
        Symbols <span style={{ color: "#BE185D" }}>We Know</span>
      </h4>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)} //syntax to pass an item from list
            className="list"
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
