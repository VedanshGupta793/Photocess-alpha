import React from 'react'
import UserProfile from '@/components/custom/auth/UserProfile'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationTabs } from './NavigationTabs'
import Credit from '@/components/custom/Credit'

export default function DesktopNav() {
    return (
        <div className='absolute inset-0 w-full h-24 max-w-7xl container flex justify-between p-4 z-50'>
            <Link href="/" passHref legacyBehavior>
                <Image src='/Logo.svg' width={200} height={200} alt='Project Logo' decoding="async" priority />
            </Link>
            <NavigationTabs />
            <div className='flex items-center gap-4'>
                <Credit />
                <UserProfile />
            </div>
        </div>
    )
}
