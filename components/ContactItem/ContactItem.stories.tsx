import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactItem from './ContactItem';

export default {
  title: 'Contact/ContactItem',
  component: ContactItem,
} as Meta;

const Template: Story<any> = (args) => <ContactItem {...args} />;

export const Phone = Template.bind({});
Phone.args = { label: 'Phone', children: '(555) 555-5555' };
