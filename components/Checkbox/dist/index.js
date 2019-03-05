(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Checkbox = factory());
}(this, (function () { 'use strict';

	function noop() {}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function exclude(src, prop) {
		const tar = {};
		for (const k in src) k === prop || (tar[k] = src[k]);
		return tar;
	}

	function append(target, node) {
		target.appendChild(node);
	}

	function insert(target, node, anchor) {
		target.insertBefore(node, anchor);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function addListener(node, event, handler, options) {
		node.addEventListener(event, handler, options);
	}

	function removeListener(node, event, handler, options) {
		node.removeEventListener(event, handler, options);
	}

	function setAttribute(node, attribute, value) {
		if (value == null) node.removeAttribute(attribute);
		else node.setAttribute(attribute, value);
	}

	function setAttributes(node, attributes) {
		for (var key in attributes) {
			if (key === 'style') {
				node.style.cssText = attributes[key];
			} else if (key in node) {
				node[key] = attributes[key];
			} else {
				setAttribute(node, key, attributes[key]);
			}
		}
	}

	function setData(text, data) {
		text.data = '' + data;
	}

	function getSpreadUpdate(levels, updates) {
		var update = {};

		var to_null_out = {};
		var accounted_for = {};

		var i = levels.length;
		while (i--) {
			var o = levels[i];
			var n = updates[i];

			if (n) {
				for (var key in o) {
					if (!(key in n)) to_null_out[key] = 1;
				}

				for (var key in n) {
					if (!accounted_for[key]) {
						update[key] = n[key];
						accounted_for[key] = 1;
					}
				}

				levels[i] = n;
			} else {
				for (var key in o) {
					accounted_for[key] = 1;
				}
			}
		}

		for (var key in to_null_out) {
			if (!(key in update)) update[key] = undefined;
		}

		return update;
	}

	function blankObject() {
		return Object.create(null);
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		this._fragment.d(detach !== false);
		this._fragment = null;
		this._state = {};
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				try {
					handler.__calling = true;
					handler.call(this, data);
				} finally {
					handler.__calling = false;
				}
			}
		}
	}

	function flush(component) {
		component._lock = true;
		callAll(component._beforecreate);
		callAll(component._oncreate);
		callAll(component._aftercreate);
		component._lock = false;
	}

	function get() {
		return this._state;
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._slots = blankObject();
		component._bind = options._bind;
		component._staged = {};

		component.options = options;
		component.root = options.root || component;
		component.store = options.store || component.root.store;

		if (!options.root) {
			component._beforecreate = [];
			component._oncreate = [];
			component._aftercreate = [];
		}
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		flush(this.root);
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		newState = assign(this._staged, newState);
		this._staged = {};

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function _stage(newState) {
		assign(this._staged, newState);
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	var proto = {
		destroy,
		get,
		fire,
		on,
		set,
		_recompute: noop,
		_set,
		_stage,
		_mount,
		_differs
	};

	/* src/checkbox.html generated by Svelte v2.16.1 */

	function props(state) {
	 if(document.querySelector("input").hasAttribute("checked")) document.querySelector("fw-checkbox").checked=true;
	  Object.keys(state).forEach(key => {
	    state[key] = state[key] === "" ? key : state[key];
	  });
	  return state;
	}

	var methods = {
	  checkboxChange : (ev)=>
	    document.querySelector("fw-checkbox").checked = ev.checked
	};

	function create_main_fragment(component, ctx) {
		var label, text0, text1, input, text2, span;

		function change_handler(event) {
			component.checkboxChange(this);
		}

		var input_levels = [
			{ type: "checkbox" },
			ctx.props
		];

		var input_data = {};
		for (var i = 0; i < input_levels.length; i += 1) {
			input_data = assign(input_data, input_levels[i]);
		}

		return {
			c() {
				label = createElement("label");
				text0 = createText(ctx.label);
				text1 = createText("\n  ");
				input = createElement("input");
				text2 = createText(" \n  ");
				span = createElement("span");
				this.c = noop;
				addListener(input, "change", change_handler);
				setAttributes(input, input_data);
				span.className = "checkmark";
				label.className = "container";
			},

			m(target, anchor) {
				insert(target, label, anchor);
				append(label, text0);
				append(label, text1);
				append(label, input);
				append(label, text2);
				append(label, span);
			},

			p(changed, ctx) {
				if (changed.label) {
					setData(text0, ctx.label);
				}

				setAttributes(input, getSpreadUpdate(input_levels, [
					{ type: "checkbox" },
					(changed.props) && ctx.props
				]));
			},

			d(detach) {
				if (detach) {
					detachNode(label);
				}

				removeListener(input, "change", change_handler);
			}
		};
	}

	class Checkbox extends HTMLElement {
		constructor(options = {}) {
			super();
			init(this, options);
			this._state = assign({}, options.data);

			this._recompute({  }, this._state);
			this._intro = true;

			this.attachShadow({ mode: 'open' });
			this.shadowRoot.innerHTML = `<style>:host{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}.container{display:block;position:relative;margin-bottom:12px;cursor:pointer;width:112px;height:20px;font-family:SFProText;font-size:14px;line-height:1.3;color:#12344d;padding-left:31px}.container input[type="checkbox"]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:16px;width:16px;background-color:#ffffff;border:1px solid #6c7684;box-sizing:border-box;border-radius:2px}.container input[type="checkbox"]:hover~.checkmark{border:2px solid #6f7c87
		}.container input[type="checkbox"]:focus~.checkmark{border:2px solid #2e6ed8
		}.container input[type="checkbox"]:invalid~.checkmark{border:solid 2px #f73f3e}.container input[type="checkbox"]:checked~.checkmark{background-color:#2e6ed8;border:none;box-shadow:none}.container input[type="checkbox"]:checked:hover:not([disabled])~.checkmark{background-color:#003792;border:none}.container input[type="checkbox"]:checked:focus:not([disabled])~.checkmark{border:1px solid #ffffff;box-shadow:0 0 0 2pt #2e6ed8}.container input[type="checkbox"]:checked:invalid:not([disabled])~.checkmark::after{border:solid 2px #f73f3e;top:2px;left:5px;width:3px;height:7px;border:solid #f73f3e;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.container input[type="checkbox"]:checked:disabled~.checkmark:after{background-color:#ebeef0;pointer-events:none;cursor:default;top:2px;left:5px;width:3px;height:7px;border:solid #6f7c87;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.container input[type="checkbox"]:disabled~.checkmark{box-shadow:inset 0 1px 2px 0 #f7f9fa;outline:solid 1px #cfd7df;background-color:#ebeef0}.checkmark:after{content:"";position:absolute;display:none}.container input[type="checkbox"]:checked~.checkmark::after{display:block}.container .checkmark::after{top:2px;left:5px;width:3px;height:7px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}</style>`;

			this._fragment = create_main_fragment(this, this._state);

			this._fragment.c();
			this._fragment.m(this.shadowRoot, null);

			if (options.target) this._mount(options.target, options.anchor);
		}

		static get observedAttributes() {
			return ["label","autofocus","checked","defaultChecked","defaultValue","disabled","form","indeterminate","name","required","type"];
		}

		get label() {
			return this.get().label;
		}

		set label(value) {
			this.set({ label: value });
		}

		get autofocus() {
			return this.get().autofocus;
		}

		set autofocus(value) {
			this.set({ autofocus: value });
		}

		get checked() {
			return this.get().checked;
		}

		set checked(value) {
			this.set({ checked: value });
		}

		get defaultChecked() {
			return this.get().defaultChecked;
		}

		set defaultChecked(value) {
			this.set({ defaultChecked: value });
		}

		get defaultValue() {
			return this.get().defaultValue;
		}

		set defaultValue(value) {
			this.set({ defaultValue: value });
		}

		get disabled() {
			return this.get().disabled;
		}

		set disabled(value) {
			this.set({ disabled: value });
		}

		get form() {
			return this.get().form;
		}

		set form(value) {
			this.set({ form: value });
		}

		get indeterminate() {
			return this.get().indeterminate;
		}

		set indeterminate(value) {
			this.set({ indeterminate: value });
		}

		get name() {
			return this.get().name;
		}

		set name(value) {
			this.set({ name: value });
		}

		get required() {
			return this.get().required;
		}

		set required(value) {
			this.set({ required: value });
		}

		get type() {
			return this.get().type;
		}

		set type(value) {
			this.set({ type: value });
		}

		attributeChangedCallback(attr, oldValue, newValue) {
			this.set({ [attr]: newValue });
		}
	}

	assign(Checkbox.prototype, proto);
	assign(Checkbox.prototype, methods);
	assign(Checkbox.prototype, {
		_mount(target, anchor) {
			target.insertBefore(this, anchor);
		}
	});

	Checkbox.prototype._recompute = function _recompute(changed, state) {
		if (this._differs(state.props, (state.props = props(exclude(state, "props"))))) changed.props = true;
	};

	customElements.define("fw-checkbox", Checkbox);

	return Checkbox;

})));
