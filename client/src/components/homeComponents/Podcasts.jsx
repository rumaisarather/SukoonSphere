import React from 'react'
import PodcastCard from '../sharedComponents/podcastCard'

function Podcasts() {
  return (
   <div className='flex flex-col justify-center items-center columns-1'>
   <h1 className='text-center text-5xl text-black font-bold pb-[1rem]'>Listen to Podcasts</h1>
   <PodcastCard/>
   </div>
  )
}

export default Podcasts
