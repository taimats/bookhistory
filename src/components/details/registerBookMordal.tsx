"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
import { useState } from "react"
import { SearchResultList } from "./searchResultList"

export const RegisterBookMordal = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isSearched, setIsSearched] = useState(false)

    const handleSelect = () => {
        setIsSelected(true)
    }

    const handleSearch = () => {
        setIsSearched(true)
    }

    //APIからデータフェッチ

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

                { isSearched ? <SearchResultList /> : ""}
                
                <DialogFooter className="flex gap-4">
                    <Select onValueChange={handleSelect}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="本の状態を設定" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="bought">購入済</SelectItem>
                                <SelectItem value="reading">読書中</SelectItem>
                                <SelectItem value="done">読了</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button type="submit" disabled={!isSelected}>登録</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}