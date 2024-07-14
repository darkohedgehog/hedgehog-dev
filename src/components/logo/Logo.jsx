import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            src={'/logo-transparent.png'}
            className="h-10 w-10"
            alt="Logo"
            width={40}
            height={40}
            priority={true}
          />
    </div>
  )
}

export default Logo;