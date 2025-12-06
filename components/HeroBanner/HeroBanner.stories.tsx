import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeroBanner from './HeroBanner';

export default {
  title: 'Hero Area/HeroBanner',
  component: HeroBanner,
} as Meta;

const Template: Story<any> = (args) => <HeroBanner {...args} />;

export const Sale = Template.bind({});
Sale.args = {
  headline: 'Holiday Sale — Up to 30% off select items',
  subtext: 'Limited time offers on jewelry and watch repairs',
  primaryButton: <button>Shop Sale</button>,
  secondaryButton: <button>Learn More</button>,
};
