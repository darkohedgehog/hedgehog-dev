
import Image from 'next/image'
import React from 'react'
import { HomeFlipWords } from './HomeFlipWords'

const image = 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1720819788/hedgehog-dev/hedgehogbanner2_fc1jvh.webp'

const HeroSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="hedgehog working on the computer"
                src={image}
                width={400}
                height={400}
                priority={true}
                className="absolute inset-0 h-full lg:h-[700px] w-full object-cover rounded-md shadow-md shadow-gray-400"
              />
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="p-8 sm:p-16 lg:p-24 -mt-72">
              <HomeFlipWords />

              <p className="text-gray-600 -mt-52">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <a
                href="#"
                className="mt-4 sm:mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-8 sm:px-12 py-2 sm:py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
