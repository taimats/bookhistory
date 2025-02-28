import * as z from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "名前を入力してください"
    }),
    email: z.string().email({
        message: "メールアドレスを入力してください"
    }),
    password: z.string().min(8).max(20, {
        message: "8字以上20字以内のパスワードを入力してください"
    })
})

export const CredentialSingInSchema = z.object({
    email: z.string().email({
        message: "メールアドレスを入力してください"
    }),
    password: z.string().min(8).max(20, {
        message: "パスワードを入力してください"
    })
})

export const SearchWordsSchema = z.object({
    query: z.string().min(1, {
        message: "検索文字を入力してください"
    })
})