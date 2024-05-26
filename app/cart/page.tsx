import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Ejemplo de producto en el carrito */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Producto 1</td>
              <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="number"
                  className="w-16 p-1 border border-gray-300 rounded"
                  value={1}
                  min="1"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-red-600 hover:text-red-900">Eliminar</button>
              </td>
            </tr>
            {/* Fin de ejemplo de producto */}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end items-center">
          <p className="text-xl font-bold">Total: $10.00</p>
          
        </div>
        
      </div>
      <div className="flex justify-end">
      <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Proceder al pago
          </button>
          </div>
    </div>
  );
};

export default CartPage;
