import { addDecorator, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withA11y)
addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
