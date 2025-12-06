import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ServicesGrid from './ServicesGrid';
import ServiceCard from '../ServiceCard/ServiceCard';

export default {
  title: 'Services/ServicesGrid',
  component: ServicesGrid,
} as Meta;

const Template: StoryFn<any> = (args) => (
  <ServicesGrid {...args}>
    <ServiceCard title="Ring Repair" description="Sizing, soldering, polishing" />
    <ServiceCard title="Watch Repair" description="Battery, bands, movement service" />
  </ServicesGrid>
);

export const Default = Template.bind({});
