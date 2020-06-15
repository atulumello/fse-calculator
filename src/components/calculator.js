import React from "react"
import { Button, FormGroup, Form, Input, Label, Row , Col } from "reactstrap"


export default function Calculator() {
  return (
      <div>
       <Form>
            <Row>
                <Col xs="12" lg="6">
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="number" name="price" id="price"/>
                    </FormGroup>
                </Col>
                <Col xs="12" lg="6">
                    <FormGroup>
                        <Label for="downPayment">Down Payment</Label>
                        <Input type="number" name="downPayment" id="DownPayment"/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="12" lg="6">
                    <FormGroup>
                        <Label for="ownershipFee">Ownership Fee</Label>
                        <Input type="number" name="ownershipFee" id="ownershipFee"/>
                    </FormGroup>
                </Col>
                <Col xs="12" lg="6">
                    <FormGroup>
                        <Label for="term">Term</Label>
                        <Input type="select" name="term" id="term">
                            <option val="3">3 Months (3%)</option>
                            <option val="4">4 Months (4%)</option>
                            <option val="5">5 Months (5%)</option>
                            <option val="6">6 Months (6%)</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-2">
                    <Button color="primary" style={{width: '150px'}}>Submit</Button>
                </Col>
            </Row>
       </Form>
    </div>
  )
}