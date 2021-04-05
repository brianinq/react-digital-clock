import React, { useState } from "react";

function App(props) {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>The time is:</h1>
      <h1>{time}</h1>
      <p>
        <a href="https://github.com/brianinq">made with ❤ brianinq</a>
      </p>
    </div>
  );
}

export default App;
