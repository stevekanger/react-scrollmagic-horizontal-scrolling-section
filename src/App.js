import React, { Component } from 'react';
import SlideContainer from './components/SlideContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.normalSection}>
          <span>Normal Section</span>
        </div>
        <SlideContainer />
        <div style={styles.normalSection}>
          <span>Normal Section</span>
        </div>
      </div>
    );
  }
}

const styles = {
  normalSection: {
    background: '#282c34',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default App;
