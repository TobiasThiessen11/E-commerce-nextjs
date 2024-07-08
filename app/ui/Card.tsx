import React from "react";
import Image from "next/image";
import Link from "next/link";
import { shortenString } from "@/lib/utils";

interface CardProps {
  name: string;
  image: string;
  description: string;
  price: number;
  id: string;
}

const Card: React.FC<CardProps> = ({ name, image, description, price, id }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out md:hover:-translate-y-2 cursor-pointer bg-neutral">
      <Link href={`/product/${id}`}>
      <Image
        src={image}
        width={800}
        height={560}
        className="md:block"
        alt={description}
      />
      <div className="bg-white p-4 h-36 rounded-b-lg dark:bg-[#F0F8FF]">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-l font-semibold text-secondary">{shortenString(description,40)}</p>
        <h4 className="font-semibold h-auto text-lg md:text-xl">{price}</h4>
      </div>
      </Link>
    </div>
  );
};

export default Card;
