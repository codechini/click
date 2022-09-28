import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Payment = () => {

  const [name, newName] = useState("");
  const [q, newQ] = useState(0);
  const [pcost, newCost] = useState(0);
  const [document, newDoc] = useState("");

  const buyProduct = (async) => {

  }

  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
        <Row>
          <Col>
            <div className=" px-0">
              <Form className='justify-items-center needs-validation' onSubmit={buyProduct}>
                <span className='regTitle'>Enter Card Details :-</span>
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Enter Card no.:&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    autoComplete='off'
                    pattern='[A-Za-z]{1,32}'
                    onChange={(event) => {
                      console.log(event.target.value);
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
                    pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    onChange={(event) => {
                      // console.log(event.target.value);
                      newCost(event.target.value)
                    }}
                  />

                </Form.Group>
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Enter City :&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    pattern='[0-9]+(\\.[0-9][0-9]?)?'
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
                    // type='file'
                    autoComplete='off'
                    pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    onChange={(event) => {
                      // console.log(event.target.value);
                      newDoc(event.target.value)
                    }}
                  />
                </Form.Group>
                <div className="container">
                  <Button className='btnReg mx-2' variant="primary" type="submit">
                    Checkout
                  </Button>
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
