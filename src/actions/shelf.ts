"use server"

import { auth } from "@/auth"
import { components } from "@/openapi/generated"

export const FetchShelf = async () => {
    let shelf: components["schemas"]["Book"][] = []

    const session = await auth()
    if (!session?.user) {
        return { shelf: shelf }
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/shelf/${session?.user.id}`,  {
            method: "GET",
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
        })

        console.log(res)

        if (!res.ok) {
            return { error: "本棚の取得に失敗" }
        }

        if (res.status !== 200) {
            return { error: "本棚の取得に失敗"}
        }

        shelf = await res.json()

        return { shelf: shelf }

    } catch(error: any) {
        return { error: error }
    }
}

export const PostBook = async (book: components["schemas"]["Book"]) => {
    const session = await auth()

    if (!session?.user) {
        return { error: "ログインが必要です" }
    }
    book.authUserId = session?.user.id
    
    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/shelf/${session?.user.id}`,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BACK_API_KEY}`,
            },
            body: JSON.stringify(book),
        })

        console.log(res)

        if (!res.ok) {
            return { error: "本の登録に失敗" }
        }

        if (res.status !== 201) {
            return { error: "本の登録に失敗"}
        }

        return { success: "本の登録に成功" }

    } catch(error: any) {
        return { error: error }
    }
}

export const UpdateBook = async (book: components["schemas"]["Book"]) => {
    const session = await auth()

    if (!session?.user) {
        return { error: "ログインが必要です" }
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/shelf/${session?.user.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BACK_API_KEY}`,
            },
            body: JSON.stringify(book),
        })

        console.log(res)

        if (!res.ok) {
            return { error: "本の更新に失敗" }
        }

        if (res.status !== 200) {
            return { error: "本の更新に失敗"}
        }

        return { success: "本の更新に成功" }

    } catch(error: any) {
        return { error: error }
    }
}

export const DeleteBooks = async (bookIds: string[]) => {
    const session = await auth()

    if (!session?.user) {
        return { error: "ログインが必要です" }
    }

    const query = new URLSearchParams()
    bookIds.forEach(id => query.append("bookId", id))

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/shelf/${session?.user.id}?${query.toString()}`,  {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BACK_API_KEY}`,
            },
        })

        console.log(res)

        if (!res.ok) {
            return { error: "本の削除に失敗" }
        }

        if (res.status !== 204) {
            return { error: "本の削除に失敗"}
        }

        return { success: "本の削除に成功" }

    } catch(error: any) {
        return { error: error }
    }
}

