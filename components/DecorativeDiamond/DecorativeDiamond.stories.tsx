import React from 'react';
import { Meta, Story } from '@storybook/react';
import DecorativeDiamond from './DecorativeDiamond';

export default {
  title: 'Branding/DecorativeDiamond',
  component: DecorativeDiamond,
} as Meta;

const Template: Story<any> = (args) => <DecorativeDiamond {...args} />;

export const Default = Template.bind({});
