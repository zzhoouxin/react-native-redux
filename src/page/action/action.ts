import {createAction} from 'redux-actions';
import AppStore from '../store';

/**
 * 这边作为action层
 * 定义action的地方。引入appStore的请求数据
 */

const increment = createAction('INCREMENT_2', AppStore.fetch)

const decrement = createAction('DECREMENT_2')

const actionCreators = {
    increment,
    decrement,
}

export default actionCreators





