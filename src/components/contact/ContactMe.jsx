import Image from 'next/image';
import React from 'react'

const image = 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1723480303/hedgehogbanner3_vhymsb.webp';

const ContactMe = () => {

  return (

 <section className="relative flex flex-wrap lg:h-screen lg:items-center py-10 mx-24">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl text-accent dark:text-accentDark uppercase">
        Hajde da pričamo!
      </h1>
      <p className="mt-4 text-accentDark dark:text-accent font-semibold text-lg">
        Zanima te kako možemo zajedno raditi na nečemu sjajnom? Bilo da imaš ideju koja traži tehničku magiju ili ti treba pomoć u razvoju web aplikacije, tu sam da pomognem!
      </p>
      <p className="mt-2 text-accentDark dark:text-accent font-semibold text-lg">
        Verujem da svaka dobra ideja zaslužuje da bude realizovana na pravi način. Zato, bez obzira na to da li si na početku puta ili već imaš konkretnu viziju, možemo zajedno pronaći najbolje rešenje. Spreman sam da odgovorim na sva tvoja pitanja, razmotrim sve opcije, i zajedno izgradimo nešto fantastično.
      </p>
    </div>

    <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <p className="mt-2 text-accentDark dark:text-accent font-semibold text-2xl">
         Kako me možeš kontaktirati?
      </p>
    </div>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <Image
      alt="Hedgehog contact image"
      src={image}
      width={500}
      height={500}
      className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl shadow-accent dark:shadow-accentDark"
      priority= {false}
    />
  </div>
</section>
  )
}

export default ContactMe