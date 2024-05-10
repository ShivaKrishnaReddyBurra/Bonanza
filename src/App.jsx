import React from "react";
import Card from "./card";
import items from "./images/items";
import Header from "./header";
import items2 from "./images/items2";
import Card2 from "./card2";
import items3 from "./images/items3";
import Card3 from "./card3";
import "./app.css";
import Footer from "./footer";
import items4 from "./images/items4";
import Card4 from "./card4";
function App() {

    function createCard(item){
        return <Card key={item.id} img={item.img} content={item.content} link={item.link} />;
    }

    function createCard2(item){
        return <Card2 key={item.id} img={item.img} content={item.content} code={item.code} link={item.link} />;
    }
    function createCard3(item){
        return <Card3 key={item.id} img={item.img} content={item.content} link={item.link} />;
    }
    function createCard4(item){
        return <Card4 key={item.id} img={item.img} content={item.content} cost={item.cost} orginalcost={item.orginalcost} emi={item.emi} link={item.link} />;
    }
  return (
    
    <div className="con">
        <Header />
        <div className="order">
            {items4.map(createCard4)}
            {items3.map(createCard3)}
            {items.map(createCard)}
            {items2.map(createCard2)}
        </div>
        <Footer />

    </div>
  );
}

export default App;