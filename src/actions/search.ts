import { auth } from "@/auth"
import { components } from "@/openapi/generated"

export const SearchBooks = async (searchWords: string) => {
    const session = await auth()
    if (!session?.user) {
        return { error: "ログインが必要です" }
    }

    if (searchWords === "") {
        return { error: "検索文字を入力ください" }
    }

    const query = new URLSearchParams({q: searchWords})

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/search?${query}`,  {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BACK_API_KEY}`,
            },
        })

        if (!res.ok) {
            return { error: "本の検索に失敗" }
        }

        if (res.status !== 200) {
            return { error: "本の検索に失敗"}
        }

        const bookResutls:components["schemas"]["Book"][] = await res.json()

        return bookResutls

    } catch(error: any) {
        return { error: error }
    }
}