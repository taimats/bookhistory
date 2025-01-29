import { BookImages } from "@/components/details/bookImages";
import { RegisterBookMordalBtn } from "@/components/details/registerBookMordalBtn";
import { SearchBar } from "@/components/details/searchBar";

export default function Page() {
    return (
    <>
    <div className="space-y-4 mx-16 my-16">
        <RegisterBookMordalBtn />
        <SearchBar />
        <BookImages />
    </div>
    </>
    )
}