export default function App() {
  return (
    <div className="app">
      <Header/>
      <Cycle/>
    </div>
  );
}

function Header(){
  return(
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li className="active">home</li>
        <li>summer collection</li>
        <li>categories</li>
        <li>about us</li>
      </ul>
      <div className="buttons">
        <button className="active">login</button>
        <button>sign up</button>
      </div>
    </nav>
  );
}

function Cycle(){
  return(
    <div className="container">
      <div className="cycle">
        <div className="top">
            <img src="img/1.jpg" alt="style1" className="one"/>
            <img src="img/2.jpg" alt="style2" className="two"/>
            <img src="img/3.jpg" alt="style3" className="three"/>
        </div>

        <div className="bottom">
            <img src="img/4.jpg" alt="style4" className="four"/>
            <img src="img/5.jpg" alt="style5" className="five"/>
            <img src="img/6.jpg" alt="style6" className="six"/>
        </div>
      </div>
    </div>
  );
}
