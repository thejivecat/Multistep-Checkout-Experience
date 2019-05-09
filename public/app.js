"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Homepage(_ref) {
	var incCount = _ref.incCount;

	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{ onClick: function onClick() {
					return incCount();
				} },
			"Checkout"
		)
	);
}

function Info(_ref2) {
	var handleChange = _ref2.handleChange,
	    incCount = _ref2.incCount;

	return React.createElement(
		"div",
		null,
		React.createElement(
			"form",
			null,
			React.createElement(
				"label",
				null,
				"Name",
				React.createElement("input", { name: "name", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"Email",
				React.createElement("input", { name: "email", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"Password",
				React.createElement("input", { name: "password", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			)
		),
		" ",
		React.createElement("br", null),
		React.createElement(
			"button",
			{ type: "button", name: "Next", onClick: function onClick() {
					return incCount();
				} },
			"Next"
		)
	);
}

function Shipping(_ref3) {
	var handleChange = _ref3.handleChange,
	    incCount = _ref3.incCount;

	return React.createElement(
		"div",
		null,
		React.createElement(
			"form",
			null,
			React.createElement(
				"label",
				null,
				"Line 1",
				React.createElement("input", { name: "line1", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"Line 2",
				React.createElement("input", { name: "line2", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"City",
				React.createElement("input", { name: "city", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"State",
				React.createElement("input", { name: "state", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"ZIP",
				React.createElement("input", { name: "zip", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"Phone Number",
				React.createElement("input", { name: "phone", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"button",
				{ type: "button", name: "Next", onClick: function onClick() {
						return incCount();
					} },
				"Next"
			)
		)
	);
}

function Credit(_ref4) {
	var handleChange = _ref4.handleChange,
	    incCount = _ref4.incCount;

	return React.createElement(
		"div",
		null,
		React.createElement(
			"form",
			null,
			React.createElement(
				"label",
				null,
				"Number",
				React.createElement("input", { name: "credit", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"Expiration",
				React.createElement("input", { name: "expiration", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"CVV",
				React.createElement("input", { name: "CVV", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"label",
				null,
				"Billing ZIP",
				React.createElement("input", { name: "billingzip", onChange: function onChange(e) {
						return handleChange(e.target.name, e.target.value);
					} })
			),
			" ",
			React.createElement("br", null),
			React.createElement(
				"button",
				{ type: "button", name: "Next", onClick: function onClick() {
						return incCount();
					} },
				"Next"
			)
		)
	);
}

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			stateCounter: 0
		};
		_this.incCount = _this.incCount.bind(_this);
		_this.setHome = _this.setHome.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: "handleChange",
		value: function handleChange(prop, value) {
			this.setState(_defineProperty({}, prop, event.target.value));
		}
	}, {
		key: "incCount",
		value: function incCount() {
			this.setState({
				stateCounter: this.state.stateCounter + 1
			});
		}
	}, {
		key: "setHome",
		value: function setHome() {
			this.setState({
				stateCounter: 0
			});
		}
	}, {
		key: "stringifyData",
		value: function stringifyData() {
			var dataStr = "" + this.state.name + '\xa0\xa0\xa0\xa0' + ("" + this.state.email) + '\xa0\xa0\xa0\xa0' + ("" + this.state.password) + '\xa0\xa0\xa0\xa0' + ("" + this.state.line1) + '\xa0\xa0\xa0\xa0' + ("" + this.state.line2) + '\xa0\xa0\xa0\xa0' + ("" + this.state.city) + '\xa0\xa0\xa0\xa0' + ("" + this.state.state) + '\xa0\xa0\xa0\xa0' + ("" + this.state.zip) + '\xa0\xa0\xa0\xa0' + ("" + this.state.phone) + '\xa0\xa0\xa0\xa0' + ("" + this.state.credit) + '\xa0\xa0\xa0\xa0' + ("" + this.state.expiration) + '\xa0\xa0\xa0\xa0' + ("" + this.state.cvv) + '\xa0\xa0\xa0\xa0' + ("" + this.state.billingzip);
			return dataStr;
		}
		// 	F1 collects name, email, and password for account creation.
		// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
		// F3 collects credit card #, expiry date, CVV, and billing zip code.

	}, {
		key: "render",
		value: function render() {
			if (this.state.stateCounter === 4) {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h1",
						null,
						"User Information"
					),
					this.state.name,
					React.createElement("br", null),
					this.state.email,
					React.createElement("br", null),
					this.state.password,
					React.createElement("br", null),
					React.createElement(
						"h1",
						null,
						"Shipping Information"
					),
					this.state.line1,
					React.createElement("br", null),
					this.state.line2,
					React.createElement("br", null),
					this.state.city,
					React.createElement("br", null),
					this.state.state,
					React.createElement("br", null),
					this.state.zip,
					React.createElement("br", null),
					this.state.phone,
					React.createElement("br", null),
					React.createElement(
						"h1",
						null,
						"Credit Card Information"
					),
					this.state.credit,
					React.createElement("br", null),
					this.state.expiration,
					React.createElement("br", null),
					this.state.cvv,
					" ",
					React.createElement("br", null),
					this.state.billingzip
				);
			} else {
				return React.createElement(
					"div",
					null,
					this.state.stateCounter === 0 ? React.createElement(Homepage, { incCount: this.incCount }) : undefined,
					this.state.stateCounter === 1 ? React.createElement(Info, { incCount: this.incCount, handleChange: this.handleChange }) : undefined,
					this.state.stateCounter === 2 ? React.createElement(Shipping, { incCount: this.incCount, handleChange: this.handleChange }) : undefined,
					this.state.stateCounter === 3 ? React.createElement(Credit, { incCount: this.incCount, handleChange: this.handleChange }) : undefined,
					this.state.stateCounter === 5 ? React.createElement(Homepage, { setHome: this.setHome }) : undefined
				);
			}
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiaW5jQ291bnQiLCJJbmZvIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIlNoaXBwaW5nIiwiQ3JlZGl0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0YXRlQ291bnRlciIsImJpbmQiLCJzZXRIb21lIiwicHJvcCIsInNldFN0YXRlIiwiZXZlbnQiLCJkYXRhU3RyIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwicGhvbmUiLCJjcmVkaXQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ3ppcCIsInVuZGVmaW5lZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxRQUFULE9BQThCO0FBQUEsS0FBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUM3QixRQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxLQUFRLFNBQVM7QUFBQSxZQUFNQSxVQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBREQsRUFERDtBQUtBOztBQUVELFNBQVNDLElBQVQsUUFBd0M7QUFBQSxLQUF6QkMsWUFBeUIsU0FBekJBLFlBQXlCO0FBQUEsS0FBWEYsUUFBVyxTQUFYQSxRQUFXOztBQUN2QyxRQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsa0JBQUNHLENBQUQ7QUFBQSxhQUFPRCxhQUFhQyxFQUFFQyxNQUFGLENBQVNDLElBQXRCLEVBQTRCRixFQUFFQyxNQUFGLENBQVNFLEtBQXJDLENBQVA7QUFBQSxNQUE3QjtBQURELElBREQ7QUFBQTtBQUdVLGtDQUhWO0FBSUM7QUFBQTtBQUFBO0FBQUE7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LFdBQ0M7QUFBQTtBQUFBO0FBQ0UsVUFBS2xCLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixDQUE1QixHQUFnQyxvQkFBQyxRQUFELElBQVUsVUFBVSxLQUFLWixRQUF6QixHQUFoQyxHQUF1RThCLFNBRHpFO0FBRUUsVUFBS25CLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixDQUE1QixHQUFnQyxvQkFBQyxJQUFELElBQU0sVUFBVSxLQUFLWixRQUFyQixFQUErQixjQUFjLEtBQUtFLFlBQWxELEdBQWhDLEdBQW9HNEIsU0FGdEc7QUFHRSxVQUFLbkIsS0FBTCxDQUFXQyxZQUFYLEtBQTRCLENBQTVCLEdBQWdDLG9CQUFDLFFBQUQsSUFBVSxVQUFVLEtBQUtaLFFBQXpCLEVBQW1DLGNBQWMsS0FBS0UsWUFBdEQsR0FBaEMsR0FBd0c0QixTQUgxRztBQUlFLFVBQUtuQixLQUFMLENBQVdDLFlBQVgsS0FBNEIsQ0FBNUIsR0FBZ0Msb0JBQUMsTUFBRCxJQUFRLFVBQVUsS0FBS1osUUFBdkIsRUFBaUMsY0FBYyxLQUFLRSxZQUFwRCxHQUFoQyxHQUFzRzRCLFNBSnhHO0FBS0UsVUFBS25CLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixDQUE1QixHQUFnQyxvQkFBQyxRQUFELElBQVUsU0FBUyxLQUFLRSxPQUF4QixHQUFoQyxHQUFxRWdCO0FBTHZFLEtBREQ7QUFVQTtBQUVEOzs7O0VBeEVnQkMsTUFBTUMsUzs7QUEyRXhCQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBIb21lcGFnZSh7aW5jQ291bnR9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gaW5jQ291bnQoKX0+Q2hlY2tvdXQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5mdW5jdGlvbiBJbmZvKHtoYW5kbGVDaGFuZ2UsIGluY0NvdW50fSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PGxhYmVsPk5hbWVcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPkVtYWlsIFxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPlBhc3N3b3JkXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9mb3JtPiA8YnIvPlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJOZXh0XCIgb25DbGljaz17KCkgPT4gaW5jQ291bnQoKX0+TmV4dDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIFNoaXBwaW5nKHtoYW5kbGVDaGFuZ2UsIGluY0NvdW50fSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PGxhYmVsPkxpbmUgMVxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwibGluZTFcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPkxpbmUgMlxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwibGluZTJcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPkNpdHlcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPlN0YXRlXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+WklQXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJ6aXBcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPlBob25lIE51bWJlclxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwicGhvbmVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIk5leHRcIiBvbkNsaWNrPXsoKSA9PiBpbmNDb3VudCgpfT5OZXh0PC9idXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZnVuY3Rpb24gQ3JlZGl0KHtoYW5kbGVDaGFuZ2UsIGluY0NvdW50fSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PGxhYmVsPk51bWJlclxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiY3JlZGl0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdDwvbGFiZWw+IDxici8+XG5cdFx0XHRcdDxsYWJlbD5FeHBpcmF0aW9uXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJleHBpcmF0aW9uXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdDwvbGFiZWw+IDxici8+XG5cdFx0XHRcdDxsYWJlbD5DVlYgXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJDVlZcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPkJpbGxpbmcgWklQXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJiaWxsaW5nemlwXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdDwvbGFiZWw+IDxici8+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJOZXh0XCIgb25DbGljaz17KCkgPT4gaW5jQ291bnQoKX0+TmV4dDwvYnV0dG9uPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzdGF0ZUNvdW50ZXI6IDAsXG5cdFx0fTtcblx0XHR0aGlzLmluY0NvdW50ID0gdGhpcy5pbmNDb3VudC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2V0SG9tZSA9IHRoaXMuc2V0SG9tZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXHRoYW5kbGVDaGFuZ2UocHJvcCwgdmFsdWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtwcm9wXTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdGluY0NvdW50ICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN0YXRlQ291bnRlcjogdGhpcy5zdGF0ZS5zdGF0ZUNvdW50ZXIrMVxuXHRcdH0pXG5cdH1cblxuXHRzZXRIb21lICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN0YXRlQ291bnRlcjogMFxuXHRcdH0pXG5cdH1cblx0c3RyaW5naWZ5RGF0YSgpIHtcblx0XHR2YXIgZGF0YVN0ciA9IGAke3RoaXMuc3RhdGUubmFtZX1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUuZW1haWx9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLnBhc3N3b3JkfWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5saW5lMX1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUubGluZTJ9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLmNpdHl9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLnN0YXRlfWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgIGAke3RoaXMuc3RhdGUuemlwfWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5waG9uZX1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUuY3JlZGl0fWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5leHBpcmF0aW9ufWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5jdnZ9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLmJpbGxpbmd6aXB9YDtcblx0XHRyZXR1cm4gZGF0YVN0cjtcblx0fVxuLy8gXHRGMSBjb2xsZWN0cyBuYW1lLCBlbWFpbCwgYW5kIHBhc3N3b3JkIGZvciBhY2NvdW50IGNyZWF0aW9uLlxuLy8gRjIgY29sbGVjdHMgc2hpcCB0byBhZGRyZXNzIChsaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyLlxuLy8gRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnN0YXRlQ291bnRlciA9PT0gNCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDE+VXNlciBJbmZvcm1hdGlvbjwvaDE+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUubmFtZX08YnIvPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmVtYWlsfTxici8+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUucGFzc3dvcmR9XG5cdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHQ8aDE+U2hpcHBpbmcgSW5mb3JtYXRpb248L2gxPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmxpbmUxfTxici8+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUubGluZTJ9PGJyLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5jaXR5fTxici8+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuc3RhdGV9PGJyLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS56aXB9PGJyLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5waG9uZX1cblx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdDxoMT5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvaDE+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuY3JlZGl0fTxici8+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuZXhwaXJhdGlvbn08YnIvPiBcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5jdnZ9IDxici8+IFxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmJpbGxpbmd6aXB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnN0YXRlQ291bnRlciA9PT0gMCA/IDxIb21lcGFnZSBpbmNDb3VudD17dGhpcy5pbmNDb3VudH0vPiA6IHVuZGVmaW5lZH0gXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuc3RhdGVDb3VudGVyID09PSAxID8gPEluZm8gaW5jQ291bnQ9e3RoaXMuaW5jQ291bnR9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz4gOiB1bmRlZmluZWR9IFxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnN0YXRlQ291bnRlciA9PT0gMiA/IDxTaGlwcGluZyBpbmNDb3VudD17dGhpcy5pbmNDb3VudH0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPiA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5zdGF0ZUNvdW50ZXIgPT09IDMgPyA8Q3JlZGl0IGluY0NvdW50PXt0aGlzLmluY0NvdW50fSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+IDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnN0YXRlQ291bnRlciA9PT0gNSA/IDxIb21lcGFnZSBzZXRIb21lPXt0aGlzLnNldEhvbWV9Lz4gOiB1bmRlZmluZWR9XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cblx0fVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pOyJdfQ==