import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const VideoInCenter = () => {
  return (
    <div className="bg-dark">
    <Container className='py-5' >
    <h2 className='text-center fontsize34px p-5 ourtextcolor'>Story Videos</h2>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WwgQrU-wHuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default VideoInCenter