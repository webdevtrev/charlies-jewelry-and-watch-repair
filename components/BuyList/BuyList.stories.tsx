import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BuyList from './BuyList';

export default {
  title: 'We Buy/BuyList',
  component: BuyList,
} as Meta;

const Template: StoryFn<any> = (args) => <BuyList {...args} />;

export const Default = Template.bind({});
Default.args = { categories: ['Gold', 'Diamonds', 'Watches'] };
