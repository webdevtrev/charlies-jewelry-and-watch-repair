import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextBlock from './TextBlock';

export default {
  title: 'Core/TextBlock',
  component: TextBlock,
} as Meta;

const Template: StoryFn<any> = (args) => <TextBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is placeholder paragraph text used in the About section.',
};
