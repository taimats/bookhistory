"use client"

import { useEffect, useState } from "react"
import { RegisterMordal } from "./registerMordal"

export const RegisterMordalProvider = () => {
    const [ isMounted, setIsMounted ] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
        <RegisterMordal />
        </>
    )
}