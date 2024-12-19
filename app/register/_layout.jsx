import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import RegStackLayout from '@/app/register/stack'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <RegStackLayout/>
  );
}
