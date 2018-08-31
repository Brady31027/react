'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running!');

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.increase = _this.increase.bind(_this);
        _this.decrease = _this.decrease.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // fetching data
            try {
                var c = localStorage.getItem('count'); // json obj
                var s = JSON.parse(c); // string
                var count = parseInt(s, 10);

                if (!isNaN(count)) {
                    this.setState(function () {
                        return { count: count };
                    });
                }
            } catch (e) {
                // do nothing now
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // saving data
            try {
                if (prevState.count !== this.state.count) {
                    console.log('update');
                    localStorage.setItem('count', JSON.stringify(this.state.count));
                }
            } catch (e) {
                // do nothing now
            }
        }
    }, {
        key: 'increase',
        value: function increase() {
            var _this2 = this;

            // Following method won't trigger auto-updates
            // this.state.count += 1;

            // Following method will trigger auto-updates
            this.setState(function () {
                return {
                    count: _this2.state.count + 1
                };
            });

            console.log('inc to ' + this.state.count);
        }
    }, {
        key: 'decrease',
        value: function decrease() {
            var _this3 = this;

            this.setState(function () {
                return { count: _this3.state.count - 1 };
            });
            console.log('dec to ' + this.state.count);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function () {
                return { count: 0 };
            });
            console.log('reset to ' + this.state.count);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.increase },
                    'Inc'
                ),
                React.createElement(
                    'button',
                    { onClick: this.decrease },
                    'Dec'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'Res'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

/* Counter.defaultProps = {
    count: 0,
} */

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
