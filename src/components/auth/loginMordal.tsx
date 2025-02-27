"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useLoginMordal } from "@/hooks/use-loginMordal"
import { SignInBtn } from "./signInBtn"
  
export const LoginMordal = () => {
    const { isOpen, onClose } = useLoginMordal()

    return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader hidden={true}>
                <DialogTitle hidden={true} />
            </DialogHeader>
            <SignInBtn />
        </DialogContent>
    </Dialog>
    </>
    )
}