import React from 'react';
import Slideshow  from "react-native-image-slider";

import { Images } from '../constants/'


export const ImagesSlider = () => (
    <Slideshow images={Images.sliderImages} />
);

export default ImagesSlider;