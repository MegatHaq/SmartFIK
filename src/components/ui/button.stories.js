import { fn } from "@storybook/test";

import { Button } from "./button";

export default {
  title: "shadcn/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    children: "Hello",
    variant: "destructive",
    size: "lg",
  },
};
