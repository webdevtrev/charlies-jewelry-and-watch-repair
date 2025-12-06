import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MobileMenu from './MobileMenu';

export default {
  title: 'Navigation/MobileMenu',
  component: MobileMenu,
} as Meta;

const Template: StoryFn<any> = (args) => <MobileMenu {...args} />;

export const Open = Template.bind({});
Open.args = { open: true };
