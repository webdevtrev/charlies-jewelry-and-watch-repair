import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Core/Link',
  component: Link,
} as Meta;

const Template: StoryFn<any> = (args) => <Link {...args}>{args.children}</Link>;

export const Internal = Template.bind({});
Internal.args = { href: '/services', children: 'Go to Services' };

export const External = Template.bind({});
External.args = { href: 'https://example.com', children: 'Visit Example (external)' };
