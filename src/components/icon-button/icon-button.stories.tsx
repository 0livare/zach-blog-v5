import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Icon} from '../icon'
import {IconButton} from './icon-button'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div className="p-16">
    <IconButton style={{marginTop: 24}} {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: <Icon name="heart" />,
}

export const XLarge = Template.bind({})
XLarge.args = {
  children: <Icon name="heart" size={72} />,
}

export const OtherColor = Template.bind({})
OtherColor.args = {
  children: <Icon name="heart" color="red" />,
}

export const Filled = Template.bind({})
Filled.args = {
  children: <Icon name="heart" color="limegreen" filled />,
}

export const FilledWithOtherColor = Template.bind({})
FilledWithOtherColor.args = {
  children: <Icon name="heart" fill="red" />,
}
