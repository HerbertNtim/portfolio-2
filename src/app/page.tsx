import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import React from 'react'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import Experience from '@/components/Experience'

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
      </div>
    </main>
  )
}

export default Home
