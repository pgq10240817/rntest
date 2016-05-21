/**
 * Created by Administrator on 2016/5/20/020.
 */
'use strict';

const AppDispatcher = require('./AppDispatcher');
const CalculatorConstants = require('./CalculatorConstants');

var CalculatorDispatcher = {

    typeKey: function (keyType, keyValue) {
        AppDispatcher.dispatch({
            type: CalculatorConstants.KEY_TYPED,
            keyType: keyType,
            keyValue: keyValue
        });
    },

    typeFormula: function (formula) {
        AppDispatcher.dispatch({
            type: CalculatorConstants.FORMULA_TYPED,
            formula: formula
        });
    }

};

export default CalculatorDispatcher;
module.exports = CalculatorDispatcher;