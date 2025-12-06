import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageBlock from './ImageBlock';

export default {
  title: 'We Buy/ImageBlock',
  component: ImageBlock,
} as Meta;

const Template: StoryFn<any> = (args) => <ImageBlock {...args} />;

export const RightImage = Template.bind({});
RightImage.args = { src: '/placeholder.png', alt: 'Sample' };
