import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FeatureList from './FeatureList';
import FeatureItem from '../FeatureItem/FeatureItem';

export default {
  title: 'Features/FeatureList',
  component: FeatureList,
} as Meta;

const Template: StoryFn<any> = (args) => (
  <FeatureList {...args}>
    <FeatureItem title="Trusted" description="Over 20 years of experience" />
    <FeatureItem title="Insured" description="Fully insured repairs" />
  </FeatureList>
);

export const Default = Template.bind({});
