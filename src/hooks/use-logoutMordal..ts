import { create } from "zustand"

type LogoutMordalProps = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLogoutMordal = create<LogoutMordalProps>((set) => ({
    isOpen: false,
    onOpen: () => set( { isOpen: true }),
    onClose: () => set( { isOpen: false }),
}))