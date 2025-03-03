import { FetchCharts } from "@/actions/chart"
import { ChartItems } from "./chartItems"

export const ChartList = async () => {
    const res = await FetchCharts()
    if (res.error) {
        console.log(res.error)
    }
    console.log(res.charts)

    return (
        <>
        <ChartItems charts={res.charts}/>
        </>
    )
}