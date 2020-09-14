import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";

import Screenshot from "./Screenshot";
import { ScreenshotProps } from "./types";

export default {
  title: "Screenshot",
  component: Screenshot,
} as Meta;

const Template: Story<ScreenshotProps> = (args) => <Screenshot {...args} />;

export const WithColor = Template.bind({});

WithColor.args = {
  color: "#F5F5DC",
  url: "https://google.com",
  type: "NONE",
  animate: false,
};
