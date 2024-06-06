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
      <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 p-4 mb-3">
          <div className="grid grid-cols-3 gap-2 items-center">
              <div className="col-span-2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                  <p className="text-1xl text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                  <div className="mt-5 text-2xl font-bold text-gray-900 dark:text-gray-100">$ {item.price}</div>
              </div>
              <div className="flex flex-col items-end justify-between">
                  <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromCart(item)}
                      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
                  >
                      <TrashIcon className="h-5 w-5" />
                  </Button>
                  <div className="mt-5 grid grid-rows-2 text-right">
                    <h1 className="text-gray-900 dark:text-gray-100 text-xl font-semibold">Unidades: {item.quantity}</h1>
                    <h1 className="text-gray-900 dark:text-gray-100 md:text-xl font-bold">SubTotal: $ {computePrice(item.price, item.quantity)}</h1>
                  </div>             
              </div>
          </div>
      </div>
  )
}
    