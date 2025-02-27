import { create } from "zustand"

type LoginMordalProps = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLoginMordal = create<LoginMordalProps>((set) => ({
    isOpen: false,
    onOpen: () => set( { isOpen: true }),
    onClose: () => set( { isOpen: false }),
}))