"use server"

import { auth } from "@/auth"
import { components } from "@/openapi/generated"

export const FetchShelf = async () => {
    let shelves: components["schemas"]["Book"][] = []

    const session = await auth()
    if (!session?.user) {
        return shelves
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/shelves/${session?.user.id}`,  {
            method: "GET",
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
        })

        if (!res.ok) {
            return { error: "本棚の取得に失敗" }
        }

        if (res.status !== 200) {
            return { error: "本棚の取得に失敗"}
        }

        shelves = await res.json()

        return shelves

    } catch(error: any) {
        return { error: error }
    }
}