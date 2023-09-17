import {Icon, type IconName} from '~/components'
import {twMerge as cs} from 'tailwind-merge'
import styles from './social-link.module.scss'

export function SocialLink(props: {to: string; icon: IconName}) {
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
