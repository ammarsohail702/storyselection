import React from 'react'
import { Container, Row, Col, Form, Button, InputGroup, FloatingLabel } from 'react-bootstrap';
const SingupNewsletter = () => {
  return (
    <div
    style={{
      backgroundImage: `url('https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/G4SJ9W.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
          <h2>Sign Up For Our Newsletter</h2>
          <p>Get the latest news and updates delivered straight to your inbox.</p>
          <Form>
            <Form.Group controlId="formBasicEmail ">
                <div className='d-flex align-items-center'>

            <InputGroup className="mb-0 ">
                    <FloatingLabel label="Name" className="wrap-input100 validate-input" data-validate="">
                      <Form.Control
                        className="input100"
                        type="text"
                        id="Name"
                        name=""
                        autoComplete="off"
                       
                        value={''}
                        required
                        placeholder="Enter Name"
                      />
                      <span className="focus-input100"></span>
                    </FloatingLabel>
                  </InputGroup> 
                  <Button className='lightblackbg borderNone px-5 py-3' type="submit">
              Submit
            </Button>
                </div>
            </Form.Group>
           
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default SingupNewsletter