import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(
    //1st arg: side effect (callback function)
    () => {console.log("useEffect called");},
    //2nd arg: dependencies array
    [count]
    );
    //the side effect will only run when the count variable changes

    useEffect(() => {
      document.title = text;
    }, [text]); //Update the document's title only when the text variable changes

    useEffect(() => {
      setTimeout(() => setCount(0), 5000);
    }, []) //When the App component renders, reset the count state variable back to 0 after 5 seconds. Only set this timeout function once

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count => ++count)}>I've been clicked {count} times</button>
      <input type="text" placeholder="Type away..." value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App;
