import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Tooltip} from './tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="p-16">
    <Tooltip id="one" title="One">
      <button className="border border-blue-400 p-4 rounded m-8">One</button>
    </Tooltip>

    {/* <Tooltip id="two" title="Two">
      <button className="border border-blue-400 p-4 rounded m-8">Two</button>
    </Tooltip> */}
  </div>
)

export const Default = Template.bind({})
