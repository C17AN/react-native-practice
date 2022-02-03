import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type DateHeadProps = {
  date: Date;
};

const DateHead = ({date}: DateHeadProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDateText = `${year}년 ${month}월 ${day}일`;
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#448aff" barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattedDateText}</Text>
      </View>
    </>
  );
};

export default DateHead;

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#448aff',
  },
  block: {
    padding: 16,
    backgroundColor: '#448aff',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
