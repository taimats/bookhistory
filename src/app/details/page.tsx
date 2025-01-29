import { BookImages } from "@/components/details/bookImages";
import { RegisterBookMordal } from "@/components/details/registerBookMordal";
import { SearchBar } from "@/components/details/searchBar";

export default function Page() {
    return (
    <>
    <div className="space-y-4 mx-16 my-16">
        <RegisterBookMordal />
        <SearchBar />
        <BookImages />
    </div>
    </>
    )
}