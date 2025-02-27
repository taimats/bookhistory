"use server"

import { auth } from "@/auth"
import { RegisterSchema } from "@/schemas"
import * as z from "zod"

export const RegisterUserByCredentials = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values)

    if (!validatedValues.success) {
        return { error: "不正な値です" }
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: { Authorization: `Bearer ${process.env.BACK_API_KEY}`},
            body: JSON.stringify(validatedValues.data)
        })
        if (!res.ok) {
            return { error: "ユーザー登録に失敗" }
        }

        if  (res.status !== 201) {
            return { error: "ユーザー登録に失敗" }
        }
        
        return { success: "ユーザー登録が完了" }
        
    } catch (error: any) {
        return { error: error }
    }
}

export const RegisterUserByOAuth = async () => {
    const session = await auth()
    if (!session?.user) {
        return { error: "ログインが必要です" }
    }

    const registerInfo = {
        authUserId: session.user.id,
        email: session.user.email,
        name: session.user.name,
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BACK_API_KEY}`,
            },
            body: JSON.stringify(registerInfo)
        })
        if (!res.ok) {
            return { error: "ユーザー登録に失敗" }
        }

        if (res.status !== 201) {
            return { error: "ユーザー登録に失敗" }
        }
        
        return { success: "ユーザー登録が完了" }
        
    } catch (error: any) {
        return { error: error }
    }

}
