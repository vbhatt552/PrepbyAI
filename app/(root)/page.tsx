import React from "react";
import AuthForm from "../components/AuthForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { InterviewCard } from "../components/InterviewCard";
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/auth.action";
const page = async() => {
  const user = await getCurrentUser();
  const [userInterviews,latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
  await getLatestInterviews({userId:user?.id!}),
  ]);
  

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length>0;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Prepare Yourself better for Job with prepbyAI</h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback{" "}
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews?(
            userInterviews?.map((interview)=>(
              <InterviewCard {...interview} key = {interview.id}/>
            )

          )):(
<p>You haven&apos;t taken any interviews</p>
          )}
          
          
          
          
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interviews</h2>
        <div className="interviews-section">
         {hasUpcomingInterviews?(
            latestInterviews?.map((interview)=>(
              <InterviewCard {...interview} key = {interview.id}/>
            )

          )):(
<p>There are no new interviews availavble</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
