import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Slides } from '../components/Slides';

// const SLIDE_DATA = [
//   { text: 'Welcome to JobApp', color: '#03A9F4' },
//   { text: 'Use this to get a job', color: '#009688' },
//   { text: 'Set your location, then swipe away', color: '#03A9F4' },
// ];

const SLIDE_DATA = [
  { text: 'ダウンロードありがとう！', color: '#03A9F4' },
  { text: 'これは求人アプリだよ！', color: '#009688' },
  { text: 'まずは働きたい場所を選んでね！', color: '#03A9F4' },
];

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  const onSlidesComplete = () => {
    navigation.navigate('Auth');
  };
  return <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />;
};
