import { BookShelf } from "@/components/details/bookShelf";
import { RegisterBookMordalBtn } from "@/components/details/registerBookMordalBtn";
import { SearchBar } from "@/components/details/searchBar";
import { Separator } from "@radix-ui/react-select";

export default function Page() {
    return (
    <>
    <div className="space-y-4 mx-16 mt-6 my-2">
        <RegisterBookMordalBtn />
        <Separator />
        <BookShelf />
        <div className="h-screen"></div>
    </div>
    </>
    )
}