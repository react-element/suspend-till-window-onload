import React, { Component } from 'react';
import SuspendTillWindowOnload from '@react-element/suspend-till-window-onload';

export default class App extends Component {
  render() {
    return (
      <SuspendTillWindowOnload>
        <img src="//jx3.xoyo.com/zt/2018/05/04/page/assets/images/page3/badao/bg.jpg"/>
      </SuspendTillWindowOnload>
    );
  }
}
