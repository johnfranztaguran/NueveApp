import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';
import * as React from 'react';

export const isReadyNavigationRef = React.createRef<boolean>();
export const navigationRef =
  React.createRef<NavigationContainerRef<ParamListBase>>();

export const navigate = (name: keyof ParamListBase, params?: object) => {
  if (isReadyNavigationRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const goBack = () => {
  if (isReadyNavigationRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
};
