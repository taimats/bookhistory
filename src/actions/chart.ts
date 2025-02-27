"use server"

import { components } from "@/openapi/generated"

export const FetchCharts = async (authUserId: string) => {
    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/charts/${authUserId}`, {
                method: "GET",
                headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
            })
    
            if (!res.ok) {
                return { error: "図表の取得に失敗" }
            }
    
            if (res.status !== 200) {
                return { error: "図表の取得に失敗"}
            }
    
            const charts: components["schemas"]["Chart"][] = await res.json()
    
            return charts
    
        } catch(error: any) {
            return { error: error }
    }
}