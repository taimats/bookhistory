"use client"

import { OauthSignIn } from "./oauthSingIn"
import { CredentialSignIn } from "./credentialSingIn"
import { Separator } from "../ui/separator"
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import { Button } from "../ui/button"
import { useLRegisterMordal } from "@/hooks/use-registerMordal"

  export const LoginForm = () => {
    const { onOpen } = useLRegisterMordal()

    return (
        <>
        <Card className="w-[350px]">
            <CardContent>
                <OauthSignIn />
                <div className="my-4">
                    <div className="text-sm text-center pb-4">or</div>
                    <Separator/>
                </div>
                <CredentialSignIn />
            </CardContent>
            <CardFooter>
                <Button variant={"outline"} className="w-full bg-slate-200" onClick={() => onOpen()}>新規登録</Button>
            </CardFooter>
        </Card>
        </>
    )
  }