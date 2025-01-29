import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React, { createRef } from "react"

type yearOptionProps = {
    targetYear: string
    handleSelected: (selected: any) => void
}

export const YearOptionButton = ({ targetYear, handleSelected }: yearOptionProps) => {
    //データをフェッチする
    const years = [
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "2016",
            "2015",
    ]
    
    return (
        <>
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="年を選ぶ" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {years.map((year, index) => (
                        <SelectItem key={index} value={year} onChange={(e) => handleSelected(e.currentTarget)}>{year}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>     
        </Select>
        </>
    )
}