import { useIsFocused } from '@react-navigation/core'
import { StatusBar } from 'react-native';

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
  return isFocused ? <StatusBar animate={true} {...props}/> : null;
}

export default FocusedStatusBar