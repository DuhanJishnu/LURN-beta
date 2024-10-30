import React from "react"
import { Link } from "react-router-dom"

const LinkButton = ({ toPath,text }) => {
    return (
      <Link
      to={`/${toPath}`}
      className=" sm:justify-center
        bg-black text-white border border-black rounded-md w-fit text-xl
        shadow-[4px_4px_0_0_white,4px_4px_0_1px_black] 
        font-sans font-normal leading-5 px-10 py-3
        inline-block cursor-pointer  
        hover:no-underline hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[2px_2px_0_0_white,2px_2px_0_1px_black]
        active:translate-x-[2px] active:translate-y-[2px]
        transition-all duration-200 ease-in-out
      "
    >
      {text}
    </Link>
    )
}

export default LinkButton