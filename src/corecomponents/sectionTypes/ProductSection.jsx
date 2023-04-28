import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const ProductSection = () => {
  return (
    <Container>

<h1 className='text-center fontsize34px p-5 ourtextcolor'>Click on the tribe and get immersed in their story
</h1>
<Row xs={1} md={4} className="g-4"> 
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card className='bgTransparent'>
            <Card.Img variant="top" src="https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/unnamed%20(17)-0812c25.png/:/cr=t:0%25,l:1.56%25,w:96.88%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29" />
            <Card.Body>
              <Card.Title className='text-center whitetext'>Card title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </Container>
  )
}

export default ProductSection