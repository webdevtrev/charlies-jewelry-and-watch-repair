import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactSection from './ContactSection';

export default {
  title: 'Contact/ContactSection',
  component: ContactSection,
} as Meta;

const Template: StoryFn<any> = (args) => <ContactSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
