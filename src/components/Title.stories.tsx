import React from "react"
import { Story, Meta } from "@storybook/react"

import { Title } from "./Title"

export default {
  title: "Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = (args) => <Title {...args} />

export const TitleStory = Template.bind({})
