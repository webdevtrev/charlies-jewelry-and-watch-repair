import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DecorativeDiamond from './DecorativeDiamond';

export default {
  title: 'Branding/DecorativeDiamond',
  component: DecorativeDiamond,
} as Meta;

const Template: StoryFn<any> = (args) => <DecorativeDiamond {...args} />;

export const Default = Template.bind({});
