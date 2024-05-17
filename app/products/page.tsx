import React from 'react'
import Filter from './ui/Filter'
import Card from '../ui/Card'
import json from '../example.json'

export const page = () => {
  return (
    <div>
        <h1 className='text-6xl font-bold text-center mb-5' >Products</h1>
        <div className='md:flex'>
            <Filter />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
            {json.map((product, index) => (
                  <Card name={product.name} image={product.image} description={product.description} price={product.price}/>
            ))}
           
        </div>
        </div>
    </div>
  )
}

export default page