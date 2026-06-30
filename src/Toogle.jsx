import { useState } from "react";

function Display() {
  const [toggle, setToggle] = useState(false);

  function click() {
    setToggle(!toggle);
  }

  return (
    <div>
      <button onClick={click}>
        {toggle ? "Hide" : "Show"}
      </button>

      {toggle && <h1>Hello this is toggle button.</h1>}
    </div>
  );
}

export default Display;