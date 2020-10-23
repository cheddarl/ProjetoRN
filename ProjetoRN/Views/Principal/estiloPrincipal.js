import { StyleSheet } from 'react-native';

const estiloPrincipal = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F08080',
    alignItems: 'center',
 //   justifyContent: 'center',
    paddingTop: 10,
    height: '100%',
    width: '100%',
  },
  imagem: {
    width: 400,
    height: 400,
    paddingTop: '50%',
    alignSelf: 'center',
  },
  menu: {
    alignSelf: 'baseline',
    paddingHorizontal: 15,
  },
  subTitulo: {
    fontFamily: 'Comic Sans MS',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default estiloPrincipal;