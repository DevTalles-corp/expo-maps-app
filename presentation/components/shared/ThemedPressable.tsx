import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
} from 'react-native';

interface Props extends PressableProps {
  children: string;
}

const ThemedPressable = ({ children, ...rest }: Props) => {
  return (
    <Pressable style={styles.btnPrimary} {...rest}>
      <Text style={{ color: 'white' }}>{children}</Text>
    </Pressable>
  );
};
export default ThemedPressable;

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
});
