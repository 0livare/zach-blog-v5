import React from 'react'

export function HeroImage(props: React.ComponentProps<'img'>) {
  return (
    <img
      alt=""
      width={736}
      height={384}
      className="object-cover w-screen md:w-full h-56 md:h-96 dark:opacity-80 mb-16"
      {...props}
    />
  )
}
