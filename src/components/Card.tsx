import React from "react";

type CardProps = {
  children: React.ReactNode
}

const Card = ({children}: CardProps) => {
  return <div className="w-24 h-20 rounded text-slate-800 text-lg bg-neutral-200 flex justify-center items-center text-center">{children}</div>

};

export default Card;
