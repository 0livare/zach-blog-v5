import React, {useState} from 'react'
import {type ComponentStory, type ComponentMeta} from '@storybook/react'

import {LoremIpsum} from '../../../.storybook/components'
import {ShowMore} from './show-more'

export default {
  title: 'Components/Show More',
  component: ShowMore,
  argTypes: {},
} as ComponentMeta<typeof ShowMore>

const Template: ComponentStory<typeof ShowMore> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="p-16">
      <ShowMore {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: <LoremIpsum />,
}

export const ModifiedLabel = Template.bind({})
ModifiedLabel.args = {
  children: <LoremIpsum />,
  showMoreWhat: 'fields',
}
