"use server"

import { components } from "@/openapi/generated"

export const FetchRecords = async (userId: string) => {
    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/records/${userId}`, {
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
        })

        if (!res.ok) {
            return { error: "記録の取得に失敗" }
        }

        if (res.status !== 200) {
            return { error: "記録の取得に失敗"}
        }

        const records: components["schemas"]["Record"][] = await res.json()

        return records

    } catch(error: any) {
        return { error: error }
    }
}