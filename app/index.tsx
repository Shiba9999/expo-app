import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60} // adjust if you have a header
    >
      <View className="flex-1 justify-center items-center bg-gray-100 p-5">
        <Text style={styles.title}>NativeWind Diagnostic Test</Text>
        
        {/* Test 1: Simple background color */}
        <View className="bg-red-500 p-4 m-2">
          <Text className="text-white">Test 1: Red background</Text>
        </View>
        
        {/* Test 2: Text color */}
        <Text className="text-blue-500 text-xl">Test 2: Blue text</Text>
        
        {/* Test 3: Complex styling */}
        <View className="bg-green-500 p-4 rounded-lg m-2">
          <Text className="text-white font-bold text-center">Test 3: Green rounded box</Text>
        </View>
        
        {/* Test 4: Multiple classes */}
        <Text className="text-purple-600 text-2xl font-bold">Test 4: Purple bold text</Text>
        
        {/* Test 5: Button with NativeWind styles */}
        <Pressable
          onPress={() => alert("🎉 NativeWind styles are working!")}
          className="bg-indigo-500 px-6 py-3 rounded-full my-2"
        >
          <Text className="text-white font-semibold text-center">Test 5: Indigo button</Text>
        </Pressable>
        
        {/* Working StyleSheet for comparison */}
        <View style={styles.workingExample}>
          <Text style={styles.workingText}>
            ✅ This should work (StyleSheet)
          </Text>
        </View>
        
        {/* Status indicator */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            If you see colored boxes and text above, NativeWind is working!
          </Text>
          <Text style={styles.statusText}>
            If everything is black/white, NativeWind needs fixing.
          </Text>
        </View>

        {/* Number Input Field with NativeWind classes */}
        <TextInput
          style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, width: 200, marginTop: 20, backgroundColor: "#fff", fontSize: 16 }}
          placeholder="Enter a number"
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
          placeholderTextColor="#888"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  workingExample: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  workingText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
});