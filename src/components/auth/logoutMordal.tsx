"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useLogoutMordal } from "@/hooks/use-logoutMordal."
import { Button } from "../ui/button"
import { signOut } from "next-auth/react"
  
export const LogoutMordal = () => {
    const { isOpen, onClose } = useLogoutMordal()

    return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>ログアウト</DialogTitle>
            </DialogHeader>
            <div className="text-red-400 text-bold">ログアウトを行うとすべての情報が失われます。ログアウトしてよいでしょうか？</div>
            <div className="flex items-center justify-center gap-20">
                <Button size="lg" onClick={() => signOut()}>はい　</Button>
                <Button variant="outline" size="lg" onClick={onClose}>いいえ</Button>
            </div>
        </DialogContent>
    </Dialog>
    </>
    )
}