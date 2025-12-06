import React from 'react';
import { Meta, Story } from '@storybook/react';
import ImageBlock from './ImageBlock';

export default {
  title: 'We Buy/ImageBlock',
  component: ImageBlock,
} as Meta;

const Template: Story<any> = (args) => <ImageBlock {...args} />;

export const RightImage = Template.bind({});
RightImage.args = { src: '/placeholder.png', alt: 'Sample' };
