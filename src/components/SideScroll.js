import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const Wipes = () => {
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
      <Scene triggerHook="onLeave" duration="500%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <Tween from={{ x: '0%' }} to={{ x: '-' + tweenPercentage + '%' }}>
            <div
              className="slide-container"
              style={{ width: state.sections.length + '00%' }}
            >
              {state.sections.map((section, i) => (
                <div
                  style={{ backgroundColor: section.background }}
                  className={'panel ' + section.name}
                  key={i}
                >
                  <span>Slide Section</span>
                </div>
              ))}
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
};

export default Wipes;
