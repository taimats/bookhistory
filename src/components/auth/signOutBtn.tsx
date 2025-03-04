'use client'

import { useLogoutMordal } from "@/hooks/use-logoutMordal.";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export const SignOutBtn = () => {
    const { onOpen } = useLogoutMordal()

    return (
        <>
        <Button onClick={onOpen}>ログアウト</Button>
        </>
    )
}