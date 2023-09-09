import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {SearchInput, SearchInputProps} from './search-input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Search Input',
  component: SearchInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="p-16">
      <SearchInput {...args} searchText={searchText} setSearchText={setSearchText} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
