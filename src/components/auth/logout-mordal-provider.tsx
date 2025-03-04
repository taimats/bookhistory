"use client"

import { useEffect, useState } from "react"
import { LogoutMordal } from "./logoutMordal"

export const LogoutMordalProvider = () => {
    const [ isMounted, setIsMounted ] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
        <LogoutMordal />
        </>
    )
}