import { View, Text } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';

type Props = {};

const AppRoot = (props: Props) => {
  return <Redirect href='/home' />;
};

export default AppRoot;
