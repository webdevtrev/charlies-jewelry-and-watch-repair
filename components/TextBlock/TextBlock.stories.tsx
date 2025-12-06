import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextBlock from './TextBlock';

export default {
  title: 'Core/TextBlock',
  component: TextBlock,
} as Meta;

const Template: Story<any> = (args) => <TextBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is placeholder paragraph text used in the About section.',
};
