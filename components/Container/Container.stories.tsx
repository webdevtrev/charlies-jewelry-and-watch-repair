import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Core/Container',
  component: Container,
} as Meta;

const Template: Story<any> = (args) => (
  <Container {...args}>
    <div style={{ background: '#f7f7f7', padding: 20 }}>Content inside container</div>
  </Container>
);

export const Default = Template.bind({});
