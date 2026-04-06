import { Text, View } from "react-native";

type CourseCardProps = {
  title: string;
  subtitle: string;
};

export function CourseCard({ title, subtitle }: CourseCardProps) {
  return (
    <View style={{ borderWidth: 1, borderColor: "#1e293b", borderRadius: 12, padding: 16, backgroundColor: "#0b1120" }}>
      <Text style={{ marginBottom: 6, color: "#f8fafc", fontSize: 18, fontWeight: "600" }}>{title}</Text>
      <Text style={{ color: "#cbd5e1" }}>{subtitle}</Text>
    </View>
  );
}
