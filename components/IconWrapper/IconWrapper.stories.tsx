import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import IconWrapper from './IconWrapper';
import { FaRing } from "react-icons/fa";

export default {
  title: 'Core/IconWrapper',
  component: IconWrapper,
} as Meta;

const Template: StoryFn<any> = (args) => <IconWrapper {...args}><FaRing /></IconWrapper>;

export const Default = Template.bind({});
Default.args = { size: 56 };
