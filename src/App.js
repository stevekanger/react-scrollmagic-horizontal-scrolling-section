import React, { Component } from 'react';
import FullSection from './components/FullSection';
import TopSection from './components/TopSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.normalSection}>
          <span>Scrolls Vertically</span>
        </div>
        <FullSection />
        <div style={styles.normalSection}>
          <span>Scrolls Vertically</span>
        </div>
        <div style={styles.container}>
          <TopSection />
        </div>
        <div style={styles.normalSection}>
          <span>Scrolls Vertically</span>
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
  },
  container: {
    width: '60%',
    margin: '0 auto'
  }
};

export default App;
