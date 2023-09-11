import React from 'react'

import {Icon, type IconName, NeonText} from '~/components'
import {twMerge as cs} from 'tailwind-merge'
import styles from './jumbotron.module.scss'

export type JumbotronProps = React.ComponentProps<'div'> & {}

export function Jumbotron(props: JumbotronProps) {
  let {className, ...rest} = props

  return (
    <div {...rest} className={cs('Jumbotron', styles.wrapperShadow, className)}>
      <div
        className={cs(
          styles.wrapper,
          'h-[800px] max-h-[80vh] flex justify-center items-center relative shadow-xl',
        )}
      >
        <div className="max-w-[600px] w-[90vw] md:w-[66vw] relative transition duration-500 hover:drop-shadow-white">
          <img src="/images/cube.png" width={946} height={882} alt="rubik's cube" />
        </div>
        <div className="absolute flex flex-col justify-center items-center pointer-events-none">
          <NeonText className="font-serif text-white uppercase text-7xl pointer-events-auto">
            Zach Olivare
          </NeonText>
          <hr className="h-0.5 w-24 bg-white mt-6 mb-4" />
          <h2 className="text-white uppercase text-lg">Software Engineer</h2>
          <div className="flex justify-center items-center mt-10 gap-4 pointer-events-auto">
            <SocialLink to="http://www.github.com/0livare" icon="Github" />
            <SocialLink to="http://www.twitter.com/0livare" icon="Twitter" />
            <SocialLink to="http://www.linkedin.com/in/olivare" icon="Linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialLink(props: {to: string; icon: IconName}) {
  let {to, icon} = props
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={cs(
        styles.socialLink,
        'w-10 h-10 rounded-full fill-white flex justify-center items-center',
      )}
    >
      <Icon name={icon} fill="white" color="white" />
    </a>
  )
}
