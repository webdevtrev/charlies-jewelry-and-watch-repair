import React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureItem from './FeatureItem';

export default {
  title: 'Features/FeatureItem',
  component: FeatureItem,
} as Meta;

const Template: Story<any> = (args) => <FeatureItem {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Fast Repairs', description: 'Quick turnaround on most services' };
