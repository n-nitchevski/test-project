import React, {useEffect, useState} from 'react';
import { flash } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

export default function Likes({count}) {

    const [styles, setStyles] = useState({
        flash: {}
    });

    const [prevCount, setPrevCount] = useState(0)

    if (count !== prevCount)
    {
        setStyles({flash: {}})
        setPrevCount(count)
    }
    useEffect(() => {
        console.log(Object.keys(styles.flash).length)
        if (Object.keys(styles.flash).length <= 0)
        {
            console.log(styles)
            setStyles({
                flash: {
                    animation: '',
                    animationName: Radium.keyframes(flash, 'flash'),
                    animationDuration: '1s'
                }
            })
        }
    }, [styles]);

  return (
      <StyleRoot>
        <div style={styles.flash}>Likes: {count}</div>
      </StyleRoot>
  )
}
