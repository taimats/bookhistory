"use client"

import { useState } from "react"
import { ChartBasis } from "./chartBasis"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ChartConfig } from "../ui/chart"
import { components } from "@/openapi/generated"
import Link from "next/link"
import { IsEmpty } from "@/lib"


export const ChartItems = ({ charts }:{charts: components["schemas"]["Chart"][] | undefined}) => {
    const years = generateYearLists()

    const chartPrice = charts?.filter((data) => data.label === categoryList[0].label)
    const chartVolume = charts?.filter((data) => data.label === categoryList[1].label )
    const chartPage = charts?.filter((data) => data.label === categoryList[2].label )

    const [ targetYear, setTargetyear ] = useState(years[0])
    const [ filteredPrice, setFilteredPriceData ] = useState(filterForChartData(chartPrice, targetYear))
    const [ filteredVolume, setFilteredVolumeData ] = useState(filterForChartData(chartVolume, targetYear))
    const [ filteredPage, setFilteredPageData ] = useState(filterForChartData(chartPage, targetYear))

    const handleSelect = (value: string) => {
        setTargetyear(value)
        setFilteredPriceData(filterForChartData(chartPrice, value))
        setFilteredVolumeData(filterForChartData(chartVolume, value))
        setFilteredPageData(filterForChartData(chartPage, value))
    }

    return (
        <>
        <div className="mt-4 mx-16 mb-4">
            <Select value={targetYear} onValueChange={(value) => handleSelect(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="年を選ぶ" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {years.map((year, index) => (
                            <SelectItem key={`${index}-${year}`} value={year}>{year}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>     
            </Select>
        </div>

        <div className="mx-16 space-y-8 mb-4">
            {IsEmpty(charts) ? <div className="text-xl">図表はありません。<Link href="/shelf" className="text-blue-400">こちら</Link>で書籍を登録しよう。</div> : ""}
            <div id={categoryList[0].label}>
                <ChartBasis 
                    category={categoryList[0]}
                    targetYear={targetYear}
                    chartConfig={chartConfigPrice}
                    chartData={filteredPrice}
                />
            </div>
            <div id={categoryList[1].label}>
                <ChartBasis 
                    category={categoryList[1]}
                    targetYear={targetYear}
                    chartConfig={chartConfigVolume}
                    chartData={filteredVolume}
                />
            </div>
            <div id={categoryList[2].label}>
                <ChartBasis 
                    category={categoryList[2]}
                    targetYear={targetYear}
                    chartConfig={chartConfigPage}
                    chartData={filteredPage}
                />
            </div>
        </div>
        </>
    )
}

const chartConfigPrice = {
    "購入額": {
      label: "購入額",
      color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const chartConfigVolume = {
    "購入冊数": {
      label: "購入冊数",
      color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const chartConfigPage = {
    "購入ページ数": {
      label: "購入ページ数",
      color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const categoryList = [
    { label: "購入額", unit: "円" },
    { label: "購入冊数", unit: "冊" },
    { label: "購入ページ数", unit: "ページ" }
]

const generateYearLists = () => {
    const start = 2024
    const date = new Date()
    const last = date.getFullYear()

    const yearList: string[] = []
    for (let i = last; i >= start; i--) {
        yearList.push(i.toString())
    }

    return yearList
}

const filterForChartData = (charts: components["schemas"]["Chart"][] | undefined, targetYear: string) => {
    const filteredCharts = charts?.map(({year, month, data}) => {
        if (year === targetYear && month !== undefined && data !== undefined) {
            return {month, data}
        }
    })

    return filteredCharts
}