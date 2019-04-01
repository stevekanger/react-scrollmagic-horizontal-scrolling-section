import React, { Component } from 'react';
import SideScroll from './components/SideScroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.normalSection}>
          <span>Normal Section</span>
        </div>
        <SideScroll />
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
