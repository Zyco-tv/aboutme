import React from 'react';
import logo from './img/logo.png';

import award from './img/award.png';
import inspired from './img/inspired.png';
import taringa from './img/taringa.png';
import specky from './img/specky.png';
import logoo from './img/logoo.png'
import face from './img/Facebook.png'
import twit from './img/Twitter.png'
import insta from './img/Instagram.png'
import beh from './img/Behance.png'
import ballon from './img/dribbble.png'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="Head">
        <div className="container-fluid">
          <div className="esppp"></div>
          <img src={logo} className="col-lg-1 offset-lg-2 col-md-2  col-sm-2 col-3 img-fluid" id="image" alt="logo" />
          <div className="esp"></div>
          <div className="App-header">
            <h1 className="col-lg-10 offset-lg-2 col-md-3  col-sm-3 col-3" id="titre">Leona Dawson</h1>
            <div className="esp"></div>
            <button className="col-lg-1 offset-lg-5 col-md-12  col-sm-9 col-12" id="but">Get in touch</button>

          </div>

        </div>
      </header>

      <section>
        {/* Premiere section  */}
        <div className="esp"></div>
        <div className="container-fluid">
          <h1 className="col-lg-3 offset-lg-2 col-md-2  col-sm-10 col-3" id="tiree">I'm Leona Dawson</h1>
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="gold">A few words about me</h1>
          <div className="d-flex justify-content-start">
            <p className="col-lg-2 offset-lg-5 col-md-3  col-sm-5 col-12" id="azzz">My job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way. </p>
            <p className="col-lg-2 offset-lg-1 col-md-3  col-sm-5 col-12" id="azzz">My job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way. </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="tiree">Services</h1>
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="gold">Brand Identity, print & Web</h1>
          <p className="col-lg-4 offset-lg-5 col-md-12  col-sm- col-12" id="azzz">It's time to bring it all together. Nothing is more rewarding for me than making great work for clients with meaningful missions.</p>
          <div className="d-flex justify-content-start">
            <p className="col-lg-1 offset-lg-5 col-md-3  col-sm-3 col-12">Logo Design
                Brand Guide
                Package Design
                Poster design</p>
            <p className="col-lg-1 offset-lg-1 col-md-3  col-sm-3 col-12">Flayer design
                Advertising
                Web design
                web advertising </p>
            <p className="col-lg-1 offset-lg-1 col-md-3  col-sm-3 col-12">Icon design
                Illustration
                Photography
                Seo </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="tiree">My skills</h1>
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="gold">What I am best at</h1>
          <div className="col-sm-5 offset-md-5">
            <div className="rowawards">
              <div className="col-md-3">Web Design</div>
              <h3 className="dis">90%</h3>
              <div className="bar">
                <div className="value">

                </div>
              </div>
            </div>
            <div className="rowawards">
              <div className="col-md-5">Graphic Design</div>
              <h3 className="diss">80%</h3>
              <div className="bar">
                <div className="values">

                </div>
              </div>
            </div>
            <div className="rowawards">
              <div className="col-md-3">Typography</div>
              <h3 className="pour">85%</h3>
              <div className="bar">
                <div className="valuess">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="tiree">Services</h1>
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="gold">Brand Identity, print & Web</h1>
          <p className="col-lg-4 offset-lg-5 col-md-12  col-sm-9 col-12" id="azzz">It's always good to receive positive and constructive feedback for
                                                                          your work - from clients and moreover, from designers!</p>

          <div className="col-sm-5 offset-md-5">
            <div className="row rowaward">
              <div className="col-md-2">2017</div>
              <div className="col-md-4"> <img src={award} alt="logo" /></div>
              <div className="col-md-6">Featured Portfolio Websites</div>
            </div>
            <div className="row rowaward">
              <div className="col-md-2">2016</div>
              <div className="col-md-4"><img src={inspired} alt="logo" /></div>
              <div className="col-md-6">Top 10 Design</div>
            </div>
            <div className="row rowaward">
              <div className="col-md-2">2015</div>
              <div className="col-md-4"><img src={taringa} alt="logo" /></div>
              <div className="col-md-6">Website Inspiration</div>
            </div>
            <div className="row rowaward">
              <div className="col-md-2">2014</div>
              <div className="col-md-4"><img src={specky} alt="logo" /></div>
              <div className="col-md-6">Creative Things</div>
            </div>
          </div>

        </div>
        <div className="esp"></div>

      </section>

      <section>

        <div className="container-fluid" id="end">
          <div className="esp"></div>
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="tireee">Let’s work together</h1>
          <div className="esppp"></div>
          <h1 className="col-lg-3 offset-lg-2 col-md-12  col-sm-9 col-12" id="az">Let’s collaborate and make an impact with my cross-discipline approach to design and deveopment.</h1>
          <div className="espp"></div>
          <button className="col-lg-1 offset-lg-2 col-md-12  col-sm-9 col-12" id="butend">My portfolio</button>
          <button className="col-lg-1 offset-lg-1 col-md-12  col-sm-9 col-12" id="but">Get in touch</button>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-2 offset-lg-2">
            <img src={logoo} alt="logo" />
          </div>
          <div className="col-md-2 offset-lg-6"><img src={face} alt="logo" /><img src={twit} alt="logo" /><img src={insta} alt="logo" /><img src={beh} alt="logo" /><img src={ballon} alt="logo" /></div>
               </div>
      </section>
              
   </div>
          );
      }
      
export default App;
