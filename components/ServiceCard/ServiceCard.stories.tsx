import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ServiceCard from './ServiceCard';

export default {
  title: 'Services/ServiceCard',
  component: ServiceCard,
} as Meta;

const Template: StoryFn<any> = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Watch Battery', description: 'Quick same-day battery replacement' };
