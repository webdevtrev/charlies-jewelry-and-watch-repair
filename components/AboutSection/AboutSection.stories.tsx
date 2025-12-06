import React from 'react';
import { Meta, Story } from '@storybook/react';
import AboutSection from './AboutSection';

export default {
  title: 'About/AboutSection',
  component: AboutSection,
} as Meta;

const Template: Story<any> = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'About Us',
  paragraph: 'We are a family-owned jewelry and watch repair shop serving the community for decades.',
};
