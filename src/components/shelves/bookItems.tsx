"use client"

import { components } from "@/openapi/generated"
import { useState } from "react"
import { SearchBar } from "./searchBar"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
    books : components["schemas"]["Book"][] | undefined
}

const noImagePath = "/images/noiamge.png"

export const BookItems = ({ books }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState([""])

    const handleClick = (e: string) => {
        if (selectedIndex.includes(e)) {
            setSelectedIndex(selectedIndex.filter((index) => index !== e))
        }
        setSelectedIndex([...selectedIndex, e])
    }

    return (
        <>
        <div className="space-y-10 pt-8">
            <SearchBar />
            {!books || books.length === 0 ? 
                <div className="text-2xl">まだ登録されている書籍はありません</div>
                :
                <div className="grid grid-cols-4 justify-center gap-4">
                    {books.map((book, index) => (
                    <div key={book.title+index.toString()}>
                        <Image 
                            src={book.imageURL || noImagePath}
                            alt={`${book.title}の書影`}
                            width={200}
                            height={400} 
                            id={index.toString()}
                        /> 
                    </div>
                    ))}
                </div>
            }
        </div>
        </>
    )
}