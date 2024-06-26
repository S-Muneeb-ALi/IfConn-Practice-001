'use client'

import React from 'react';

import listingItems from '@/src/data/ListingItems';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faLocationDot, faSink } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from '@fortawesome/free-solid-svg-icons/faRuler';
import { faVihara } from '@fortawesome/free-solid-svg-icons/faVihara';


import { Button, Card, Result, Image, Carousel, Avatar, Flex, Row, Col } from 'antd';
import { BankOutlined } from '@ant-design/icons';
import Btnania from '@/src/components/buttons/Btnania';

interface PageParam {
  params: { id: string }
}


export default function Detail({ params }: PageParam) {
  const item = listingItems.find(x => x.id.toString() === params.id);

  if (!item) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href='/list'>Back Home</Button>}
      />
    )
  }


  return (
    <Row>
      <Col xs={24} lg={16}>
        <Carousel arrows infinite={false} className="carousel-images" >
          <div className="carousel-images__item">
            <Image src={item.image} alt={item.imageAlt} />
          </div>
          <div className="carousel-images__item">
            <Image src={item.insideimg1} alt={item.imageAlt} />
          </div>
          <div className="carousel-images__item">
            <Image src={item.insideimg2} alt={item.imageAlt} />
          </div>
          <div className="carousel-images__item">
            <Image src={item.insideimg3} alt={item.imageAlt} />
          </div>
        </Carousel>
      </Col>

      <Col xs={24} lg={8}>
        <Card>
          <Card  className='shadow-lg hover:shadow-fuchsia-950/100' style={{ maxWidth: "50dvw", maxHeight: "70dwh" }}>

            <div className="text-center font-serif" >
              <h1 className=" text-5xl " >{item.title}</h1>
              <p className="pt-8 text-3xl">
                <FontAwesomeIcon icon={faLocationDot} className="fas fa-location-dot pr-10 " size="1x" />
                {item.description}
              </p>
            </div>


            <div style={{ minHeight: 300 }} className=" text-2xl font-mono pt-36">
              <p>
                <FontAwesomeIcon icon={faRuler} className="fas fa-ruler pr-10" size="1x" />
                {item.Size}
              </p>
              <p>
                <FontAwesomeIcon icon={faSink} className="fas fa-sink pr-10" size="1x" />
                {item.bathroom}
              </p>
              <p>
                <FontAwesomeIcon icon={faBed} className="fas fa-bed pr-10" size="1x" />
                {item.bedrooms}
              </p>
              <p>
                <FontAwesomeIcon icon={faVihara} className="fas fa-vihara pr-10" size="1x" />
                {item.floor}
              </p>
            </div>


          </Card>

          <Card  style={{ maxWidth: "50dvw", maxHeight: "70dwh", marginTop: 30 }} className='shadow-lg hover:shadow-fuchsia-950/100'>
            <Flex align="start" vertical style={{ minHeight: 300, fontSize: "40px", fontFamily: "sans-serif-medium" }}>
              <h1>Seller Name : {item.sellerName} .</h1>
              <h1>Price :{item.price}</h1>
              <Avatar shape="square" src={item.avatar} size={100} style={{ marginTop: 50 }} />
            </Flex >

          </Card>
          <div className="mt-10 text-xl ">
          <Btnania
            
            icon={<BankOutlined />}
            text={"Order Now"}
          />
          </div>
        </Card>

        <Card style={{ fontSize: "25px", fontFamily: "sans-serif-medium", padding: 30 }} className='shadow-lg hover:shadow-fuchsia-950/100'>
          <h1>{item.email}</h1>
          <h1>{item.contact}</h1>
        </Card>
      </Col>
    </Row>

  );
}