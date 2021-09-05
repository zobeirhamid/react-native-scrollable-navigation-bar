import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from 'resources/themes/theme';
import hoistNonReactStatics from 'hoist-non-react-statics';

const withTheme = <T extends object>(Component: React.ComponentType<T>) => {
  const Enhance = React.forwardRef<typeof Component, T>((props, ref) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} ref={ref} />
      </ThemeProvider>
    );
  });
  hoistNonReactStatics(Enhance, Component);
  return Enhance;
};

export default withTheme;
