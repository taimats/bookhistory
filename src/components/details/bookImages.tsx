//import Image from 'next/image'

export const BookImages = () => {
    //DBからデータフェッチ
    return (
        <>
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
        </>
    )
}