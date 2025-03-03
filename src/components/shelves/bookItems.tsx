"use client"

import { components } from "@/openapi/generated"
import { SearchBar } from "./searchBar"
import Image from "next/image"
import { useBookItemMordal } from "@/hooks/useBookItem"
import { BookItemMordal } from "./bookItemMordal"
import { useState } from "react"
import { Trash2 } from 'lucide-react';
import { Button } from "../ui/button"
import { DeleteBooks } from "@/actions/shelf"
import { useToast } from "@/hooks/use-toast"
import { CircleCheckBig } from 'lucide-react'
import { X } from 'lucide-react';

type Props = {
    books : components["schemas"]["Book"][] | undefined
}

const noImagePath = "/images/noiamge.png"

export const BookItems = ({ books }: Props) => {
    const { onOpen } = useBookItemMordal()
    const [ isTrashMode, setIsTrashMode ] = useState(false)
    const [ mordalIndex, setMordalIndex ] = useState("")
    const [ trashedBooks, setTrashedBooks ] = useState<components["schemas"]["Book"][]>([])
    const { toast } = useToast()
    
    const handleClick = (e: string) => {
        if (!isTrashMode) {
            setMordalIndex(e)
            onOpen()
        }
        const index = parseInt(e, 10)
        const book = books![index]

        if (trashedBooks.includes(book)) {
            setTrashedBooks(trashedBooks.filter(b => b.id !== book.id))
            return
        }
        
        setTrashedBooks([...trashedBooks, book])
    }

    const setTrashMode = () => {
        setIsTrashMode(!isTrashMode)
    }

    const stopTrashMode = () => {
        setTrashedBooks([])
        setIsTrashMode(!isTrashMode)
    }

    const handleTrash = async () => {
        const bookIds: string[] = []
        trashedBooks.forEach((book) => {
            if (book!.id) {
                bookIds.push(book.id)
            }
        })

        const res = await DeleteBooks(bookIds)
        if (res.error) {
            toast({ variant: "destructive", title: res.error})
            setTrashedBooks([])
            setIsTrashMode(!isTrashMode)
            return
        }

        console.log(res)
        
        toast({ variant: "success", title: res.success})

        setIsTrashMode(!isTrashMode)
    }

    return (
        <>
        <div className="space-y-10 pt-8">
            <SearchBar />
            {!isTrashMode ? 
                <Button variant="outline" size="icon" onClick={setTrashMode}><Trash2/></Button>
            :   <div className="flex gap-2">
                    <Button variant="outline" onClick={handleTrash}>
                        <Trash2/>選択した本を削除
                    </Button>
                    <Button variant="outline" onClick={stopTrashMode}>
                        <X />取り消し
                    </Button>
                </div>
            }
            
            {!books || books.length === 0 ? 
                <div className="text-2xl">まだ登録されている書籍はありません</div>
                :
                <div className="grid grid-cols-4 justify-center gap-4">
                    {books.map((book, index) => (
                    <div key={index.toString()+book.id}>
                        <div className="relative">
                            {isTrashMode && trashedBooks.includes(book) ? 
                                    <div className="absolute inset-x-0 top-0">
                                        <CircleCheckBig />
                                    </div>
                            : ""}
                            <Image 
                                src={book.imageURL || noImagePath}
                                alt={`${book.title}の書影`}
                                width={200}
                                height={400}
                                id={index.toString()}
                                onClick={(e) => handleClick(e.currentTarget.id)}
                            />
                        </div>
                        {index.toString() === mordalIndex ?
                            <BookItemMordal book={books[index]}/> : 
                            ""
                        }
                    </div>
                    ))}
                </div>
            }
        </div>
        </>
    )
}