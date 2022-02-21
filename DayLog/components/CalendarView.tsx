import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';

type Props = {};

const calendarTheme = {
  selectedDayBackgroundColor: '#009688',
  arrowColor: '#009688',
  dotColor: '#009688',
  todayTextColor: '#009688',
};

const CalendarView = (props: Props) => {
  const markedDates = {
    '2022-02-21': {
      selected: true,
    },
    '2022-02-22': {
      marked: true,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedDates}
      theme={calendarTheme}
    />
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
