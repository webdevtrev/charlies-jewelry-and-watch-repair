import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactItem from './ContactItem';

export default {
  title: 'Contact/ContactItem',
  component: ContactItem,
} as Meta;

const Template: StoryFn<any> = (args) => <ContactItem {...args} />;

export const Phone = Template.bind({});
Phone.args = { label: 'Phone', children: '(555) 555-5555' };
