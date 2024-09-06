
import React, { useEffect, useState } from 'react';
import { View, TextInput, TextInputProps, StyleSheet, TouchableOpacity, Platform, StyleProp, TextStyle } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MY_COLORS } from '@constants';
import { adjust, hp } from '@utils';
import { MyText } from '@components';

interface AppProps extends TextInputProps {
  label?: string;
  value?: string;
  placeholder: string;
  style?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  mode?: 'date' | 'time';
}

const App: React.FC<AppProps> = ({
  label,
  value,
  placeholder,
  style,
  onChangeText,
  mode = 'date', // Default to 'date' picker
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const styles = myStyles();

  useEffect(() => {
    onChangeText(new Date().toISOString().split('T')[0])
  }, [])
  

  const onDateChange = (event: any, date?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
      onChangeText(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    }
  };

  return (
    <>
      {label && <MyText p color={MY_COLORS.TXT_DIM} style={styles.txt}>{label}</MyText>}
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={MY_COLORS.TXT_DIM}
          value={value || selectedDate.toISOString().split('T')[0]}
          onChangeText={onChangeText}
          editable={false} // Prevent manual input
        />
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode={mode}
          display="default"
          onChange={onDateChange}
        />
      )}
    </>
  );
};

const myStyles = () =>
  StyleSheet.create({
    input: {
      width: '100%',
      height: hp('6%'),
      paddingHorizontal: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: MY_COLORS.TXT_DIM,
      borderRadius: 8,
      color: 'white',
      marginTop: 2,
      fontSize: adjust(14),
    },
    txt: { marginTop: 8 },
  });

export default App;
