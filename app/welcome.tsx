import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GradientText from "../src/components/GradientText";
import useCustomFonts from "../src/hooks/useCustomFonts";
import { BlurView } from "expo-blur";
import LoadingOverlay from "../src/components/LoadingOverlay";
import { useState } from "react";

const Welcome = () => {
  const fontsLoaded = useCustomFonts();
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"welcome" | "start">("welcome");

  if (!fontsLoaded) {
    return <Text>Đang tải font...</Text>;
  }

  const handleLoginGoogle = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Đăng nhập thành công!");
    }, 3000);
  };

  const handlePlay = () => {
    setMode((prevMode) => (prevMode === "welcome" ? "start" : "welcome"));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/loginbg.jpg")}
        style={styles.container}
        resizeMode="cover"
      >
        {/* Loading */}
        {loading && <LoadingOverlay />}

        <View style={styles.leftContent}>
          <Text style={styles.versionText}>Version: 0.0.1</Text>
        </View>
        
        <View style={styles.centerContent}>
          <GradientText text="Memora" />
        </View>

        <View style={styles.bottomContent}>
          {mode === "welcome" ? (
            <View style={styles.buttonContainer}>
              <Pressable onPress={handleLoginGoogle}>
                <BlurView intensity={10} tint="dark" style={styles.button}>
                  <Image
                    source={require("../assets/images/google-logo.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}>Đăng nhập bằng Google</Text>
                </BlurView>
              </Pressable>

              <Pressable onPress={handlePlay}>
                <BlurView intensity={10} tint="dark" style={styles.button}>
                  <Text style={styles.buttonText}>Chơi ngay</Text>
                </BlurView>
              </Pressable>
            </View>
          ) : (
            <View style={styles.startContainer}>
              <Pressable onPress={handlePlay}>
                <Text style={styles.startText}>Chạm để bắt đầu.</Text>
              </Pressable>
            </View>
          )}

          <Text style={styles.copyText}>
            © 2025. Memora Corp. All Rights Reserved.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftContent: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  versionText: {
    fontFamily: "Baloo2",
    color: "#504E4E",
  },
  bottomContent: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 260,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#fff",
    shadowColor: "#57AFE5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 50,
    overflow: "hidden",
  },
  buttonText: {
    fontFamily: "Baloo2_semiBold",
    fontSize: 18,
    color: "#000",
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  startContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 15,
  },
  startText: {
    fontFamily: "Baloo2_semiBold",
    fontSize: 24,
    color: "#00000060",
    textShadowColor: "#fff",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    opacity: 0.7,
  },
  copyText: {
    fontFamily: "Baloo2",
    color: "#252525",
  },
});

export default Welcome;
