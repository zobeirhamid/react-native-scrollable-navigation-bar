import React from 'react';
import {render as RNRender} from '@testing-library/react-native';
import {ThemeProvider} from '@shopify/restyle';
import theme from 'resources/themes/theme';

const AllTheProviders: React.FC = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function render(component: React.ReactElement<any>, options?: any) {
  return RNRender(component, {
    ...options,
    wrapper: AllTheProviders,
  });
}

export * from '@testing-library/react-native';
export {render};
