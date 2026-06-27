function clickMe() {
  alert("Click Me 2222");
}

function Bipin() {
  const fruit = () => {
    alert("I am a fruit");
  };
  return (
    <div>
      <h1>Bipin Tiwari</h1>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
        alt=""
      />
      <ul>
        <li>Invent new traffic lights </li>
        <li className="traffic-light">Invent new traffic lights </li>
        <li>Invent new traffic lights </li>
      </ul>

      <button onClick={clickMe}>Click Me</button>

      <h1>The sum is {sum(12, 13)}</h1>
    </div>
  );

  function clickMe() {
    alert("Click Me");
  }

  function sum(a, b) {
    return a + b;
  }
}

export default Bipin;
