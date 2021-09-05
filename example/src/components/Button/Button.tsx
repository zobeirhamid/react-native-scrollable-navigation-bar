import Box from 'library/components/Box/Box';
import Text from 'library/components/Text/Text';
import React from 'react';
import {Theme} from 'resources/themes/theme';

export interface ButtonProps {
  title: string;
  active?: boolean;
  backgroundColor?: keyof Theme['colors'];
}

export const Button: React.FC<ButtonProps> = ({
  title,
  active,
  backgroundColor = 'primaryBackground',
}) => {
  return (
    <Box backgroundColor={backgroundColor} opacity={active ? 1 : 0.5}>
      <Text>{title}</Text>
    </Box>
  );
};

export default Button;
