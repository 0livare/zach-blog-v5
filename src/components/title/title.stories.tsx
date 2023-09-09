import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Title} from './title'

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Title of a page',
}
