import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const LeftImage = ({paragraphtext, imgsrc}) => {
  return (
    <Container className='py-5'>
    <Row>
        <h2 className='text-center fontsize34px p-5 ourtextcolor'>Decem Tribus Mirabilis The story</h2>
      <Col md={6}>
        <Image src={imgsrc}  fluid className='borderNone bgTransparent vert-move img-fluid w100'/>
      </Col>
      <Col md={6}>
        <p>{paragraphtext} </p>
      </Col>
    </Row>
  </Container>
  )
}

export default LeftImage