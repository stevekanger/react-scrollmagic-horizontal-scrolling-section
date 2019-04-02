import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const SlideContainer = () => {
  const [state] = useState({
    sections: [
      { name: 'one', background: '#3883d8' },
      { name: 'two', background: '#38ced7' },
      { name: 'three', background: '#22d659' },
      { name: 'four', background: '#953543' }
    ]
  });

  const tweenPercentage = 100 - 100 / state.sections.length;

  //General Container Styles located in App.css
  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={2000} pin>
        {progress => (
          <div className="pin-container">
            <Timeline totalProgress={progress} paused>
              <Tween from={{ x: '0%' }} to={{ x: '-' + tweenPercentage + '%' }}>
                <div
                  className="slide-container"
                  style={{ width: state.sections.length + '00%' }}
                >
                  {state.sections.map((section, i) => (
                    <div
                      style={{ backgroundColor: section.background }}
                      className="panel"
                      key={i}
                    >
                      <span>Slide Section</span>
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
export default SlideContainer;
