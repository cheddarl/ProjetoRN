import { StyleSheet } from 'react-native';

const estiloPublicacao = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F08080',
    alignItems: 'center',
    paddingTop: '5%', 
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
    height: 22,
  },
  txt: {
    Color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Comic Sans MS',

  },
  tit: {
    fontSize: 50,
    fontFamily: 'Comic Sans MS',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtit: {
    fontSize: 30,
    fontFamily: 'Comic Sans MS',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  viewSubtit: {
    alignSelf: 'flex-start',
    paddingLeft: 17,
    paddingTop: 65,
  },
  tituloPubli: {
    fontSize: 65,
    fontFamily: 'Comic Sans MS',
    alignSelf: 'center',
    color: '#F08080',
    fontWeight: 'bold',
  },
  bordaTit: {
    borderWidth: 2,
    borderStyle: 'dashed',
    backgroundColor: '#FFB6C1',
    borderColor: '#FFB6C1',
    borderRadius: 25,
    bottom: 30,
  },
  borda: { 
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 40,
    height: '94%',
    width: '94%',
    borderColor: '#FFB6C1',
   // backgroundColor: 'transparent',
    alignItems: 'center',
  },
});

export default estiloPublicacao;