"use client";

import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Book } from "@types";

export interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const { title, authors, thumbnail } = book;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="book-card group">
      <div className="book-card__content">
        <h2 className="book-card__content-title">{title}</h2>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={thumbnail || ""}
          alt="book"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="book-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};
export default BookCard;
