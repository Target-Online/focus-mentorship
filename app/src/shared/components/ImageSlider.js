import { SliderBox } from "react-native-image-slider-box";
import React, { useState, useEffect } from 'react';

import { firebaseStorageApi } from '../../api';
import Spinner from './Spinner';

export const ImagesSlider = () => {
  const [images] = useState([])
  const [inProgress, setInProgress] = useState(true)

  useEffect(() => firebaseStorageApi.getFolderImages("SliderImages", images, setInProgress), [])

  return (
    <Spinner inProgress={inProgress}>
      <SliderBox
        sliderBoxHeight={550}
        images={images}
        resizeMode={'contain'}
        autoplay
        circleLoop
      />
    </Spinner>
  )
}

export default ImagesSlider;