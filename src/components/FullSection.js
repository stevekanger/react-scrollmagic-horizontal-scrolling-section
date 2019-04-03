import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const SlideContainer = () => {
  const [state] = useState({
    sections: [
      { id: 1, imgSrc: 'https://placehold.it/1920x1080' },
      { id: 2, imgSrc: 'https://placehold.it/1920x1080' },
      { id: 3, imgSrc: 'https://placehold.it/1920x1080' },
      { id: 4, imgSrc: 'https://placehold.it/1920x1080' }
    ]
  });

  const tweenPercentage = 100 - 100 / state.sections.length;

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={2000} pin>
        {progress => (
          <div className="pin-container" style={styles.pinContainer}>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ x: '0%' }} to={{ x: '-' + tweenPercentage + '%' }}>
                <div
                  className="slide-container"
                  style={{
                    ...styles.slideContainer,
                    width: state.sections.length + '00%'
                  }}
                >
                  {state.sections.map(section => (
                    <div
                      className="panel"
                      key={section.id}
                      style={styles.panel}
                    >
                      <div
                        style={{
                          background: 'url(' + section.imgSrc + ')',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Tween>
            </Timeline>
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
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
  },
  slideContainer: {
    height: '100%',
    display: 'flex'
  },
  panel: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default SlideContainer;
