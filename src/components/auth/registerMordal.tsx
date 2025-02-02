"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
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
import { RegisterSchema } from "@/schemas"
import { useTransition } from "react"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useLRegisterMordal } from "@/hooks/use-registerMordal"
  
export const RegisterMordal = () => {
    const { isOpen, onClose } = useLRegisterMordal()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })
    
    const [ isPending, startTransition ] = useTransition()

    const onSubmit = (credentials: z.infer<typeof RegisterSchema>) => {
        //ユーザー登録時のロジックを実装
    }

    return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader hidden={true}>
                <DialogTitle hidden={true} />
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                            <div className="text-md">名前</div>
                            <div className="text-sm text-red-200">*必須</div>
                        </FormLabel>
                        <FormControl>
                        <Input placeholder="ニックネーム" {...field} disabled={isPending} />
                        </FormControl>
                        <FormDescription>
                            アプリ内で使用するニックネームを入力
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex gap-2 items-center" >
                            <div className="text-md">メールアドレス</div>
                            <div className="text-sm text-red-200">*必須</div>
                        </FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="example@mail.com" {...field} disabled={isPending} />
                        </FormControl>
                        <FormDescription>
                            メールアドレスを入力
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                            <div className="text-md">パスワード</div>
                            <div className="text-sm text-red-200">*必須</div>
                        </FormLabel>
                        <FormControl>
                        <Input type="password" placeholder="********" {...field} disabled={isPending} />
                        </FormControl>
                        <FormDescription>
                            8字以上20字以内のパスワードを入力
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>登録する</Button>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
    </>
    )
}