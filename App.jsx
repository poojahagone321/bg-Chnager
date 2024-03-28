
import "./App.css";
import "./index.css"

function App() {
  const handleClickFunction = (e) => {
    const body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.background = getRandomColor();
  };

  function getRandomColor() {
    let letter = "0123456789ABCDEF";
    let Color = "#";
    for (let i = 0; i < 6; i++) {
      Color += letter[Math.floor(Math.random() * 16)];
    }
    return Color;
  }

  return (
    <>
      <div className="container">
        <h1>Click Here To Change Random Background Colors</h1>
        <button className="btn" onClick={handleClickFunction}>color</button>
      </div>
    </>
  );
}

export default App;
