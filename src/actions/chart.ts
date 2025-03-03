"use server"

import { auth } from "@/auth"
import { components } from "@/openapi/generated"

export const FetchCharts = async () => {
    let charts: components["schemas"]["Chart"][] = []
        
    const session = await auth()
    if (!session?.user) {
        return { charts: charts }
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
    
            charts = await res.json()
    
            return { charts: charts }
    
        } catch(error: any) {
            return { error: error }
    }
}