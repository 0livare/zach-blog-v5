import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'

import {Placeholder} from '../../../.storybook/components'
import {OverflowCarousel, OverflowCarouselProps} from './overflow-carousel'

const meta: Meta = {
  title: 'Components/Overflow Carousel',
  component: OverflowCarousel,
  argTypes: {},
}
export default meta

export const Default: Story<OverflowCarouselProps> = (args) => (
  <OverflowCarousel {...args}>
    <OverflowCarousel.Slide>
      <Placeholder color="goldenrod" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="limegreen" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="rebeccapurple" />
    </OverflowCarousel.Slide>
  </OverflowCarousel>
)
Default.args = {}

export const ShowArrowsOnDesktop: Story<OverflowCarouselProps> = (args) => (
  <OverflowCarousel {...args}>
    <OverflowCarousel.Slide>
      <Placeholder color="goldenrod" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="limegreen" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="rebeccapurple" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="royalblue" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="fuchsia" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="aquamarine" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="olivedrab" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="dodgerblue" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="indigo" />
    </OverflowCarousel.Slide>
    <OverflowCarousel.Slide>
      <Placeholder color="sandybrown" />
    </OverflowCarousel.Slide>
  </OverflowCarousel>
)
ShowArrowsOnDesktop.args = {}
