import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote, GiKitchenKnives  } from 'react-icons/gi'
import {PiOfficeChairFill} from 'react-icons/pi'
import {MdOutlineChair, } from 'react-icons/md'
import { IoBedOutline } from "react-icons/io5";


export const links = [
  {
    id: 1,
    text: 'HOME',
    url: '/',
  },
  {
    id: 2,
    text: 'PRODUCTS',
    url: '/products',
  },
  {
    id: 3,
    text: 'ABOUT',
    url: '/about',
  },
  {
    id: 4,
    text: 'PORTFOLIO',
    url: '/about',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

const iconStyles = {width:'60px', height:'60px'}
export const featuresData = [
  {
    id:1,
    icon:<GiDiamondHard style={iconStyles}/>,
    title:'See alternative matrix',
    description:'Lorem ipsum dolor sit amet, sagna aliqua. Lorem ipsum dolor sit amet, sagna aliqua.',
 },
 {
   id:2,
   icon:<GiCompass style={iconStyles}/>,
   title:'Outlets that will amaze you',
   description:'Lorem ipsum dolor sit amet, sagna aliqua. Lorem ipsum dolor sit amet, sagna aliqua.',
 },
 {
  id:3,
  icon:<GiStabbedNote style={iconStyles}/>,
  title:'Let us help you decorate your home',
  description:'Lorem ipsum dolor sit amet, sagna aliqua. Lorem ipsum dolor sit amet, sagna aliqua.',
 },
 {
  id:4,
  icon:<IoBedOutline style={iconStyles}/>,
  title:'See our bedroom options',
  description:'full bedrooms wiith single or double bed options designed carefully for you',
 },
 {
  id:5,
  icon:<MdOutlineChair style={iconStyles}/>,
  title:'Furniture in 20+ colors ',
  description:'Lorem ipsum dolor sit amet, sagna aliqua. Lorem ipsum dolor sit amet, sagna aliqua.',
 },
 {
  id:6,
  icon:<PiOfficeChairFill style={iconStyles}/>,
  title:'Suitable for all tastes',
  description:'Lorem ipsum dolor sit amet, sagna aliqua. Lorem ipsum dolor sit amet, sagna aliqua.',
 },
 {
    id:7,
    icon:<GiKitchenKnives style={iconStyles}/>,
    title:'Kitchen and roofs',
    description:'Lorem ipsum dolor sit amet, sagna aliqua. Lorem ipsum dolor sit amet, sagna aliqua.',
 }
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
