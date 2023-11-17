import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import mdx from './my-component.mdx';

export default {
  title: 'Components/My Component',
  component: 'my-component',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' },
  },
  args: {
    first: 'James',
    middle: 'Earl',
    last: 'Quincy',
  },
} satisfies Meta;

type Story = StoryObj;

const Template = (args: Args) =>
  html`<my-component first=${args.first} middle=${args.middle} last=${args.middle}></my-component>`;

export const Default: Story = {
  render: Template,
};
