/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

/* this here imports the necessary dependencies */
import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@constants/Colors';
import { useColorScheme } from './useColorScheme';

// This defines the type ThemeProps
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

/* This defines the TextProps type to the ThemeProps and DefaultText's props */
export type TextProps = ThemeProps & DefaultText['props'];

/* This defines the ViewProps type to the ThemeProps and DefaultView's  */
export type ViewProps = ThemeProps & DefaultView['props'];

/* This export function defines the useThemeColor function */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

/* This defines the Text component */
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

/* This here defines the View component with the prop object viewprops passes a
parameter I believe */
export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
