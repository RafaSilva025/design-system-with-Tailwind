import {Meta, StoryObj } from "@storybook/react/*"

import Button, { ButtonProps } from "./Button"
import { title } from "process"

const meta: Meta<ButtonProps> = {
    title: 'Molecules/Button',
    component: Button, 
    argTypes: {}
}


export default meta 

export const Primary: StoryObj<typeof Button> = {
    args: {
        children: 'Botão'
    }
}
