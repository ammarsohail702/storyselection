import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const ProductSection = ({description=false, numberofProductsinRow=4}) => {
  return (
    <Container>

<h1 className='text-center fontsize34px p-5 ourtextcolor'>Click on the tribe and get immersed in their story
</h1>
<Row xs={1} md={numberofProductsinRow} className="g-4"> 
      {Array.from({ length: numberofProductsinRow }).map((_, idx) => (
        <Col>
          <Card className='bgTransparent'>
            <Card.Img variant="top" src="https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/unnamed%20(17)-0812c25.png/:/cr=t:0%25,l:1.56%25,w:96.88%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29" />
            <Card.Body>
              <Card.Title className='text-center whitetext'>Card title</Card.Title>
              {description&& <p className='text-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </p>}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </Container>
  )
}

export default ProductSection