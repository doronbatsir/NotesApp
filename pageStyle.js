import  { StyleSheet } from 'react-native'

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
    
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start",
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        width: 240,
        margin: 1,
        textAlignVertical: 'top',
        marginBottom: 15,
        borderRadius: 10
      },
      modalView: {
        //marginBottom: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    
      },
      saveButton: {
        //backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#90dea2",
        margin: 5
      },
      disabled: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#90dea2",
        margin: 5,
        opacity: 0.5
      },
      openButtonAdd: {
        backgroundColor: "#828787",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 40
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
      },
    
      modalText: {
        marginBottom: 5,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
      },
      placeHolder: {
        //flex: 1,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        height: 100
      },
      image: {
        flex: 1,
        //width: 300
      },
      uploadButton:{
        flex: 0.1,
        marginTop: 30,
        marginRight: 30
      },
      disabled:{
        flex: 0.1,
        marginTop: 30,
        marginRight: 30,
        opacity:0.3
      },
      backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40
        
    },
    Header: {
        flex: 2
    },
    Content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop:30
    },
    textBig: {
        fontSize: 35,
        color: 'red',
        margin: 10
    },
    textMedium: {
        fontSize: 30,
        color: 'blue'
    },
    textSmall: {
        fontSize: 17,
        color: 'rgb(100,150,250)',
        margin:5
    },
    Button: {
        backgroundColor: 'lightgray',
        padding: 20,
        borderRadius: 15
    },
    TxtInp: {
        height: 50,
        width: 200,
        borderColor: 'gray',
        borderWidth: 2,
        margin: 15,
        fontSize:30,
        padding:5,
        borderRadius:5
    },
    Err:{
        color:'red',
        margin:15,
        
    },
    lblText:{
        fontSize:30
    }
});