'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SchemaForm = require('../SchemaForm');

var _SchemaForm2 = _interopRequireDefault(_SchemaForm);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

function onModelChange(key, val, type) {
    var newModel = {};
    utils.selectOrSet(key, newModel, val, type);
}

var cfg = {
    schema: {
        'type': 'object',
        'title': 'Types',
        'properties': {
            'date': {
                'title': 'Birthday',
                'type': 'object'
            }
        }
    },
    form: [{
        'key': 'date',
        'type': 'date'
    }],
    model: {
        'date': '1947-01-8'
    }
};

describe('Date capture main test', function () {

    it('Bowie"s birthday :', function () {
        var result = (0, _enzyme.render)(_react2.default.createElement(_SchemaForm2.default, {
            form: cfg.form,
            schema: cfg.schema,
            model: cfg.model,
            onModelChange: onModelChange
        }));

        expect(result.find('input')[0].attribs.value).toEqual('1947-01-8');
    });
});
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(onModelChange, 'onModelChange', 'src/__tests__/DateCapture-test.js');

    __REACT_HOT_LOADER__.register(cfg, 'cfg', 'src/__tests__/DateCapture-test.js');
}();

;