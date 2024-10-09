import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../img/image.png'; // Importar la imagen de fondo

const CrearCuenta = ({ navigation }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Crear Cuenta</Text>

        <TextInput
          placeholder="Nombre Completo"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Correo"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginLinkText}>¿Ya tienes una cuenta? Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#d1d1d1',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default CrearCuenta;
