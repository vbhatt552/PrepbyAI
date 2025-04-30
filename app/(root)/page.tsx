import React from 'react'
import AuthForm from '../components/AuthForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
      <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Prepare Yourself better for Job with prepbyAI</h2>
          <p className='text-lg'>Practice on real interview questions and get instant feedback </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href = "/interview">Start an Interview</Link>
          </Button>

        </div>
        <Image src = "/robot.png" alt = "robo" width = {400} height = {400} className = "max-sm:hidden"/>
      </section>
      <section className = "flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
        <p>You haven&apos;t take any interviews yet</p>
      </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interviews</h2>
      <div className='interviews-section'>
        <p>There are no Interviews available</p>
      </div>
      </section>
      </>
  )
}

export default page
