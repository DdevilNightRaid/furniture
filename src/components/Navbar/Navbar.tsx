"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Cta from '../Cta/Cta'
import Logo from '../Logo'
import { Button } from '../ui/button'
import { AlignRight, HamIcon, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <AnimatePresence>
            <motion.nav layout className='fixed backdrop-blur-lg z-[999] max-md:px-2 md:relative max-md:w-full flex items-center justify-between overflow-x-hidden md:py-5'>
                <Logo />
                <ul className='hidden md:flex items-center gap-4 text-lg'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Cta
                                title="Book Now"
                            />
                        </Link>
                    </li>
                </ul>
                <motion.ul layout className='flex md:hidden flex-col items-center gap-4 text-lg transition-all duration-300'>
                    {
                        show ? (
                            <div className='relative h-screen left-0 z-[99999] p-7 bg-background w-full top-0'>
                                <div className='flex w-full justify-end'>
                                    <Button
                                        onClick={() => setShow(!show)}
                                        variant={"ghost"}
                                    >

                                        <X className='h-4 w-4' />
                                    </Button>
                                </div>
                                <ul className='flex flex-col gap-2'>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <Cta
                                                title="Book Now"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Button
                                    variant={'ghost'}
                                    onClick={() => setShow(!show)}
                                    className='mr-1'
                                >
                                    <AlignRight />
                                </Button>
                            </>
                        )
                    }

                </motion.ul>
            </motion.nav>
        </AnimatePresence>
    )
}

export default Navbar