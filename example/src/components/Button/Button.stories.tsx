import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from './Button';

storiesOf('Button', module).add('Primary', () => (
  <Button title={'Hello World'} />
));

storiesOf('Button', module).add('Secondary', () => (
  <Button title={'Hello World'} backgroundColor={'secondaryBackground'} />
));

storiesOf('Button', module).add('Tertinary', () => (
  <Button title={'Hello World'} backgroundColor={'tertinaryBackground'} />
));
