import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName:{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
  
    eventDate:{
      color: '#6B6B6B',
      fontSize: 16,
      marginTop: 8,
    },

    input:{
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FDFCFE',
      padding: 16,
      fontSize: 16,
      marginTop: 16,
      marginRight: 12,
    },

    buttonText:{
      color: '#FDFCFE', 
      fontSize: 24,
      fontWeight: 'bold',
    },

    button:{
      backgroundColor: '#A370F7',
      height: 56,
      width: 56,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },

    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
});