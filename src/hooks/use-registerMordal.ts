import { create } from "zustand"

type RegisterMordalProps = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLRegisterMordal = create<RegisterMordalProps>((set) => ({
    isOpen: false,
    onOpen: () => set( { isOpen: true }),
    onClose: () => set( { isOpen: false }),
}))