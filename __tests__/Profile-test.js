import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Profile from '../src/Profile';

describe('[Profile] Test', () => {
  const props = {
    userName: 'LOGAN',
    name: 'MINWOO JUNG',
  };
  test('Checking userName', () => {
    const rendered = render(<Profile {...props} />);
    rendered.getByText(/LOGAN/);
  });
  test('Checking name', () => {
    const rendered = render(<Profile {...props} />);
    rendered.getByText(/MINWOO JUNG/);
  });
  test('By pressing button, message will be changed', () => {
    const rendered = render(<Profile {...props} />);
    // rendered.debug();
    rendered.getByText('Select your status');
    const byeBtn = rendered.getByText('Bye!');
    const helloBtn = rendered.getByText('Hello!');
    fireEvent(byeBtn, 'onPress');
    rendered.getByText('Seeya!');
    fireEvent(helloBtn, 'onPress');
    rendered.getByText('Welcome!');
  });
});
