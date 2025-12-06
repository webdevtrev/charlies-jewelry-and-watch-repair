import React from 'react';
import { Meta, Story } from '@storybook/react';
import MobileMenu from './MobileMenu';

export default {
  title: 'Navigation/MobileMenu',
  component: MobileMenu,
} as Meta;

const Template: Story<any> = (args) => <MobileMenu {...args} />;

export const Open = Template.bind({});
Open.args = { open: true };
