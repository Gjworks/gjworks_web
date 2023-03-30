'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'

import 'styles/globals.css'
import 'styles/tailwindcss.css'

import DashboardSideNav from './nav'
import PageWrap from 'src/components/sections/PageWrap'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="selection:text-white selection:bg-indigo-500">
      <div className="">
        <div className="fixed w-[300px] bg-dark-900 backdrop-blur-lg bg-opacity-50 h-screen overflow-hidden overflow-y-auto border-r border-dark-800">
          <DashboardSideNav />
        </div>
        <div className="relative top-0 bottom-0 ml-[300px] bg-dark-900 h-screen overflow-hidden overflow-y-auto">
          <PageWrap>{children}</PageWrap>
        </div>
      </div>
    </div>
  )
}
