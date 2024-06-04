import { useAppContext } from "@/app/context";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

interface CardCartProps {
    name : string
    description : string
    price : number
    quantity : number
    id : string
}


const computePrice = (price : number, quantity : number) => {
    return price * quantity
}
export default function CardCart(item: CardCartProps) {
    const { removeFromCart } = useAppContext()
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div className="grid grid-cols-[1fr_3fr] gap-4">
          <div className="relative">
            {/* <Image
              src={image}
              alt="Product Image"
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square"
            /> */}
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {item.description}
              </p>
              <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">$ {item.price}</div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                
                <Button
                  variant="outline" 
                  size="icon"
                  onClick={() => removeFromCart(item)}
                  className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-900 dark:text-gray-100 font-bold">Total: $ {computePrice(item.price, item.quantity)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
    