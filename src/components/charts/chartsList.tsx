"use client"

import { useState } from "react"
import { ChartBasis } from "./chartBasis"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ChartConfig } from "../ui/chart"

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

const years = [
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
]

export const ChartList = () => {
    //データをフェッチする
    const chartDataPrice = [
        { year: "2024", month: "1月", data: "2024"},
        { year: "2024", month: "2月", data: "6000"},
        { year: "2024", month: "3月", data: "1000"},
        { year: "2024", month: "4月", data: "200000"},
        { year: "2024", month: "5月", data: "1000"},
        { year: "2024", month: "6月", data: "0"},
        { year: "2023", month: "7月", data: "10000"},
        { year: "2023", month: "8月", data: "5000"},
        { year: "2023", month: "9月", data: "2000"},
        { year: "2023", month: "10月", data: "100002"},
        { year: "2023", month: "11月", data: "600000"},
        { year: "2023", month: "12月", data: "1000"},
        { year: "2022", month: "1月", data: "1000"},
        { year: "2022", month: "2月", data: "10000"},
        { year: "2022", month: "3月", data: "1000"},
        { year: "2022", month: "4月", data: "1000"},
        { year: "2022", month: "5月", data: "100002"},
        { year: "2022", month: "6月", data: "7000"},
        { year: "2021", month: "7月", data: "10000"},
        { year: "2021", month: "8月", data: "4000"},
        { year: "2021", month: "9月", data: "100000"},
        { year: "2021", month: "10月", data: "6000"},
        { year: "2021", month: "11月", data: "10000"},
        { year: "2021", month: "12月", data: "200000"},
    ]

    const chartDataVolume = [
        { year: "2024", month: "1月", data: "4"},
        { year: "2024", month: "2月", data: "2"},
        { year: "2024", month: "3月", data: "6"},
        { year: "2024", month: "4月", data: "1"},
        { year: "2024", month: "5月", data: "1"},
        { year: "2024", month: "6月", data: "0"},
        { year: "2023", month: "7月", data: "1"},
        { year: "2023", month: "8月", data: "1"},
        { year: "2023", month: "9月", data: "1"},
        { year: "2023", month: "10月", data: "2"},
        { year: "2023", month: "11月", data: "2"},
        { year: "2023", month: "12月", data: "6"},
        { year: "2022", month: "1月", data: "5"},
        { year: "2022", month: "2月", data: "1"},
        { year: "2022", month: "3月", data: "2"},
        { year: "2022", month: "4月", data: "7"},
        { year: "2022", month: "5月", data: "2"},
        { year: "2022", month: "6月", data: "0"},
        { year: "2021", month: "7月", data: "0"},
        { year: "2021", month: "8月", data: "2"},
        { year: "2021", month: "9月", data: "3"},
        { year: "2021", month: "10月", data: "13"},
        { year: "2021", month: "11月", data: "0"},
        { year: "2021", month: "12月", data: "1"},
    ]

    const chartDataPage = [
        { year: "2024", month: "1月", data: "40"},
        { year: "2024", month: "2月", data: "20"},
        { year: "2024", month: "3月", data: "60"},
        { year: "2024", month: "4月", data: "10"},
        { year: "2024", month: "5月", data: "10"},
        { year: "2024", month: "6月", data: "0"},
        { year: "2023", month: "7月", data: "10"},
        { year: "2023", month: "8月", data: "10"},
        { year: "2023", month: "9月", data: "10"},
        { year: "2023", month: "10月", data: "20"},
        { year: "2023", month: "11月", data: "20"},
        { year: "2023", month: "12月", data: "60"},
        { year: "2022", month: "1月", data: "50"},
        { year: "2022", month: "2月", data: "10"},
        { year: "2022", month: "3月", data: "20"},
        { year: "2022", month: "4月", data: "70"},
        { year: "2022", month: "5月", data: "20"},
        { year: "2022", month: "6月", data: "0"},
        { year: "2021", month: "7月", data: "0"},
        { year: "2021", month: "8月", data: "20"},
        { year: "2021", month: "9月", data: "30"},
        { year: "2021", month: "10月", data: "130"},
        { year: "2021", month: "11月", data: "0"},
        { year: "2021", month: "12月", data: "10"},
    ]

    const [ targetYear, setTargetyear ] = useState("2024")
    const [ filteredPriceData, setFilteredPriceData ] = useState(chartDataPrice.filter((data) => data.year === targetYear))
    const [ filteredVolumeData, setFilteredVolumeData ] = useState(chartDataVolume.filter((data) => data.year === targetYear))
    const [ filteredPageData, setFilteredPageData ] = useState(chartDataPage.filter((data) => data.year === targetYear))

    const handleSelect = (value: string) => {
        setTargetyear(value)
        setFilteredPriceData(chartDataPrice.filter((data) => data.year === value))
        setFilteredVolumeData(chartDataVolume.filter((data) => data.year === value))
        setFilteredPageData(chartDataPage.filter((data) => data.year === value))
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
            <div id={categoryList[0].label}>
                <ChartBasis 
                    category={categoryList[0]}
                    targetYear={targetYear}
                    chartConfig={chartConfigPrice}
                    chartData={filteredPriceData}
                />
            </div>
            <div id={categoryList[1].label}>
                <ChartBasis 
                    category={categoryList[1]}
                    targetYear={targetYear}
                    chartConfig={chartConfigVolume}
                    chartData={filteredVolumeData}
                />
            </div>
            <div id={categoryList[2].label}>
                <ChartBasis 
                    category={categoryList[2]}
                    targetYear={targetYear}
                    chartConfig={chartConfigPage}
                    chartData={filteredPageData}
                />
            </div>
        </div>
        </>
    )
}