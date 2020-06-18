import React from "react"

//import FontAwesome from 'react-fontawesome'
import {   Row , Col  } from "reactstrap"
import Seo from '../components/seo'
import Calculator from '../components/calculator'

import '../../node_modules/animate.css/animate.min.css'
import '../scss/styles.scss'

import Logo from '../images/logo_web_icon_resize.png'

let date = new Date().getFullYear();

export default function Home() {
  return (
    <div>
    <Seo />
 
        <div id="page-wrapper">
          <div id="center-wrapper">
            <div id="head-wrapper">
              <Row>
                <Col className="text-center mb-3">
                  <img className="box-shadow" src={Logo} alt="Logo" style={{width: '150px', backgroundColor: 'white', borderRadius: '2000px'}}/>
                </Col>
              </Row>
            </div>
            <div id="calculator-wrapper" className="box-shadow">
              <Row>
                <Col className="text-center mb-1">
                   <h4 style={{textTransform: 'uppercase'}}>Calculate your loan</h4>
                   <hr style={{maxWidth: '200px', marginTop: '10px', marginBottom: '10px'}} />
                </Col>
              </Row>

              <Calculator/>

            </div>
            <div id="foot-wrapper">
              <Row>
                <Col xs="12" className="text-center mt-3">
                  <p className="text-white">&copy;{date} Greater Toronto Financial Holdings</p>
                  <a className="text-white" href="https://www.fseconomy.net/atulumello" target="_blank" rel="noreferrer">Questions? Contact us on FSEconomy</a>
                </Col>
                
              </Row>
            </div>
          </div>
        </div>

    </div>
  )
}
