import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DecorativeGear from './DecorativeGear';

export default {
  title: 'Branding/DecorativeGear',
  component: DecorativeGear,
} as Meta;

const Template: StoryFn<any> = (args) => <DecorativeGear {...args} />;

export const Default = Template.bind({});
