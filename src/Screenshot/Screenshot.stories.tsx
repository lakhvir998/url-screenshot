import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { withTests } from "@storybook/addon-jest";

import Screenshot from "./Screenshot";
import { ScreenshotProps } from "./types";
import results from "../.jest-test-results.json";

export default {
  title: "Screenshot",
  component: Screenshot,
  decorators: [withTests({ results })],
  jest: ["Screenshot.test.tsx"],
} as Meta;

const Template: Story<ScreenshotProps> = (args) => <Screenshot {...args} />;

export const WithColor = Template.bind({});

WithColor.args = {
  color: "#F5F5DC",
  url: process.env.PUBLIC_URL + "/demo.png",
  type: "NONE",
  animate: false,
};

export const Square = Template.bind({});

Square.args = {
  color: "#F5F5DC",
  url: process.env.PUBLIC_URL + "/demo.png",
  type: "NONE",
  animate: false,
};

export const Long = Template.bind({});

Long.args = {
  color: "#F5F5DC",
  url: process.env.PUBLIC_URL + "/demo.png",
  type: "LONG",
  animate: false,
};
