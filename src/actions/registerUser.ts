"use server"

import { RegisterSchema } from "@/schemas"
import * as z from "zod"

export const RegisterUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values)

    if (!validatedValues.success) {
        return { error: "不正な値です" }
    }

    try {
        const res = await fetch(`${process.env.BACK_API_BASE_URL}/users`, {
            method: "POST",
            body: JSON.stringify(validatedValues.data)
        })
        if (!res.ok) {
            return { error: "ユーザー登録に失敗"}
        }

        if  (res.status !== 201) {
            return { error: "ユーザー登録に失敗"}
        }
        
        return { success: "ユーザー登録が完了" }
    } catch (error: any) {
        return { error: "ユーザー登録に失敗" }
    }
}