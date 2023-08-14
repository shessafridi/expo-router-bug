import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

type Props = {};

const TabsLayout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen name='home' />
      <Tabs.Screen name='my-account' />
    </Tabs>
  );
};

export default TabsLayout;
