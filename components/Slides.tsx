import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

type SlidesProps = {
  data: { text: string; color: string }[];
  onComplete: () => void;
};

export const Slides = ({ data, onComplete }: SlidesProps) => {
  return (
    <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
      {data.map((slide, index) => {
        return (
          <View
            key={slide.text}
            style={[styles.slideStyle, { backgroundColor: slide.color }]}
          >
            <Text style={styles.textStyle}>{slide.text}</Text>
            {index === data.length - 1 && (
              <Button
                // raised
                title="Onwards!"
                buttonStyle={styles.buttonStyle}
                onPress={onComplete}
              />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
});
