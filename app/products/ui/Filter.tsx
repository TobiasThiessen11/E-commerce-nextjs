import { Checkbox } from '@nextui-org/react'
import { StarIcon } from 'lucide-react'
import React from 'react'

export const Filter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8  md:p-5  ">
        <div className="bg-neutral rounded-lg shadow-xl p-6 md:w-64 space-y-6">
            <h2 className="text-2xl font-semibold">Filtros</h2>
            <div>
                <h3 className="text-sm font-medium mb-2">Categoria</h3>
                <div className="space-y-2">
                <label className="flex items-center gap-2">
                    <Checkbox id="category-clothing" className='border-2 border-black' />
                    <span>Todos</span>
                </label>
                <label className="flex items-center gap-2">
                    <Checkbox id="category-clothing" className='border-2 border-black' />
                    <span>Electronics</span>
                </label>
                <label className="flex items-center gap-2">
                    <Checkbox id="category-clothing" className='border-2 border-black' />
                    <span>Clothing</span>
                </label>
                <label className="flex items-center gap-2">
                    <Checkbox id="category-clothing" className='border-2 border-black' />
                    <span>Home</span>
                </label>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                <label className="flex items-center gap-2">
                    <span>All</span>
                </label>
                <label className="flex items-center gap-2">
                    <span>$0 - $50</span>
                </label>
                <label className="flex items-center gap-2">
                    <span>$50 - $100</span>
                </label>
                <label className="flex items-center gap-2">
                    <span>$100 - $200</span>
                </label>
                <label className="flex items-center gap-2">
                    <span>$200+</span>
                </label>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium mb-2">Rating</h3>
                <div className="space-y-2">
                <label className="flex items-center gap-2">
                    <span>All</span>
                </label>
                <label className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                </label>
                <label className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                </label>
                <label className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                </label>
                </div>
            </div>
        </div>
    </div>
    
  )
}


export default Filter