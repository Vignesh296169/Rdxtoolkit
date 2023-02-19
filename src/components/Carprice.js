import React from 'react'
import { useSelector } from 'react-redux'
export default function Carprice() {
  const carprice=useSelector(({cars:{carlst,search}})=>{
    return carlst.filter((car)=>{
      return car.name.toLowerCase().includes(search.toLowerCase());
  }).reduce((acc,car)=> acc+car.cost
    ,0)
  });
  return (
    <div><h3>₹ {carprice}</h3></div>
  )
}
