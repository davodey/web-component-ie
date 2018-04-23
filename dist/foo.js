'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlagIcon = function (_HTMLElement) {
	_inherits(FlagIcon, _HTMLElement);

	function FlagIcon() {
		_classCallCheck(this, FlagIcon);

		var _this = _possibleConstructorReturn(this, (FlagIcon.__proto__ || Object.getPrototypeOf(FlagIcon)).call(this));

		_this.countryCode = null;

		var shadow = _this.attachShadow({ mode: 'open' });
		var style = document.createElement('style');
		var paragraph = document.createElement('p');

		var country = _this.getAttribute('country');
		paragraph.textContent = country;

		style.textContent = 'p {color:red}';

		shadow.appendChild(style);
		shadow.appendChild(paragraph);
		return _this;
	}

	// returns only the observed attributes


	_createClass(FlagIcon, [{
		key: 'attributeChangedCallback',


		// is called when an observed attribute is changed.
		value: function attributeChangedCallback(name, oldValue, newValue) {

			// name will always be "country" due to observedAttributes
			this.countryCode = newValue;
			this.updateRendering();
		}

		// is called when the element is created.

	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			this.updateRendering();
		}

		// is called when the element is removed.

	}, {
		key: 'disconnectedCallback',
		value: function disconnectedCallback() {}

		// render method

	}, {
		key: 'updateRendering',
		value: function updateRendering() {
			this.innerHTML = this.countryCode;
			// Left as an exercise for the reader. But, you'll probably want to
			// check this.ownerDocument.defaultView to see if we've been
			// inserted into a document with a browsing context, and avoid
			// doing any work if not.
		}
	}], [{
		key: 'observedAttributes',
		get: function get() {
			return ["country"];
		}
	}]);

	return FlagIcon;
}(HTMLElement);

customElements.define("flag-icon", FlagIcon);