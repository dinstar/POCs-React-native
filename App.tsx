import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, Pressable } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { webClientId } from './src/res/google-auth';

const
  screenWidth = Dimensions.get('window').width;

const App = () => {

  const
    [userInfo, setUserInfo] = React.useState<any>({});

    useEffect(() => {
      GoogleSignin.configure({ webClientId })
    });

    const
      googleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo.type == 'success')
            {
              setUserInfo(userInfo.data);
              console.info('User signed in', JSON.stringify(userInfo));
            }
        } catch (error: any) {
          console.log(error);
          setUserInfo({ error });
        }
      },
      googleLogoff = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setUserInfo({});
          console.info('User signed out');
        }
        catch (error: any) {
          console.error(error);
        }
      };
    
    const
      SigninButton = () =>
        <Pressable onPress={googleLogin}>
            <View style={styles.loginButton}>
              <View style={{marginLeft:5}}>
                  <Text style={{color: '#222222',fontWeight:'400',fontSize:18}}>
                      Login with Google
                  </Text>
              </View>
            </View>
        </Pressable>,
      SignoffButton = () =>
        <Pressable onPress={googleLogoff}>
            <View style={styles.loginButton}>
              <View style={{marginLeft:5}}>
                  <Text style={{color: '#222222',fontWeight:'400',fontSize:18}}>
                      Logoff from Google
                  </Text>
              </View>
            </View>
        </Pressable>,
      UserInfo = () =>
        <>
          <Image source={{ uri: userInfo.user.photo }} style={styles.photo}/>
          <Text>{`${userInfo.user.email}`}</Text>
        </>;

    return <>
      <View style={{margin:20}}>
        { userInfo.idToken == null ? <SigninButton/> : <SignoffButton/> }
      </View>
      <View style={{marginLeft:20}}>
        { userInfo.idToken == null ? <></> : <UserInfo/> }
      </View>
    </>;
}

const styles = StyleSheet.create({
    loginButton: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFFFFF",
        width:screenWidth-50,
        height:48,
        borderRadius:10
    },
    photo: {
      width: 50,
      height: 50,
      marginBottom: 10,
      borderRadius:10,
    }
});

export default App;