import { StyleSheet } from 'react-native';

const estiloPublicacao = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F08080',
    alignItems: 'center',
    paddingTop: '1000', 
  },
  public: {
      alignItems: 'center',
      height: 270,
      width: 370,
      borderRadius: 15,
     // backgroundColor: '#FFFFFF',
     // paddingTop: 10, 
  },
  opcoes: {
      width: 400,
      height: 400,
     // borderBottomWidth: 1,
      backgroundColor: '#CD5C5C',
      borderRadius: 30,
      borderBottomWidth: 20,
      borderBottomColor: '#8B0000',
    },
  img: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '9%',
  },
  iconss: {
      paddingLeft: 20,
      paddingTop: 10,
    //  justifyContent: 'center',
      flexDirection: 'row',
  },
  iconss2: {
      paddingLeft: '77%',
  },
  titulo: {
    fontSize: 30,
    fontFamily: 'Comic Sans MS',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  posicao: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  espaco: {
    height: 15,
  },
});

export default estiloPublicacao;