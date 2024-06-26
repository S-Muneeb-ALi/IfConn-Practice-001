import React, { Fragment, ReactNode } from 'react'


import { Avatar, Card, Col, Divider, Flex, Row } from "antd";
import Meta from "antd/es/card/Meta";
import ListingItemResponse from '@/src/models/responses/ListItemResponse';
import { faRuler, faSink, faBed, faVihara } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export interface ListingItemProps {
  item: ListingItemResponse,
  onClick: () => void;
}


export default function ListingItem({
  item: {
    image,
    bedrooms,
    bathroom,
    imageAlt,
    title,
    Size,
    floor,
    avatar,
    sellerName,
    price,
  },
  onClick }: ListingItemProps) {

  return (
    <Card
      className=' shadow-lg hover:shadow-fuchsia-950/100 min-h-full '
      onClick={x => {
        onClick();
      }}
      
      cover={
        <img src={image} alt={imageAlt}  style={{ height: "300px", objectFit: "cover" }}/>
      }
    >
      <section>
        <h1 className='text-3xl text-black-500 hover:text-red-600 uppercase text-center'>{title}</h1>
        <div className="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2">  
          <IconText
            icon={<FontAwesomeIcon icon={faRuler} size="2x" />}
            text={Size}
          />

          <IconText
            icon={<FontAwesomeIcon icon={faSink} size="2x" />}
            text={bathroom.toString()}
          />

          <IconText
            icon={<FontAwesomeIcon icon={faBed} size="2x" />}
            text={bedrooms.toString()}
          />

          <IconText
            icon={<FontAwesomeIcon icon={faVihara} size="2x" />}
            text={floor.toString()}
          />
        </div>
      </section>


      <Divider />
        <Flex align='center' gap={5}>
          <Avatar shape="square" src={avatar} size={70} />
          <div style={{ flex: "1" }}>{sellerName}</div>
          <div>{price}</div>
        </Flex>

    </Card>

  )
}


export interface IconTextProps
{
  text: string;
  icon: ReactNode;
}


export function IconText({ text, icon }: IconTextProps) {
  return (
    <Flex align='center'>
      <div className='mr-2'>{icon}</div>
      <p className="text-lg">{text}</p>
    </Flex>
  );
}