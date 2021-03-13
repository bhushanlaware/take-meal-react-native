import * as React from 'react';
import { Platform } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopAppbar = ({ toggleTheme, navigation, previous, ...rest }) => {
  // console.log(rest)
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : <Appbar.Action icon='menu' color="white" />}

      <Appbar.Content title={rest.scene.route.name} />
      <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
      {!previous ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon={MORE_ICON} color="white" onPress={openMenu} />
          }>
          <Menu.Item onPress={() => { console.log('Option 1 was pressed') }} title="Option 1" />
          <Menu.Item onPress={() => { console.log('Option 2 was pressed') }} title="Option 2" />
          <Menu.Item onPress={() => { console.log('Option 3 was pressed') }} title="Option 3" disabled />
        </Menu>
      ) : null}
    </Appbar.Header>

  );
};

export default TopAppbar;