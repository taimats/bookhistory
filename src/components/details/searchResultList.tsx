"use client"

import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { Check } from 'lucide-react';
import { useState } from "react"
import { SearchResultItem } from "./searchResultItem";

export const SearchResultList = () => {
    //APIからデータフェッチが必要
    const searchResults = [
        {isbn: "isbn-1", imageURL: "url1", title: "書名1", author: "著者1", price: 2024},
        {isbn: "isbn-2", imageURL: "url2", title: "書名2", author: "著者2", price: 2023},
        {isbn: "isbn-3", imageURL: "url3", title: "書名3", author: "著者3", price: 2022},
        {isbn: "isbn-4", imageURL: "url4", title: "書名4", author: "著者5", price: 2021},
        {isbn: "isbn-5", imageURL: "url5", title: "書名5", author: "著者6", price: 2020},
        {isbn: "isbn-6", imageURL: "url5", title: "書名5", author: "著者6", price: 2019},
        {isbn: "isbn-7", imageURL: "url5", title: "書名5", author: "著者6", price: 2018},
        {isbn: "isbn-8", imageURL: "url5", title: "書名5", author: "著者6", price: 2017},
        {isbn: "isbn-9", imageURL: "url5", title: "書名5", author: "著者6", price: 2016},
    ]

    return (
        <>
        <ScrollArea className="w-70 h-60 border">
            {searchResults.map((searchResult, index) => (
                <>
                <div key={index}>
                    <SearchResultItem searchResult={searchResult}/>
                </div>
                <Separator className="my-2"/>
                </>
            ))}
        </ScrollArea>
        </>
    )
}