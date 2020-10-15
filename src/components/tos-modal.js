import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Col , Row} from 'reactstrap';

const TosModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <Row>
            <Col xs="12" className="text-center text-white" style={{fontSize: '12px'}}>
                <a className="text-white" href="https://discord.gg/86J8vrM" target="_blank" rel="noreferrer">Discord</a> | <a className="text-white" href="https://www.fseconomy.net/atulumello" target="_blank" rel="noreferrer">Contact Us</a> | <button className="text-white" style={{border: 'none', backgroundColor: 'transparent', padding: '0', outline: 'none'}} onClick={toggle}>Terms of Service</button>
                </Col>
        </Row>


      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Terms of Service</ModalHeader>
        <ModalBody>
            <Row>
                <Col xs={12}>
                    <p style={{fontSize: '14px'}}>By utilizing Greater Toronto Financial as your financial institution for any FSEconomy transaction, you agree to the following Terms:</p>
                </Col>
            </Row>
          <Row>
              <Col xs={12}>
                <h4 className="mb-2">Payments</h4>
                <h6>Down Payment</h6>
                <p className="d-inline" style={{fontSize: '14px'}}>A minimum down payment of 20% of purchase price is required to initiate an agreement. Clients are welcomed and encouraged to put down more than 20% to reduce their monthly payments and overhead cost.</p>
                <h6>Monthly Payment</h6>
                <p className="d-inline" style={{fontSize: '14px'}}>Monthly payments will be due every month on the agreement initiation date. For example, a 3 month agreement with an initiation date of 10/15/2020, will have payments due on 11/15/2020, 12/15/2020 and 01/15/2021. All payments must be sent to </p> <p className="d-inline" style={{fontSize: '14px', fontStyle: 'italic', fontWeight: 'bold'}}>Greater Toronto Financial</p><p className="d-inline" style={{fontSize: '14px'}}>. Any payments sent to the wrong account will not be honoured nor will Greater Toronto Financial be held responsible.</p>
                <h6>Payment Delinquency</h6>
                <p className="d-inline" style={{fontSize: '14px'}}>In the event that a payment is missed, the aircraft will be withdrawn from the clients hangar 24 hours after monthly payment due date. If no payment is made 72 hours thereafter, the aircraft will be considered repossesed and shortly after liquidated to regain losses. Note, if you know that you will have a payment issue, please contact us right away.</p>
                <h4 className="mb-2 mt-2">Miscellaneous</h4>
                <h6>Aircraft Selection</h6>
                <p className="d-inline" style={{fontSize: '14px'}}>Clients are welcome to finance just about any aircraft. Although some aircraft will require a higher downpayment amount due to the lack of public interest. This will be discussed upon agreement review.</p>
                <h6>Maintenance, Repair, Upgrades</h6>
                <p className="d-inline" style={{fontSize: '14px'}}>All maintenance, repair, and upgrades are to be performed at the clients expense.</p>
              </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TosModal;