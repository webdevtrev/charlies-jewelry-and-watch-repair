import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SectionHeading from './SectionHeading';

export default {
  title: 'Core/SectionHeading',
  component: SectionHeading,
} as Meta;

const Template: StoryFn<any> = (args) => <SectionHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Our Repair Services',
  subtitle: 'Experienced, trustworthy, local',
};
