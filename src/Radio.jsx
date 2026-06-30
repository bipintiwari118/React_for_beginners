import { useState } from "react";

function Radio() {
  const [radio, setRadio] = useState("male");
  const [city, setCity] = useState('pokhara');
  return (
    <div>
      <input
        value="male"
        onChange={(event) => setRadio(event.target.value)}
        type="radio"
        name="sex"
        id="male"
        checked={radio == "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        value="female"
        checked={radio == "female"}
        onChange={(event) => setRadio(event.target.value)}
        type="radio"
        name="sex"
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>{radio}</h2>
      <br /> <br /> <br /> <br />
      <h2>Select City</h2>
      <select
        onChange={(event) => setCity(event.target.value)}
        name="city"
        id=""
        defaultValue={"pokhara"}
      >
        <option value="kathmandu">Kathmandu</option>
        <option value="pokhara">Pokhara</option>
        <option value="dharan">Dharan</option>
        <option value="gorkha">Gorkha</option>
      </select>
      <h3>Selected city: {city}</h3>
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Radio;
