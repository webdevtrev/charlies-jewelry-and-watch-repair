import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapEmbed from './MapEmbed';

export default {
  title: 'Contact/MapEmbed',
  component: MapEmbed,
} as Meta;

const Template: Story<any> = (args) => <MapEmbed {...args} />;

export const Default = Template.bind({});
Default.args = { src: 'https://www.google.com/maps/embed?pb=' };
