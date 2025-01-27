"use client"

import { GraduationCap, LibraryBig, ChartNoAxesCombined} from 'lucide-react';
import Link from 'next/link'

const navigationItems = [
    {
        link: '/record',
        icon: GraduationCap,
        label: '記録',
    },
    {
        link: '/chart',
        icon: ChartNoAxesCombined,
        label: '図表',
    },
    {
        link: '/details',
        icon: LibraryBig,
        label: '本棚',
    },
]

export const Navigation = () => {
    return (
        <>
        <nav className="sticky bottom-0 z-10 border-t border-secondary-border bg-white">
            <ul className='grid grid-cols-3'>
                {navigationItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} className='flex flex-col items-center justify-center gap-1 py-1.5 text-xs hover:bg-slate-200'>
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
