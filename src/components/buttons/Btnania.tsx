import { ReactNode } from "react"

export interface BtnaniaProps {
  icon?: ReactNode;
  text: ReactNode;
}

export default function Btnania ({ icon, text }: BtnaniaProps) {
  return (
    <button className="btnania">
      <span className="btnania__icon">{icon}</span>
      <span className="btnania__text">{text}</span>  
    </button>
  )
}