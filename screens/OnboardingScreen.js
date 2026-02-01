import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import OnboardingButtons from "../components/OnboardingButtons";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onboardingRef = useRef(null);

  const pages = [
    {
      backgroundColor: "#f2f6d0",
      image: (
        <LottieView
          style={styles.lottie}
          source={require("../assets/animations/CareSimplified.json")}
          autoPlay
          loop
        />
      ),
      title: "Care, Simplified",
      subtitle:
        "Manage medicines, track health, and stay stress-free — all in one place",
    },
    {
      backgroundColor: "#e1fbd7",
      image: (
        <LottieView
          style={styles.lottie}
          source={require("../assets/animations/TakePill.json")}
          autoPlay
          loop
        />
      ),
      title: "Never Miss a Dose",
      subtitle:
        "Smart reminders and schedules to keep your treatment on track, every day",
    },
    {
      backgroundColor: "#ffc1cc",
      image: (
        <LottieView
          style={styles.lottie}
          source={require("../assets/animations/EatSafe.json")}
          autoPlay
          loop
        />
      ),
      title: "Eat Safe, Stay Healthy",
      subtitle:
        "Get batch-wise food safety alerts and know which products are safe before you consume them",
    },
  ];

  const handleDone = () => {
    // Use navigate instead of replace to avoid dispatching a REPLACE action
    // that may target a route not present in the current navigator
    navigation.replace("Login");
  };

  const handleSkip = () => {
    // Skip onboarding entirely
    handleDone();
  };

  const handleNext = () => {
    // If last page, finish. Otherwise go to next page.
    if (currentIndex === pages.length - 1) {
      handleDone();
      return;
    }

    // Prefer using the component's goNext method so it respects per-page swipe rules
    if (onboardingRef.current?.goNext) {
      onboardingRef.current.goNext();
    } else if (onboardingRef.current?.goToPage) {
      onboardingRef.current.goToPage(currentIndex + 1, true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        ref={onboardingRef}
        bottomBarHighlight={false}
        showSkip={false}
        showNext={false}
        showDone={false}
        pageIndexCallback={(index) => setCurrentIndex(index)}
        pages={pages}
        containerStyles={{ paddingHorizontal: 18 }}
        titleStyles={{ fontSize: 30, fontWeight: "700" }}
        subTitleStyles={{ fontSize: 16, color: "#333" }}
      />

      <OnboardingButtons
        onSkip={handleSkip}
        onNext={handleNext}
        onStart={handleDone}
        isLast={currentIndex === pages.length - 1}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
    alignSelf: "center",
  },
});
