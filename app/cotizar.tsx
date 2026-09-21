import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";

export default function Cotizar() {
  const [origen, setOrigen] = useState("CDMX");
  const [destino, setDestino] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const p = parseFloat(peso);
    if (!destino || !peso || isNaN(p)) {
      Alert.alert("Falta info", "Pon destino y peso");
      return;
    }
    let costo = 150 + (p * 35);
    if (destino.toUpperCase().includes("GDL") || destino.toUpperCase().includes("MTY")) costo += 80;
    if (p > 10) costo += 100;
    setResultado(costo);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }} contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", color: "#0A2A5A", marginBottom: 20 }}>Cotizar Envío 📦</Text>
      <Text style={{ fontWeight: "600", marginBottom: 5 }}>Origen</Text>
      <TextInput value={origen} onChangeText={setOrigen} style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginBottom: 15 }} />
      <Text style={{ fontWeight: "600", marginBottom: 5 }}>Destino (Ej: GDL, Puebla, MTY)</Text>
      <TextInput value={destino} onChangeText={setDestino} placeholder="¿A dónde?" style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginBottom: 15 }} />
      <Text style={{ fontWeight: "600", marginBottom: 5 }}>Peso (kg)</Text>
      <TextInput value={peso} onChangeText={setPeso} placeholder="Ej: 2.5" keyboardType="numeric" style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginBottom: 20 }} />
      <TouchableOpacity onPress={calcular} style={{ backgroundColor: "#0A2A5A", padding: 16, borderRadius: 12, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>CALCULAR COSTO REAL</Text>
      </TouchableOpacity>
      {resultado !== null && (
        <View style={{ marginTop: 25, backgroundColor: "#
