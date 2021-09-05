import React from 'react';
import {render} from 'test-utils';
import Button from './Button';

test('Button Test', () => {
  const {getByText} = render(<Button title={'Hello World'} />);

  expect(() => getByText('Gaga')).toThrowError();
  expect(getByText('Hello World')).toBeTruthy();
});
