import React from "react";
import { Text, StyleSheet, TextStyle, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import useCustomFonts from "../hooks/useCustomFonts";

type GradientTextProps = {
  text: string;
  style?: TextStyle;
};

const GradientText: React.FC<GradientTextProps> = ({ text, style }) => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <Text>Loading font...</Text>;
  }

  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={
        <View style={styles.center}>
          <Text style={[styles.text, style]}>{text}</Text>
        </View>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#57AFE5", "#EC4F9D", "#AC6CFF"]}
        style={styles.gradient}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  maskedView: {
    height: 120,
  },
  gradient: {
    width: 300,
    height: 120,
  },
  text: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Aclonica",
  } as TextStyle,
});

export default GradientText;
