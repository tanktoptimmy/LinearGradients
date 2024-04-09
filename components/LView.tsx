import { View, ViewStyle } from "react-native";
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

interface LViewProps {
  children: React.ReactNode,
  style: ViewStyle,
  background: string | LinearGradientProps
}

const LView = ({children, style, background}:LViewProps) => {
  if (typeof background === "string") {
    return (
      <View style={[style, {backgroundColor: background}]}>
        {children}
      </View>
  )}
  return (
    <LinearGradient 
      start={background.start}
      end={background.end}
      colors={background.colors}
      locations={background.locations}
      style={style}>
        {children}
    </LinearGradient>
  )
}

export default LView