"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

type SearchResultProps = {
    isbn: string
    imageURL: string
    title: string
    author: string
    price: number
}

export const SearchResultItem = ({ searchResult }: { searchResult: SearchResultProps }) => {
    const [ isClicked, setIsClicked ] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
        <div className={cn("flex items-center gap-4", isClicked && "bg-slate-200")} onClick={handleClick}>
            {/*<Image src={searchResult.imageURL} alt={`${searchResult.title}の書影`}/>*/}
            <div className="bg-black">
                <div className="text-center text-white">{searchResult.imageURL}</div>
            </div>
            <div>
                <div className="text-xl font-bold">{searchResult.title}</div>
                <div className="text-2lg">{searchResult.author}</div>
                <div className="text-lg">{searchResult.price} 円（税込）</div>
            </div>
        </div>
        </>
    )
}
