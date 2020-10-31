import * as React from 'react';
import { Text, View, Image, ScrollView, CheckBox } from 'react-native';
import estiloPublicacao from './estiloPublicacao';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Receitas(){
    return (
        <ScrollView>
        <View style={estiloPublicacao.container}>
            <Text style={estiloPublicacao.tit}>Brigadeiro</Text>
            <View style={estiloPublicacao.viewSubtit}>
                <Text style={estiloPublicacao.subtit}>Ingredientes:</Text>
            </View>
            <Text style={estiloPublicacao.txt}>
                  <p>1 lata de leite condensado</p>
                  <p>½ medida de lata de leite</p>
                  <p>1 colher (sopa) de manteiga</p>
                  <p>3 colheres (sopa) de chocolate em pó</p>
                  <p>2 xícaras (chá) de chocolate granulado</p></Text>

            <View style={estiloPublicacao.viewSubtit}>
                <Text style={estiloPublicacao.subtit}>Modo de Preparo:</Text>
                <Text style={estiloPublicacao.txt}>
                    <p>1 - Você vai precisar de 30 forminhas de brigadeiro</p>
                    <p>2 - Com um pincel, unte um prato com um pouco de manteiga. Reserve. </p>
                    <p>3 - Separe as forminhas umas das outras com cuidado e disponha numa travessa pequena. Reserve. </p>
                    <p>4 - Numa panela, misture o leite e o chocolate em pó. Leve ao fogo baixo e mexa bem, até dissolver o chocolate. </p>
                    <p>5 - Junte o leite condensado, a manteiga e, quando ferver, calcule 15 minutos cozinhando, sem parar de mexer, ou até aparecer o fundo da panela. Retire a panela do fogo e transfira o brigadeiro para o prato untado. Deixe esfriar. </p>
                    <p>6 - Numa tigela, coloque o chocolate granulado e deixe ao lado do prato com a massa de brigadeiro.</p> 
                    <p>7 - Espalhe um pouco de manteiga na palma das mãos e, com a ajuda de 1 colher de chá, faça bolinhas de 2,5 cm. Passe as bolinhas pela tigela com o chocolate granulado, envolvendo cada uma muito bem. Em seguida, coloque as bolinhas nas forminhas. Sirva a seguir. </p>
                </Text>
            </View>
        </View>
        </ScrollView>
  );
}
export default Receitas;
