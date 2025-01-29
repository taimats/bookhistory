//import Image from 'next/image'

import { SearchBar } from "./searchBar"
import { UpdateBookShelfBtn } from "./updateBookShelfBtn"

export const BookShelf = () => {
    //DBからデータフェッチ
    return (
        <>
        <div className="space-y-2 pt-8">
            <SearchBar />
            <UpdateBookShelfBtn />
            <div className="text-xl">書籍を登録しよう</div>
            <div className="grid grid-cols-3 gap-4">
                {/*<Image src={""} width={200} height={500} alt='book image' />*/}
                <div className='bg-slate-400'>画像1</div>
                <div className='bg-slate-400'>画像2</div>
                <div className='bg-slate-400'>画像3</div>
                <div className='bg-slate-400'>画像4</div>
                <div className='bg-slate-400'>画像5</div>
                <div className='bg-slate-400'>画像6</div>
                <div className='bg-slate-400'>画像7</div>
                <div className='bg-slate-400'>画像8</div>
                <div className='bg-slate-400'>画像9</div>
            </div>
        </div>
        </>
    )
}