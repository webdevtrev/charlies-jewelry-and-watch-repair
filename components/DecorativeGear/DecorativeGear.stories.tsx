import React from 'react';
import { Meta, Story } from '@storybook/react';
import DecorativeGear from './DecorativeGear';

export default {
  title: 'Branding/DecorativeGear',
  component: DecorativeGear,
} as Meta;

const Template: Story<any> = (args) => <DecorativeGear {...args} />;

export const Default = Template.bind({});
