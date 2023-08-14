import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

type Props = {};

const MyAccountPage = (props: Props) => {
  return (
    <View>
      <Text>MyAccountPage</Text>
      <Link href='/address'>Address</Link>
    </View>
  );
};

export default MyAccountPage;
