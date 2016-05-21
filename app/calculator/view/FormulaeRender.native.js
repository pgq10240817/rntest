/**
 * Created by Administrator on 2016/5/21/021.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import ConsoleEventEmitter from '../controller/ConsoleEventEmitter';
import CalculatorDispatcher from  '../module/dispatcher/CalculatorDispatcher';

const styles = {
    formulae: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    text: {
        fontSize: 18
    }
}
function getCalculatorState() {
    return {
        displayFormulae: ConsoleEventEmitter.getDisplayFormulae()
    };
}

var getFormulaStyles = function (operator) {
    const button = {
        basic: {
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            marginLeft: 10
        },
        add: {
            backgroundColor: '#fb96cf'
        },
        substract: {
            backgroundColor: '#fcb064'
        },
        multiply: {
            backgroundColor: '#68cef1'
        },
        divide: {
            backgroundColor: '#cb7dc9'
        }
    };

    return Object.assign(button.basic, button[operator]);
};

class FormulaeComponent extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = getCalculatorState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ConsoleEventEmitter.addChangeListener(this._onChange);
    }

    componentWillUnMount() {
        ConsoleEventEmitter.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getCalculatorState());
    }

    _onFormulaeClicked(formula) {
        CalculatorDispatcher.typeFormula(formula);
    }

    render() {
        return (
            <View style={styles.formulae}>
                {this.state.displayFormulae.map(function (formula) {
                    return (
                        <TouchableHighlight key={formula.id} style={getFormulaStyles(formula.operator)}
                                            onPress={this._onFormulaeClicked.bind(this, formula)}
                                            underlayColor='#cdcdcd'>
                            <Text style={styles.text}>{formula.literal}</Text>
                        </TouchableHighlight>
                    )
                }, this)}
            </View>
        )

    }
}
export default  FormulaeComponent;
module.exports = FormulaeComponent;