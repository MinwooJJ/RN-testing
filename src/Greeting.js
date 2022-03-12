import React from 'react';
import {Button} from 'react-native';

export default function Greeting({title, onPress}) {
  return <Button title={title} onPress={onPress} />;
}
