import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
const LOTES = Array.from({length: 12}, (_, i) => ({ 
  id: `LOTE-${String(i+1).padStart(3,'0')}`, 
  estado: i < 4 ? 'En Centro' : 'En Ruta' 
}));
export default function App() {
  return (
    <View style={{flex:1, padding:20, paddingTop:50}}>
      <Text style={{fontSize:22, fontWeight:'bold', textAlign:'center'}}>ECE000 - Centro Express</Text>
      <FlatList data={LOTES} keyExtractor={i=>i.id} renderItem={({item})=>(
        <TouchableOpacity style={{backgroundColor:'#fff', padding:15, marginTop:10, borderRadius:10}} onPress={()=>Alert.alert(item.id)}>
          <Text>{item.id} - {item.estado}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  );
}
