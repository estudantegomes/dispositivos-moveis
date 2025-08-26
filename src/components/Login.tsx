import React, {useState} from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
    console.log("Username:", username);
    console.log("Password:", password);

    
    if (username == '' || password == '') {
      Alert.alert("Erro", "Por favor, preencha ambos os campos.");
    } else {
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    }
  }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername} 
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Login" onPress={handleLogin} />
        </View>

         
                  
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
