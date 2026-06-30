import { useState } from "react";
import Radio from "./Radio";

function Skills() {
  const [skill, setSkill] = useState([]);

  const handelSkill = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkill([...skill, event.target.value]);
    } else {
      setSkill([...skill.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <div>
      <h1>Select Your skills</h1>
      <input
        onChange={handelSkill}
        type="checkbox"
        name=""
        id="php"
        value="PHP"
      />
      <label htmlFor="php">PHP</label>
      <br />
      <input
        onChange={handelSkill}
        type="checkbox"
        name=""
        id="java"
        value="JAVA"
      />
      <label htmlFor="java">JAVA</label>
      <br />
      <input
        onChange={handelSkill}
        type="checkbox"
        name=""
        id="python"
        value="PYTHON"
      />
      <label htmlFor="python">PYTHON</label>
      <br />
      <input onChange={handelSkill} type="checkbox" name="" id="c" value="C" />
      <label htmlFor="c">C</label>
      <h1>{skill.toString()}</h1>
      <br />
      <br /> <br /> <br /> <br />

      <h1>Using Radio Butto</h1>

      <Radio />
    </div>
  );
}

export default Skills;
