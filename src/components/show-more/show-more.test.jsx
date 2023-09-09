import {render} from '@testing-library/react'

import {ShowMore} from './show-more'

it('says "more" when closed', () => {
  const {getAllByText} = render(<ShowMore isOpen={false} />)
  expect(getAllByText((content, node) => node.textContent === 'Show more')).toBeTruthy()
})

it('says "less" when opened', () => {
  const {getAllByText} = render(<ShowMore isOpen={true} />)
  expect(getAllByText((content, node) => node.textContent === 'Show less')).toBeTruthy()
})

it('contains passed noun in label', () => {
  const {getAllByText} = render(<ShowMore showMoreWhat="Zach" />)
  expect(getAllByText((content, node) => node.textContent === 'Show more Zach')).toBeTruthy()
})
