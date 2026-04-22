import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Configuracoes: React.FC = () => {
  const [notificacoes, setNotificacoes] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.opcao}>
        <Text>Ativar Notificações</Text>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  opcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Configuracoes;