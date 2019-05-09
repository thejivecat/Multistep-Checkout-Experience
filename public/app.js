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
			var _this2 = this;

			if (this.state.stateCounter === 4) {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h1",
						null,
						"User Information"
					),
					"Name: ",
					this.state.name,
					React.createElement("br", null),
					"Email: ",
					this.state.email,
					React.createElement("br", null),
					"Password: ",
					this.state.password,
					React.createElement("br", null),
					React.createElement(
						"h1",
						null,
						"Shipping Information"
					),
					"Address: ",
					this.state.line1,
					React.createElement("br", null),
					this.state.line2,
					React.createElement("br", null),
					"City: ",
					this.state.city,
					React.createElement("br", null),
					"State: ",
					this.state.state,
					React.createElement("br", null),
					"ZIP: ",
					this.state.zip,
					React.createElement("br", null),
					"Phone: ",
					this.state.phone,
					React.createElement("br", null),
					React.createElement(
						"h1",
						null,
						"Credit Card Information"
					),
					"Credit Card Number: ",
					this.state.credit,
					React.createElement("br", null),
					"Expiration Date: ",
					this.state.expiration,
					React.createElement("br", null),
					"CVV: ",
					this.state.cvv,
					" ",
					React.createElement("br", null),
					"Billing ZIP: ",
					this.state.billingzip,
					React.createElement("br", null),
					React.createElement(
						"button",
						{ type: "button", name: "Purchase", onClick: function onClick() {
								return _this2.setHome();
							} },
						"Next"
					)
				);
			} else {
				return React.createElement(
					"div",
					null,
					this.state.stateCounter === 0 ? React.createElement(Homepage, { incCount: this.incCount }) : undefined,
					this.state.stateCounter === 1 ? React.createElement(Info, { incCount: this.incCount, handleChange: this.handleChange }) : undefined,
					this.state.stateCounter === 2 ? React.createElement(Shipping, { incCount: this.incCount, handleChange: this.handleChange }) : undefined,
					this.state.stateCounter === 3 ? React.createElement(Credit, { incCount: this.incCount, handleChange: this.handleChange }) : undefined
				);
			}
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwiaW5jQ291bnQiLCJJbmZvIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIlNoaXBwaW5nIiwiQ3JlZGl0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0YXRlQ291bnRlciIsImJpbmQiLCJzZXRIb21lIiwicHJvcCIsInNldFN0YXRlIiwiZXZlbnQiLCJkYXRhU3RyIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwicGhvbmUiLCJjcmVkaXQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ3ppcCIsInVuZGVmaW5lZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxRQUFULE9BQThCO0FBQUEsS0FBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUM3QixRQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxLQUFRLFNBQVM7QUFBQSxZQUFNQSxVQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBREQsRUFERDtBQUtBOztBQUVELFNBQVNDLElBQVQsUUFBd0M7QUFBQSxLQUF6QkMsWUFBeUIsU0FBekJBLFlBQXlCO0FBQUEsS0FBWEYsUUFBVyxTQUFYQSxRQUFXOztBQUN2QyxRQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsa0JBQUNHLENBQUQ7QUFBQSxhQUFPRCxhQUFhQyxFQUFFQyxNQUFGLENBQVNDLElBQXRCLEVBQTRCRixFQUFFQyxNQUFGLENBQVNFLEtBQXJDLENBQVA7QUFBQSxNQUE3QjtBQURELElBREQ7QUFBQTtBQUdVLGtDQUhWO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFDQyxtQ0FBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxrQkFBQ0gsQ0FBRDtBQUFBLGFBQU9ELGFBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsSUFBdEIsRUFBNEJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBckMsQ0FBUDtBQUFBLE1BQTlCO0FBREQsSUFKRDtBQUFBO0FBTVUsa0NBTlY7QUFPQztBQUFBO0FBQUE7QUFBQTtBQUNDLG1DQUFPLE1BQUssVUFBWixFQUF1QixVQUFVLGtCQUFDSCxDQUFEO0FBQUEsYUFBT0QsYUFBYUMsRUFBRUMsTUFBRixDQUFTQyxJQUF0QixFQUE0QkYsRUFBRUMsTUFBRixDQUFTRSxLQUFyQyxDQUFQO0FBQUEsTUFBakM7QUFERDtBQVBELEdBREQ7QUFBQTtBQVdTLGlDQVhUO0FBWUE7QUFBQTtBQUFBLEtBQVEsTUFBSyxRQUFiLEVBQXNCLE1BQUssTUFBM0IsRUFBa0MsU0FBUztBQUFBLFlBQU1OLFVBQU47QUFBQSxLQUEzQztBQUFBO0FBQUE7QUFaQSxFQUREO0FBZ0JBOztBQUVELFNBQVNPLFFBQVQsUUFBNEM7QUFBQSxLQUF6QkwsWUFBeUIsU0FBekJBLFlBQXlCO0FBQUEsS0FBWEYsUUFBVyxTQUFYQSxRQUFXOztBQUMzQyxRQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsa0JBQUNHLENBQUQ7QUFBQSxhQUFPRCxhQUFhQyxFQUFFQyxNQUFGLENBQVNDLElBQXRCLEVBQTRCRixFQUFFQyxNQUFGLENBQVNFLEtBQXJDLENBQVA7QUFBQSxNQUE5QjtBQURELElBREQ7QUFBQTtBQUdVLGtDQUhWO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFDQyxtQ0FBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxrQkFBQ0gsQ0FBRDtBQUFBLGFBQU9ELGFBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsSUFBdEIsRUFBNEJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBckMsQ0FBUDtBQUFBLE1BQTlCO0FBREQsSUFKRDtBQUFBO0FBTVUsa0NBTlY7QUFPQztBQUFBO0FBQUE7QUFBQTtBQUNDLG1DQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLGtCQUFDSCxDQUFEO0FBQUEsYUFBT0QsYUFBYUMsRUFBRUMsTUFBRixDQUFTQyxJQUF0QixFQUE0QkYsRUFBRUMsTUFBRixDQUFTRSxLQUFyQyxDQUFQO0FBQUEsTUFBN0I7QUFERCxJQVBEO0FBQUE7QUFTVSxrQ0FUVjtBQVVDO0FBQUE7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsa0JBQUNILENBQUQ7QUFBQSxhQUFPRCxhQUFhQyxFQUFFQyxNQUFGLENBQVNDLElBQXRCLEVBQTRCRixFQUFFQyxNQUFGLENBQVNFLEtBQXJDLENBQVA7QUFBQSxNQUE5QjtBQURELElBVkQ7QUFBQTtBQVlVLGtDQVpWO0FBYUM7QUFBQTtBQUFBO0FBQUE7QUFDQyxtQ0FBTyxNQUFLLEtBQVosRUFBa0IsVUFBVSxrQkFBQ0gsQ0FBRDtBQUFBLGFBQU9ELGFBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsSUFBdEIsRUFBNEJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBckMsQ0FBUDtBQUFBLE1BQTVCO0FBREQsSUFiRDtBQUFBO0FBZVUsa0NBZlY7QUFnQkM7QUFBQTtBQUFBO0FBQUE7QUFDQyxtQ0FBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxrQkFBQ0gsQ0FBRDtBQUFBLGFBQU9ELGFBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsSUFBdEIsRUFBNEJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBckMsQ0FBUDtBQUFBLE1BQTlCO0FBREQsSUFoQkQ7QUFBQTtBQWtCVSxrQ0FsQlY7QUFtQkM7QUFBQTtBQUFBLE1BQVEsTUFBSyxRQUFiLEVBQXNCLE1BQUssTUFBM0IsRUFBa0MsU0FBUztBQUFBLGFBQU1OLFVBQU47QUFBQSxNQUEzQztBQUFBO0FBQUE7QUFuQkQ7QUFERCxFQUREO0FBeUJBOztBQUVELFNBQVNRLE1BQVQsUUFBMEM7QUFBQSxLQUF6Qk4sWUFBeUIsU0FBekJBLFlBQXlCO0FBQUEsS0FBWEYsUUFBVyxTQUFYQSxRQUFXOztBQUN6QyxRQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxRQUFaLEVBQXFCLFVBQVUsa0JBQUNHLENBQUQ7QUFBQSxhQUFPRCxhQUFhQyxFQUFFQyxNQUFGLENBQVNDLElBQXRCLEVBQTRCRixFQUFFQyxNQUFGLENBQVNFLEtBQXJDLENBQVA7QUFBQSxNQUEvQjtBQURELElBREQ7QUFBQTtBQUdVLGtDQUhWO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFDQyxtQ0FBTyxNQUFLLFlBQVosRUFBeUIsVUFBVSxrQkFBQ0gsQ0FBRDtBQUFBLGFBQU9ELGFBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsSUFBdEIsRUFBNEJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBckMsQ0FBUDtBQUFBLE1BQW5DO0FBREQsSUFKRDtBQUFBO0FBTVUsa0NBTlY7QUFPQztBQUFBO0FBQUE7QUFBQTtBQUNDLG1DQUFPLE1BQUssS0FBWixFQUFrQixVQUFVLGtCQUFDSCxDQUFEO0FBQUEsYUFBT0QsYUFBYUMsRUFBRUMsTUFBRixDQUFTQyxJQUF0QixFQUE0QkYsRUFBRUMsTUFBRixDQUFTRSxLQUFyQyxDQUFQO0FBQUEsTUFBNUI7QUFERCxJQVBEO0FBQUE7QUFTVSxrQ0FUVjtBQVVDO0FBQUE7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxZQUFaLEVBQXlCLFVBQVUsa0JBQUNILENBQUQ7QUFBQSxhQUFPRCxhQUFhQyxFQUFFQyxNQUFGLENBQVNDLElBQXRCLEVBQTRCRixFQUFFQyxNQUFGLENBQVNFLEtBQXJDLENBQVA7QUFBQSxNQUFuQztBQURELElBVkQ7QUFBQTtBQVlVLGtDQVpWO0FBYUM7QUFBQTtBQUFBLE1BQVEsTUFBSyxRQUFiLEVBQXNCLE1BQUssTUFBM0IsRUFBa0MsU0FBUztBQUFBLGFBQU1OLFVBQU47QUFBQSxNQUEzQztBQUFBO0FBQUE7QUFiRDtBQURELEVBREQ7QUFtQkE7O0lBRUtTLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGlCQUFjO0FBREYsR0FBYjtBQUdBLFFBQUtaLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjYSxJQUFkLE9BQWhCO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsUUFBS1gsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCVyxJQUFsQixPQUFwQjtBQVBrQjtBQVFsQjs7OzsrQkFDWUUsSSxFQUFNVCxLLEVBQU87QUFDekIsUUFBS1UsUUFBTCxxQkFDRUQsSUFERixFQUNTRSxNQUFNYixNQUFOLENBQWFFLEtBRHRCO0FBR0E7Ozs2QkFFVztBQUNYLFFBQUtVLFFBQUwsQ0FBYztBQUNiSixrQkFBYyxLQUFLRCxLQUFMLENBQVdDLFlBQVgsR0FBd0I7QUFEekIsSUFBZDtBQUdBOzs7NEJBRVU7QUFDVixRQUFLSSxRQUFMLENBQWM7QUFDYkosa0JBQWM7QUFERCxJQUFkO0FBR0E7OztrQ0FDZTtBQUNmLE9BQUlNLFVBQVUsS0FBRyxLQUFLUCxLQUFMLENBQVdOLElBQWQsR0FBdUIsa0JBQXZCLFNBQStDLEtBQUtNLEtBQUwsQ0FBV1EsS0FBMUQsSUFBb0Usa0JBQXBFLFNBQTRGLEtBQUtSLEtBQUwsQ0FBV1MsUUFBdkcsSUFBb0gsa0JBQXBILFNBQTRJLEtBQUtULEtBQUwsQ0FBV1UsS0FBdkosSUFBaUssa0JBQWpLLFNBQXlMLEtBQUtWLEtBQUwsQ0FBV1csS0FBcE0sSUFBOE0sa0JBQTlNLFNBQXNPLEtBQUtYLEtBQUwsQ0FBV1ksSUFBalAsSUFBMFAsa0JBQTFQLFNBQWtSLEtBQUtaLEtBQUwsQ0FBV0EsS0FBN1IsSUFBdVMsa0JBQXZTLFNBQWdVLEtBQUtBLEtBQUwsQ0FBV2EsR0FBM1UsSUFBbVYsa0JBQW5WLFNBQTJXLEtBQUtiLEtBQUwsQ0FBV2MsS0FBdFgsSUFBZ1ksa0JBQWhZLFNBQXdaLEtBQUtkLEtBQUwsQ0FBV2UsTUFBbmEsSUFBOGEsa0JBQTlhLFNBQXNjLEtBQUtmLEtBQUwsQ0FBV2dCLFVBQWpkLElBQWdlLGtCQUFoZSxTQUF3ZixLQUFLaEIsS0FBTCxDQUFXaUIsR0FBbmdCLElBQTJnQixrQkFBM2dCLFNBQW1pQixLQUFLakIsS0FBTCxDQUFXa0IsVUFBOWlCLENBQWQ7QUFDQSxVQUFPWCxPQUFQO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7Ozs7MkJBRVU7QUFBQTs7QUFDUixPQUFJLEtBQUtQLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixDQUFoQyxFQUFtQztBQUNsQyxXQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUFBO0FBRVEsVUFBS0QsS0FBTCxDQUFXTixJQUZuQjtBQUV3QixvQ0FGeEI7QUFBQTtBQUdTLFVBQUtNLEtBQUwsQ0FBV1EsS0FIcEI7QUFHMEIsb0NBSDFCO0FBQUE7QUFJWSxVQUFLUixLQUFMLENBQVdTLFFBSnZCO0FBS0Msb0NBTEQ7QUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkQ7QUFBQTtBQU9XLFVBQUtULEtBQUwsQ0FBV1UsS0FQdEI7QUFPNEIsb0NBUDVCO0FBUUUsVUFBS1YsS0FBTCxDQUFXVyxLQVJiO0FBUW1CLG9DQVJuQjtBQUFBO0FBU1EsVUFBS1gsS0FBTCxDQUFXWSxJQVRuQjtBQVN3QixvQ0FUeEI7QUFBQTtBQVVTLFVBQUtaLEtBQUwsQ0FBV0EsS0FWcEI7QUFVMEIsb0NBVjFCO0FBQUE7QUFXTyxVQUFLQSxLQUFMLENBQVdhLEdBWGxCO0FBV3NCLG9DQVh0QjtBQUFBO0FBWVMsVUFBS2IsS0FBTCxDQUFXYyxLQVpwQjtBQWFDLG9DQWJEO0FBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWREO0FBQUE7QUFlc0IsVUFBS2QsS0FBTCxDQUFXZSxNQWZqQztBQWV3QyxvQ0FmeEM7QUFBQTtBQWdCbUIsVUFBS2YsS0FBTCxDQUFXZ0IsVUFoQjlCO0FBZ0J5QyxvQ0FoQnpDO0FBQUE7QUFpQk8sVUFBS2hCLEtBQUwsQ0FBV2lCLEdBakJsQjtBQUFBO0FBaUJ1QixvQ0FqQnZCO0FBQUE7QUFrQmUsVUFBS2pCLEtBQUwsQ0FBV2tCLFVBbEIxQjtBQWtCcUMsb0NBbEJyQztBQW1CQTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWIsRUFBc0IsTUFBSyxVQUEzQixFQUFzQyxTQUFTO0FBQUEsZUFBTSxPQUFLZixPQUFMLEVBQU47QUFBQSxRQUEvQztBQUFBO0FBQUE7QUFuQkEsS0FERDtBQXVCQSxJQXhCRCxNQXdCTztBQUNOLFdBQ0M7QUFBQTtBQUFBO0FBQ0UsVUFBS0gsS0FBTCxDQUFXQyxZQUFYLEtBQTRCLENBQTVCLEdBQWdDLG9CQUFDLFFBQUQsSUFBVSxVQUFVLEtBQUtaLFFBQXpCLEdBQWhDLEdBQXVFOEIsU0FEekU7QUFFRSxVQUFLbkIsS0FBTCxDQUFXQyxZQUFYLEtBQTRCLENBQTVCLEdBQWdDLG9CQUFDLElBQUQsSUFBTSxVQUFVLEtBQUtaLFFBQXJCLEVBQStCLGNBQWMsS0FBS0UsWUFBbEQsR0FBaEMsR0FBb0c0QixTQUZ0RztBQUdFLFVBQUtuQixLQUFMLENBQVdDLFlBQVgsS0FBNEIsQ0FBNUIsR0FBZ0Msb0JBQUMsUUFBRCxJQUFVLFVBQVUsS0FBS1osUUFBekIsRUFBbUMsY0FBYyxLQUFLRSxZQUF0RCxHQUFoQyxHQUF3RzRCLFNBSDFHO0FBSUUsVUFBS25CLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixDQUE1QixHQUFnQyxvQkFBQyxNQUFELElBQVEsVUFBVSxLQUFLWixRQUF2QixFQUFpQyxjQUFjLEtBQUtFLFlBQXBELEdBQWhDLEdBQXNHNEI7QUFKeEcsS0FERDtBQVFBO0FBRUQ7Ozs7RUF2RWdCQyxNQUFNQyxTOztBQTBFeEJDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhvbWVwYWdlKHtpbmNDb3VudH0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNDb3VudCgpfT5DaGVja291dDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIEluZm8oe2hhbmRsZUNoYW5nZSwgaW5jQ291bnR9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8bGFiZWw+TmFtZVxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+RW1haWwgXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+UGFzc3dvcmRcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8L2Zvcm0+IDxici8+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIk5leHRcIiBvbkNsaWNrPXsoKSA9PiBpbmNDb3VudCgpfT5OZXh0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZnVuY3Rpb24gU2hpcHBpbmcoe2hhbmRsZUNoYW5nZSwgaW5jQ291bnR9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8bGFiZWw+TGluZSAxXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJsaW5lMVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+TGluZSAyXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJsaW5lMlwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+Q2l0eVxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+U3RhdGVcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdDwvbGFiZWw+IDxici8+XG5cdFx0XHRcdDxsYWJlbD5aSVBcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cInppcFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+UGhvbmUgTnVtYmVyXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJwaG9uZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiTmV4dFwiIG9uQ2xpY2s9eygpID0+IGluY0NvdW50KCl9Pk5leHQ8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5mdW5jdGlvbiBDcmVkaXQoe2hhbmRsZUNoYW5nZSwgaW5jQ291bnR9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8bGFiZWw+TnVtYmVyXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJjcmVkaXRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPkV4cGlyYXRpb25cblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImV4cGlyYXRpb25cIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGxhYmVsPkNWViBcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cIkNWVlwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8L2xhYmVsPiA8YnIvPlxuXHRcdFx0XHQ8bGFiZWw+QmlsbGluZyBaSVBcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImJpbGxpbmd6aXBcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0PC9sYWJlbD4gPGJyLz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIk5leHRcIiBvbkNsaWNrPXsoKSA9PiBpbmNDb3VudCgpfT5OZXh0PC9idXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHN0YXRlQ291bnRlcjogMCxcblx0XHR9O1xuXHRcdHRoaXMuaW5jQ291bnQgPSB0aGlzLmluY0NvdW50LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRIb21lID0gdGhpcy5zZXRIb21lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cdGhhbmRsZUNoYW5nZShwcm9wLCB2YWx1ZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W3Byb3BdOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0aW5jQ291bnQgKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdGVDb3VudGVyOiB0aGlzLnN0YXRlLnN0YXRlQ291bnRlcisxXG5cdFx0fSlcblx0fVxuXG5cdHNldEhvbWUgKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdGVDb3VudGVyOiAwXG5cdFx0fSlcblx0fVxuXHRzdHJpbmdpZnlEYXRhKCkge1xuXHRcdHZhciBkYXRhU3RyID0gYCR7dGhpcy5zdGF0ZS5uYW1lfWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5lbWFpbH1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUucGFzc3dvcmR9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLmxpbmUxfWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5saW5lMn1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUuY2l0eX1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUuc3RhdGV9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyAgYCR7dGhpcy5zdGF0ZS56aXB9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLnBob25lfWAgKyAnXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgYCR7dGhpcy5zdGF0ZS5jcmVkaXR9YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLmV4cGlyYXRpb259YCArICdcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyBgJHt0aGlzLnN0YXRlLmN2dn1gICsgJ1xceGEwXFx4YTBcXHhhMFxceGEwJyArIGAke3RoaXMuc3RhdGUuYmlsbGluZ3ppcH1gO1xuXHRcdHJldHVybiBkYXRhU3RyO1xuXHR9XG4vLyBcdEYxIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uXG4vLyBGMiBjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuXG4vLyBGMyBjb2xsZWN0cyBjcmVkaXQgY2FyZCAjLCBleHBpcnkgZGF0ZSwgQ1ZWLCBhbmQgYmlsbGluZyB6aXAgY29kZS5cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc3RhdGVDb3VudGVyID09PSA0KSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMT5Vc2VyIEluZm9ybWF0aW9uPC9oMT5cblx0XHRcdFx0XHROYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTxici8+XG5cdFx0XHRcdFx0RW1haWw6IHt0aGlzLnN0YXRlLmVtYWlsfTxici8+XG5cdFx0XHRcdFx0UGFzc3dvcmQ6IHt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PGgxPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMT5cblx0XHRcdFx0XHRBZGRyZXNzOiB7dGhpcy5zdGF0ZS5saW5lMX08YnIvPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmxpbmUyfTxici8+XG5cdFx0XHRcdFx0Q2l0eToge3RoaXMuc3RhdGUuY2l0eX08YnIvPlxuXHRcdFx0XHRcdFN0YXRlOiB7dGhpcy5zdGF0ZS5zdGF0ZX08YnIvPlxuXHRcdFx0XHRcdFpJUDoge3RoaXMuc3RhdGUuemlwfTxici8+XG5cdFx0XHRcdFx0UGhvbmU6IHt0aGlzLnN0YXRlLnBob25lfVxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PGgxPkNyZWRpdCBDYXJkIEluZm9ybWF0aW9uPC9oMT5cblx0XHRcdFx0XHRDcmVkaXQgQ2FyZCBOdW1iZXI6IHt0aGlzLnN0YXRlLmNyZWRpdH08YnIvPlxuXHRcdFx0XHRcdEV4cGlyYXRpb24gRGF0ZToge3RoaXMuc3RhdGUuZXhwaXJhdGlvbn08YnIvPiBcblx0XHRcdFx0XHRDVlY6IHt0aGlzLnN0YXRlLmN2dn0gPGJyLz4gXG5cdFx0XHRcdFx0QmlsbGluZyBaSVA6IHt0aGlzLnN0YXRlLmJpbGxpbmd6aXB9PGJyLz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIlB1cmNoYXNlXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRIb21lKCl9Pk5leHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuc3RhdGVDb3VudGVyID09PSAwID8gPEhvbWVwYWdlIGluY0NvdW50PXt0aGlzLmluY0NvdW50fS8+IDogdW5kZWZpbmVkfSBcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5zdGF0ZUNvdW50ZXIgPT09IDEgPyA8SW5mbyBpbmNDb3VudD17dGhpcy5pbmNDb3VudH0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPiA6IHVuZGVmaW5lZH0gXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuc3RhdGVDb3VudGVyID09PSAyID8gPFNoaXBwaW5nIGluY0NvdW50PXt0aGlzLmluY0NvdW50fSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+IDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnN0YXRlQ291bnRlciA9PT0gMyA/IDxDcmVkaXQgaW5jQ291bnQ9e3RoaXMuaW5jQ291bnR9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz4gOiB1bmRlZmluZWR9XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXG5cdH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuKTsiXX0=