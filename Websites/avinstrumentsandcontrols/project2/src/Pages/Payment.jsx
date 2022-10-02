import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {

  const [name, newName] = useState("");
  const [q, newQ] = useState(0);
  const [pcost, newCost] = useState(0);
  const [document, newDoc] = useState("");

  const navigate = useNavigate();



  const location = useLocation();
  const xname = location.state.name;
  const xid = location.state.id;
  const xq = location.state.quantity;
  const xcost = location.state.cost;
  console.log(xname);
  console.log(xid);
  console.log(xq);

  const buyProduct = async (id, quantity, name, cost) => {
    navigate("/Ordered", { state: { id: id, quantity: quantity, name: name, cost: cost } });
  }

  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
        <Row>
          <Col>
            <div className=" px-0">
              <Form className='justify-items-center needs-validation' onSubmit={() => { buyProduct(xid, xq, xname, xcost) }}>
                <span className='regTitle'>Enter Card Details :-</span>
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Enter Card no.:&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    autoComplete='off'
                    // pattern='^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$'
                    onChange={(event) => {
                      newName(event.target.value)
                    }}
                  />

                </Form.Group>
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Enter CVV :&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    autoComplete='off'
                    // pattern='/^[0-9]{3,4}$/'
                    onChange={(event) => {
                      newCost(event.target.value)
                    }}
                  />

                </Form.Group>
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Enter City :&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    // pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    autoComplete='off'
                    onChange={(event) => {
                      // console.log(event.target.value);
                      newQ(event.target.value)
                    }}
                  />

                </Form.Group>
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Product Docs :&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    autoComplete='off'
                    // pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    onChange={(event) => {
                      newDoc(event.target.value)
                    }}
                  />
                </Form.Group>
                <div className="container">
                  <Button className='btnReg mx-2' variant="primary" type="submit">
                    Checkout
                  </Button>
                  {/* <Button className='btnReg mx-2' variant="primary" type="submit">
                    Back to Shopping
                  </Button> */}
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Payment;
