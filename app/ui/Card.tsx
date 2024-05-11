import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ name, image, description, price }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer bg-neutral">
      <Link href="#">
        <span className="sr-only">View Product</span>
      </Link>
      <Image
        src={image}
        width={800}
        height={560}
        className="hidden md:block"
        alt={description}
      />
      <div className="bg-[#F0F8FF] p-4 dark:bg-[#F0F8FF]">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-sm text-[#87CEEB]">{description}</p>
        <h4 className="font-semibold text-lg md:text-xl">{price}</h4>
      </div>
    </div>
  );
};

export default Card;
