import { BookShelf } from "@/components/shelves/bookShelf";
import { RegisterBookMordalBtn } from "@/components/shelves/registerBookMordalBtn";
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