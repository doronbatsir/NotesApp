import React from 'react';
import { Icon } from 'react-native-elements'

class BackIcon extends React.Component {
    render() {
      return  <Icon
      style={{ alignSelf: 'flex-end' }}
      name='arrow-right'
      type='simple-line-icon'
      color='black'
      size={14}
      onPress={onPress=() => this.props.navigation.navigate('CCHome')}
    />
    }
  }