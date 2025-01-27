import Link from 'next/link';
import { Button } from '../ui/button';

export const Header = () => {
    return (
        <>
        <header className="flex justify-between items-center border-b border-secondary-border bg-white">
            <div className='flex gap-4 mt-4 mb-4'>
                <div className='text-xl ml-4'>アイコン</div>
                <div className='text-xl'>ラベル</div>
            </div>

            <div className='flex gap-4 items-center'>
                <div>ダークモード</div>
                <div>
                    <Button asChild className='mr-4'>
                        <Link href="/login">ログイン</Link>
                    </Button>
                </div>
            </div>
        </header>
        </>
    )
}