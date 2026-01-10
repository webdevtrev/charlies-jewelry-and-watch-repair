import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardService from './CardService';
import { FaRegClock } from 'react-icons/fa';

export default {
  title: 'Services/CardService',
  component: CardService,
} as Meta;

const Template: StoryFn<any> = (args) => <CardService {...args} />;

export const WatchRepair = Template.bind({});
WatchRepair.args = {
  icon: <FaRegClock />,
  title: 'Watch Repair',
  description: 'Expert restoration and servicing of fine timepieces, from vintage classics to modern luxury watches.',
  learnMoreHref: '#',
};
