/**
 * Created by Administrator on 2016/5/23/023.
 */
import { Promise } from 'es6-promise';

const _listeners = [];
let _promises = [];
var Dispatcher = function () {
};
Dispatcher.prototype = Object.assign({}, Dispatcher.prototype, {
    addListener: (listener)=> {
        _listeners.push(listener);
    },
    removeListener: (listener)=> {
        _listeners.map((tmp, index, array)=> {
            if (tmp === listener) {
                array.splice(index);
            }
        });
    },

    dispatch: (payload)=> {
        console.log('dispatch,' + _listeners.length);
        let resolves = [];
        let rejects = [];
        _promises = _listeners.map((tmp, index, array)=> {
            return new Promise((resolve, reject)=> {
                resolves[index] = resolve;
                rejects[index] = reject;
            });
        });

        _listeners.forEach((listener, index)=> {
            // Callback can return an obj, to resolve, or a promise, to chain.
            // See waitFor() for why this might be useful.
            Promise.resolve(listener(payload)).then(function () {
                resolves[index](payload);
            }, function () {
                rejects[index](new Error('Dispatcher callback unsuccessful'));
            });
        });
        _promises = [];
    },
})

const AppDispatcher = Object.assign({}, Dispatcher.prototype, {
    handleViewAction: ((action)=> {
        console.log('AppDispatcher dispatch:' + action.actionValue);
        AppDispatcher.dispatch(action);
    }),

})
export default AppDispatcher;
module.exports = AppDispatcher;
