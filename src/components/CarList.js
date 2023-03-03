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
    return<div key={car.id} className="flex space-x-3 justify-center">
        <p className='text-xl text-gray-700'>{car.name} - ₹ {car.cost}</p>
        <button onClick={()=>{delethandler (car)}} className="py-1 bg-black text-white rounded-md">delete</button>
    </div>
   })
  return (
    <div className='p-3  mx-auto text-center '>
      {response}
    </div>
  )
}

export default CarList
