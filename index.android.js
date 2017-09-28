import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Sample from './src/containers/Sample';

const JestSample = () => <Sample />

AppRegistry.registerComponent('jest_sample', () => JestSample);
