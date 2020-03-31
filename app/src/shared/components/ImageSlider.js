import { SliderBox } from "react-native-image-slider-box";
import React from 'react';

import { Images } from '../constants/'

export const ImagesSlider = () => (
  <SliderBox
    sliderBoxHeight={600}
    images={Images.sliderImages}
    resizeMode={'contain'}
    autoplay
    circleLoop
  />
);

export default ImagesSlider;