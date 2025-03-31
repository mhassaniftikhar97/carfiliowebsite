import React from 'react'
import Image from 'next/image'

const MeetTeam = () => {
  const teamMembers = [
    {
      name: 'David Maldonado',
      role: 'Chief Executive Officer',
      image: '/assets/david.jpeg'
    },
    {
      name: 'Mikail Isaac',
      role: 'Chief Financial Officer',
      image: '/assets/mikaail.jpeg'
    },
    {
      name: 'Abban Zook',
      role: 'Chief Marketing Officer',
      image: '/assets/abban.jpeg'
    }
  ]

  return (
    <section className="py-4 xl:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-6xl font-medium tracking-tight mb-6">
            Meet The team
          </h2>
          <p className="text-gray-black text-xl leading-tight tracking-tight">
            Our philosophy is simple: Expertise Is Critical to Client Success
          </p>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-300 rounded-xl"
                  />
                  {/* Hover overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-medium mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTeam