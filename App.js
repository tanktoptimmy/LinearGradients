import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import LView from "./components/LView"

export const BadgesGameRibbonBackgroundGradient = {"start":{"x":0.5,"y":1},"end":{"x":0.5,"y":0},"colors":["#17171700","#18181a33","#17171700","#17171700","#18181a33","#17171700"],"locations":[0,0.15,0.3,0.7,0.8,1]};
export const ProgressBarBudgetStatsProgressColour = {"start":{"x":0.5,"y":1},"end":{"x":0.5,"y":0},"colors":["#3EC141","#E62931"],"locations":[0,1]};
export const TabsGroupRegularBackgroundColour = {"start":{"x":0,"y":0.5},"end":{"x":1,"y":0.5},"colors":["#18181A","red"],"locations":[0,1]};
export const BrandTimeformBackgroundDefault = {"start":{"x":0.85,"y":0.85},"end":{"x":0.15,"y":0.15},"colors":["#405369","#19191C"],"locations":[0,1]};


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.flex}>
        <LView style={[styles.block, styles.border]} background={"#ff0"}>
          <Text>this is the yellow one</Text>
        </LView>
        <LView style={styles.block} background={BadgesGameRibbonBackgroundGradient}>
          <Text>this is a linear</Text>
        </LView>
        <LView style={styles.block} background={ProgressBarBudgetStatsProgressColour}>
          <Text>this is a linear</Text>
        </LView>
      </View>
      <View style={styles.flex}>
        <LView style={styles.block} background={TabsGroupRegularBackgroundColour}>
          <Text>this is a linear</Text>
        </LView>
        <LView style={styles.block} background={BrandTimeformBackgroundDefault}>
          <Text>this is a linear</Text>
        </LView>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: "row",
  },
  block: {
    height: 100,
    width: 100,
    display: "flex",
    justifyContent: "center"
  },
  border: {
    borderWidth: 2,
    borderRadius: 20,
  }
});
