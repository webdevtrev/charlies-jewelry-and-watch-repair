import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactSection from './ContactSection';

export default {
  title: 'Contact/ContactSection',
  component: ContactSection,
} as Meta;

const Template: Story<any> = (args) => <ContactSection {...args} />;

export const Default = Template.bind({});
Default.args = { mapSrc: 'https://www.google.com/maps/embed?pb=' };
