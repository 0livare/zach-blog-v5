import type {HtmlHTMLAttributes, ReactElement} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {OverflowCarousel} from '~/components'
import {ResumeButton} from './resume-button'

export type ProjectDisplayProps = HtmlHTMLAttributes<HTMLDivElement> & {}

export function ProjectDisplay(props: ProjectDisplayProps) {
  let {className, ...rest} = props

  return (
    <div
      {...rest}
      className={cs('ProjectDisplay', 'text-white py-12', className)}
      style={{background: 'var(--navy)'}}
    >
      <OverflowCarousel className="md:max-w-[90vw] mx-auto" initialIndex={-1}>
        <OverflowCarousel.Slide>
          <Project
            src="/images/home/glas.jpg"
            title="GLAS by Johnson Controls"
            alt="GLAS thermostat"
            placeholder="blur"
          >
            <p>
              I worked on developing the user interface, defining the architecture, and implementing
              the cloud communications for Johnson Controls&apos; first smart thermostat. It was
              built in UWP on a Windows IoT core device.
            </p>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/nurse.png"
            title="Nurse Management System"
            alt="Nurse Management System"
            placeholder="blur"
          >
            <p>
              I developed the front end of a nurse management system for Eversana that allows
              coordinators to search for and manipulate nurse records through a variety of user
              friendly mechanisms, including a custom Google Maps integration. It was built from the
              ground up with React, Typescript, Redux, Webpack and Babel.
            </p>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/jci-open-blue.png"
            title="JCI Corporate Design System"
            alt="JCI Open Blue illustration"
            placeholder="blur"
          >
            <p>
              I co-led the development of a corporate design system for Johnson Controls. It was
              written in vanilla JavaScript for maximum adoptability throughout the company, and we
              created wrappers for React and Angular to simplify the API for common use cases.
            </p>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/bright-cellars-badge-logo.png"
            alt="Bright Cellars logo"
            placeholder="blur"
            title={
              <>
                Bright Cellars
                <br />
                <br />
              </>
            }
          >
            <p>
              I lead the development of the Bright Cellars design system, as well as a complete
              re-write of their customer facing website into Next.js. I also contributed to their
              internal data collection efforts and support tools.
            </p>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/skyslope-logo.png"
            alt="Skyslope logo"
            placeholder="blur"
            title={
              <>
                Skyslope
                <br />
                <br />
              </>
            }
          >
            <p>
              At Skyslope I&apos;m working as part of our Innovation Team, focused on rapid creation
              of proof-of-concept efforts to vet business ideas.
            </p>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/github.svg"
            title="Open source contributions"
            alt="github"
            imgClassName="invert"
          >
            <p>
              I&apos;ve done a considerable amount of open source work over the years. I have
              contributed to notable libraries including{' '}
              <ProjectLink
                to="https://github.com/material-components/material-components-web"
                label="Google's Material Design components"
              />
              ,{' '}
              <ProjectLink
                to="https://github.com/Azure/azure-iot-sdk-csharp"
                label="Microsoft's C# Azure IoT SDK"
              />
              , and <ProjectLink to="https://github.com/vercel/next.js" label="Vercel's Next.js" />.
              Additionally, I&apos;ve published a monorepo management tool,{' '}
              <ProjectLink to="https://www.npmjs.com/package/unorepo" label="Unorepo" /> as well as{' '}
              <ProjectLink
                to="https://www.npmjs.com/package/gremlin-cosmos"
                label="gremlin-cosmos"
              />
              , a wrapper for the Gremlin graph DB query language.
            </p>
          </Project>
        </OverflowCarousel.Slide>
      </OverflowCarousel>

      <ResumeButton />
    </div>
  )
}

type ProjectProps = Omit<React.ComponentProps<'div'>, 'title'> & {
  src: string
  title: ReactElement | string
  children: ReactElement
  alt?: string
  imgClassName?: string
}

function Project(props: ProjectProps) {
  let {src, title, children, className, imgClassName, alt, placeholder, ...rest} = props

  return (
    <div
      className={cs(
        'Project',
        'flex flex-col gap-4 md:gap-8',
        'max-w-sm',
        'bg-black/20 p-8 rounded-lg h-full',
        className,
      )}
      {...rest}
    >
      <div className={cs('text-center aspect-square w-24 md:w-48 self-center')}>
        <img
          width={200}
          height={200}
          alt={alt}
          src={src}
          className={cs('rounded-full', imgClassName)}
        />
      </div>
      <h3 className="uppercase text-center text-2xl font-bold">{title}</h3>
      <div>{children}</div>
    </div>
  )
}

function ProjectLink(props: {to: string; label: string; className?: string}) {
  let {to, label, className, ...rest} = props
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={cs('ProjectLink', className)}
      style={{color: 'var(--teal)'}}
      {...rest}
    >
      {label}
    </a>
  )
}
