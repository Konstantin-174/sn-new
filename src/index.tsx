import React from 'react';
import './index.scss';
import {rerenderTree} from './state/rerenderTree';
import {state} from './state/state';

rerenderTree(state);