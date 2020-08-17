import React from "react"

//import FontAwesome from 'react-fontawesome'
import {   Row , Col  , Alert } from "reactstrap"
import Seo from '../components/seo'
import Calculator from '../components/calculator'

import '../../node_modules/animate.css/animate.min.css'
import '../scss/styles.scss'

import Logo from '../../static/logo_web_icon_resize.png'


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
                <Col xs="12" className="text-center mt-1">
                   <h4 style={{textTransform: 'uppercase'}}>Calculate your loan</h4>

                  {/* <Col className="mt-1">
                    <Badge className="d-inline" color="primary" pill style={{padding: '4px 15px', fontWeight: '400', letterSpacing: '0.2px', fontSize: '13px'}}>v$2,876,511.00 Available</Badge>
                  </Col>    */}

                  {/* <Col className="mt-1">
                    <p>Note: All services will be unavailable July 30th - August 1st</p>
                  </Col> */}

                  <Alert className="mt-1" color="danger" style={{fontSize: '14px', padding: '5px 10px'}}>
                    Note: All services will be unavailable September 5th - September 8th
                  </Alert>

                </Col>
              </Row>

              <Calculator/>

            </div>
            <div id="foot-wrapper">
              <Row>
                <Col xs="12" className="text-center" style={{marginTop: '10px'}}>
                  <p className="text-white">&copy;{date} Greater Toronto Financial Holdings</p>
                </Col>
              </Row>
              <Row>
              <Col xs="12" className="text-center text-white">
                    <a className="text-white" href="https://discord.gg/86J8vrM" target="_blank" rel="noreferrer">Discord</a> | <a className="text-white" href="https://www.fseconomy.net/atulumello" target="_blank" rel="noreferrer">Contact Us</a>
                  </Col>
              </Row>
            </div>
          </div>
        </div>

    </div>
  )
}
