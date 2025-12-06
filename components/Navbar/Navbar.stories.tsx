import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn<any> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
