import Test from "./Test";

export default {
  title: "shadcn/test",
  component: Test,
  parameters: {
    layout: "centered",
  },
};

export const Primary = {
  args: {
    children: "testing",
  },
};
