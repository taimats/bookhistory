"use server"

import { components } from "@/openapi/generated"

export const FetchShelf = async (userId: string) => {
    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/shelves/${userId}`,  {
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
        })

        if (!res.ok) {
            return { error: "本棚の取得に失敗" }
        }

        if (res.status !== 200) {
            return { error: "本棚の取得に失敗"}
        }

        const shelves: components["schemas"]["Book"][] = await res.json()

        return shelves

    } catch(error: any) {
        return { error: error }
    }
}