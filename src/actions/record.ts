"use server"

import { auth } from "@/auth"
import { components } from "@/openapi/generated"

export const FetchRecords = async () => {
    let record: components["schemas"]["Record"] = {}
    
    const session = await auth()
    if (!session?.user) {
        return record
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/records/${session.user.id}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
        })

        console.log(res)
        
        if (!res.ok) {
            return { error: "記録の取得に失敗" }
        }

        if (res.status !== 200) {
            return { error: "記録の取得に失敗"}
        }

        record = await res.json()

        return record

    } catch(error: any) {
        return { error: error }
    }
}