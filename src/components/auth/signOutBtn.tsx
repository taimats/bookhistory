'use client'

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export const SignOutBtn = () => {
    return (
        <>
        <Button onClick={() => signOut()}>ログアウト</Button>
        </>
    )
}