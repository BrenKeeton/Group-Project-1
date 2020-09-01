import React from "react";
import Footer from "./Footer";
import "./App.css";
import Navbar from "./Navbar";

function Order(){
    return (
      <div>
        <Navbar />
        <div className="home2" id="home">
          <div className="container">
            <div className="row full-screen">
              <div className="home-content">
                <div className="block">
                  <h1>IT'S TIME TO BUILD</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="about-me" id="about">
          <div class="container">
            <div class="row">
              <div class="section-title">
                <h1>Mario's Pledge</h1>
                {/* <p class="small text-uppercase">Our Pledge</p> */}
              </div>
              <h4 class="pledge">
                Here at Mario's, we use fresh, never frozen ingredients from
                local farmers that will be sure to satisfy your taste buds. Our
                pledge to you is to satisfy your hunger needs with the best
                pizza in the nation. Voted #1 in the great state of Texas for 5
                straight years for best pizza, we value customer satisfaction
                and promise to provide the best pizza eating experince of your
                life.{" "}
              </h4>
            </div>
            <div class="about-content">
              <i class="fa fa-thumbs-up"></i>
            </div>
            <div class="about-content"></div>
          </div>
        </section>
        <Footer />
      </div>
    ); 
}

export default Order;