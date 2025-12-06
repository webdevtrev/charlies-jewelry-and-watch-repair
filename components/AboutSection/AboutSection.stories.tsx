import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AboutSection from './AboutSection';

export default {
  title: 'About/AboutSection',
  component: AboutSection,
} as Meta;

const Template: StoryFn<any> = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'About Us',
  paragraph: 'We are a family-owned jewelry and watch repair shop serving the community for decades.',
};
