import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, Image } from 'react-native';
import { LAYOUT, MY_COLORS } from '@constants';
import MyText from './MyText';
import { adjust, hp, wp } from '@utils';

interface MyButtonProps {
  onPress: () => void;
  title: string;
  btnType?: 'primary' | 'secondary';
  iconPath?: any;
  secondaryColor?: string;
  style?: ViewStyle;
  btnWidth?: any,
}

const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  title,
  btnType = 'primary',
  iconPath,
  btnWidth,
  style
}) => {
  const styles = myStyles(btnType, btnWidth);
  return (
    <TouchableOpacity style={[styles.button,  style]} onPress={onPress}>
      {iconPath && <Image source={iconPath} />}
      <MyText cp color={btnType === 'primary' ? 'black' : 'white'} bold>
        {title}
      </MyText>
    </TouchableOpacity>
  );
};

const myStyles = (btnType: string, btnWidth: any = "100%") =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      gap: 10,
      width: btnWidth,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginVertical: 10,
      height: hp('6%'), // Adjust height as needed
      backgroundColor:
        btnType === 'primary' ? "white" : "transparent",
      borderWidth:
        btnType === 'primary' ? 0 : 1,
      borderColor:"white"
    },
  });

export default MyButton;