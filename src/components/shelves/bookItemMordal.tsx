"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { components } from "@/openapi/generated"
import { z } from "zod"
import { BookItemSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateBook } from "@/actions/shelf"
import { useToast } from "@/hooks/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useBookItemMordal } from "@/hooks/useBookItem"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const BookItemMordal = ({ book }: { book: components["schemas"]["Book"]}) => {
    const { isOpen, onClose } = useBookItemMordal()
    const { toast } = useToast()

    const form = useForm<z.infer<typeof BookItemSchema>>({
        resolver: zodResolver(BookItemSchema),
        defaultValues: {
            id: book.id,
            isbn10: book.isbn10,
            imageURL: book.imageURL,
            title: book.title,
            author: book.author,
            page:book.page,
            price:book.price,
            bookStatus: book.bookStatus,
            authUserId: book.authUserId,
            createdAt: book.createdAt,
            updatedAt: book.updatedAt,
        },
    })

    const onUpdate = async (value: z.infer<typeof BookItemSchema>) => {
        const res = await UpdateBook(value)
        if (res.error) {
            toast({ variant: "destructive", title: res.error})
            return
        }

        console.log(res)
        
        toast({ variant: "success", title: res.success})
        onClose()
    }

    return (
        <>
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-h-[90%] overflow-auto">
                <DialogHeader>
                <DialogTitle>書籍を編集</DialogTitle>
                <DialogDescription />
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onUpdate)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="isbn10"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>ISBN10</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>書名</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>著者</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="page"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>ページ数</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>価格（税込）</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="bookStatus"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>状態</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={book.bookStatus}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="読書状態を選ぶ" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="bought">購入済</SelectItem>
                                        <SelectItem value="reading">読書中</SelectItem>
                                        <SelectItem value="read">読了</SelectItem>
                                    </SelectContent>
                                </Select>
                            <FormMessage /> 
                            </FormItem>
                        )}
                        />
                        <div className="flex gap-8">
                            <Button type="submit">更新</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
        </>
    )
}