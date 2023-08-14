import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

type Props = {};

const Address = (props: Props) => {
  useEffect(() => {
    console.log('Address Mount');
  }, []);

  return (
    <View>
      <Text>Address</Text>
    </View>
  );
};

export default Address;
