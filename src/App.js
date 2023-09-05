import { useState } from "react";

export default function App() {
  const [activeTap , setActiveTap] = useState(1) ; 
  const [activeBtn , setActiveBtn] = useState(1) ; 
  return (
    <div className="app">
      <Header onClickTap={setActiveTap} activeTap={activeTap} onClickBtn={setActiveBtn} activeBtn={activeBtn}/>
      <Cycle/>
    </div>
  );
}

function Header({onClickTap , activeTap , onClickBtn , activeBtn}){
  return(
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li className={activeTap===1?"active":""} onClick={()=>onClickTap((e)=>1)}>home</li>
        <li className={activeTap===2?"active":""} onClick={()=>onClickTap((e)=>2)}>summer collection</li>
        <li className={activeTap===3?"active":""} onClick={()=>onClickTap((e)=>3)}>categories</li>
        <li className={activeTap===4?"active":""} onClick={()=>onClickTap((e)=>4)}>about us</li>
      </ul>
      <div className="buttons">
        <button className={activeBtn===1?"active":""} onClick={()=>onClickBtn((e)=>1)}>login</button>
        <button className={activeBtn===2?"active":""} onClick={()=>onClickBtn((e)=>2)}>sign up</button>
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
