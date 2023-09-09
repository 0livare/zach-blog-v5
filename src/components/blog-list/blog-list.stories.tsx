import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {HoverCard} from '../hover-card'
import {BlogList} from './blog-list'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Blog List',
  component: BlogList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlogList>

const Template: ComponentStory<typeof BlogList> = (args) => (
  <div className="p-16">
    <BlogList {...args}>
      {Array.from({length: 10}).map((_, index) => (
        <HoverCard
          key={index}
          to="https://google.com"
          title="Zach is cool"
          subtitle={'This is item ' + index}
          src="https://picsum.photos/300/200"
          alt="random image"
        />
      ))}
    </BlogList>
  </div>
)

export const Default = Template.bind({})
Default.args = {}
