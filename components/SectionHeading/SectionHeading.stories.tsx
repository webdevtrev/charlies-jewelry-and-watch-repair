import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionHeading from './SectionHeading';

export default {
  title: 'Core/SectionHeading',
  component: SectionHeading,
} as Meta;

const Template: Story<any> = (args) => <SectionHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Our Repair Services',
  subtitle: 'Experienced, trustworthy, local',
};
