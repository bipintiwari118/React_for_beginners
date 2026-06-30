import { useState } from "react";

function Input() {
  const [val, setVal] = useState("Bipin Tiwari");
  const [val1, setVal1] = useState("12");
  const [val2, setVal2] = useState("user@gmail.com");

  return (
    <div>
      <h1>Get input field value</h1>
      <h2>
        {val}
        <br />
        {val1}
        <br />
        {val2}
        <br />
      </h2>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter user name"
      />
      <input
        type="number"
        value={val1}
        onChange={(event) => setVal1(event.target.value)}
        placeholder="Enter user age"
      />
      <input
        type="email"
        value={val2}
        onChange={(event) => setVal2(event.target.value)}
        placeholder="Enter user email"
      />
    </div>
  );
}

export default Input;
