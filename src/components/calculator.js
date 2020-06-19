import React from "react"
import { Table , FormGroup, Input, Label, Row , Col , Alert } from "reactstrap"





export default function Calculator() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [price, setPrice] = React.useState('')
    const [term, setTerm] = React.useState('')
    const [ownershipFee, setOf] = React.useState('')
    const [downPayment, setDp] = React.useState('')

    //Total Financed (Price - DownPayment + Total Ownership Fees + Interest)
    //Monthly Payment
    //Interest
    

    let newTerm
    if ((term == 3)) {
        newTerm = 3
    }
    if ((term == 4)) {
        newTerm = 5
    } if ((term == 5)) {
        newTerm = 7
    } if ((term == 6)) {
        newTerm = 8
    }
        
    

    var minDown = price * .20
    var totalOwnershipFees = ownershipFee * term

    var loan = price - downPayment
    var loan = loan + totalOwnershipFees
    

    var interestCharge = loan * (newTerm/100)
    var totalLoan = loan + interestCharge
    

    var loanMonthly = totalLoan / term

    if (isNaN(loanMonthly)) loanMonthly = 0

    //THIS IS TREATING TERM LENGTH AS THE INTEREST. IE RATHER THAN 6 MONTHS ITS 8 MONTHS.
        

  return (
      <div>
           <div id="calcInputs">
                <Row>
                    <Col xs="12" lg="6">
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">v$</span>
                            </div>
                            <Input type="number" name="price" id="price" onChange={event => setPrice(event.target.value)}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs="12" lg="6">
                        <FormGroup>
                            <Label for="downPayment">Down Payment <span style={{fontSize: '13px', marginLeft: '3px'}}>(Min. 20%)</span></Label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">v$</span>
                            </div>
                            <Input type="number" name="downPayment" id="DownPayment" placeholder={numberWithCommas(minDown)} onChange={event => setDp(event.target.value)}/>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" lg="6">
                        <FormGroup>
                            <Label for="ownershipFee">Ownership Fee</Label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">v$</span>
                            </div>
                            <Input type="number" name="ownershipFee" id="ownershipFee" onChange={event => setOf(event.target.value)}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs="6" lg="6">
                        <FormGroup>
                            <Label for="term">Term <span style={{fontSize: '13px', marginLeft: '3px'}}>({newTerm}%)</span></Label>
                            <Input type="select" name="term" id="term" onChange={event => setTerm(event.target.value)}>
                                <option value="0">Select a Term</option>
                                <option value="3">3 Months</option>
                                <option value="4">4 Months</option>
                                <option value="5">5 Months</option>
                                <option value="6">6 Months</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Table size="sm">
                            <tbody>
                                <tr>
                                    <td><h6>Total Financed:</h6></td>
                                    <td><p>v${numberWithCommas(totalLoan.toFixed(2))}</p></td>
                                </tr>
                                <tr>
                                    <td><h6>Total Ownership Fees:</h6></td>
                                    <td><p>v${numberWithCommas(totalOwnershipFees.toFixed(2))}</p></td>
                                </tr>
                                <tr>
                                    <td><h6>Total Interest Charged:</h6></td>
                                    <td><p>v${numberWithCommas(interestCharge.toFixed(2))}</p></td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Alert color="success">
                            <h6 className="mb-1">{term} Monthly Payments of</h6>
                            <h5>v${numberWithCommas(loanMonthly.toFixed(2))}</h5></Alert>
                    </Col>
                </Row>
            </div>
    </div>
  )
}