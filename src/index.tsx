import './index.scss';
import {rerenderTree} from './state/rerenderTree';
import {store} from './state/store';

store.subscribe(rerenderTree);
rerenderTree();