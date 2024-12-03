import DesktopNav from '@/components/custom/Navbar/DesktopNav'
import MobileNav from '@/components/custom/Navbar/MobileNav'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div className='hidden lg:block'>
                <DesktopNav />
            </div>
            <div className='block lg:hidden'>
                <MobileNav />
            </div>
            {children}
        </main>
    )
}
