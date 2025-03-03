import { create } from "zustand"

type BookItemMordalProps = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useBookItemMordal = create<BookItemMordalProps>((set) => ({
    isOpen: false,
    onOpen: () => set( { isOpen: true }),
    onClose: () => set( { isOpen: false }),
}))