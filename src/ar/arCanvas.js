/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { Canvas } from '@react-three/fiber';

import { AR } from './ar';

const ARCanvas = ({ arEnabled = true, tracking = true, children, patternRatio = 0.5, detectionMode = 'mono_and_matrix', cameraParametersUrl = 'data/camera_para.dat', matrixCodeType = '3x3', sourceType = 'webcam', onCameraStreamReady, onCameraStreamError, sourceWidth = 640, sourceHeight = 480, displayWidth = 640, displayHeight = 480, ...props }) => (
  <Canvas camera={arEnabled ? { position: [0, 0, 0] } : props.camera} {...props}>
    {arEnabled ? (
      <AR tracking={tracking} patternRatio={patternRatio} matrixCodeType={matrixCodeType} detectionMode={detectionMode} sourceType={sourceType} sourceWidth={sourceWidth} sourceHeight={sourceHeight} displayWidth={displayWidth} displayHeight={displayHeight} cameraParametersUrl={cameraParametersUrl} onCameraStreamReady={onCameraStreamReady} onCameraStreamError={onCameraStreamError}>
        {children}
      </AR>
    ) : (
      children
    )}
  </Canvas>
);

export default ARCanvas;
