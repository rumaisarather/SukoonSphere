import React from 'react'
import PodcastCard from '../sharedComponents/podcastCard'
import SectionTitle from '../sharedComponents/SectionTitle'
import { SectionWrapper } from '@/assets/styles/HomeLayout'

function Podcasts() {
  return (
    <SectionWrapper>
      <div className='space-y-4'>
        <SectionTitle title="Recent Podcasts" />
        <div className='space-y-8'>
          <PodcastCard
            podcast={{
              image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
              avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
              author: "Sartaj Ashraf",
              publishDate: "20-12-2002",
              title: "Episode Number something: The Art of living a healthy life",
              subtitle: "Secure, anxious, avoidant, and disorganized—which one are you?",
              description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi nemo minlat temporibus  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde exercitationem eos deserunt corrupti consectetur numquam, nesciunt aut culpa totam temporibus officia odio minima, eaque ex, dolorum necessitatibus nemo! Perspiciatis architecto recusandae eligendi inventore quaerat quae expedita .",
              audioSource: "horse.mp3",
              readMoreLink: "#",
            }}
          />
          <PodcastCard
            podcast={{
              image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
              avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
              author: "Sartaj Ashraf",
              publishDate: "20-12-2002",
              title: "Episode Number something: The Art of living a healthy life",
              subtitle: "Secure, anxious, avoidant, and disorganized—which one are you?",
              description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi nemo minlat temporibus  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde exercitationem eos deserunt corrupti consectetur numquam, nesciunt aut culpa totam temporibus officia odio minima, eaque ex, dolorum necessitatibus nemo! Perspiciatis architecto recusandae eligendi inventore quaerat quae expedita .",
              audioSource: "horse.mp3",
              readMoreLink: "#",
            }}
          />


        </div>
      </div>
    </SectionWrapper>
  )
}

export default Podcasts
