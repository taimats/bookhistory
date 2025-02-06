"use client"

import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { ChartNoAxesCombined, GraduationCap, LibraryBig } from 'lucide-react';
import { LightModeToggle } from './lightModeToggle';


const headerItems = new Map([
    ['/records', { icon: GraduationCap, label: '記録'}],
    ['/charts', { icon: ChartNoAxesCombined, label: '図表'}],
    ['/shelf', { icon: LibraryBig, label: '本棚'}],

])

export const Header = () => {
    const pathName = usePathname()

    if (pathName === '/login') return null

    const headerItem = headerItems.get(pathName)
    
    return (
        <>
        <header className="sticky top-0 flex justify-between items-center z-10 border-b border-secondary-border bg-white">
            <div className='flex items-center gap-2 ml-16 my-4'>
                {headerItem ? <headerItem.icon className="size-[40px] stroke-2"/> : ""}
                <div className='text-2xl'>{headerItem?.label}</div>
            </div>

            <div className='flex gap-4 items-center'>
                <div><LightModeToggle /></div>
                <div>
                    <Button asChild className='mr-8'>
                        <Link href="/login">ログイン</Link>
                    </Button>
                </div>
            </div>
        </header>
        </>
    )
}