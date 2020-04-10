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










/*
import { UsersContext } from '../../root/store'
import Spinner from "./Spinner";

export const ImagesSlider = () => {
  const [documents] = useContext(UsersContext);

  return (
    <Spinner inProgress={documents.inProgress}>
      {documents.data.map(d => {
        if(d.name.includes('TESTING')) console.log(d)
      })}
      <SliderBox
        sliderBoxHeight={600}
        images={Images.sliderImages}
        resizeMode={'contain'}
        autoplay
        circleLoop
      />
    </Spinner>
  )
}
*/