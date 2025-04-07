"use client"

import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { ChartNoAxesCombined, GraduationCap, LibraryBig } from 'lucide-react';
import { LightModeToggle } from './lightModeToggle';
import { useLoginMordal } from '@/hooks/use-loginMordal';
import { useSession } from "next-auth/react"
import { SignOutBtn } from '../auth/signOutBtn';


const headerItems = new Map([
    ['/records', { icon: GraduationCap, label: '記録'}],
    ['/charts', { icon: ChartNoAxesCombined, label: '図表'}],
    ['/shelf', { icon: LibraryBig, label: '本棚'}],

])

export const Header = () => {
    const pathName = usePathname()
    const headerItem = headerItems.get(pathName)

    const { data: session } = useSession()
    const { onOpen } = useLoginMordal()

    return (
        <>
        <header className="sticky top-0 flex justify-between items-center z-10 border-b border-secondary-border bg-background">
            <div className='flex items-center gap-2 ml-16 my-4'>
                {headerItem ? <headerItem.icon className="size-[40px] stroke-2"/> : ""}
                <div className='text-2xl'>{headerItem?.label}</div>
            </div>

            <div className='flex gap-4 items-center'>
                <div><LightModeToggle /></div> 
                <div className='mr-8'>
                    { session?.user ?
                        <SignOutBtn />
                        :
                        <Button className='mr-8' onClick={() => onOpen()}>ログイン</Button>
                    }
                </div>
            </div>
        </header>
        </>
    )
}