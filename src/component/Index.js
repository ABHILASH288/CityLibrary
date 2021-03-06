import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import {ActivityIndicator, AsyncStorage} from 'react-native';

class App extends Component {

  
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentWillMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true  })
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      )
    } else {
    return(
      
      <Router>
        <Scene key='root'>
          <Scene
            component={Authentication}
            initial={!this.state.hasToken}
            hideNavBar={true}
            initial={true}
            key='Authentication'
            title='Authentication'
          />
          <Scene
            component={HomePage}
            initial={!this.state.hasToken}
            hideNavBar={true}
            key='HomePage'
            title='Home Page'
          />
        </Scene>
      </Router>
    )
  }
}
}

export default App;
