"use client"

import { useState } from "react"
import { ChartBasis } from "./chartBasis"
import { YearOptionButton } from "./yearOptionButton"

export const ChartList = () => {
    const labels = [
        "購入額",
        "冊数",
        "ページ数",
    ]
    //データをフェッチする
    const chartData = [
        { year: "2024", month: "1月", value: "4"},
        { year: "2024", month: "2月", value: "2"},
        { year: "2024", month: "3月", value: "6"},
        { year: "2024", month: "4月", value: "1"},
        { year: "2024", month: "5月", value: "1"},
        { year: "2024", month: "6月", value: "0"},
        { year: "2024", month: "7月", value: "1"},
        { year: "2024", month: "8月", value: "1"},
        { year: "2024", month: "9月", value: "1"},
        { year: "2024", month: "10月", value: "2"},
        { year: "2024", month: "11月", value: "2"},
        { year: "2024", month: "12月", value: "6"},
    ]

    const [ targetYear, setTargetYear ] = useState("2024")

    const handleSelected = (selected: any) => {
        setTargetYear(selected)
        chartData.filter((data) => (data.year === targetYear))
    }
    
    return (
        <>
        <div className="px-12 pt-4">
            <YearOptionButton targetYear={targetYear} handleSelected={handleSelected}/>
        </div>
        <div className="flex flex-cols justify-center">

        </div>
        {labels.map((label, index) => (
            <div key={index} className="space-y-4">
                <ChartBasis label={label} chartData={chartData}/>
            </div>
        ))}
        </>
    )
}