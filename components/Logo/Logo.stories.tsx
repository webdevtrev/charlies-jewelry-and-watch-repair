import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Branding/Logo',
  component: Logo,
} as Meta;

const Template: StoryFn<any> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
