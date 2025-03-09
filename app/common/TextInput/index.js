import React from 'react';
import {TextInput as NativeTextInput} from 'react-native-paper';

const defaultTheme = {
  colors: {
    background: '#FFFFFF',
    onSurfaceVariant: '#758195',
    onSurface: '#758195'
  },
};

const TextInput = props => {
  const {
    theme = defaultTheme,
    activeOutlineColor = '#388BFF',
    ...rest
  } = props;

  return (
    <NativeTextInput
      mode={rest?.mode || 'outlined'}
      activeOutlineColor={activeOutlineColor}
      theme={theme}
      {...rest}
    />
  );
};

export default TextInput;
