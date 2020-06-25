import React from "react"

//import FontAwesome from 'react-fontawesome'
import {   Row , Col  } from "reactstrap"
import Seo from '../components/seo'
import Calculator from '../components/calculator'

import '../../node_modules/animate.css/animate.min.css'
import '../scss/styles.scss'

import Logo from '../../public/static/images/logo_web_icon_resize.png'

let date = new Date().getFullYear();

export default function Home() {
  return (
    <div>
    <Seo />
 
        <div id="page-wrapper">
          <div id="center-wrapper">
            <div id="head-wrapper" style={{position: 'relative', zIndex: '1000', top: '25px'}}>
              <Row>
                <Col className="text-center mb-2">
                  <img src={Logo} alt="Logo" style={{width: '140px', backgroundColor: 'white', border: '10px solid #233040', borderRadius: '50%'}}/>
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
                <Col xs="12" className="text-center" style={{marginTop: '10px'}}>
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
