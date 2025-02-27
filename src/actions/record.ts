"use server"

import { components } from "@/openapi/generated"

export const FetchRecords = async (authUserId: string) => {
    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/records/${authUserId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
        })

        if (!res.ok) {
            return { error: "記録の取得に失敗" }
        }

        if (res.status !== 200) {
            return { error: "記録の取得に失敗"}
        }

        const record: components["schemas"]["Record"] = await res.json()

        return record

    } catch(error: any) {
        return { error: error }
    }
}