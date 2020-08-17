import React , { Component } from 'react'
import firebase from './firebase/'

import { Col , Badge } from 'reactstrap'


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Balance extends Component {


    constructor() {
        super()
        this.state = {
            currentBalance: ''
        }
    }

    componentDidMount() {
        const balanceRef = firebase.database().ref('balance')
    
        balanceRef.on('value' , (snapshot) => {
            let balance = snapshot.val()

            
            this.setState({
                currentBalance: numberWithCommas(balance)
            })
        })
    }

    render() {
        return(
            <div>
                <Col className="mt-1">
                    <Badge className="d-inline" color="primary" pill style={{padding: '4px 15px', fontWeight: '400', letterSpacing: '0.2px', fontSize: '13px'}}>v${this.state.currentBalance} Available</Badge>
                  </Col>  
            </div>
        )
    }
}

export default Balance