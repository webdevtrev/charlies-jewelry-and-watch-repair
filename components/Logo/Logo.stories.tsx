import React from 'react';
import { Meta, Story } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Branding/Logo',
  component: Logo,
} as Meta;

const Template: Story<any> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
