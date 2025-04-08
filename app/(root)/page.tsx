import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewByUserId, getLatestInterview } from '@/lib/actions/auth.action'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = async() => {
  const user = await getCurrentUser()

  const [userInterviews,latestInterview] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    getLatestInterview({userId:user?.id!})
  ])

  const hasPassedInterviews = userInterviews?.length >0;
  const hasUpcommingInterviews = latestInterview?.length > 0
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>Practice on real interview questions & get instant feedback</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview <ArrowRight/> </Link>

          </Button>
        </div>

        <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {
          hasPassedInterviews ?(
            userInterviews?.map((interview)=>(
              <InterviewCard {...interview} key={interview.id}/>
            ))
          ):(
         <p>You haven&apos;t taken any interviews yet.</p>
       ) }
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
        {
          hasUpcommingInterviews ?(
            latestInterview?.map((interview)=>(
              <InterviewCard {...interview} key={interview.id}/>
            ))
          ):(
         <p>There are no new interview yet.</p>
       ) }
        </div>
      </section>
    </>
  )
}

export default Home