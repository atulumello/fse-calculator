import React from "react"
import { FormGroup, Input, Label, Row , Col , Alert } from "reactstrap"





export default function Calculator() {



    const [price, setPrice] = React.useState('')
    const [term, setTerm] = React.useState('')
    const [ownershipFee, setOf] = React.useState('')
    const [downPayment, setDp] = React.useState('')

    let loan = price - downPayment
    let totalOwnershipFees = ownershipFee * term
    let loanTotal = loan + totalOwnershipFees

    let loanMonthly = loanTotal / term

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
                            <Label for="downPayment">Down Payment</Label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">v$</span>
                            </div>
                            <Input type="number" name="downPayment" id="DownPayment" onChange={event => setDp(event.target.value)}/>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg="6">
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
                    <Col xs="12" lg="6">
                        <FormGroup>
                            <Label for="term">Term</Label>
                            <Input type="select" name="term" id="term" onChange={event => setTerm(event.target.value)}>
                                <option value="0">Select a Term</option>
                                <option value="3">3 Months (3%)</option>
                                <option value="4">4 Months (4%)</option>
                                <option value="5">5 Months (5%)</option>
                                <option value="6">6 Months (6%)</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert className="text-center" color="warning"><h6 className="d-inline">Loan Total:</h6><p className="d-inline ml-1">v${loanTotal}</p></Alert>
                        <Alert className="text-center" color="warning"><h6 className="d-inline">Monthly Dues:</h6><p className="d-inline ml-1">v${loanMonthly}</p></Alert>
                    </Col>
                </Row>
            </div>
    </div>
  )
}