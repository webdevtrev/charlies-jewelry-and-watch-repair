import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<any> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
