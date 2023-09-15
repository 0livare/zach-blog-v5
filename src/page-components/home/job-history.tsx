import type {HtmlHTMLAttributes, ReactElement} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {OverflowCarousel} from '~/components'
import {ResumeButton} from './resume-button'

export type JobHistoryProps = HtmlHTMLAttributes<HTMLDivElement> & {}

export function JobHistory(props: JobHistoryProps) {
  let {className, ...rest} = props

  return (
    <div
      {...rest}
      className={cs('JobHistory', 'text-white py-12', className)}
      style={{background: 'var(--navy)'}}
    >
      <OverflowCarousel className="md:max-w-[90vw] mx-auto" initialIndex={-1}>
        <OverflowCarousel.Slide>
          <Project
            src="/images/home/glas.jpg"
            title="GLAS by Johnson Controls"
            alt="GLAS thermostat"
          >
            <ul className="list-disc flex flex-col gap-2">
              <li>
                Architected and built an embedded Windows IoT Core UWP application for Johnson
                Controls' first ever smart residential thermostat, GLAS
              </li>
              <li>
                As the security champion for GLAS, I worked with security consultants and 3rd party
                pen testers to meet corporate security requirements
              </li>
              <li>
                Contributed to CCT, the Controller Configuration Tool, an application used by
                installers all over the world to flash and set up new and existing HVAC controllers
              </li>
              <li>
                Contributed to what would become the largest scale automated testing framework ever
                created at the company, encompassing an entire suite of applications
              </li>
            </ul>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project src="/images/home/robert-half.png" title="Robert Half Technologies" alt="">
            <ul className="list-disc flex flex-col gap-2">
              <li>
                Architected and built a content-focused Gatsby React application (digital magazines)
              </li>
              <li>Created a library of reusable React components</li>
              <li>
                Developed the front end of a nurse management system that allowed coordinators to
                search for and manipulate nurse records through a variety of user friendly
                mechanisms, including a custom Google Maps integration
              </li>
            </ul>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/jci-open-blue.png"
            title="JCI Corporate Design System"
            alt="JCI Open Blue illustration"
          >
            <ul className="list-disc flex flex-col gap-2">
              <li>
                Architected and co-built a company-wide design system in vanilla JS, React, and
                Angular
              </li>
              <li className="ml-4">
                Most of the code was written in vanilla JS to maximize code-reuse, and relatively
                lightweight wrappers were created for React and Angular to maximize adoption
              </li>
              <li>Created and maintained complex monorepo build systems</li>
              <li>
                Met with engineering leaders throughout the company to convey the importance and
                benefits of the design system
              </li>
            </ul>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/bright-cellars-badge-logo.png"
            alt="Bright Cellars logo"
            title="Bright Cellars"
          >
            <ul className="list-disc flex flex-col gap-2">
              <li>
                I lead the development of the Bright Cellars design system, a library of easy to
                use, flexible, themeable React components capable of being used across products
              </li>
              <li>
                Got team and leadership buy in on a re-write of the customer facing site from
                heavily customized WordPress to Next.js
              </li>
              <li>Collected information on user behavior with Google Analytics & Mixpanel</li>
              <li>Executed A/B tests to enable data-driven design</li>
              <li>Worked closely with the UX team to collaborate on difficult problems</li>
              <li>Wrote meaningful, robust automated tests</li>
            </ul>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project src="/images/home/powerbi-tips.png" alt="PowerBI.Tips logo" title="PowerBI.Tips">
            <ul className="list-disc flex flex-col gap-2">
              <li>
                Created an Azure Static Web App for sharing PowerBI reports and an Azure Functions
                backend with a Gremlin Cosmos Graph DB
              </li>
              <li>
                Created{' '}
                <ProjectLink to="https://powerbi.tips/product/business-ops" label="Business Ops" />,
                an Electron Windows application and installer to manage extensions for PowerBI
                desktop
              </li>
            </ul>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project src="/images/home/skyslope-logo.png" alt="Skyslope logo" title="SkySlope">
            <ul className="list-disc flex flex-col gap-2">
              <li>
                Architected and lead the development of a $4M revenue product using Next.js, React,
                TypeScript, React Query, Tailwind CSS, Node, Koa, MongoDB Atlas
              </li>
              <li>
                Implemented the UX design system as a shared JS library. Also created its docs
                website (Storybook) and gave company-wide presentations to increase adoption
              </li>
              <li>
                Created and thoroughly documented a shared utility library that removed thousands of
                lines of duplicated code across 10+ projects
              </li>
              <li>
                Authored a custom framework to allow for the creation of reusable email templates in
                React and MJML
              </li>
              <li>Mentored junior & mid-level developers</li>
            </ul>
          </Project>
        </OverflowCarousel.Slide>

        <OverflowCarousel.Slide>
          <Project
            src="/images/home/github.svg"
            title="Open source contributions"
            alt="github"
            imgClassName="invert"
          >
            <h3 className="font-bold mt-4 text-base">Creator of:</h3>
            <ul className="list-disc flex flex-col gap-2 ml-8">
              <li>
                <ProjectLink to="https://www.npmjs.com/package/unorepo" label="Unorepo" /> - A CLI
                for monorepo management
              </li>
              <li>
                <ProjectLink to="https://www.npmjs.com/package/jest-tsd" label="Jest-tsd" /> - An
                extension to the Jest testing framework to allow direct testing of TypeScript type
                definitions
              </li>
              <li>
                <ProjectLink
                  to="https://www.npmjs.com/package/gremlin-cosmos"
                  label="gremlin-cosmos"
                />{' '}
                - A wrapper for the JavaScript implementation of gremlin to make interacting with
                the Gremlin API of a Cosmos DB less painful.
              </li>
            </ul>

            <h3 className="font-bold mt-4 text-base">Contributor to:</h3>
            <ul className="list-disc flex flex-col gap-2 ml-8">
              <li>
                <ProjectLink to="https://github.com/jquense/yup" label="Yup" /> - Schema validation
                library
              </li>
              <li>
                <ProjectLink to="https://github.com/vercel/next.js" label="Vercel's Next.js" /> -
                React Framework
              </li>
              <li>
                <ProjectLink
                  to="https://github.com/material-components/material-components-web"
                  label="Google's Material Design components"
                />
              </li>
              <li>
                <ProjectLink
                  to="https://github.com/Azure/azure-iot-sdk-csharp"
                  label="Microsoft's C# Azure IoT SDK"
                />
              </li>
              <li>Chromecast sender app (Google)</li>
            </ul>
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
  children: any
  alt?: string
  imgClassName?: string
}

function Project(props: ProjectProps) {
  let {src, title, children, className, imgClassName, alt, ...rest} = props

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
      <h3 className="uppercase text-2xl text-center font-bold h-16 flex items-center justify-center">
        {title}
      </h3>
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
