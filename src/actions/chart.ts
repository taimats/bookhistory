"use server"

import { auth } from "@/auth"
import { ChartItem } from "@/components/charts/chartItems"
import { components } from "@/openapi/generated"

export const FetchCharts = async () => {
    const chartItems: ChartItem[] = []
        
    const session = await auth()
    if (!session?.user) {
        return { charts: chartItems }
    }
    
    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/charts/${session.user.id}`, {
                method: "GET",
                headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
            })

            console.log(res)
    
            if (!res.ok) {
                return { error: "図表の取得に失敗" }
            }
    
            if (res.status !== 200) {
                return { error: "図表の取得に失敗"}
            }
    
            const charts: components["schemas"]["Chart"][] = await res.json()
            
            charts.forEach((chart) => {
                if (chart.data) {
                    const { data, ...rest } = chart  
                    const chartItem: ChartItem = {
                        ...rest,
                        data: parseInt(chart.data),
                    }
                    chartItems.push(chartItem)
                }
            })
    
            return { charts: chartItems }
    
    } catch(error: unknown) {
        return { error: "図表の取得に失敗"}
    }
}