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
    <div className='flex justify-end space-x-2 mr-48 text-xl '><h2>TOTAL</h2><h3 className='text-red-500'>₹ {carprice}</h3></div>
  )
}
