import { BookImages } from "@/components/details/bookImages";
import { BookRegisterButton } from "@/components/details/bookRegisterButton";
import { SearchBooksBar } from "@/components/details/searchBooksBar";

export default function Page() {
    return (
    <>
    <div className="space-y-4 mx-16 my-16">
        <BookRegisterButton />
        <SearchBooksBar />
        <BookImages />
    </div>
    </>
    )
}