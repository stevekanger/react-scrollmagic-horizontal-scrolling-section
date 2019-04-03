import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

// Note: section under the <Timeline></Timeline>
// but inside the pinContainer must be at least 100%
// of the window height due to the nature that we are
// pinning the pin container to the top so the content underneath
// the scene must be fill the extra space in this example it is the
// normalsection under the <Timeline></Timeline> You can mess
// with the tween percentages image widths to get your desired effect
// in this case there are six image so the slideContainer is set to 200%
// and the tween percentage is set to 50%

const TopSection = () => {
  const [state] = useState({
    images: [
      { id: 1, src: 'https://placehold.it/1920x1080' },
      { id: 2, src: 'https://placehold.it/1920x1080' },
      { id: 3, src: 'https://placehold.it/1920x1080' },
      { id: 4, src: 'https://placehold.it/1920x1080' },
      { id: 5, src: 'https://placehold.it/1920x1080' },
      { id: 6, src: 'https://placehold.it/1920x1080' }
    ]
  });

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={2000} pin>
        {progress => (
          <div className="pin-container" style={styles.pinContainer}>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ x: '0%' }} to={{ x: '-50%' }}>
                <div
                  className="slide-container"
                  style={{
                    ...styles.slideContainer
                  }}
                >
                  {state.images.map(image => (
                    <div className="panel" style={styles.panel} key={image.id}>
                      <img src={image.src} style={styles.img} alt="something" />
                    </div>
                  ))}
                </div>
              </Tween>
            </Timeline>
            <div style={styles.normalSection}>
              <span>Scrolls Vertically</span>
            </div>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

const styles = {
  normalSection: {
    background: '#282c34',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pinContainer: {
    width: '100%',
    margin: 'o auto',
    overflow: 'hidden'
  },
  slideContainer: {
    padding: '40px 0',
    display: 'flex',
    width: '200%'
  },
  panel: {
    flex: 1,
    padding: '10px'
  },
  img: {
    width: '100%'
  }
};

export default TopSection;
