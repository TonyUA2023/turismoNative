import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../img/image.png'; // Importar la imagen desde el directorio local

const Login = ({ navigation }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput
          placeholder="Correo"
          placeholderTextColor="#999"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Has olvidado tu contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Text style={styles.socialButtonText}>Registrarse con Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.gmailButton]}>
          <Text style={styles.socialButtonText}>Registrarse con Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('CrearCuenta')}
        >
          <Text style={styles.createAccountButtonText}>¿No tienes una cuenta? Regístrate</Text>
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
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: '#333',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#d1d1d1',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
  },
  facebookButton: {
    backgroundColor: '#8f87f2',
  },
  gmailButton: {
    backgroundColor: '#f28b82',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;
