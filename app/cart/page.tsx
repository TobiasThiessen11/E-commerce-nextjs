"use client"
import React from 'react';
import { useAppContext } from '../context'; 

const CartPage: React.FC = () => {
  const { name,setName } = useAppContext();
  return (
    <div className="container mx-auto p-6">
      <span>{name}</span>
      <button onClick={() => setName('Tobias')}>Change name</button>
    </div>
  );
};

export default CartPage;