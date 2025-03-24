'use client'

import { useLogoutMordal } from "@/hooks/use-logoutMordal.";
import { Button } from "../ui/button";

export const SignOutBtn = () => {
    const { onOpen } = useLogoutMordal()

    return (
        <>
        <Button onClick={onOpen}>ログアウト</Button>
        </>
    )
}