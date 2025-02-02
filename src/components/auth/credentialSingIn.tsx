"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CredentialSingInSchema, RegisterSchema } from "@/schemas"
import { useTransition } from "react"

export const CredentialSignIn = () => {
    const form = useForm<z.infer<typeof CredentialSingInSchema>>({
        resolver: zodResolver(CredentialSingInSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const [ isPending, startTransition ] = useTransition()

    const onSubmit = (credentials: z.infer<typeof CredentialSingInSchema>) => {
        //ログイン時のロジックを実装
    }

    return (
    <>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                <Input type="email" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                <Input type="password" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>ログイン</Button>
        </form>
    </Form>
    </>
    )
}