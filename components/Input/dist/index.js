(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Input = factory());
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

	/* src/input.html generated by Svelte v2.16.1 */

	function props(state) {
	     //  console.log(Object.keys(state));
	// console.log(state)
	  Object.keys(state).forEach(key => {
	    state[key] = state[key] === "" ? key : state[key];
	  });
	  return state;
	}

	var methods = {
	  inputChange : (ev)=>{
	    let inp =  document.querySelector("fw-input");
	    inp.value=ev.value;
	    inp.setAttribute("value",ev.value);
	  },
	};

	function create_main_fragment(component, ctx) {
		var text, input;

		var if_block = (ctx.label) && create_if_block(component, ctx);

		function change_handler(event) {
			component.inputChange(this);
		}

		var input_levels = [
			{ class: "fw-input" },
			{ value: "value" },
			ctx.props
		];

		var input_data = {};
		for (var i = 0; i < input_levels.length; i += 1) {
			input_data = assign(input_data, input_levels[i]);
		}

		return {
			c() {
				if (if_block) if_block.c();
				text = createText("\n    ");
				input = createElement("input");
				this.c = noop;
				addListener(input, "change", change_handler);
				setAttributes(input, input_data);
			},

			m(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insert(target, text, anchor);
				insert(target, input, anchor);
			},

			p(changed, ctx) {
				if (ctx.label) {
					if (if_block) {
						if_block.p(changed, ctx);
					} else {
						if_block = create_if_block(component, ctx);
						if_block.c();
						if_block.m(text.parentNode, text);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}

				setAttributes(input, getSpreadUpdate(input_levels, [
					{ class: "fw-input" },
					{ value: "value" },
					(changed.props) && ctx.props
				]));
			},

			d(detach) {
				if (if_block) if_block.d(detach);
				if (detach) {
					detachNode(text);
					detachNode(input);
				}

				removeListener(input, "change", change_handler);
			}
		};
	}

	// (1:4) {#if label}
	function create_if_block(component, ctx) {
		var label, text0, text1, br;

		return {
			c() {
				label = createElement("label");
				text0 = createText(ctx.label);
				text1 = createText(" ");
				br = createElement("br");
			},

			m(target, anchor) {
				insert(target, label, anchor);
				append(label, text0);
				insert(target, text1, anchor);
				insert(target, br, anchor);
			},

			p(changed, ctx) {
				if (changed.label) {
					setData(text0, ctx.label);
				}
			},

			d(detach) {
				if (detach) {
					detachNode(label);
					detachNode(text1);
					detachNode(br);
				}
			}
		};
	}

	class Input extends HTMLElement {
		constructor(options = {}) {
			super();
			init(this, options);
			this._state = assign({}, options.data);

			this._recompute({  }, this._state);
			this._intro = true;

			this.attachShadow({ mode: 'open' });
			this.shadowRoot.innerHTML = `<style>:host{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}label{width:64px;height:20px;font-size:12px;font-weight:600;line-height:1.67;color:#475867}.fw-input{width:200px;height:32px;box-sizing:border-box;border:none;border:#cfd7df 1px solid;box-shadow:inset 0 1px 2px 0 rgba(24, 50, 71, 0.05);border-radius:5px;padding:6px 12px}.fw-input::placeholder{width:176px;height:20px;font-size:14px;line-height:1.43;color:#92a2b1}.fw-input:hover{border:solid 1px #475867}.fw-input:focus{outline:none;border:solid 2px #2c5cc5}.fw-input:invalid{border:solid 1px #d72d30}.fw-input:disabled{pointer-events:none;background:#cfd7df;cursor:auto}input[type="search"]{background-image:url("/searchicon.png") ;background-repeat:no-repeat;background-position:7px 7px;background-size:20px 20px;padding-left:30px}</style>`;

			this._fragment = create_main_fragment(this, this._state);

			this._fragment.c();
			this._fragment.m(this.shadowRoot, null);

			if (options.target) this._mount(options.target, options.anchor);
		}

		static get observedAttributes() {
			return ["max","min","pattern","readonly","required","size","step","title","name","id","value","label","disabled","maxlength","placeholder","type","checked"];
		}

		get max() {
			return this.get().max;
		}

		set max(value) {
			this.set({ max: value });
		}

		get min() {
			return this.get().min;
		}

		set min(value) {
			this.set({ min: value });
		}

		get pattern() {
			return this.get().pattern;
		}

		set pattern(value) {
			this.set({ pattern: value });
		}

		get readonly() {
			return this.get().readonly;
		}

		set readonly(value) {
			this.set({ readonly: value });
		}

		get required() {
			return this.get().required;
		}

		set required(value) {
			this.set({ required: value });
		}

		get size() {
			return this.get().size;
		}

		set size(value) {
			this.set({ size: value });
		}

		get step() {
			return this.get().step;
		}

		set step(value) {
			this.set({ step: value });
		}

		get title() {
			return this.get().title;
		}

		set title(value) {
			this.set({ title: value });
		}

		get name() {
			return this.get().name;
		}

		set name(value) {
			this.set({ name: value });
		}

		get id() {
			return this.get().id;
		}

		set id(value) {
			this.set({ id: value });
		}

		get value() {
			return this.get().value;
		}

		set value(value) {
			this.set({ value: value });
		}

		get label() {
			return this.get().label;
		}

		set label(value) {
			this.set({ label: value });
		}

		get disabled() {
			return this.get().disabled;
		}

		set disabled(value) {
			this.set({ disabled: value });
		}

		get maxlength() {
			return this.get().maxlength;
		}

		set maxlength(value) {
			this.set({ maxlength: value });
		}

		get placeholder() {
			return this.get().placeholder;
		}

		set placeholder(value) {
			this.set({ placeholder: value });
		}

		get type() {
			return this.get().type;
		}

		set type(value) {
			this.set({ type: value });
		}

		get checked() {
			return this.get().checked;
		}

		set checked(value) {
			this.set({ checked: value });
		}

		attributeChangedCallback(attr, oldValue, newValue) {
			this.set({ [attr]: newValue });
		}
	}

	assign(Input.prototype, proto);
	assign(Input.prototype, methods);
	assign(Input.prototype, {
		_mount(target, anchor) {
			target.insertBefore(this, anchor);
		}
	});

	Input.prototype._recompute = function _recompute(changed, state) {
		if (this._differs(state.props, (state.props = props(exclude(state, "props"))))) changed.props = true;
	};

	customElements.define("fw-input", Input);

	return Input;

})));
