import { StyleSheet } from 'react-native';

const estiloPrincipal = StyleSheet.create({
  texto: {
    height: 100,
    width: 350,
    backgroundColor: '#CD5C5C',
    borderRadius: 10,
    borderBottomWidth: 10,
    borderBottomColor: '#8B0000',
    justifyContent: 'center',
   // alignItems: 'center',
    alignSelf: 'center',
  },
  textoDentro: {
    paddingLeft: 15,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
  },
});

export default estiloPrincipal;