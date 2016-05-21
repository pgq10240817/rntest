/**
 * Created by Administrator on 2016/5/20/020.
 */
"use strict;"
import assign from 'object-assign';
const AppDispatcher = require('../module/dispatcher/AppDispatcher');

const _callbacks = [];
let _numberStringArray = [''];
let _operateArray = [];

let consoleMsg = '';


var BaseConsoleController = function () {
};
const comput = ()=> {
    let total = Number.parseFloat(_numberStringArray.pop());
    _operateArray.forEach((opertate)=> {
        let nowNumber = Number.parseFloat(_numberStringArray.pop());
        if (opertate === '+') {
            total = total + nowNumber;
        } else if (opertate === '-') {
            total = total - nowNumber;
        } else if (opertate === 'x') {
            total = total * nowNumber;
        } else if (opertate === '÷') {
            total = total / nowNumber;
        }
    })
    _numberStringArray = [''];
    _operateArray = [];
    return String(total);

}
BaseConsoleController.prototype = assign({}, BaseConsoleController.prototype, {

    addChangeListener: (callback)=> {
        _callbacks.push(callback);
        console.log('addChangeListener');
        if (_callbacks.length == 1) {
            AppDispatcher.register((payload)=> {
                let val = payload.keyValue;
                let symbol = payload.keyType;
                let type = typeof(symbol);
                if (type == 'undefined') {
                    return;
                }
                if (isNaN(symbol) && symbol !== '.') {
                    if (symbol === '=') {
                        consoleMsg = comput();
                    } else if (symbol === '<<') {
                        console.log('::::' + consoleMsg);
                        consoleMsg = consoleMsg.substring(0, consoleMsg.length - 1);
                        _numberStringArray = [''];
                        _operateArray = [];
                    } else {
                        _numberStringArray.push('');
                        _operateArray.push(symbol);
                        consoleMsg = consoleMsg + symbol;
                    }
                } else {
                    _numberStringArray.push(_numberStringArray.pop() + symbol);
                    consoleMsg = consoleMsg + symbol;
                }
                console.log('received:' + symbol + ",msg:" + consoleMsg);
                ConsoleController._dispatchChaned();
            })
        }
    },


    getConsoleMessage: ()=> {
        return consoleMsg;
    },


    removeChangeListener: (callback)=> {

    },

    _dispatchChaned: ()=> {
        console.log('_callbacks:' + _callbacks.length);
        _callbacks.forEach((callback)=> {
            callback();
        });
    },
})
;
var ConsoleController = assign({}, BaseConsoleController.prototype, {});


module.exports = ConsoleController;