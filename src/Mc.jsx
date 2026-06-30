import { useState } from "react";

function Mcondition() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Button</button>
      {count == 0 ? <h1>Hello</h1>
       : count==1 ? <h1>Condition1</h1>
     : count==2 ? <h1>Condition 2</h1>
     : count==3 ? <h1>Condition 3</h1>
     : count==4 ? <h1>Condition 4</h1>
     : count==5 ? <h1>Condition 5</h1>
     : count==6 ? <h1>Condition 6</h1>
    : <h1>NO condition</h1>}
    </div>
  );
}

export default Mcondition;
