import Nav from "./components/nav/nav";
import React, { useState } from "react";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Form from "./components/forms/form";

function Home() {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(true)
  }
  return (
    <main>
      {signUp&&<Form/>}
      <Nav/>
      <div className="background-img ">
        <div className="d-flex center">
          <img className="logo" src={require("./assets/images/parchost-logo.png")} alt="logo"/>
        </div>
        <div className="f-right">
          <h3>Automate pickup of documents, parcels and more to customers safely and securely.</h3>
          <button>Learn More</button>
        </div>
      </div>
      <div className="bg-blue">
        <h2>Our Smart lockers create a seamless communication with customers and their packages through  the pickup journey</h2>
        <div className="d-flex f-wrap center g-160 mw-736">
          <Features src={require("./assets/images/locker-icon.png")} title="Size-based locker allocation"/>
          <Features src={require("./assets/images/hardware-icon.png")} title="Securely-built IOT-Enabled Hardware housing"/>
          <Features src={require("./assets/images/transaction-log-icon.png")} title="Detailed transaction logs for all operations"/>
          <Features src={require("./assets/images/power-icon.png")} title="4hrs power backup"/>
          <Features src={require("./assets/images/notification-icon.png")} title="Notification Integration  for pickups"/>
          <Features src={require("./assets/images/customer-service-icon.png")} title="Multiple customer service points"/>
        </div>
      </div>
      <div className="bg-orange">
        <h3>Lets get you a smart locker</h3>
          <div className="d-flex g-31">
              <div className="types">
                <img src={require("./assets/images/business-icon.png")} alt="parchost for business"/>
                <p>Parchost for Business</p>
              </div>
              <div className="types">
                <img src={require("./assets/images/e-commerce-icon.png")} alt="parchost for Ecommerce"/>
                <p>Parchost for Ecommerce</p>
              </div>
          </div>
        <h3>Lets keep you posted</h3>
        <div className="email-submit">
          <input type="email"/>
            <img onClick={handleSignUp} src={require("./assets/images/input-email-icon.png")} alt=""/>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Home;
