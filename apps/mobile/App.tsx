import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

import { CourseCard } from "@sales-training/ui";
import type { LearningPath } from "@sales-training/types";
import { formatDateLabel } from "@sales-training/utils";

const demoPath: LearningPath = {
  id: "lp-101",
  title: "Enterprise Discovery Fundamentals",
  description: "Build stronger qualification and discovery conversations.",
  certificateCode: "DISC-101",
  releaseDate: "2026-03-15"
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View style={{ padding: 24, gap: 12 }}>
        <Text style={{ color: "#e2e8f0", fontSize: 24, fontWeight: "700" }}>
          Learner Dashboard
        </Text>
        <Text style={{ color: "#94a3b8" }}>
          Next cohort starts {formatDateLabel(demoPath.releaseDate)}
        </Text>
        <CourseCard title={demoPath.title} subtitle={demoPath.description} />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
