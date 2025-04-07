"use client"

import { cn } from '@/lib/utils';
import { GraduationCap, LibraryBig, ChartNoAxesCombined} from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navigationItems = [
    {
        link: '/records',
        icon: GraduationCap,
        label: '記録',
    },
    {
        link: '/charts',
        icon: ChartNoAxesCombined,
        label: '図表',
    },
    {
        link: '/shelf',
        icon: LibraryBig,
        label: '本棚',
    },
]

export const Navigation = () => {
    const pathName = usePathname()

    return (
        <>
        <nav className="sticky bottom-0 z-10 border-t border-secondary-border bg-background mx-8">
            <ul className='grid grid-cols-3'>
                {navigationItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} 
                              className={cn('flex flex-col items-center justify-center gap-1 py-1.5 text-xs hover:bg-slate-400',
                                            item.link === pathName && 'rounded-sm bg-slate-400' 
                              )}>
                            <item.icon className="size-[24px] stroke-2"/>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}
