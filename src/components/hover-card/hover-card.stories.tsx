import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {HoverCard} from './hover-card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Simple Card',
  component: HoverCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HoverCard>

const Template: ComponentStory<typeof HoverCard> = (args) => (
  <div className="p-16">
    <HoverCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/300/200',
  title: 'Zach is cool',
  subtitle: 'The man, the myth, the coolness',
  alt: 'random image',
}

export const Link = Template.bind({})
Link.args = {
  src: 'https://picsum.photos/600/500',
  title: 'Zach is cool',
  subtitle: 'The man, the myth, the coolness',
  alt: 'random image',
  to: 'https://www.google.com',
}
