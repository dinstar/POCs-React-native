import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Appbar, Avatar, Divider, Menu, PaperProvider } from 'react-native-paper';

const AppbarMenu = () =>
{
  const
    [visible, setVisible] = useState(false);
const
    h = {
      open: () => setVisible(true),
      close: () => setVisible(false),
    };
  const C = {
    Anchor: () =>
      <Appbar.Action icon="dots-vertical" onPress={h.open}/>,
    Items: () => <>
      <Menu.Item onPress={h.close} title="Item 1" />
      <Divider />
      <Menu.Item onPress={h.close} title="Item 2" /></>
    };

  return <>
    <Menu anchor={<C.Anchor/>} visible={visible} onDismiss={h.close}>
      <C.Items/>
    </Menu>
  </>;
};

const WelcomeScreen = _ =>
{
  const C = {
    Title: () =>
      <Appbar.Content style={{paddingLeft:10}} title="Hello world" />,
    Avatar: () =>
      <Avatar.Image size={40} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>,
    Menu: () =>
      <AppbarMenu/>,
  };

  return <Appbar.Header>
    <C.Title/><C.Avatar/><C.Menu/>
  </Appbar.Header>;
};

const App = _ =>
{
  return <PaperProvider>
    <SafeAreaView>
      <WelcomeScreen/>
    </SafeAreaView>
  </PaperProvider>;
}

export default App;
