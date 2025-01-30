"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { HtmlHTMLAttributes, ReactHTMLElement, useState } from "react"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"

export const RegisterBookMordalBtn = () => {
    const [isSearched, setIsSearched] = useState(false)
    const [clickedBook, setClickedBook] = useState("")
    const [registeredBook, setRegisteredBook] = useState({isbn: "", status:""})

    const handleSearch = () => {
        setIsSearched(true)
    }

    const handleClick = (e: any) => {
        setClickedBook(e)
    }

    const handleRegister = (e: any) => {
        setRegisteredBook({isbn: clickedBook, status: e})
    }

    //APIからデータフェッチが必要
    const searchResults = [
        {isbn: "isbn-1", imageURL: "url1", title: "書名1", author: "著者1", price: 2024},
        {isbn: "isbn-2", imageURL: "url2", title: "書名2", author: "著者2", price: 2023},
        {isbn: "isbn-3", imageURL: "url3", title: "書名3", author: "著者3", price: 2022},
        {isbn: "isbn-4", imageURL: "url4", title: "書名4", author: "著者4", price: 2021},
        {isbn: "isbn-5", imageURL: "url5", title: "書名5", author: "著者5", price: 2020},
        {isbn: "isbn-6", imageURL: "url5", title: "書名6", author: "著者6", price: 2019},
        {isbn: "isbn-7", imageURL: "url5", title: "書名7", author: "著者7", price: 2018},
        {isbn: "isbn-8", imageURL: "url5", title: "書名8", author: "著者8", price: 2017},
        {isbn: "isbn-9", imageURL: "url5", title: "書名9", author: "著者9", price: 2016},
    ]

    return (
        <>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">書籍を登録</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="hidden"/>
                    <div className="flex w-full rounded-md border border-secondary-border has-[:focus]:border-gray-800">
                        <Button variant={"outline"} size={"icon"} onClick={handleSearch}>
                            <Search />
                        </Button>
                        <input
                            type="text"
                            placeholder="書名でさがす"
                            className="w-full bg-neutral-100 pl-4 pr-1 outline-none focus:border-blue-500"
                        />
                    </div>
                </DialogHeader>

                {/*============================================*/}
                {/*============ 書籍の検索結果を表示 ============*/}
                {/*============================================*/}
                { isSearched ? 
                <ScrollArea className="w-70 h-60 border">
                    {searchResults.map((searchResult) => (
                        <div key={searchResult.isbn} id={searchResult.isbn} onClick={(e) => handleClick(e.currentTarget.id)}>
                            <div key={searchResult.isbn} className={cn("flex items-center gap-4", (searchResult.isbn === clickedBook) && "bg-slate-200")}>
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
                            <Separator className="my-2"/>
                        </div>
                    ))}
                </ScrollArea> : ""
                }
                {/*============================================*/}
                {/*============================================*/}
                
                <DialogFooter className="flex gap-4">
                    <Select>
                        <SelectTrigger className="w-[180px]" disabled={!isSearched}>
                            <SelectValue placeholder="本の状態を設定" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="bought" onSelect={(e) => handleRegister(e)}>購入済</SelectItem>
                                <SelectItem value="reading" onSelect={(e) => handleRegister(e)}>読書中</SelectItem>
                                <SelectItem value="done" onSelect={(e) => handleRegister(e)}>読了</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button disabled={!isSearched}>登録</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}