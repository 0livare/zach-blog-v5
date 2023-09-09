import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Aside} from './aside'

export default {
  title: 'Components/Aside',
  component: Aside,
  argTypes: {},
} as ComponentMeta<typeof Aside>

const Template: ComponentStory<typeof Aside> = (args) => (
  <div className="p-16">
    <Aside style={{marginTop: 24}} {...args} />
  </div>
)

export const Info = Template.bind({})
Info.args = {
  variant: 'info',
  children: (
    <>
      <p>This is some text</p>
      <p>This is some more text</p>
    </>
  ),
}

export const Warn = Template.bind({})
Warn.args = {
  variant: 'warn',
  children: (
    <>
      <p>This is some text</p>
      <p>This is some more text</p>
    </>
  ),
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error',
  children: (
    <>
      <p>This is some text</p>
      <p>This is some more text</p>
    </>
  ),
}

export const Gray = Template.bind({})
Gray.args = {
  variant: 'gray',
  children: (
    <>
      <p>This is some text</p>
      <p>This is some more text</p>
    </>
  ),
}
