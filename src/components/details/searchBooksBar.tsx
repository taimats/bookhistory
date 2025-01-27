import { Search } from 'lucide-react'
import { Button } from '../ui/button'

export const SearchBooksBar = () => {
    return (
        <>
        <form>
        <div className="flex w-full rounded-md border border-secondary-border has-[:focus]:border-gray-800">
            <Button variant={"outline"} size={"icon"}>
                <Search />
            </Button>
            <input
                type="text"
                placeholder="書籍をさがす"
                className="w-full bg-neutral-100 pl-4 pr-1 outline-none focus:border-blue-500"
            />
        </div>
        </form>
        </>
    )
}