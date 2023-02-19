import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removecar } from '../store'
function CarList() {
  const dispatch=useDispatch()
  const cars=useSelector(({cars:{carlst,search}})=>{
    return carlst.filter((car)=>car.name.toLowerCase().includes(search.toLowerCase()))
  })
  console.log(cars);
  const delethandler=(car)=>{
     dispatch(removecar(car.id))
  }
   const response=cars.map((car)=>{
    return<div key={car.id}>
        <p>{car.name} - ₹ {car.cost}</p>
        <button onClick={()=>{delethandler (car)}}>delete</button>
    </div>
   })
  return (
    <div>
      {response}
    </div>
  )
}

export default CarList
