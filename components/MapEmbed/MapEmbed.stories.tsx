import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MapEmbed from './MapEmbed';

export default {
  title: 'Contact/MapEmbed',
  component: MapEmbed,
} as Meta;

const Template: StoryFn<any> = (args) => <MapEmbed {...args} />;

export const Default = Template.bind({});
Default.args = { src: 'https://www.google.com/maps/embed?pb=' };
