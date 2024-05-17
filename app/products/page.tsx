import React from 'react'
import Filter from './ui/Filter'
import Card from '../ui/Card'
import json from '../example.json'

export default function Products () {
  return (
    <div>
        <h1 className='text-6xl font-bold text-center mb-5' >Productos</h1>
            <div className='md:flex'>
                <Filter />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
                {json.map((product) => (
                    <Card key={product.id} name={product.name} image={product.image} description={product.description} price={product.price}/>
                ))}
            </div>
            
        </div>
        <section className="w-auto m-5 h-full text-center text-xl">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi deleniti, beatae nesciunt quisquam veritatis expedita 
                    nostrum numquam sequi pariatur. Distinctio explicabo offi
                    cia amet beatae ipsum vel praesentium sunt veniam architecto.</p>
            </section>
    </div>
  )
}

