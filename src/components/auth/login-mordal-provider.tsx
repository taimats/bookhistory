"use client"

import { useEffect, useState } from "react"
import { LoginMordal } from "./loginMordal"

export const LoginMordalProvider = () => {
    const [ isMounted, setIsMounted ] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
        <LoginMordal />
        </>
    )
}