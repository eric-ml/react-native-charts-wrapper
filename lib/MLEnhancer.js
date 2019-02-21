import React, { Component } from 'react';
import { UIManager, findNodeHandle } from 'react-native';


export default function MLEnhancer(Chart) {
    return class MLExtended extends Chart {
        resetYAxisMinimum(axisDependency = 'left') {
            UIManager.dispatchViewManagerCommand(
                findNodeHandle(this.getNativeComponentRef()),
                UIManager[this.getNativeComponentName()].Commands.resetYAxisMinimum,
                [axisDependency]
            );
        }

        setYAxisMinimum(axisDependency = 'left', minValue) {
            UIManager.dispatchViewManagerCommand(
                findNodeHandle(this.getNativeComponentRef()),
                UIManager[this.getNativeComponentName()].Commands.setYAxisMinimum,
                [axisDependency, minValue]
            );
        }
    }
}