import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Button} from '../button'
import {Sparkles} from './sparkles'

export default {
  title: 'Components/Sparkles',
  component: Sparkles,
  argTypes: {},
} as ComponentMeta<typeof Sparkles>

const Template: ComponentStory<typeof Sparkles> = (args) => (
  <div className="p-16">
    <Sparkles {...args} />
  </div>
)

export const OnText = Template.bind({})
OnText.args = {
  children: 'Zach is cool',
}

export const OnAButton = Template.bind({})
OnAButton.args = {
  children: <Button>My Button</Button>,
}

export const OnAnImage = Template.bind({})
OnAnImage.args = {
  // eslint-disable-next-line @next/next/no-img-element
  children: <img src="https://picsum.photos/300/200" width={300} height={200} alt="random" />,
}
