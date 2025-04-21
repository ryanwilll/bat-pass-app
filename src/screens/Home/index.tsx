import { Button } from '@/Components/Button';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Toast } from 'toastify-react-native';

const allCharacters =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?/~`-=' + 'çÇáÁàÀãÃâÂéÉêÊíÍóÓôÔõÕúÚüÜñÑ';

export const Home: React.FC = React.memo((): React.ReactElement => {
  const [pass, setPass] = useState<string>('');

  const handleGenerateRandomPassword = (length: number = 24) => {
    let passGenerated: string = '';
    let passwordLength: number = length;

    for (let i = 0; i < passwordLength; i++) {
      passGenerated += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    setPass(passGenerated);
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(pass);
    Toast.success(`Senha copiada com sucesso para a sua área de transferência!`, 'bottom');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>BatPassa Generator</Text>
        <Image style={styles.image} source={require('@/assets/batLogo.png')} />
        <TextInput style={styles.input} readOnly value={pass} />
        <Button text='Generate' onPress={() => handleGenerateRandomPassword()} />
        <Button text='Copy' onPress={handleCopy} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002E2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    fontSize: 24,
    color: '#E6AF2E',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  image: {
    height: 250,
    aspectRatio: '3/2',
    objectFit: 'contain',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#E6AF2E',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#FFF',
    backgroundColor: '#E6AF2E',
    marginBottom: 16,
  },
});
