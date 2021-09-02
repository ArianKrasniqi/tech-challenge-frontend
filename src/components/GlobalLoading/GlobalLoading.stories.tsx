import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { GlobalLoading, GlobalLoadingProps } from './GlobalLoading'

export default {
  title: 'Example/GlobalLoading',
  component: GlobalLoading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<GlobalLoadingProps> = (args) => <GlobalLoading {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'GlobalLoading',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'GlobalLoading',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'GlobalLoading',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'GlobalLoading',
}
