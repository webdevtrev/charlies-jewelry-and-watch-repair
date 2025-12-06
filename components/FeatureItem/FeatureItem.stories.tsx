import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FeatureItem from './FeatureItem';

export default {
  title: 'Features/FeatureItem',
  component: FeatureItem,
} as Meta;

const Template: StoryFn<any> = (args) => <FeatureItem {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Fast Repairs', description: 'Quick turnaround on most services' };
