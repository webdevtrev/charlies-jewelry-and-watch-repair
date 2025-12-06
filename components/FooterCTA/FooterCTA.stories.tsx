import React from 'react';
import { Meta, Story } from '@storybook/react';
import FooterCTA from './FooterCTA';

export default {
  title: 'Footer/FooterCTA',
  component: FooterCTA,
} as Meta;

const Template: Story<any> = (args) => <FooterCTA {...args} />;

export const Default = Template.bind({});
Default.args = { message: 'Get a free estimate today', cta: <button>Contact Us</button> };
