import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

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

export const featuresData = [
  {
    id:1,
    icon:<GiDiamondHard />,
    title:'FIRST',
    subTitile:'',
    description:'THE BEST E-COMMERCE',
 },
 {
   id:2,
   icon:'',
   title:'SECOND',
   subTitile:'ITS',
   description:'HELOO WORLD',
 },
 {
  id:3,
  icon:'',
  title:'',
  subTitile:'',
  description:'',
 },
 {
  id:4,
  icon:'',
  title:'',
  subTitile:'',
  description:'',
 },
 {
  id:5,
  icon:'',
  title:'',
  subTitile:'',
  description:'',
 },
 {
  id:6,
  icon:'',
  title:'',
  subTitile:'',
  description:'',
 },
 {
    id:7,
    icon:'',
    title:'',
    subTitile:'',
    description:'',
 }
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
