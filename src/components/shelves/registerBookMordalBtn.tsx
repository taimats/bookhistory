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
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SearchWordsSchema } from "@/schemas"
import { SearchBooks } from "@/actions/search"
import { toast, useToast } from "@/hooks/use-toast"
import { components } from "@/openapi/generated"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import Image from "next/image"
import { PostBook } from "@/actions/shelf"
import { IsEmpty } from "@/lib"

const noImagePath = "/images/noiamge.png"

export const RegisterBookMordalBtn = () => {
    const [isSearched, setIsSearched] = useState(false)
    const [clickedBook, setClickedBook] = useState<components["schemas"]["Book"]>({})
    const [searchResults, setSearchResults] = useState<components["schemas"]["Book"][]>([])
    const [selectedStatus, setSelectedStatus] = useState("")
    const { toast } = useToast()

    const form = useForm<z.infer<typeof SearchWordsSchema>>({
        resolver: zodResolver(SearchWordsSchema),
        defaultValues: {
          query: "",
        },
    })

    const onSubmit = async (value: z.infer<typeof SearchWordsSchema>) => {
        const res = await SearchBooks(value.query)
        if (res.error) {
            toast({ variant: "destructive", title: res.error})
            return
        }

        console.log(res.books)
        setIsSearched(!isSearched)

        if (res.books) {
            setSearchResults([...res.books])
        } else {
            setSearchResults([])
        }

        console.log(searchResults)

        form.reset()
        setSelectedStatus("")
    }

    const handleClick = (e: string) => {
        setClickedBook(searchResults[parseInt(e)])
    }

    const handleStatus = (value: string) => {
        setSelectedStatus(value)
    }

    const handleRegister = async () => {
        if (IsEmpty(clickedBook)) {
            toast({variant: "destructive", title: "書籍を選択してください"})
            return
        }

        if (selectedStatus === "") {
            toast({variant: "destructive", title: "本の状態を選択してください"})
            return
        }

        clickedBook.bookStatus = selectedStatus

        const res = await PostBook(clickedBook)
        if (res.error) {
            toast({variant: "destructive", title: res.error})
            return
        }
        if (!res.success) {
            toast({variant: "destructive", title: "本の登録に失敗"})
            return
        }

        toast({variant: "success", title: res.success})
        setIsSearched(!isSearched)
        setSearchResults([])
    }

    return (
        <>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">書籍を検索</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="hidden"/>
                    <DialogDescription className="hidden"/>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center">
                            <Button variant={"outline"} size={"icon"} type="submit" className="mt-2">
                                <Search />
                            </Button>
                            <FormField
                            control={form.control}
                            name="query"
                            render={({ field }) => (
                                <FormItem className="flex-grow">
                                <FormLabel />
                                <FormControl>
                                    <Input placeholder="書名で検索" {...field}/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </form>
                    </Form>
                </DialogHeader>

                {/*============================================*/}
                {/*============ 書籍の検索結果を表示 ============*/}
                {/*============================================*/}
                { searchResults.length !== 0 && isSearched ? 
                <ScrollArea className="w-70 h-60 border">
                {searchResults.map((searchResult, index) => (
                    <div key={searchResult.isbn10+index.toString()} id={index.toString()} onClick={(e) => handleClick(e.currentTarget.id)}>
                        <div key={searchResult.isbn10} className={cn("flex gap-4", (searchResults[index] === clickedBook) && "bg-slate-200")}>
                            <Image src={searchResult.imageURL || noImagePath} alt={`${searchResult.title}の書影`} width={150} height={300}/>
                            <div>
                                <div className="text-xl font-bold">{searchResult.title}</div>
                                <div className="text-2lg">{searchResult.author}</div>
                                <div className="text-lg">{searchResult.page} ページ</div>
                                <div className="text-lg">{searchResult.price} 円（税込）</div>
                            </div>
                        </div>
                        <Separator className="my-2"/>
                    </div>
                ))}
                </ScrollArea> : "検索結果は0件です"
                }
                {/*============================================*/}
                {/*============================================*/}
                
                <DialogFooter className="flex gap-4">
                    <Select onValueChange={value => handleStatus(value)}>
                        <SelectTrigger className="w-[180px]" disabled={!isSearched}>
                            <SelectValue placeholder="本の状態を設定" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="bought">購入済</SelectItem>
                                <SelectItem value="reading">読書中</SelectItem>
                                <SelectItem value="read">読了</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button disabled={!isSearched} onClick={() => handleRegister()}>登録</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}