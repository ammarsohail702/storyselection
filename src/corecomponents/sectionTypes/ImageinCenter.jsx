import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ImageinCenter = ({description=false, image="https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/BeFunky-collage.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1628,cg:true"}) => {
  return (
    <div>
       <div className="">
    <Container className='py-3' >
    <h2 className='text-center fontsize34px p-3 ourtextcolor'>Customize Your Experience</h2>
    <p className='text-center pb-3'>Pick Your Theme</p>
      <Row className="justify-content-md-center">
       
          <img src={image} alt="" srcset="" className='img-fluid w100' />
          {description&& <p className='pt-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>}
        
      </Row>
    </Container>
  </div>
    </div>
  )
}

export default ImageinCenter
