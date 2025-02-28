import { FetchShelf } from "@/actions/shelf"
import { BookItems } from "./bookItems"

export const BookShelf = async () => {
    const res = await FetchShelf()
    if (res.error) {
        console.log(res.error)
    }

    return (
        <>
        <BookItems books={res.shelf} />
        </>
    )
}