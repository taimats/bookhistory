import React from 'react'
import { Button } from '../ui/button'

export const UpdateBookShelfBtn = () => {
    //データベースからフェッチが必要
    return (
        <Button className='bg-slate-300 w-full text-black font-bold hover:bg-slate-400'>本棚を更新</Button>
    )
}
