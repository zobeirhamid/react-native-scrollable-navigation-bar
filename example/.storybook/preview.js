import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from 'resources/themes/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      //color: /(background|color)$/i,
      date: /Date$/,
    },
    //expanded: true,
  },
  //layout: 'fullscreen',
};
