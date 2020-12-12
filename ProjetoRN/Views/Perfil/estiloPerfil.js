import { StyleSheet } from 'react-native';

const estiloPrincipal = StyleSheet.create({
  container: {
   // flex: 1, 
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: '110%',
    width: '100%',
  },
  foto: {
    height: 255,
    width: 255,
    borderRadius: '50%',
    backgroundColor: '#CD5C5C',
    paddingTop: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    height: 235,
    width: 235,
    borderRadius: '50%',
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
  texto: {
    height: 100,
    width: '80%',
    backgroundColor: '#CD5C5C',
    borderRadius: 10,
    borderBottomWidth: 10,
    borderBottomColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center,'
  },
  textoDentro: {
    paddingLeft: 15,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
  },
  candy: {
    paddingLeft: '70%',
    paddingTop: 370,
    alignSelf: 'flex-end',
  },
  titulo: {
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
  addS: {
    alignSelf: 'center',
    height: 37,
    width: 37,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
});

export default estiloPrincipal;