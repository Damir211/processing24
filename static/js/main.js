"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! For license information please see choices.min.js.LICENSE.txt */
!function () {
  "use strict";

  var e = {
    282: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
      var n = i(883);
      t.addChoice = function (e) {
        var t = e.value,
            i = e.label,
            s = e.id,
            r = e.groupId,
            o = e.disabled,
            a = e.elementId,
            c = e.customProperties,
            l = e.placeholder,
            h = e.keyCode;
        return {
          type: n.ACTION_TYPES.ADD_CHOICE,
          value: t,
          label: i,
          id: s,
          groupId: r,
          disabled: o,
          elementId: a,
          customProperties: c,
          placeholder: l,
          keyCode: h
        };
      }, t.filterChoices = function (e) {
        return {
          type: n.ACTION_TYPES.FILTER_CHOICES,
          results: e
        };
      }, t.activateChoices = function (e) {
        return void 0 === e && (e = !0), {
          type: n.ACTION_TYPES.ACTIVATE_CHOICES,
          active: e
        };
      }, t.clearChoices = function () {
        return {
          type: n.ACTION_TYPES.CLEAR_CHOICES
        };
      };
    },
    783: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.addGroup = void 0;
      var n = i(883);

      t.addGroup = function (e) {
        var t = e.value,
            i = e.id,
            s = e.active,
            r = e.disabled;
        return {
          type: n.ACTION_TYPES.ADD_GROUP,
          value: t,
          id: i,
          active: s,
          disabled: r
        };
      };
    },
    464: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.highlightItem = t.removeItem = t.addItem = void 0;
      var n = i(883);
      t.addItem = function (e) {
        var t = e.value,
            i = e.label,
            s = e.id,
            r = e.choiceId,
            o = e.groupId,
            a = e.customProperties,
            c = e.placeholder,
            l = e.keyCode;
        return {
          type: n.ACTION_TYPES.ADD_ITEM,
          value: t,
          label: i,
          id: s,
          choiceId: r,
          groupId: o,
          customProperties: a,
          placeholder: c,
          keyCode: l
        };
      }, t.removeItem = function (e, t) {
        return {
          type: n.ACTION_TYPES.REMOVE_ITEM,
          id: e,
          choiceId: t
        };
      }, t.highlightItem = function (e, t) {
        return {
          type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
          id: e,
          highlighted: t
        };
      };
    },
    137: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
      var n = i(883);
      t.clearAll = function () {
        return {
          type: n.ACTION_TYPES.CLEAR_ALL
        };
      }, t.resetTo = function (e) {
        return {
          type: n.ACTION_TYPES.RESET_TO,
          state: e
        };
      }, t.setIsLoading = function (e) {
        return {
          type: n.ACTION_TYPES.SET_IS_LOADING,
          isLoading: e
        };
      };
    },
    373: function _(e, t, i) {
      var n = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      },
          s = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var r = s(i(996)),
          o = s(i(221)),
          a = i(282),
          c = i(783),
          l = i(464),
          h = i(137),
          u = i(520),
          d = i(883),
          p = i(789),
          f = i(799),
          m = i(655),
          v = s(i(744)),
          g = s(i(686)),
          _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
          y = {},
          E = function () {
        function e(t, i) {
          var s = this;
          void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}), void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = r.default.all([p.DEFAULT_CONFIG, e.defaults.options, i], {
            arrayMerge: function arrayMerge(e, t) {
              return n([], t, !0);
            }
          });
          var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
          o.length && console.warn("Unknown config option(s) passed", o.join(", "));
          var a = "string" == typeof t ? document.querySelector(t) : t;
          if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");

          if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), i.addItemFilter && "function" != typeof i.addItemFilter) {
            var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
            this.config.addItemFilter = c.test.bind(c);
          }

          if (this._isTextElement ? this.passedElement = new u.WrappedInput({
            element: a,
            classNames: this.config.classNames,
            delimiter: this.config.delimiter
          }) : this.passedElement = new u.WrappedSelect({
            element: a,
            classNames: this.config.classNames,
            template: function template(e) {
              return s._templates.option(e);
            }
          }), this.initialised = !1, this._store = new v.default(), this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
            var l = window.getComputedStyle(this.passedElement.element).direction;
            l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l);
          }

          if (this._idNames = {
            itemChoice: "item-choice"
          }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
            var h = this.passedElement.value.split(this.config.delimiter);
            this._presetItems = this._presetItems.concat(h);
          }

          if (this.passedElement.options && this.passedElement.options.forEach(function (e) {
            s._presetChoices.push({
              value: e.value,
              label: e.innerHTML,
              selected: !!e.selected,
              disabled: e.disabled || e.parentNode.disabled,
              placeholder: "" === e.value || e.hasAttribute("placeholder"),
              customProperties: e.dataset["custom-properties"]
            });
          }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
            element: t
          }), void (this.initialised = !0);
          this.init();
        }

        return Object.defineProperty(e, "defaults", {
          get: function get() {
            return Object.preventExtensions({
              get options() {
                return y;
              },

              get templates() {
                return g.default;
              }

            });
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.init = function () {
          if (!this.initialised) {
            this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
            var e = this.config.callbackOnInit;
            e && "function" == typeof e && e.call(this);
          }
        }, e.prototype.destroy = function () {
          this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = g.default, this.initialised = !1);
        }, e.prototype.enable = function () {
          return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
        }, e.prototype.disable = function () {
          return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
        }, e.prototype.highlightItem = function (e, t) {
          if (void 0 === t && (t = !0), !e || !e.id) return this;
          var i = e.id,
              n = e.groupId,
              s = void 0 === n ? -1 : n,
              r = e.value,
              o = void 0 === r ? "" : r,
              a = e.label,
              c = void 0 === a ? "" : a,
              h = s >= 0 ? this._store.getGroupById(s) : null;
          return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
            id: i,
            value: o,
            label: c,
            groupValue: h && h.value ? h.value : null
          }), this;
        }, e.prototype.unhighlightItem = function (e) {
          if (!e || !e.id) return this;
          var t = e.id,
              i = e.groupId,
              n = void 0 === i ? -1 : i,
              s = e.value,
              r = void 0 === s ? "" : s,
              o = e.label,
              a = void 0 === o ? "" : o,
              c = n >= 0 ? this._store.getGroupById(n) : null;
          return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
            id: t,
            value: r,
            label: a,
            groupValue: c && c.value ? c.value : null
          }), this;
        }, e.prototype.highlightAll = function () {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.highlightItem(t);
          }), this;
        }, e.prototype.unhighlightAll = function () {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.unhighlightItem(t);
          }), this;
        }, e.prototype.removeActiveItemsByValue = function (e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.value === e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }, e.prototype.removeActiveItems = function (e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.id !== e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }, e.prototype.removeHighlightedItems = function (e) {
          var t = this;
          return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
            t._removeItem(i), e && t._triggerChange(i.value);
          }), this;
        }, e.prototype.showDropdown = function (e) {
          var t = this;
          return this.dropdown.isActive || requestAnimationFrame(function () {
            t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {});
          }), this;
        }, e.prototype.hideDropdown = function (e) {
          var t = this;
          return this.dropdown.isActive ? (requestAnimationFrame(function () {
            t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {});
          }), this) : this;
        }, e.prototype.getValue = function (e) {
          void 0 === e && (e = !1);

          var t = this._store.activeItems.reduce(function (t, i) {
            var n = e ? i.value : i;
            return t.push(n), t;
          }, []);

          return this._isSelectOneElement ? t[0] : t;
        }, e.prototype.setValue = function (e) {
          var t = this;
          return this.initialised ? (e.forEach(function (e) {
            return t._setChoiceOrItem(e);
          }), this) : this;
        }, e.prototype.setChoiceByValue = function (e) {
          var t = this;
          return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach(function (e) {
            return t._findAndSelectChoiceByValue(e);
          }), this;
        }, e.prototype.setChoices = function (e, t, i, n) {
          var s = this;
          if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
          if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
          if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");

          if (n && this.clearChoices(), "function" == typeof e) {
            var r = e(this);
            if ("function" == typeof Promise && r instanceof Promise) return new Promise(function (e) {
              return requestAnimationFrame(e);
            }).then(function () {
              return s._handleLoadingState(!0);
            }).then(function () {
              return r;
            }).then(function (e) {
              return s.setChoices(e, t, i, n);
            }).catch(function (e) {
              s.config.silent || console.error(e);
            }).then(function () {
              return s._handleLoadingState(!1);
            }).then(function () {
              return s;
            });
            if (!Array.isArray(r)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(_typeof(r)));
            return this.setChoices(r, t, i, !1);
          }

          if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
          return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach(function (e) {
            if (e.choices) s._addGroup({
              id: e.id ? parseInt("".concat(e.id), 10) : null,
              group: e,
              valueKey: t,
              labelKey: i
            });else {
              var n = e;

              s._addChoice({
                value: n[t],
                label: n[i],
                isSelected: !!n.selected,
                isDisabled: !!n.disabled,
                placeholder: !!n.placeholder,
                customProperties: n.customProperties
              });
            }
          }), this._stopLoading(), this;
        }, e.prototype.clearChoices = function () {
          return this._store.dispatch((0, a.clearChoices)()), this;
        }, e.prototype.clearStore = function () {
          return this._store.dispatch((0, h.clearAll)()), this;
        }, e.prototype.clearInput = function () {
          var e = !this._isSelectOneElement;
          return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this;
        }, e.prototype._render = function () {
          if (!this._store.isLoading()) {
            this._currentState = this._store.state;
            var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                t = this._isSelectElement,
                i = this._currentState.items !== this._prevState.items;
            e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
          }
        }, e.prototype._renderChoices = function () {
          var e = this,
              t = this._store,
              i = t.activeGroups,
              n = t.activeChoices,
              s = document.createDocumentFragment();

          if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
            return e.choiceList.scrollToTop();
          }), i.length >= 1 && !this._isSearching) {
            var r = n.filter(function (e) {
              return !0 === e.placeholder && -1 === e.groupId;
            });
            r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
          } else n.length >= 1 && (s = this._createChoicesFragment(n, s));

          if (s.childNodes && s.childNodes.length > 0) {
            var o = this._store.activeItems,
                a = this._canAddItem(o, this.input.value);

            if (a.response) this.choiceList.append(s), this._highlightChoice();else {
              var c = this._getTemplate("notice", a.notice);

              this.choiceList.append(c);
            }
          } else {
            var l = void 0;
            c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
          }
        }, e.prototype._renderItems = function () {
          var e = this._store.activeItems || [];
          this.itemList.clear();

          var t = this._createItemsFragment(e);

          t.childNodes && this.itemList.append(t);
        }, e.prototype._createGroupsFragment = function (e, t, i) {
          var n = this;
          return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach(function (e) {
            var s = function (e) {
              return t.filter(function (t) {
                return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
              });
            }(e);

            if (s.length >= 1) {
              var r = n._getTemplate("choiceGroup", e);

              i.appendChild(r), n._createChoicesFragment(s, i, !0);
            }
          }), i;
        }, e.prototype._createChoicesFragment = function (e, t, i) {
          var s = this;
          void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);

          var r = this.config,
              o = r.renderSelectedChoices,
              a = r.searchResultLimit,
              c = r.renderChoiceLimit,
              l = this._isSearching ? f.sortByScore : this.config.sorter,
              h = function h(e) {
            if ("auto" !== o || s._isSelectOneElement || !e.selected) {
              var i = s._getTemplate("choice", e, s.config.itemSelectText);

              t.appendChild(i);
            }
          },
              u = e;

          "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
            return !e.selected;
          }));
          var d = u.reduce(function (e, t) {
            return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
          }, {
            placeholderChoices: [],
            normalChoices: []
          }),
              p = d.placeholderChoices,
              m = d.normalChoices;
          (this.config.shouldSort || this._isSearching) && m.sort(l);
          var v = u.length,
              g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
          this._isSearching ? v = a : c && c > 0 && !i && (v = c);

          for (var _ = 0; _ < v; _ += 1) {
            g[_] && h(g[_]);
          }

          return t;
        }, e.prototype._createItemsFragment = function (e, t) {
          var i = this;
          void 0 === t && (t = document.createDocumentFragment());
          var n = this.config,
              s = n.shouldSortItems,
              r = n.sorter,
              o = n.removeItemButton;
          return s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e.map(function (e) {
            return e.value;
          }).join(this.config.delimiter) : this.passedElement.options = e, e.forEach(function (e) {
            var n = i._getTemplate("item", e, o);

            t.appendChild(n);
          }), t;
        }, e.prototype._triggerChange = function (e) {
          null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
            value: e
          });
        }, e.prototype._selectPlaceholderChoice = function (e) {
          this._addItem({
            value: e.value,
            label: e.label,
            choiceId: e.id,
            groupId: e.groupId,
            placeholder: e.placeholder
          }), this._triggerChange(e.value);
        }, e.prototype._handleButtonAction = function (e, t) {
          if (e && t && this.config.removeItems && this.config.removeItemButton) {
            var i = t.parentNode && t.parentNode.dataset.id,
                n = i && e.find(function (e) {
              return e.id === parseInt(i, 10);
            });
            n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice));
          }
        }, e.prototype._handleItemAction = function (e, t, i) {
          var n = this;

          if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
            var s = t.dataset.id;
            e.forEach(function (e) {
              e.id !== parseInt("".concat(s), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
            }), this.input.focus();
          }
        }, e.prototype._handleChoiceAction = function (e, t) {
          if (e && t) {
            var i = t.dataset.id,
                n = i && this._store.getChoiceById(i);

            if (n) {
              var s = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                  r = this.dropdown.isActive;
              n.keyCode = s, this.passedElement.triggerEvent(d.EVENTS.choice, {
                choice: n
              }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({
                value: n.value,
                label: n.label,
                choiceId: n.id,
                groupId: n.groupId,
                customProperties: n.customProperties,
                placeholder: n.placeholder,
                keyCode: n.keyCode
              }), this._triggerChange(n.value)), this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
            }
          }
        }, e.prototype._handleBackspace = function (e) {
          if (this.config.removeItems && e) {
            var t = e[e.length - 1],
                i = e.some(function (e) {
              return e.highlighted;
            });
            this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
          }
        }, e.prototype._startLoading = function () {
          this._store.dispatch((0, h.setIsLoading)(!0));
        }, e.prototype._stopLoading = function () {
          this._store.dispatch((0, h.setIsLoading)(!1));
        }, e.prototype._handleLoadingState = function (e) {
          void 0 === e && (e = !0);
          var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
          e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "");
        }, e.prototype._handleSearch = function (e) {
          if (this.input.isFocussed) {
            var t = this._store.choices,
                i = this.config,
                n = i.searchFloor,
                s = i.searchChoices,
                r = t.some(function (e) {
              return !e.active;
            });

            if (null != e && e.length >= n) {
              var o = s ? this._searchChoices(e) : 0;
              this.passedElement.triggerEvent(d.EVENTS.search, {
                value: e,
                resultCount: o
              });
            } else r && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)));
          }
        }, e.prototype._canAddItem = function (e, t) {
          var i = !0,
              n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;

          if (!this._isSelectOneElement) {
            var s = (0, f.existsInArray)(e, t);
            this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && s && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
          }

          return {
            response: i,
            notice: n
          };
        }, e.prototype._searchChoices = function (e) {
          var t = "string" == typeof e ? e.trim() : e,
              i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
          if (t.length < 1 && t === "".concat(i, " ")) return 0;
          var s = this._store.searchableChoices,
              r = t,
              c = Object.assign(this.config.fuseOptions, {
            keys: n([], this.config.searchFields, !0),
            includeMatches: !0
          }),
              l = new o.default(s, c).search(r);
          return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length;
        }, e.prototype._addEventListeners = function () {
          var e = document.documentElement;
          e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
            passive: !0
          }), e.addEventListener("touchmove", this._onTouchMove, {
            passive: !0
          }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
            passive: !0
          }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
            passive: !0
          }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
            passive: !0
          })), this.input.element.addEventListener("keyup", this._onKeyUp, {
            passive: !0
          }), this.input.element.addEventListener("focus", this._onFocus, {
            passive: !0
          }), this.input.element.addEventListener("blur", this._onBlur, {
            passive: !0
          }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
            passive: !0
          }), this.input.addEventListeners();
        }, e.prototype._removeEventListeners = function () {
          var e = document.documentElement;
          e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
        }, e.prototype._onKeyDown = function (e) {
          var t = e.keyCode,
              i = this._store.activeItems,
              n = this.input.isFocussed,
              s = this.dropdown.isActive,
              r = this.itemList.hasChildren(),
              o = String.fromCharCode(t),
              a = /[a-zA-Z0-9-_ ]/.test(o),
              c = d.KEY_CODES.BACK_KEY,
              l = d.KEY_CODES.DELETE_KEY,
              h = d.KEY_CODES.ENTER_KEY,
              u = d.KEY_CODES.A_KEY,
              p = d.KEY_CODES.ESC_KEY,
              f = d.KEY_CODES.UP_KEY,
              m = d.KEY_CODES.DOWN_KEY,
              v = d.KEY_CODES.PAGE_UP_KEY,
              g = d.KEY_CODES.PAGE_DOWN_KEY;

          switch (this._isTextElement || s || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += o.toLowerCase())), t) {
            case u:
              return this._onSelectKey(e, r);

            case h:
              return this._onEnterKey(e, i, s);

            case p:
              return this._onEscapeKey(s);

            case f:
            case v:
            case m:
            case g:
              return this._onDirectionKey(e, s);

            case l:
            case c:
              return this._onDeleteKey(e, i, n);
          }
        }, e.prototype._onKeyUp = function (e) {
          var t = e.target,
              i = e.keyCode,
              n = this.input.value,
              s = this._store.activeItems,
              r = this._canAddItem(s, n),
              o = d.KEY_CODES.BACK_KEY,
              c = d.KEY_CODES.DELETE_KEY;

          if (this._isTextElement) {
            if (r.notice && n) {
              var l = this._getTemplate("notice", r.notice);

              this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
            } else this.hideDropdown(!0);
          } else {
            var h = (i === o || i === c) && t && !t.value,
                u = !this._isTextElement && this._isSearching,
                p = this._canSearch && r.response;
            h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue);
          }
          this._canSearch = this.config.searchEnabled;
        }, e.prototype._onSelectKey = function (e, t) {
          var i = e.ctrlKey,
              n = e.metaKey;
          (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
        }, e.prototype._onEnterKey = function (e, t, i) {
          var n = e.target,
              s = d.KEY_CODES.ENTER_KEY,
              r = n && n.hasAttribute("data-button");

          if (this._isTextElement && n && n.value) {
            var o = this.input.value;
            this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({
              value: o
            }), this._triggerChange(o), this.clearInput());
          }

          if (r && (this._handleButtonAction(t, n), e.preventDefault()), i) {
            var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
            a && (t[0] && (t[0].keyCode = s), this._handleChoiceAction(t, a)), e.preventDefault();
          } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault());
        }, e.prototype._onEscapeKey = function (e) {
          e && (this.hideDropdown(!0), this.containerOuter.focus());
        }, e.prototype._onDirectionKey = function (e, t) {
          var i = e.keyCode,
              n = e.metaKey,
              s = d.KEY_CODES.DOWN_KEY,
              r = d.KEY_CODES.PAGE_UP_KEY,
              o = d.KEY_CODES.PAGE_DOWN_KEY;

          if (t || this._isSelectOneElement) {
            this.showDropdown(), this._canSearch = !1;
            var a = i === s || i === o ? 1 : -1,
                c = "[data-choice-selectable]",
                l = void 0;
            if (n || i === o || i === r) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);else {
              var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
              l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c);
            }
            l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault();
          }
        }, e.prototype._onDeleteKey = function (e, t, i) {
          var n = e.target;
          this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault());
        }, e.prototype._onTouchMove = function () {
          this._wasTap && (this._wasTap = !1);
        }, e.prototype._onTouchEnd = function (e) {
          var t = (e || e.touches[0]).target;
          this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0;
        }, e.prototype._onMouseDown = function (e) {
          var t = e.target;

          if (t instanceof HTMLElement) {
            if (_ && this.choiceList.element.contains(t)) {
              var i = this.choiceList.element.firstElementChild,
                  n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
              this._isScrollingOnIe = n;
            }

            if (t !== this.input.element) {
              var s = t.closest("[data-button],[data-item],[data-choice]");

              if (s instanceof HTMLElement) {
                var r = e.shiftKey,
                    o = this._store.activeItems,
                    a = s.dataset;
                "button" in a ? this._handleButtonAction(o, s) : "item" in a ? this._handleItemAction(o, s, r) : "choice" in a && this._handleChoiceAction(o, s);
              }

              e.preventDefault();
            }
          }
        }, e.prototype._onMouseOver = function (e) {
          var t = e.target;
          t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
        }, e.prototype._onClick = function (e) {
          var t = e.target;
          this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
        }, e.prototype._onFocus = function (e) {
          var t,
              i = this,
              n = e.target;
          n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function () {
            n === i.input.element && i.containerOuter.addFocusState();
          }, t[d.SELECT_ONE_TYPE] = function () {
            i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
          }, t[d.SELECT_MULTIPLE_TYPE] = function () {
            n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
          }, t)[this.passedElement.element.type]();
        }, e.prototype._onBlur = function (e) {
          var t,
              i = this,
              n = e.target;

          if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
            var s = this._store.activeItems.some(function (e) {
              return e.highlighted;
            });

            ((t = {})[d.TEXT_TYPE] = function () {
              n === i.input.element && (i.containerOuter.removeFocusState(), s && i.unhighlightAll(), i.hideDropdown(!0));
            }, t[d.SELECT_ONE_TYPE] = function () {
              i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0);
            }, t[d.SELECT_MULTIPLE_TYPE] = function () {
              n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), s && i.unhighlightAll());
            }, t)[this.passedElement.element.type]();
          } else this._isScrollingOnIe = !1, this.input.element.focus();
        }, e.prototype._onFormReset = function () {
          this._store.dispatch((0, h.resetTo)(this._initialState));
        }, e.prototype._highlightChoice = function (e) {
          var t = this;
          void 0 === e && (e = null);
          var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));

          if (i.length) {
            var n = e;
            Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function (e) {
              e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
            }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
              el: n
            }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
          }
        }, e.prototype._addItem = function (e) {
          var t = e.value,
              i = e.label,
              n = void 0 === i ? null : i,
              s = e.choiceId,
              r = void 0 === s ? -1 : s,
              o = e.groupId,
              a = void 0 === o ? -1 : o,
              c = e.customProperties,
              h = void 0 === c ? {} : c,
              u = e.placeholder,
              p = void 0 !== u && u,
              f = e.keyCode,
              m = void 0 === f ? -1 : f,
              v = "string" == typeof t ? t.trim() : t,
              g = this._store.items,
              _ = n || v,
              y = r || -1,
              E = a >= 0 ? this._store.getGroupById(a) : null,
              b = g ? g.length + 1 : 1;

          this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({
            value: v,
            label: _,
            id: b,
            choiceId: y,
            groupId: a,
            customProperties: h,
            placeholder: p,
            keyCode: m
          })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, {
            id: b,
            value: v,
            label: _,
            customProperties: h,
            groupValue: E && E.value ? E.value : null,
            keyCode: m
          });
        }, e.prototype._removeItem = function (e) {
          var t = e.id,
              i = e.value,
              n = e.label,
              s = e.customProperties,
              r = e.choiceId,
              o = e.groupId,
              a = o && o >= 0 ? this._store.getGroupById(o) : null;
          t && r && (this._store.dispatch((0, l.removeItem)(t, r)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
            id: t,
            value: i,
            label: n,
            customProperties: s,
            groupValue: a && a.value ? a.value : null
          }));
        }, e.prototype._addChoice = function (e) {
          var t = e.value,
              i = e.label,
              n = void 0 === i ? null : i,
              s = e.isSelected,
              r = void 0 !== s && s,
              o = e.isDisabled,
              c = void 0 !== o && o,
              l = e.groupId,
              h = void 0 === l ? -1 : l,
              u = e.customProperties,
              d = void 0 === u ? {} : u,
              p = e.placeholder,
              f = void 0 !== p && p,
              m = e.keyCode,
              v = void 0 === m ? -1 : m;

          if (null != t) {
            var g = this._store.choices,
                _ = n || t,
                y = g ? g.length + 1 : 1,
                E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);

            this._store.dispatch((0, a.addChoice)({
              id: y,
              groupId: h,
              elementId: E,
              value: t,
              label: _,
              disabled: c,
              customProperties: d,
              placeholder: f,
              keyCode: v
            })), r && this._addItem({
              value: t,
              label: _,
              choiceId: y,
              customProperties: d,
              placeholder: f,
              keyCode: v
            });
          }
        }, e.prototype._addGroup = function (e) {
          var t = this,
              i = e.group,
              n = e.id,
              s = e.valueKey,
              r = void 0 === s ? "value" : s,
              o = e.labelKey,
              a = void 0 === o ? "label" : o,
              l = (0, f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
              h = n || Math.floor(new Date().valueOf() * Math.random()),
              u = !!i.disabled && i.disabled;
          l ? (this._store.dispatch((0, c.addGroup)({
            value: i.label,
            id: h,
            active: !0,
            disabled: u
          })), l.forEach(function (e) {
            var i = e.disabled || e.parentNode && e.parentNode.disabled;

            t._addChoice({
              value: e[r],
              label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML,
              isSelected: e.selected,
              isDisabled: i,
              groupId: h,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            });
          })) : this._store.dispatch((0, c.addGroup)({
            value: i.label,
            id: i.id,
            active: !1,
            disabled: i.disabled
          }));
        }, e.prototype._getTemplate = function (e) {
          for (var t, i = [], s = 1; s < arguments.length; s++) {
            i[s - 1] = arguments[s];
          }

          return (t = this._templates[e]).call.apply(t, n([this, this.config], i, !1));
        }, e.prototype._createTemplates = function () {
          var e = this.config.callbackOnCreateTemplates,
              t = {};
          e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, r.default)(g.default, t);
        }, e.prototype._createElements = function () {
          this.containerOuter = new u.Container({
            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.containerInner = new u.Container({
            element: this._getTemplate("containerInner"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.input = new u.Input({
            element: this._getTemplate("input", this._placeholderValue),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            preventPaste: !this.config.paste
          }), this.choiceList = new u.List({
            element: this._getTemplate("choiceList", this._isSelectOneElement)
          }), this.itemList = new u.List({
            element: this._getTemplate("itemList", this._isSelectOneElement)
          }), this.dropdown = new u.Dropdown({
            element: this._getTemplate("dropdown"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          });
        }, e.prototype._createStructure = function () {
          this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
        }, e.prototype._addPredefinedGroups = function (e) {
          var t = this,
              i = this.passedElement.placeholderOption;
          i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({
            value: i.value,
            label: i.innerHTML,
            isSelected: i.selected,
            isDisabled: i.disabled,
            placeholder: !0
          }), e.forEach(function (e) {
            return t._addGroup({
              group: e,
              id: e.id || null
            });
          });
        }, e.prototype._addPredefinedChoices = function (e) {
          var t = this;
          this.config.shouldSort && e.sort(this.config.sorter);
          var i = e.some(function (e) {
            return e.selected;
          }),
              n = e.findIndex(function (e) {
            return void 0 === e.disabled || !e.disabled;
          });
          e.forEach(function (e, s) {
            var r = e.value,
                o = void 0 === r ? "" : r,
                a = e.label,
                c = e.customProperties,
                l = e.placeholder;
            if (t._isSelectElement) {
              if (e.choices) t._addGroup({
                group: e,
                id: e.id || null
              });else {
                var h = !(!t._isSelectOneElement || i || s !== n) || e.selected,
                    u = e.disabled;

                t._addChoice({
                  value: o,
                  label: a,
                  isSelected: !!h,
                  isDisabled: !!u,
                  placeholder: !!l,
                  customProperties: c
                });
              }
            } else t._addChoice({
              value: o,
              label: a,
              isSelected: !!e.selected,
              isDisabled: !!e.disabled,
              placeholder: !!e.placeholder,
              customProperties: c
            });
          });
        }, e.prototype._addPredefinedItems = function (e) {
          var t = this;
          e.forEach(function (e) {
            "object" == _typeof(e) && e.value && t._addItem({
              value: e.value,
              label: e.label,
              choiceId: e.id,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            }), "string" == typeof e && t._addItem({
              value: e
            });
          });
        }, e.prototype._setChoiceOrItem = function (e) {
          var t = this;
          ({
            object: function object() {
              e.value && (t._isTextElement ? t._addItem({
                value: e.value,
                label: e.label,
                choiceId: e.id,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              }) : t._addChoice({
                value: e.value,
                label: e.label,
                isSelected: !0,
                isDisabled: !1,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              }));
            },
            string: function string() {
              t._isTextElement ? t._addItem({
                value: e
              }) : t._addChoice({
                value: e,
                label: e,
                isSelected: !0,
                isDisabled: !1
              });
            }
          })[(0, f.getType)(e).toLowerCase()]();
        }, e.prototype._findAndSelectChoiceByValue = function (e) {
          var t = this,
              i = this._store.choices.find(function (i) {
            return t.config.valueComparer(i.value, e);
          });

          i && !i.selected && this._addItem({
            value: i.value,
            label: i.label,
            choiceId: i.id,
            groupId: i.groupId,
            customProperties: i.customProperties,
            placeholder: i.placeholder,
            keyCode: i.keyCode
          });
        }, e.prototype._generatePlaceholderValue = function () {
          if (this._isSelectElement && this.passedElement.placeholderOption) {
            var e = this.passedElement.placeholderOption;
            return e ? e.text : null;
          }

          var t = this.config,
              i = t.placeholder,
              n = t.placeholderValue,
              s = this.passedElement.element.dataset;

          if (i) {
            if (n) return n;
            if (s.placeholder) return s.placeholder;
          }

          return null;
        }, e;
      }();

      t.default = E;
    },
    613: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(799),
          s = i(883),
          r = function () {
        function e(e) {
          var t = e.element,
              i = e.type,
              n = e.classNames,
              s = e.position;
          this.element = t, this.classNames = n, this.type = i, this.position = s, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
        }

        return e.prototype.addEventListeners = function () {
          this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
        }, e.prototype.removeEventListeners = function () {
          this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
        }, e.prototype.shouldFlip = function (e) {
          if ("number" != typeof e) return !1;
          var t = !1;
          return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t;
        }, e.prototype.setActiveDescendant = function (e) {
          this.element.setAttribute("aria-activedescendant", e);
        }, e.prototype.removeActiveDescendant = function () {
          this.element.removeAttribute("aria-activedescendant");
        }, e.prototype.open = function (e) {
          this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
        }, e.prototype.close = function () {
          this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
        }, e.prototype.focus = function () {
          this.isFocussed || this.element.focus();
        }, e.prototype.addFocusState = function () {
          this.element.classList.add(this.classNames.focusState);
        }, e.prototype.removeFocusState = function () {
          this.element.classList.remove(this.classNames.focusState);
        }, e.prototype.enable = function () {
          this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === s.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
        }, e.prototype.disable = function () {
          this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === s.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
        }, e.prototype.wrap = function (e) {
          (0, n.wrap)(e, this.element);
        }, e.prototype.unwrap = function (e) {
          this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element));
        }, e.prototype.addLoadingState = function () {
          this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
        }, e.prototype.removeLoadingState = function () {
          this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
        }, e.prototype._onFocus = function () {
          this.isFocussed = !0;
        }, e.prototype._onBlur = function () {
          this.isFocussed = !1;
        }, e;
      }();

      t.default = r;
    },
    217: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e) {
          var t = e.element,
              i = e.type,
              n = e.classNames;
          this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
        }

        return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
          get: function get() {
            return this.element.getBoundingClientRect().bottom;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.getChild = function (e) {
          return this.element.querySelector(e);
        }, e.prototype.show = function () {
          return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
        }, e.prototype.hide = function () {
          return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
        }, e;
      }();

      t.default = i;
    },
    520: function _(e, t, i) {
      var n = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
      var s = n(i(217));
      t.Dropdown = s.default;
      var r = n(i(613));
      t.Container = r.default;
      var o = n(i(11));
      t.Input = o.default;
      var a = n(i(624));
      t.List = a.default;
      var c = n(i(541));
      t.WrappedInput = c.default;
      var l = n(i(982));
      t.WrappedSelect = l.default;
    },
    11: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(799),
          s = i(883),
          r = function () {
        function e(e) {
          var t = e.element,
              i = e.type,
              n = e.classNames,
              s = e.preventPaste;
          this.element = t, this.type = i, this.classNames = n, this.preventPaste = s, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
        }

        return Object.defineProperty(e.prototype, "placeholder", {
          set: function set(e) {
            this.element.placeholder = e;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
          get: function get() {
            return (0, n.sanitise)(this.element.value);
          },
          set: function set(e) {
            this.element.value = e;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "rawValue", {
          get: function get() {
            return this.element.value;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.addEventListeners = function () {
          this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
            passive: !0
          }), this.element.addEventListener("focus", this._onFocus, {
            passive: !0
          }), this.element.addEventListener("blur", this._onBlur, {
            passive: !0
          });
        }, e.prototype.removeEventListeners = function () {
          this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
        }, e.prototype.enable = function () {
          this.element.removeAttribute("disabled"), this.isDisabled = !1;
        }, e.prototype.disable = function () {
          this.element.setAttribute("disabled", ""), this.isDisabled = !0;
        }, e.prototype.focus = function () {
          this.isFocussed || this.element.focus();
        }, e.prototype.blur = function () {
          this.isFocussed && this.element.blur();
        }, e.prototype.clear = function (e) {
          return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
        }, e.prototype.setWidth = function () {
          var e = this.element,
              t = e.style,
              i = e.value,
              n = e.placeholder;
          t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch");
        }, e.prototype.setActiveDescendant = function (e) {
          this.element.setAttribute("aria-activedescendant", e);
        }, e.prototype.removeActiveDescendant = function () {
          this.element.removeAttribute("aria-activedescendant");
        }, e.prototype._onInput = function () {
          this.type !== s.SELECT_ONE_TYPE && this.setWidth();
        }, e.prototype._onPaste = function (e) {
          this.preventPaste && e.preventDefault();
        }, e.prototype._onFocus = function () {
          this.isFocussed = !0;
        }, e.prototype._onBlur = function () {
          this.isFocussed = !1;
        }, e;
      }();

      t.default = r;
    },
    624: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(883),
          s = function () {
        function e(e) {
          var t = e.element;
          this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
        }

        return e.prototype.clear = function () {
          this.element.innerHTML = "";
        }, e.prototype.append = function (e) {
          this.element.appendChild(e);
        }, e.prototype.getChild = function (e) {
          return this.element.querySelector(e);
        }, e.prototype.hasChildren = function () {
          return this.element.hasChildNodes();
        }, e.prototype.scrollToTop = function () {
          this.element.scrollTop = 0;
        }, e.prototype.scrollToChildElement = function (e, t) {
          var i = this;

          if (e) {
            var n = this.element.offsetHeight,
                s = this.element.scrollTop + n,
                r = e.offsetHeight,
                o = e.offsetTop + r,
                a = t > 0 ? this.element.scrollTop + o - s : e.offsetTop;
            requestAnimationFrame(function () {
              i._animateScroll(a, t);
            });
          }
        }, e.prototype._scrollDown = function (e, t, i) {
          var n = (i - e) / t,
              s = n > 1 ? n : 1;
          this.element.scrollTop = e + s;
        }, e.prototype._scrollUp = function (e, t, i) {
          var n = (e - i) / t,
              s = n > 1 ? n : 1;
          this.element.scrollTop = e - s;
        }, e.prototype._animateScroll = function (e, t) {
          var i = this,
              s = n.SCROLLING_SPEED,
              r = this.element.scrollTop,
              o = !1;
          t > 0 ? (this._scrollDown(r, s, e), r < e && (o = !0)) : (this._scrollUp(r, s, e), r > e && (o = !0)), o && requestAnimationFrame(function () {
            i._animateScroll(e, t);
          });
        }, e;
      }();

      t.default = s;
    },
    730: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(799),
          s = function () {
        function e(e) {
          var t = e.element,
              i = e.classNames;
          if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
          this.isDisabled = !1;
        }

        return Object.defineProperty(e.prototype, "isActive", {
          get: function get() {
            return "active" === this.element.dataset.choice;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "dir", {
          get: function get() {
            return this.element.dir;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
          get: function get() {
            return this.element.value;
          },
          set: function set(e) {
            this.element.value = e;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.conceal = function () {
          this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
          var e = this.element.getAttribute("style");
          e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
        }, e.prototype.reveal = function () {
          this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
          var e = this.element.getAttribute("data-choice-orig-style");
          e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
        }, e.prototype.enable = function () {
          this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
        }, e.prototype.disable = function () {
          this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
        }, e.prototype.triggerEvent = function (e, t) {
          (0, n.dispatchEvent)(this.element, e, t);
        }, e;
      }();

      t.default = s;
    },
    541: function _(e, t, i) {
      var _n,
          s = this && this.__extends || (_n = function n(e, t) {
        return _n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var i in t) {
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
        }, _n(e, t);
      }, function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
          this.constructor = e;
        }

        _n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
      }),
          r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var o = function (e) {
        function t(t) {
          var i = t.element,
              n = t.classNames,
              s = t.delimiter,
              r = e.call(this, {
            element: i,
            classNames: n
          }) || this;
          return r.delimiter = s, r;
        }

        return s(t, e), Object.defineProperty(t.prototype, "value", {
          get: function get() {
            return this.element.value;
          },
          set: function set(e) {
            this.element.setAttribute("value", e), this.element.value = e;
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }(r(i(730)).default);

      t.default = o;
    },
    982: function _(e, t, i) {
      var _n2,
          s = this && this.__extends || (_n2 = function n(e, t) {
        return _n2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var i in t) {
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
        }, _n2(e, t);
      }, function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
          this.constructor = e;
        }

        _n2(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
      }),
          r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var o = function (e) {
        function t(t) {
          var i = t.element,
              n = t.classNames,
              s = t.template,
              r = e.call(this, {
            element: i,
            classNames: n
          }) || this;
          return r.template = s, r;
        }

        return s(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
          get: function get() {
            return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "optionGroups", {
          get: function get() {
            return Array.from(this.element.getElementsByTagName("OPTGROUP"));
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "options", {
          get: function get() {
            return Array.from(this.element.options);
          },
          set: function set(e) {
            var t = this,
                i = document.createDocumentFragment();
            e.forEach(function (e) {
              return n = e, s = t.template(n), void i.appendChild(s);
              var n, s;
            }), this.appendDocFragment(i);
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.appendDocFragment = function (e) {
          this.element.innerHTML = "", this.element.appendChild(e);
        }, t;
      }(r(i(730)).default);

      t.default = o;
    },
    883: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = {
        showDropdown: "showDropdown",
        hideDropdown: "hideDropdown",
        change: "change",
        choice: "choice",
        search: "search",
        addItem: "addItem",
        removeItem: "removeItem",
        highlightItem: "highlightItem",
        highlightChoice: "highlightChoice",
        unhighlightItem: "unhighlightItem"
      }, t.ACTION_TYPES = {
        ADD_CHOICE: "ADD_CHOICE",
        FILTER_CHOICES: "FILTER_CHOICES",
        ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
        CLEAR_CHOICES: "CLEAR_CHOICES",
        ADD_GROUP: "ADD_GROUP",
        ADD_ITEM: "ADD_ITEM",
        REMOVE_ITEM: "REMOVE_ITEM",
        HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
        CLEAR_ALL: "CLEAR_ALL",
        RESET_TO: "RESET_TO",
        SET_IS_LOADING: "SET_IS_LOADING"
      }, t.KEY_CODES = {
        BACK_KEY: 46,
        DELETE_KEY: 8,
        ENTER_KEY: 13,
        A_KEY: 65,
        ESC_KEY: 27,
        UP_KEY: 38,
        DOWN_KEY: 40,
        PAGE_UP_KEY: 33,
        PAGE_DOWN_KEY: 34
      }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4;
    },
    789: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
      var n = i(799);
      t.DEFAULT_CLASSNAMES = {
        containerOuter: "choices",
        containerInner: "choices__inner",
        input: "choices__input",
        inputCloned: "choices__input--cloned",
        list: "choices__list",
        listItems: "choices__list--multiple",
        listSingle: "choices__list--single",
        listDropdown: "choices__list--dropdown",
        item: "choices__item",
        itemSelectable: "choices__item--selectable",
        itemDisabled: "choices__item--disabled",
        itemChoice: "choices__item--choice",
        placeholder: "choices__placeholder",
        group: "choices__group",
        groupHeading: "choices__heading",
        button: "choices__button",
        activeState: "is-active",
        focusState: "is-focused",
        openState: "is-open",
        disabledState: "is-disabled",
        highlightedState: "is-highlighted",
        selectedState: "is-selected",
        flippedState: "is-flipped",
        loadingState: "is-loading",
        noResults: "has-no-results",
        noChoices: "has-no-choices"
      }, t.DEFAULT_CONFIG = {
        items: [],
        choices: [],
        silent: !1,
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: !0,
        addItemFilter: null,
        removeItems: !0,
        removeItemButton: !1,
        editItems: !1,
        allowHTML: !0,
        duplicateItemsAllowed: !0,
        delimiter: ",",
        paste: !0,
        searchEnabled: !0,
        searchChoices: !0,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ["label", "value"],
        position: "auto",
        resetScrollPosition: !0,
        shouldSort: !0,
        shouldSortItems: !1,
        sorter: n.sortByAlpha,
        placeholder: !0,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: "auto",
        loadingText: "Loading...",
        noResultsText: "No results found",
        noChoicesText: "No choices to choose from",
        itemSelectText: "Press to select",
        uniqueItemText: "Only unique values can be added",
        customAddItemText: "Only values matching specific conditions can be added",
        addItemText: function addItemText(e) {
          return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>');
        },
        maxItemText: function maxItemText(e) {
          return "Only ".concat(e, " values can be added");
        },
        valueComparer: function valueComparer(e, t) {
          return e === t;
        },
        fuseOptions: {
          includeScore: !0
        },
        labelId: "",
        callbackOnInit: null,
        callbackOnCreateTemplates: null,
        classNames: t.DEFAULT_CLASSNAMES
      };
    },
    18: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    978: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    948: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    359: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    285: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    533: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    187: function _(e, t, i) {
      var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
        void 0 === n && (n = i), Object.defineProperty(e, n, {
          enumerable: !0,
          get: function get() {
            return t[i];
          }
        });
      } : function (e, t, i, n) {
        void 0 === n && (n = i), e[n] = t[i];
      }),
          s = this && this.__exportStar || function (e, t) {
        for (var i in e) {
          "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
        }
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), s(i(18), t), s(i(978), t), s(i(948), t), s(i(359), t), s(i(285), t), s(i(533), t), s(i(287), t), s(i(132), t), s(i(837), t), s(i(598), t), s(i(369), t), s(i(37), t), s(i(47), t), s(i(923), t), s(i(876), t);
    },
    287: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    132: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    837: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    598: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    37: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    369: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    47: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    923: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    876: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    799: function _(e, t) {
      var i;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function (e, t) {
        return Math.floor(Math.random() * (t - e) + e);
      }, t.generateChars = function (e) {
        return Array.from({
          length: e
        }, function () {
          return (0, t.getRandomNumber)(0, 36).toString(36);
        }).join("");
      }, t.generateId = function (e, i) {
        var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4);
        return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n);
      }, t.getType = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }, t.isType = function (e, i) {
        return null != i && (0, t.getType)(i) === e;
      }, t.wrap = function (e, t) {
        return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e);
      }, t.getAdjacentEl = function (e, t, i) {
        void 0 === i && (i = 1);

        for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), s = e[n]; s;) {
          if (s.matches(t)) return s;
          s = s[n];
        }

        return s;
      }, t.isScrolledIntoView = function (e, t, i) {
        return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop);
      }, t.sanitise = function (e) {
        return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      }, t.strToEl = (i = document.createElement("div"), function (e) {
        var t = e.trim();
        i.innerHTML = t;

        for (var n = i.children[0]; i.firstChild;) {
          i.removeChild(i.firstChild);
        }

        return n;
      }), t.sortByAlpha = function (e, t) {
        var i = e.value,
            n = e.label,
            s = void 0 === n ? i : n,
            r = t.value,
            o = t.label,
            a = void 0 === o ? r : o;
        return s.localeCompare(a, [], {
          sensitivity: "base",
          ignorePunctuation: !0,
          numeric: !0
        });
      }, t.sortByScore = function (e, t) {
        var i = e.score,
            n = void 0 === i ? 0 : i,
            s = t.score;
        return n - (void 0 === s ? 0 : s);
      }, t.dispatchEvent = function (e, t, i) {
        void 0 === i && (i = null);
        var n = new CustomEvent(t, {
          detail: i,
          bubbles: !0,
          cancelable: !0
        });
        return e.dispatchEvent(n);
      }, t.existsInArray = function (e, t, i) {
        return void 0 === i && (i = "value"), e.some(function (e) {
          return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
        });
      }, t.cloneObject = function (e) {
        return JSON.parse(JSON.stringify(e));
      }, t.diff = function (e, t) {
        var i = Object.keys(e).sort(),
            n = Object.keys(t).sort();
        return i.filter(function (e) {
          return n.indexOf(e) < 0;
        });
      };
    },
    273: function _(e, t) {
      var i = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
          case "ADD_CHOICE":
            var s = n,
                r = {
              id: s.id,
              elementId: s.elementId,
              groupId: s.groupId,
              value: s.value,
              label: s.label || s.value,
              disabled: s.disabled || !1,
              selected: !1,
              active: !0,
              score: 9999,
              customProperties: s.customProperties,
              placeholder: s.placeholder || !1
            };
            return i(i([], e, !0), [r], !1);

          case "ADD_ITEM":
            var o = n;
            return o.choiceId > -1 ? e.map(function (e) {
              var t = e;
              return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t;
            }) : e;

          case "REMOVE_ITEM":
            var a = n;
            return a.choiceId && a.choiceId > -1 ? e.map(function (e) {
              var t = e;
              return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t;
            }) : e;

          case "FILTER_CHOICES":
            var c = n;
            return e.map(function (e) {
              var t = e;
              return t.active = c.results.some(function (e) {
                var i = e.item,
                    n = e.score;
                return i.id === t.id && (t.score = n, !0);
              }), t;
            });

          case "ACTIVATE_CHOICES":
            var l = n;
            return e.map(function (e) {
              var t = e;
              return t.active = l.active, t;
            });

          case "CLEAR_CHOICES":
            return t.defaultState;

          default:
            return e;
        }
      };
    },
    871: function _(e, t) {
      var i = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
          case "ADD_GROUP":
            var s = n;
            return i(i([], e, !0), [{
              id: s.id,
              value: s.value,
              active: s.active,
              disabled: s.disabled
            }], !1);

          case "CLEAR_CHOICES":
            return [];

          default:
            return e;
        }
      };
    },
    655: function _(e, t, i) {
      var n = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0;
      var s = i(857),
          r = n(i(52)),
          o = n(i(871)),
          a = n(i(273)),
          c = n(i(502)),
          l = i(799);
      t.defaultState = {
        groups: [],
        items: [],
        choices: [],
        loading: !1
      };
      var h = (0, s.combineReducers)({
        items: r.default,
        groups: o.default,
        choices: a.default,
        loading: c.default
      });

      t.default = function (e, i) {
        var n = e;
        if ("CLEAR_ALL" === i.type) n = t.defaultState;else if ("RESET_TO" === i.type) return (0, l.cloneObject)(i.state);
        return h(n, i);
      };
    },
    52: function _(e, t) {
      var i = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
          case "ADD_ITEM":
            var s = n;
            return i(i([], e, !0), [{
              id: s.id,
              choiceId: s.choiceId,
              groupId: s.groupId,
              value: s.value,
              label: s.label,
              active: !0,
              highlighted: !1,
              customProperties: s.customProperties,
              placeholder: s.placeholder || !1,
              keyCode: null
            }], !1).map(function (e) {
              var t = e;
              return t.highlighted = !1, t;
            });

          case "REMOVE_ITEM":
            return e.map(function (e) {
              var t = e;
              return t.id === n.id && (t.active = !1), t;
            });

          case "HIGHLIGHT_ITEM":
            var r = n;
            return e.map(function (e) {
              var t = e;
              return t.id === r.id && (t.highlighted = r.highlighted), t;
            });

          default:
            return e;
        }
      };
    },
    502: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = !1, t.default = function (e, i) {
        return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e;
      };
    },
    744: function _(e, t, i) {
      var n = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      },
          s = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var r = i(857),
          o = s(i(655)),
          a = function () {
        function e() {
          this._store = (0, r.createStore)(o.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        }

        return e.prototype.subscribe = function (e) {
          this._store.subscribe(e);
        }, e.prototype.dispatch = function (e) {
          this._store.dispatch(e);
        }, Object.defineProperty(e.prototype, "state", {
          get: function get() {
            return this._store.getState();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "items", {
          get: function get() {
            return this.state.items;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeItems", {
          get: function get() {
            return this.items.filter(function (e) {
              return !0 === e.active;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
          get: function get() {
            return this.items.filter(function (e) {
              return e.active && e.highlighted;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "choices", {
          get: function get() {
            return this.state.choices;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeChoices", {
          get: function get() {
            return this.choices.filter(function (e) {
              return !0 === e.active;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "selectableChoices", {
          get: function get() {
            return this.choices.filter(function (e) {
              return !0 !== e.disabled;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "searchableChoices", {
          get: function get() {
            return this.selectableChoices.filter(function (e) {
              return !0 !== e.placeholder;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "placeholderChoice", {
          get: function get() {
            return n([], this.choices, !0).reverse().find(function (e) {
              return !0 === e.placeholder;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "groups", {
          get: function get() {
            return this.state.groups;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeGroups", {
          get: function get() {
            var e = this.groups,
                t = this.choices;
            return e.filter(function (e) {
              var i = !0 === e.active && !1 === e.disabled,
                  n = t.some(function (e) {
                return !0 === e.active && !1 === e.disabled;
              });
              return i && n;
            }, []);
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.isLoading = function () {
          return this.state.loading;
        }, e.prototype.getChoiceById = function (e) {
          return this.activeChoices.find(function (t) {
            return t.id === parseInt(e, 10);
          });
        }, e.prototype.getGroupById = function (e) {
          return this.groups.find(function (t) {
            return t.id === e;
          });
        }, e;
      }();

      t.default = a;
    },
    686: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        containerOuter: function containerOuter(e, t, i, n, s, r, o) {
          var a = e.classNames.containerOuter,
              c = Object.assign(document.createElement("div"), {
            className: a
          });
          return c.dataset.type = r, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", s ? "combobox" : "listbox"), s && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labeledby", o), c;
        },
        containerInner: function containerInner(e) {
          var t = e.classNames.containerInner;
          return Object.assign(document.createElement("div"), {
            className: t
          });
        },
        itemList: function itemList(e, t) {
          var i = e.classNames,
              n = i.list,
              s = i.listSingle,
              r = i.listItems;
          return Object.assign(document.createElement("div"), {
            className: "".concat(n, " ").concat(t ? s : r)
          });
        },
        placeholder: function placeholder(e, t) {
          var i,
              n = e.allowHTML,
              s = e.classNames.placeholder;
          return Object.assign(document.createElement("div"), ((i = {
            className: s
          })[n ? "innerHTML" : "innerText"] = t, i));
        },
        item: function item(e, t, i) {
          var n,
              s,
              r = e.allowHTML,
              o = e.classNames,
              a = o.item,
              c = o.button,
              l = o.highlightedState,
              h = o.itemSelectable,
              u = o.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.customProperties,
              v = t.active,
              g = t.disabled,
              _ = t.highlighted,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
            className: a
          })[r ? "innerHTML" : "innerText"] = f, n));

          if (Object.assign(E.dataset, {
            item: "",
            id: d,
            value: p,
            customProperties: m
          }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), y && E.classList.add(u), E.classList.add(_ ? l : h), i) {
            g && E.classList.remove(h), E.dataset.deletable = "";
            var b = "Remove item",
                S = Object.assign(document.createElement("button"), ((s = {
              type: "button",
              className: c
            })[r ? "innerHTML" : "innerText"] = b, s));
            S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", E.appendChild(S);
          }

          return E;
        },
        choiceList: function choiceList(e, t) {
          var i = e.classNames.list,
              n = Object.assign(document.createElement("div"), {
            className: i
          });
          return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
        },
        choiceGroup: function choiceGroup(e, t) {
          var i,
              n = e.allowHTML,
              s = e.classNames,
              r = s.group,
              o = s.groupHeading,
              a = s.itemDisabled,
              c = t.id,
              l = t.value,
              h = t.disabled,
              u = Object.assign(document.createElement("div"), {
            className: "".concat(r, " ").concat(h ? a : "")
          });
          return u.setAttribute("role", "group"), Object.assign(u.dataset, {
            group: "",
            id: c,
            value: l
          }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = {
            className: o
          })[n ? "innerHTML" : "innerText"] = l, i))), u;
        },
        choice: function choice(e, t, i) {
          var n,
              s = e.allowHTML,
              r = e.classNames,
              o = r.item,
              a = r.itemChoice,
              c = r.itemSelectable,
              l = r.selectedState,
              h = r.itemDisabled,
              u = r.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.groupId,
              v = t.elementId,
              g = t.disabled,
              _ = t.selected,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
            id: v
          })[s ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), n));
          return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(E.dataset, {
            choice: "",
            id: d,
            value: p,
            selectText: i
          }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), E.dataset.choiceSelectable = ""), E;
        },
        input: function input(e, t) {
          var i = e.classNames,
              n = i.input,
              s = i.inputCloned,
              r = Object.assign(document.createElement("input"), {
            type: "search",
            name: "search_terms",
            className: "".concat(n, " ").concat(s),
            autocomplete: "off",
            autocapitalize: "off",
            spellcheck: !1
          });
          return r.setAttribute("role", "textbox"), r.setAttribute("aria-autocomplete", "list"), r.setAttribute("aria-label", t), r;
        },
        dropdown: function dropdown(e) {
          var t = e.classNames,
              i = t.list,
              n = t.listDropdown,
              s = document.createElement("div");
          return s.classList.add(i, n), s.setAttribute("aria-expanded", "false"), s;
        },
        notice: function notice(e, t, i) {
          var n,
              s = e.allowHTML,
              r = e.classNames,
              o = r.item,
              a = r.itemChoice,
              c = r.noResults,
              l = r.noChoices;
          void 0 === i && (i = "");
          var h = [o, a];
          return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[s ? "innerHTML" : "innerText"] = t, n.className = h.join(" "), n));
        },
        option: function option(e) {
          var t = e.label,
              i = e.value,
              n = e.customProperties,
              s = e.active,
              r = e.disabled,
              o = new Option(t, i, !1, s);
          return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!r, o;
        }
      };
      t.default = i;
    },
    996: function _(e) {
      var t = function t(e) {
        return function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && !function (e) {
          var t = Object.prototype.toString.call(e);
          return "[object RegExp]" === t || "[object Date]" === t || function (e) {
            return e.$$typeof === i;
          }(e);
        }(e);
      },
          i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
        var i;
      }

      function s(e, t, i) {
        return e.concat(t).map(function (e) {
          return n(e, i);
        });
      }

      function r(e) {
        return Object.keys(e).concat(function (e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
            return e.propertyIsEnumerable(t);
          }) : [];
        }(e));
      }

      function o(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }

      function a(e, i, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || s, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(i);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function (e, t, i) {
          var s = {};
          return i.isMergeableObject(e) && r(e).forEach(function (t) {
            s[t] = n(e[t], i);
          }), r(t).forEach(function (r) {
            (function (e, t) {
              return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
            })(e, r) || (o(e, r) && i.isMergeableObject(t[r]) ? s[r] = function (e, t) {
              if (!t.customMerge) return a;
              var i = t.customMerge(e);
              return "function" == typeof i ? i : a;
            }(r, i)(e[r], t[r], i) : s[r] = n(t[r], i));
          }), s;
        }(e, i, c) : n(i, c);
      }

      a.all = function (e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function (e, i) {
          return a(e, i, t);
        }, {});
      };

      var c = a;
      e.exports = c;
    },
    221: function _(e, t, i) {
      function n(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e);
      }

      function s(e) {
        return "string" == typeof e;
      }

      function r(e) {
        return "number" == typeof e;
      }

      function o(e) {
        return "object" == _typeof(e);
      }

      function a(e) {
        return null != e;
      }

      function c(e) {
        return !e.trim().length;
      }

      function l(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
      }

      i.r(t), i.d(t, {
        default: function _default() {
          return R;
        }
      });
      var h = Object.prototype.hasOwnProperty;

      var u = /*#__PURE__*/function () {
        function u(e) {
          var _this = this;

          _classCallCheck(this, u);

          this._keys = [], this._keyMap = {};
          var t = 0;
          e.forEach(function (e) {
            var i = d(e);
            t += i.weight, _this._keys.push(i), _this._keyMap[i.id] = i, t += i.weight;
          }), this._keys.forEach(function (e) {
            e.weight /= t;
          });
        }

        _createClass(u, [{
          key: "get",
          value: function get(e) {
            return this._keyMap[e];
          }
        }, {
          key: "keys",
          value: function keys() {
            return this._keys;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return JSON.stringify(this._keys);
          }
        }]);

        return u;
      }();

      function d(e) {
        var t = null,
            i = null,
            r = null,
            o = 1;
        if (s(e) || n(e)) r = e, t = p(e), i = f(e);else {
          if (!h.call(e, "name")) throw new Error("Missing name property in key");
          var _n3 = e.name;
          if (r = _n3, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error(function (e) {
            return "Property 'weight' in key '".concat(e, "' must be a positive integer");
          }(_n3));
          t = p(_n3), i = f(_n3);
        }
        return {
          path: t,
          id: i,
          weight: o,
          src: r
        };
      }

      function p(e) {
        return n(e) ? e : e.split(".");
      }

      function f(e) {
        return n(e) ? e.join(".") : e;
      }

      var m = {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: function sortFn(e, t) {
          return e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1;
        },
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1,
        location: 0,
        threshold: .6,
        distance: 100,
        useExtendedSearch: !1,
        getFn: function getFn(e, t) {
          var i = [],
              c = !1;

          var h = function h(e, t, u) {
            if (a(e)) if (t[u]) {
              var _d = e[t[u]];
              if (!a(_d)) return;
              if (u === t.length - 1 && (s(_d) || r(_d) || function (e) {
                return !0 === e || !1 === e || function (e) {
                  return o(e) && null !== e;
                }(e) && "[object Boolean]" == l(e);
              }(_d))) i.push(function (e) {
                return null == e ? "" : function (e) {
                  if ("string" == typeof e) return e;
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                }(e);
              }(_d));else if (n(_d)) {
                c = !0;

                for (var _e = 0, _i = _d.length; _e < _i; _e += 1) {
                  h(_d[_e], t, u + 1);
                }
              } else t.length && h(_d, t, u + 1);
            } else i.push(e);
          };

          return h(e, s(t) ? t.split(".") : t, 0), c ? i : i[0];
        },
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
      };
      var v = /[^ ]+/g;

      var g = /*#__PURE__*/function () {
        function g() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$getFn = _ref.getFn,
              e = _ref$getFn === void 0 ? m.getFn : _ref$getFn,
              _ref$fieldNormWeight = _ref.fieldNormWeight,
              t = _ref$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref$fieldNormWeight;

          _classCallCheck(this, g);

          this.norm = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var i = new Map(),
                n = Math.pow(10, t);
            return {
              get: function get(t) {
                var s = t.match(v).length;
                if (i.has(s)) return i.get(s);
                var r = 1 / Math.pow(s, .5 * e),
                    o = parseFloat(Math.round(r * n) / n);
                return i.set(s, o), o;
              },
              clear: function clear() {
                i.clear();
              }
            };
          }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
        }

        _createClass(g, [{
          key: "setSources",
          value: function setSources() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.docs = e;
          }
        }, {
          key: "setIndexRecords",
          value: function setIndexRecords() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.records = e;
          }
        }, {
          key: "setKeys",
          value: function setKeys() {
            var _this2 = this;

            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.keys = e, this._keysMap = {}, e.forEach(function (e, t) {
              _this2._keysMap[e.id] = t;
            });
          }
        }, {
          key: "create",
          value: function create() {
            var _this3 = this;

            !this.isCreated && this.docs.length && (this.isCreated = !0, s(this.docs[0]) ? this.docs.forEach(function (e, t) {
              _this3._addString(e, t);
            }) : this.docs.forEach(function (e, t) {
              _this3._addObject(e, t);
            }), this.norm.clear());
          }
        }, {
          key: "add",
          value: function add(e) {
            var t = this.size();
            s(e) ? this._addString(e, t) : this._addObject(e, t);
          }
        }, {
          key: "removeAt",
          value: function removeAt(e) {
            this.records.splice(e, 1);

            for (var _t = e, _i2 = this.size(); _t < _i2; _t += 1) {
              this.records[_t].i -= 1;
            }
          }
        }, {
          key: "getValueForItemAtKeyId",
          value: function getValueForItemAtKeyId(e, t) {
            return e[this._keysMap[t]];
          }
        }, {
          key: "size",
          value: function size() {
            return this.records.length;
          }
        }, {
          key: "_addString",
          value: function _addString(e, t) {
            if (!a(e) || c(e)) return;
            var i = {
              v: e,
              i: t,
              n: this.norm.get(e)
            };
            this.records.push(i);
          }
        }, {
          key: "_addObject",
          value: function _addObject(e, t) {
            var _this4 = this;

            var i = {
              i: t,
              $: {}
            };
            this.keys.forEach(function (t, r) {
              var o = _this4.getFn(e, t.path);

              if (a(o)) if (n(o)) {
                (function () {
                  var e = [];
                  var t = [{
                    nestedArrIndex: -1,
                    value: o
                  }];

                  for (; t.length;) {
                    var _t$pop = t.pop(),
                        _i3 = _t$pop.nestedArrIndex,
                        _r = _t$pop.value;

                    if (a(_r)) if (s(_r) && !c(_r)) {
                      var _t2 = {
                        v: _r,
                        i: _i3,
                        n: _this4.norm.get(_r)
                      };
                      e.push(_t2);
                    } else n(_r) && _r.forEach(function (e, i) {
                      t.push({
                        nestedArrIndex: i,
                        value: e
                      });
                    });
                  }

                  i.$[r] = e;
                })();
              } else if (!c(o)) {
                var _e2 = {
                  v: o,
                  n: _this4.norm.get(o)
                };
                i.$[r] = _e2;
              }
            }), this.records.push(i);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              keys: this.keys,
              records: this.records
            };
          }
        }]);

        return g;
      }();

      function _(e, t) {
        var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref2$getFn = _ref2.getFn,
            i = _ref2$getFn === void 0 ? m.getFn : _ref2$getFn,
            _ref2$fieldNormWeight = _ref2.fieldNormWeight,
            n = _ref2$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref2$fieldNormWeight;

        var s = new g({
          getFn: i,
          fieldNormWeight: n
        });
        return s.setKeys(e.map(d)), s.setSources(t), s.create(), s;
      }

      function y(e) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$errors = _ref3.errors,
            t = _ref3$errors === void 0 ? 0 : _ref3$errors,
            _ref3$currentLocation = _ref3.currentLocation,
            i = _ref3$currentLocation === void 0 ? 0 : _ref3$currentLocation,
            _ref3$expectedLocatio = _ref3.expectedLocation,
            n = _ref3$expectedLocatio === void 0 ? 0 : _ref3$expectedLocatio,
            _ref3$distance = _ref3.distance,
            s = _ref3$distance === void 0 ? m.distance : _ref3$distance,
            _ref3$ignoreLocation = _ref3.ignoreLocation,
            r = _ref3$ignoreLocation === void 0 ? m.ignoreLocation : _ref3$ignoreLocation;

        var o = t / e.length;
        if (r) return o;
        var a = Math.abs(n - i);
        return s ? o + a / s : a ? 1 : o;
      }

      var E = 32;

      function b(e) {
        var t = {};

        for (var _i4 = 0, _n4 = e.length; _i4 < _n4; _i4 += 1) {
          var _s = e.charAt(_i4);

          t[_s] = (t[_s] || 0) | 1 << _n4 - _i4 - 1;
        }

        return t;
      }

      var S = /*#__PURE__*/function () {
        function S(e) {
          var _this5 = this;

          var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref4$location = _ref4.location,
              t = _ref4$location === void 0 ? m.location : _ref4$location,
              _ref4$threshold = _ref4.threshold,
              i = _ref4$threshold === void 0 ? m.threshold : _ref4$threshold,
              _ref4$distance = _ref4.distance,
              n = _ref4$distance === void 0 ? m.distance : _ref4$distance,
              _ref4$includeMatches = _ref4.includeMatches,
              s = _ref4$includeMatches === void 0 ? m.includeMatches : _ref4$includeMatches,
              _ref4$findAllMatches = _ref4.findAllMatches,
              r = _ref4$findAllMatches === void 0 ? m.findAllMatches : _ref4$findAllMatches,
              _ref4$minMatchCharLen = _ref4.minMatchCharLength,
              o = _ref4$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref4$minMatchCharLen,
              _ref4$isCaseSensitive = _ref4.isCaseSensitive,
              a = _ref4$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref4$isCaseSensitive,
              _ref4$ignoreLocation = _ref4.ignoreLocation,
              c = _ref4$ignoreLocation === void 0 ? m.ignoreLocation : _ref4$ignoreLocation;

          _classCallCheck(this, S);

          if (this.options = {
            location: t,
            threshold: i,
            distance: n,
            includeMatches: s,
            findAllMatches: r,
            minMatchCharLength: o,
            isCaseSensitive: a,
            ignoreLocation: c
          }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;

          var l = function l(e, t) {
            _this5.chunks.push({
              pattern: e,
              alphabet: b(e),
              startIndex: t
            });
          },
              h = this.pattern.length;

          if (h > E) {
            var _e3 = 0;

            var _t3 = h % E,
                _i5 = h - _t3;

            for (; _e3 < _i5;) {
              l(this.pattern.substr(_e3, E), _e3), _e3 += E;
            }

            if (_t3) {
              var _e4 = h - E;

              l(this.pattern.substr(_e4), _e4);
            }
          } else l(this.pattern, 0);
        }

        _createClass(S, [{
          key: "searchIn",
          value: function searchIn(e) {
            var _this$options = this.options,
                t = _this$options.isCaseSensitive,
                i = _this$options.includeMatches;

            if (t || (e = e.toLowerCase()), this.pattern === e) {
              var _t4 = {
                isMatch: !0,
                score: 0
              };
              return i && (_t4.indices = [[0, e.length - 1]]), _t4;
            }

            var _this$options2 = this.options,
                n = _this$options2.location,
                s = _this$options2.distance,
                r = _this$options2.threshold,
                o = _this$options2.findAllMatches,
                a = _this$options2.minMatchCharLength,
                c = _this$options2.ignoreLocation;
            var l = [],
                h = 0,
                u = !1;
            this.chunks.forEach(function (_ref5) {
              var t = _ref5.pattern,
                  d = _ref5.alphabet,
                  p = _ref5.startIndex;

              var _ref6 = function (e, t, i) {
                var _ref7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                    _ref7$location = _ref7.location,
                    n = _ref7$location === void 0 ? m.location : _ref7$location,
                    _ref7$distance = _ref7.distance,
                    s = _ref7$distance === void 0 ? m.distance : _ref7$distance,
                    _ref7$threshold = _ref7.threshold,
                    r = _ref7$threshold === void 0 ? m.threshold : _ref7$threshold,
                    _ref7$findAllMatches = _ref7.findAllMatches,
                    o = _ref7$findAllMatches === void 0 ? m.findAllMatches : _ref7$findAllMatches,
                    _ref7$minMatchCharLen = _ref7.minMatchCharLength,
                    a = _ref7$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref7$minMatchCharLen,
                    _ref7$includeMatches = _ref7.includeMatches,
                    c = _ref7$includeMatches === void 0 ? m.includeMatches : _ref7$includeMatches,
                    _ref7$ignoreLocation = _ref7.ignoreLocation,
                    l = _ref7$ignoreLocation === void 0 ? m.ignoreLocation : _ref7$ignoreLocation;

                if (t.length > E) throw new Error("Pattern length exceeds max of 32.");
                var h = t.length,
                    u = e.length,
                    d = Math.max(0, Math.min(n, u));
                var p = r,
                    f = d;
                var v = a > 1 || c,
                    g = v ? Array(u) : [];

                var _;

                for (; (_ = e.indexOf(t, f)) > -1;) {
                  var _e5 = y(t, {
                    currentLocation: _,
                    expectedLocation: d,
                    distance: s,
                    ignoreLocation: l
                  });

                  if (p = Math.min(_e5, p), f = _ + h, v) {
                    var _e6 = 0;

                    for (; _e6 < h;) {
                      g[_ + _e6] = 1, _e6 += 1;
                    }
                  }
                }

                f = -1;
                var b = [],
                    S = 1,
                    I = h + u;
                var O = 1 << h - 1;

                for (var _n5 = 0; _n5 < h; _n5 += 1) {
                  var _r2 = 0,
                      _a = I;

                  for (; _r2 < _a;) {
                    y(t, {
                      errors: _n5,
                      currentLocation: d + _a,
                      expectedLocation: d,
                      distance: s,
                      ignoreLocation: l
                    }) <= p ? _r2 = _a : I = _a, _a = Math.floor((I - _r2) / 2 + _r2);
                  }

                  I = _a;

                  var _c = Math.max(1, d - _a + 1),
                      _m = o ? u : Math.min(d + _a, u) + h,
                      _2 = Array(_m + 2);

                  _2[_m + 1] = (1 << _n5) - 1;

                  for (var _r3 = _m; _r3 >= _c; _r3 -= 1) {
                    var _o = _r3 - 1,
                        _a2 = i[e.charAt(_o)];

                    if (v && (g[_o] = +!!_a2), _2[_r3] = (_2[_r3 + 1] << 1 | 1) & _a2, _n5 && (_2[_r3] |= (b[_r3 + 1] | b[_r3]) << 1 | 1 | b[_r3 + 1]), _2[_r3] & O && (S = y(t, {
                      errors: _n5,
                      currentLocation: _o,
                      expectedLocation: d,
                      distance: s,
                      ignoreLocation: l
                    }), S <= p)) {
                      if (p = S, f = _o, f <= d) break;
                      _c = Math.max(1, 2 * d - f);
                    }
                  }

                  if (y(t, {
                    errors: _n5 + 1,
                    currentLocation: d,
                    expectedLocation: d,
                    distance: s,
                    ignoreLocation: l
                  }) > p) break;
                  b = _2;
                }

                var C = {
                  isMatch: f >= 0,
                  score: Math.max(.001, S)
                };

                if (v) {
                  var _e7 = function () {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m.minMatchCharLength;
                    var i = [],
                        n = -1,
                        s = -1,
                        r = 0;

                    for (var _o2 = e.length; r < _o2; r += 1) {
                      var _o3 = e[r];
                      _o3 && -1 === n ? n = r : _o3 || -1 === n || (s = r - 1, s - n + 1 >= t && i.push([n, s]), n = -1);
                    }

                    return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
                  }(g, a);

                  _e7.length ? c && (C.indices = _e7) : C.isMatch = !1;
                }

                return C;
              }(e, t, d, {
                location: n + p,
                distance: s,
                threshold: r,
                findAllMatches: o,
                minMatchCharLength: a,
                includeMatches: i,
                ignoreLocation: c
              }),
                  f = _ref6.isMatch,
                  v = _ref6.score,
                  g = _ref6.indices;

              f && (u = !0), h += v, f && g && (l = [].concat(_toConsumableArray(l), _toConsumableArray(g)));
            });
            var d = {
              isMatch: u,
              score: u ? h / this.chunks.length : 1
            };
            return u && i && (d.indices = l), d;
          }
        }]);

        return S;
      }();

      var I = /*#__PURE__*/function () {
        function I(e) {
          _classCallCheck(this, I);

          this.pattern = e;
        }

        _createClass(I, [{
          key: "search",
          value: function search() {}
        }], [{
          key: "isMultiMatch",
          value: function isMultiMatch(e) {
            return O(e, this.multiRegex);
          }
        }, {
          key: "isSingleMatch",
          value: function isSingleMatch(e) {
            return O(e, this.singleRegex);
          }
        }]);

        return I;
      }();

      function O(e, t) {
        var i = e.match(t);
        return i ? i[1] : null;
      }

      var C = /*#__PURE__*/function (_I) {
        _inherits(C, _I);

        var _super = _createSuper(C);

        function C(e) {
          var _this6;

          var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref8$location = _ref8.location,
              t = _ref8$location === void 0 ? m.location : _ref8$location,
              _ref8$threshold = _ref8.threshold,
              i = _ref8$threshold === void 0 ? m.threshold : _ref8$threshold,
              _ref8$distance = _ref8.distance,
              n = _ref8$distance === void 0 ? m.distance : _ref8$distance,
              _ref8$includeMatches = _ref8.includeMatches,
              s = _ref8$includeMatches === void 0 ? m.includeMatches : _ref8$includeMatches,
              _ref8$findAllMatches = _ref8.findAllMatches,
              r = _ref8$findAllMatches === void 0 ? m.findAllMatches : _ref8$findAllMatches,
              _ref8$minMatchCharLen = _ref8.minMatchCharLength,
              o = _ref8$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref8$minMatchCharLen,
              _ref8$isCaseSensitive = _ref8.isCaseSensitive,
              a = _ref8$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref8$isCaseSensitive,
              _ref8$ignoreLocation = _ref8.ignoreLocation,
              c = _ref8$ignoreLocation === void 0 ? m.ignoreLocation : _ref8$ignoreLocation;

          _classCallCheck(this, C);

          _this6 = _super.call(this, e), _this6._bitapSearch = new S(e, {
            location: t,
            threshold: i,
            distance: n,
            includeMatches: s,
            findAllMatches: r,
            minMatchCharLength: o,
            isCaseSensitive: a,
            ignoreLocation: c
          });
          return _this6;
        }

        _createClass(C, [{
          key: "search",
          value: function search(e) {
            return this._bitapSearch.searchIn(e);
          }
        }], [{
          key: "type",
          get: function get() {
            return "fuzzy";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^(.*)$/;
          }
        }]);

        return C;
      }(I);

      var T = /*#__PURE__*/function (_I2) {
        _inherits(T, _I2);

        var _super2 = _createSuper(T);

        function T(e) {
          _classCallCheck(this, T);

          return _super2.call(this, e);
        }

        _createClass(T, [{
          key: "search",
          value: function search(e) {
            var t,
                i = 0;
            var n = [],
                s = this.pattern.length;

            for (; (t = e.indexOf(this.pattern, i)) > -1;) {
              i = t + s, n.push([t, i - 1]);
            }

            var r = !!n.length;
            return {
              isMatch: r,
              score: r ? 0 : 1,
              indices: n
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "include";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^'"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^'(.*)$/;
          }
        }]);

        return T;
      }(I);

      var L = [/*#__PURE__*/function (_I3) {
        _inherits(_class, _I3);

        var _super3 = _createSuper(_class);

        function _class(e) {
          _classCallCheck(this, _class);

          return _super3.call(this, e);
        }

        _createClass(_class, [{
          key: "search",
          value: function search(e) {
            var t = e === this.pattern;
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^="(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^=(.*)$/;
          }
        }]);

        return _class;
      }(I), T, /*#__PURE__*/function (_I4) {
        _inherits(_class2, _I4);

        var _super4 = _createSuper(_class2);

        function _class2(e) {
          _classCallCheck(this, _class2);

          return _super4.call(this, e);
        }

        _createClass(_class2, [{
          key: "search",
          value: function search(e) {
            var t = e.startsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "prefix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^\^(.*)$/;
          }
        }]);

        return _class2;
      }(I), /*#__PURE__*/function (_I5) {
        _inherits(_class3, _I5);

        var _super5 = _createSuper(_class3);

        function _class3(e) {
          _classCallCheck(this, _class3);

          return _super5.call(this, e);
        }

        _createClass(_class3, [{
          key: "search",
          value: function search(e) {
            var t = !e.startsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "inverse-prefix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!\^(.*)$/;
          }
        }]);

        return _class3;
      }(I), /*#__PURE__*/function (_I6) {
        _inherits(_class4, _I6);

        var _super6 = _createSuper(_class4);

        function _class4(e) {
          _classCallCheck(this, _class4);

          return _super6.call(this, e);
        }

        _createClass(_class4, [{
          key: "search",
          value: function search(e) {
            var t = !e.endsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "inverse-suffix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!(.*)\$$/;
          }
        }]);

        return _class4;
      }(I), /*#__PURE__*/function (_I7) {
        _inherits(_class5, _I7);

        var _super7 = _createSuper(_class5);

        function _class5(e) {
          _classCallCheck(this, _class5);

          return _super7.call(this, e);
        }

        _createClass(_class5, [{
          key: "search",
          value: function search(e) {
            var t = e.endsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [e.length - this.pattern.length, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "suffix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^(.*)\$$/;
          }
        }]);

        return _class5;
      }(I), /*#__PURE__*/function (_I8) {
        _inherits(_class6, _I8);

        var _super8 = _createSuper(_class6);

        function _class6(e) {
          _classCallCheck(this, _class6);

          return _super8.call(this, e);
        }

        _createClass(_class6, [{
          key: "search",
          value: function search(e) {
            var t = -1 === e.indexOf(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "inverse-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!(.*)$/;
          }
        }]);

        return _class6;
      }(I), C],
          w = L.length,
          A = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,
          M = new Set([C.type, T.type]);
      var P = [];

      function x(e, t) {
        for (var _i6 = 0, _n6 = P.length; _i6 < _n6; _i6 += 1) {
          var _n7 = P[_i6];
          if (_n7.condition(e, t)) return new _n7(e, t);
        }

        return new S(e, t);
      }

      var N = "$and",
          D = function D(e) {
        return !(!e.$and && !e.$or);
      },
          j = function j(e) {
        return _defineProperty({}, N, Object.keys(e).map(function (t) {
          return _defineProperty({}, t, e[t]);
        }));
      };

      function F(e, t) {
        var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref11$auto = _ref11.auto,
            i = _ref11$auto === void 0 ? !0 : _ref11$auto;

        var r = function r(e) {
          var a = Object.keys(e);

          var c = function (e) {
            return !!e.$path;
          }(e);

          if (!c && a.length > 1 && !D(e)) return r(j(e));

          if (function (e) {
            return !n(e) && o(e) && !D(e);
          }(e)) {
            var _n8 = c ? e.$path : a[0],
                _r4 = c ? e.$val : e[_n8];

            if (!s(_r4)) throw new Error(function (e) {
              return "Invalid value for key ".concat(e);
            }(_n8));
            var _o4 = {
              keyId: f(_n8),
              pattern: _r4
            };
            return i && (_o4.searcher = x(_r4, t)), _o4;
          }

          var l = {
            children: [],
            operator: a[0]
          };
          return a.forEach(function (t) {
            var i = e[t];
            n(i) && i.forEach(function (e) {
              l.children.push(r(e));
            });
          }), l;
        };

        return D(e) || (e = j(e)), r(e);
      }

      function k(e, t) {
        var i = e.matches;
        t.matches = [], a(i) && i.forEach(function (e) {
          if (!a(e.indices) || !e.indices.length) return;
          var i = e.indices,
              n = e.value;
          var s = {
            indices: i,
            value: n
          };
          e.key && (s.key = e.key.src), e.idx > -1 && (s.refIndex = e.idx), t.matches.push(s);
        });
      }

      function K(e, t) {
        t.score = e.score;
      }

      var R = /*#__PURE__*/function () {
        function R(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, R);

          this.options = _objectSpread(_objectSpread({}, m), t), this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i);
        }

        _createClass(R, [{
          key: "setCollection",
          value: function setCollection(e, t) {
            if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
            this._myIndex = t || _(this.options.keys, this._docs, {
              getFn: this.options.getFn,
              fieldNormWeight: this.options.fieldNormWeight
            });
          }
        }, {
          key: "add",
          value: function add(e) {
            a(e) && (this._docs.push(e), this._myIndex.add(e));
          }
        }, {
          key: "remove",
          value: function remove() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
              return !1;
            };
            var t = [];

            for (var _i7 = 0, _n9 = this._docs.length; _i7 < _n9; _i7 += 1) {
              var _s2 = this._docs[_i7];
              e(_s2, _i7) && (this.removeAt(_i7), _i7 -= 1, _n9 -= 1, t.push(_s2));
            }

            return t;
          }
        }, {
          key: "removeAt",
          value: function removeAt(e) {
            this._docs.splice(e, 1), this._myIndex.removeAt(e);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this._myIndex;
          }
        }, {
          key: "search",
          value: function search(e) {
            var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref12$limit = _ref12.limit,
                t = _ref12$limit === void 0 ? -1 : _ref12$limit;

            var _this$options3 = this.options,
                i = _this$options3.includeMatches,
                n = _this$options3.includeScore,
                o = _this$options3.shouldSort,
                a = _this$options3.sortFn,
                c = _this$options3.ignoreFieldNorm;
            var l = s(e) ? s(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
            return function (e, _ref13) {
              var _ref13$ignoreFieldNor = _ref13.ignoreFieldNorm,
                  t = _ref13$ignoreFieldNor === void 0 ? m.ignoreFieldNorm : _ref13$ignoreFieldNor;
              e.forEach(function (e) {
                var i = 1;
                e.matches.forEach(function (_ref14) {
                  var e = _ref14.key,
                      n = _ref14.norm,
                      s = _ref14.score;
                  var r = e ? e.weight : null;
                  i *= Math.pow(0 === s && r ? Number.EPSILON : s, (r || 1) * (t ? 1 : n));
                }), e.score = i;
              });
            }(l, {
              ignoreFieldNorm: c
            }), o && l.sort(a), r(t) && t > -1 && (l = l.slice(0, t)), function (e, t) {
              var _ref15 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                  _ref15$includeMatches = _ref15.includeMatches,
                  i = _ref15$includeMatches === void 0 ? m.includeMatches : _ref15$includeMatches,
                  _ref15$includeScore = _ref15.includeScore,
                  n = _ref15$includeScore === void 0 ? m.includeScore : _ref15$includeScore;

              var s = [];
              return i && s.push(k), n && s.push(K), e.map(function (e) {
                var i = e.idx,
                    n = {
                  item: t[i],
                  refIndex: i
                };
                return s.length && s.forEach(function (t) {
                  t(e, n);
                }), n;
              });
            }(l, this._docs, {
              includeMatches: i,
              includeScore: n
            });
          }
        }, {
          key: "_searchStringList",
          value: function _searchStringList(e) {
            var t = x(e, this.options),
                i = this._myIndex.records,
                n = [];
            return i.forEach(function (_ref16) {
              var e = _ref16.v,
                  i = _ref16.i,
                  s = _ref16.n;
              if (!a(e)) return;

              var _t$searchIn = t.searchIn(e),
                  r = _t$searchIn.isMatch,
                  o = _t$searchIn.score,
                  c = _t$searchIn.indices;

              r && n.push({
                item: e,
                idx: i,
                matches: [{
                  score: o,
                  value: e,
                  norm: s,
                  indices: c
                }]
              });
            }), n;
          }
        }, {
          key: "_searchLogical",
          value: function _searchLogical(e) {
            var _this7 = this;

            var t = F(e, this.options),
                i = function i(e, t, n) {
              if (!e.children) {
                var _i8 = e.keyId,
                    _s3 = e.searcher,
                    _r5 = _this7._findMatches({
                  key: _this7._keyStore.get(_i8),
                  value: _this7._myIndex.getValueForItemAtKeyId(t, _i8),
                  searcher: _s3
                });

                return _r5 && _r5.length ? [{
                  idx: n,
                  item: t,
                  matches: _r5
                }] : [];
              }

              var s = [];

              for (var _r6 = 0, _o5 = e.children.length; _r6 < _o5; _r6 += 1) {
                var _o6 = e.children[_r6],
                    _a3 = i(_o6, t, n);

                if (_a3.length) s.push.apply(s, _toConsumableArray(_a3));else if (e.operator === N) return [];
              }

              return s;
            },
                n = this._myIndex.records,
                s = {},
                r = [];

            return n.forEach(function (_ref17) {
              var e = _ref17.$,
                  n = _ref17.i;

              if (a(e)) {
                var _o7 = i(t, e, n);

                _o7.length && (s[n] || (s[n] = {
                  idx: n,
                  item: e,
                  matches: []
                }, r.push(s[n])), _o7.forEach(function (_ref18) {
                  var _s$n$matches;

                  var e = _ref18.matches;

                  (_s$n$matches = s[n].matches).push.apply(_s$n$matches, _toConsumableArray(e));
                }));
              }
            }), r;
          }
        }, {
          key: "_searchObjectList",
          value: function _searchObjectList(e) {
            var _this8 = this;

            var t = x(e, this.options),
                _this$_myIndex = this._myIndex,
                i = _this$_myIndex.keys,
                n = _this$_myIndex.records,
                s = [];
            return n.forEach(function (_ref19) {
              var e = _ref19.$,
                  n = _ref19.i;
              if (!a(e)) return;
              var r = [];
              i.forEach(function (i, n) {
                r.push.apply(r, _toConsumableArray(_this8._findMatches({
                  key: i,
                  value: e[n],
                  searcher: t
                })));
              }), r.length && s.push({
                idx: n,
                item: e,
                matches: r
              });
            }), s;
          }
        }, {
          key: "_findMatches",
          value: function _findMatches(_ref20) {
            var e = _ref20.key,
                t = _ref20.value,
                i = _ref20.searcher;
            if (!a(t)) return [];
            var s = [];
            if (n(t)) t.forEach(function (_ref21) {
              var t = _ref21.v,
                  n = _ref21.i,
                  r = _ref21.n;
              if (!a(t)) return;

              var _i$searchIn = i.searchIn(t),
                  o = _i$searchIn.isMatch,
                  c = _i$searchIn.score,
                  l = _i$searchIn.indices;

              o && s.push({
                score: c,
                key: e,
                value: t,
                idx: n,
                norm: r,
                indices: l
              });
            });else {
              var _n10 = t.v,
                  _r7 = t.n,
                  _i$searchIn2 = i.searchIn(_n10),
                  _o8 = _i$searchIn2.isMatch,
                  _a4 = _i$searchIn2.score,
                  _c2 = _i$searchIn2.indices;

              _o8 && s.push({
                score: _a4,
                key: e,
                value: _n10,
                norm: _r7,
                indices: _c2
              });
            }
            return s;
          }
        }]);

        return R;
      }();

      R.version = "6.5.3", R.createIndex = _, R.parseIndex = function (e) {
        var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref22$getFn = _ref22.getFn,
            t = _ref22$getFn === void 0 ? m.getFn : _ref22$getFn,
            _ref22$fieldNormWeigh = _ref22.fieldNormWeight,
            i = _ref22$fieldNormWeigh === void 0 ? m.fieldNormWeight : _ref22$fieldNormWeigh;

        var n = e.keys,
            s = e.records,
            r = new g({
          getFn: t,
          fieldNormWeight: i
        });
        return r.setKeys(n), r.setIndexRecords(s), r;
      }, R.config = m, R.parseQuery = F, function () {
        P.push.apply(P, arguments);
      }( /*#__PURE__*/function () {
        function _class7(e) {
          var _ref23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref23$isCaseSensitiv = _ref23.isCaseSensitive,
              t = _ref23$isCaseSensitiv === void 0 ? m.isCaseSensitive : _ref23$isCaseSensitiv,
              _ref23$includeMatches = _ref23.includeMatches,
              i = _ref23$includeMatches === void 0 ? m.includeMatches : _ref23$includeMatches,
              _ref23$minMatchCharLe = _ref23.minMatchCharLength,
              n = _ref23$minMatchCharLe === void 0 ? m.minMatchCharLength : _ref23$minMatchCharLe,
              _ref23$ignoreLocation = _ref23.ignoreLocation,
              s = _ref23$ignoreLocation === void 0 ? m.ignoreLocation : _ref23$ignoreLocation,
              _ref23$findAllMatches = _ref23.findAllMatches,
              r = _ref23$findAllMatches === void 0 ? m.findAllMatches : _ref23$findAllMatches,
              _ref23$location = _ref23.location,
              o = _ref23$location === void 0 ? m.location : _ref23$location,
              _ref23$threshold = _ref23.threshold,
              a = _ref23$threshold === void 0 ? m.threshold : _ref23$threshold,
              _ref23$distance = _ref23.distance,
              c = _ref23$distance === void 0 ? m.distance : _ref23$distance;

          _classCallCheck(this, _class7);

          this.query = null, this.options = {
            isCaseSensitive: t,
            includeMatches: i,
            minMatchCharLength: n,
            findAllMatches: r,
            ignoreLocation: s,
            location: o,
            threshold: a,
            distance: c
          }, this.pattern = t ? e : e.toLowerCase(), this.query = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return e.split("|").map(function (e) {
              var i = e.trim().split(A).filter(function (e) {
                return e && !!e.trim();
              }),
                  n = [];

              for (var _e8 = 0, _s4 = i.length; _e8 < _s4; _e8 += 1) {
                var _s5 = i[_e8];

                var _r8 = !1,
                    _o9 = -1;

                for (; !_r8 && ++_o9 < w;) {
                  var _e9 = L[_o9];

                  var _i9 = _e9.isMultiMatch(_s5);

                  _i9 && (n.push(new _e9(_i9, t)), _r8 = !0);
                }

                if (!_r8) for (_o9 = -1; ++_o9 < w;) {
                  var _e10 = L[_o9];

                  var _i10 = _e10.isSingleMatch(_s5);

                  if (_i10) {
                    n.push(new _e10(_i10, t));
                    break;
                  }
                }
              }

              return n;
            });
          }(this.pattern, this.options);
        }

        _createClass(_class7, [{
          key: "searchIn",
          value: function searchIn(e) {
            var t = this.query;
            if (!t) return {
              isMatch: !1,
              score: 1
            };
            var _this$options4 = this.options,
                i = _this$options4.includeMatches,
                n = _this$options4.isCaseSensitive;
            e = n ? e : e.toLowerCase();
            var s = 0,
                r = [],
                o = 0;

            for (var _n11 = 0, _a5 = t.length; _n11 < _a5; _n11 += 1) {
              var _a6 = t[_n11];
              r.length = 0, s = 0;

              for (var _t5 = 0, _n12 = _a6.length; _t5 < _n12; _t5 += 1) {
                var _n13 = _a6[_t5],
                    _n13$search = _n13.search(e),
                    _c3 = _n13$search.isMatch,
                    _l = _n13$search.indices,
                    _h = _n13$search.score;

                if (!_c3) {
                  o = 0, s = 0, r.length = 0;
                  break;
                }

                if (s += 1, o += _h, i) {
                  var _e11 = _n13.constructor.type;
                  M.has(_e11) ? r = [].concat(_toConsumableArray(r), _toConsumableArray(_l)) : r.push(_l);
                }
              }

              if (s) {
                var _e12 = {
                  isMatch: !0,
                  score: o / s
                };
                return i && (_e12.indices = r), _e12;
              }
            }

            return {
              isMatch: !1,
              score: 1
            };
          }
        }], [{
          key: "condition",
          value: function condition(e, t) {
            return t.useExtendedSearch;
          }
        }]);

        return _class7;
      }());
    },
    857: function _(e, t, i) {
      function n(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }

      function s(e, t) {
        var i = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), i.push.apply(i, n);
        }

        return i;
      }

      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(i), !0).forEach(function (t) {
            n(e, t, i[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
        }

        return e;
      }

      function o(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
      }

      i.r(t), i.d(t, {
        __DO_NOT_USE__ActionTypes: function __DO_NOT_USE__ActionTypes() {
          return l;
        },
        applyMiddleware: function applyMiddleware() {
          return v;
        },
        bindActionCreators: function bindActionCreators() {
          return f;
        },
        combineReducers: function combineReducers() {
          return d;
        },
        compose: function compose() {
          return m;
        },
        createStore: function createStore() {
          return u;
        }
      });

      var a = "function" == typeof Symbol && Symbol.observable || "@@observable",
          c = function c() {
        return Math.random().toString(36).substring(7).split("").join(".");
      },
          l = {
        INIT: "@@redux/INIT" + c(),
        REPLACE: "@@redux/REPLACE" + c(),
        PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
          return "@@redux/PROBE_UNKNOWN_ACTION" + c();
        }
      };

      function h(e) {
        if ("object" != _typeof(e) || null === e) return !1;

        for (var t = e; null !== Object.getPrototypeOf(t);) {
          t = Object.getPrototypeOf(t);
        }

        return Object.getPrototypeOf(e) === t;
      }

      function u(e, t, i) {
        var n;
        if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(o(0));

        if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
          if ("function" != typeof i) throw new Error(o(1));
          return i(u)(e, t);
        }

        if ("function" != typeof e) throw new Error(o(2));
        var s = e,
            r = t,
            c = [],
            d = c,
            p = !1;

        function f() {
          d === c && (d = c.slice());
        }

        function m() {
          if (p) throw new Error(o(3));
          return r;
        }

        function v(e) {
          if ("function" != typeof e) throw new Error(o(4));
          if (p) throw new Error(o(5));
          var t = !0;
          return f(), d.push(e), function () {
            if (t) {
              if (p) throw new Error(o(6));
              t = !1, f();
              var i = d.indexOf(e);
              d.splice(i, 1), c = null;
            }
          };
        }

        function g(e) {
          if (!h(e)) throw new Error(o(7));
          if (void 0 === e.type) throw new Error(o(8));
          if (p) throw new Error(o(9));

          try {
            p = !0, r = s(r, e);
          } finally {
            p = !1;
          }

          for (var t = c = d, i = 0; i < t.length; i++) {
            (0, t[i])();
          }

          return e;
        }

        function _(e) {
          if ("function" != typeof e) throw new Error(o(10));
          s = e, g({
            type: l.REPLACE
          });
        }

        function y() {
          var e,
              t = v;
          return (e = {
            subscribe: function subscribe(e) {
              if ("object" != _typeof(e) || null === e) throw new Error(o(11));

              function i() {
                e.next && e.next(m());
              }

              return i(), {
                unsubscribe: t(i)
              };
            }
          })[a] = function () {
            return this;
          }, e;
        }

        return g({
          type: l.INIT
        }), (n = {
          dispatch: g,
          subscribe: v,
          getState: m,
          replaceReducer: _
        })[a] = y, n;
      }

      function d(e) {
        for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
          var s = t[n];
          "function" == typeof e[s] && (i[s] = e[s]);
        }

        var r,
            a = Object.keys(i);

        try {
          !function (e) {
            Object.keys(e).forEach(function (t) {
              var i = e[t];
              if (void 0 === i(void 0, {
                type: l.INIT
              })) throw new Error(o(12));
              if (void 0 === i(void 0, {
                type: l.PROBE_UNKNOWN_ACTION()
              })) throw new Error(o(13));
            });
          }(i);
        } catch (e) {
          r = e;
        }

        return function (e, t) {
          if (void 0 === e && (e = {}), r) throw r;

          for (var n = !1, s = {}, c = 0; c < a.length; c++) {
            var l = a[c],
                h = i[l],
                u = e[l],
                d = h(u, t);
            if (void 0 === d) throw t && t.type, new Error(o(14));
            s[l] = d, n = n || d !== u;
          }

          return (n = n || a.length !== Object.keys(e).length) ? s : e;
        };
      }

      function p(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }

      function f(e, t) {
        if ("function" == typeof e) return p(e, t);
        if ("object" != _typeof(e) || null === e) throw new Error(o(16));
        var i = {};

        for (var n in e) {
          var s = e[n];
          "function" == typeof s && (i[n] = p(s, t));
        }

        return i;
      }

      function m() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        return 0 === t.length ? function (e) {
          return e;
        } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
          return function () {
            return e(t.apply(void 0, arguments));
          };
        });
      }

      function v() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        return function (e) {
          return function () {
            var i = e.apply(void 0, arguments),
                n = function n() {
              throw new Error(o(15));
            },
                s = {
              getState: i.getState,
              dispatch: function dispatch() {
                return n.apply(void 0, arguments);
              }
            },
                a = t.map(function (e) {
              return e(s);
            });

            return n = m.apply(void 0, a)(i.dispatch), r(r({}, i), {}, {
              dispatch: n
            });
          };
        };
      }
    }
  },
      t = {};

  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = t[n] = {
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, i), r.exports;
  }

  i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, {
      a: t
    }), t;
  }, i.d = function (e, t) {
    for (var n in t) {
      i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      });
    }
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var n,
      s,
      r = {};
  n = i(373), s = i.n(n), i(187), i(883), i(789), i(686), r.default = s(), window.Choices = r.default;
}();
"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(void 0, function (exports) {
  'use strict';

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$c = // eslint-disable-next-line es/no-global-this -- safe
  check((typeof globalThis === "undefined" ? "undefined" : _typeof2(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof2(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check((typeof self === "undefined" ? "undefined" : _typeof2(self)) == 'object' && self) || check(_typeof2(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$6 = function fails$6(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$5 = fails$6; // Detect IE8's incomplete defineProperty implementation

  var descriptors = !fails$5(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });
  var objectPropertyIsEnumerable = {};
  var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var createPropertyDescriptor$2 = function createPropertyDescriptor$2(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString$3 = {}.toString;

  var classofRaw = function classofRaw(it) {
    return toString$3.call(it).slice(8, -1);
  };

  var fails$4 = fails$6;
  var classof = classofRaw;
  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails$4(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible$4 = function requireObjectCoercible$4(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  }; // toObject with fallback for non-array-like ES3 strings


  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$3 = requireObjectCoercible$4;

  var toIndexedObject$3 = function toIndexedObject$3(it) {
    return IndexedObject$1(requireObjectCoercible$3(it));
  };

  var isObject$5 = function isObject$5(it) {
    return _typeof2(it) === 'object' ? it !== null : typeof it === 'function';
  };

  var global$b = global$c;

  var aFunction = function aFunction(variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$3 = function getBuiltIn$3(namespace, method) {
    return arguments.length < 2 ? aFunction(global$b[namespace]) : global$b[namespace] && global$b[namespace][method];
  };

  var getBuiltIn$2 = getBuiltIn$3;
  var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';
  var global$a = global$c;
  var userAgent$1 = engineUserAgent;
  var process = global$a.process;
  var Deno = global$a.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (userAgent$1) {
    match = userAgent$1.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = userAgent$1.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;
  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails$3 = fails$6; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$3(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && _typeof2(Symbol.iterator) == 'symbol';
  var getBuiltIn$1 = getBuiltIn$3;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return _typeof2(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$1('Symbol');
    return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
  };
  var isObject$4 = isObject$5; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive$1 = function ordinaryToPrimitive$1(input, pref) {
    var fn, val;
    if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject$4(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$4(val = fn.call(input))) return val;
    if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject$4(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var shared$3 = {
    exports: {}
  };
  var global$9 = global$c;

  var setGlobal$3 = function setGlobal$3(key, value) {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(global$9, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$9[key] = value;
    }

    return value;
  };

  var global$8 = global$c;
  var setGlobal$2 = setGlobal$3;
  var SHARED = '__core-js_shared__';
  var store$3 = global$8[SHARED] || setGlobal$2(SHARED, {});
  var sharedStore = store$3;
  var store$2 = sharedStore;
  (shared$3.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.17.3',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  var requireObjectCoercible$2 = requireObjectCoercible$4; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject$2 = function toObject$2(argument) {
    return Object(requireObjectCoercible$2(argument));
  };

  var toObject$1 = toObject$2;
  var hasOwnProperty = {}.hasOwnProperty;

  var has$6 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject$1(it), key);
  };

  var id = 0;
  var postfix = Math.random();

  var uid$2 = function uid$2(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var global$7 = global$c;
  var shared$2 = shared$3.exports;
  var has$5 = has$6;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore = shared$2('wks');
  var Symbol$1 = global$7.Symbol;
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$1 = function wellKnownSymbol$1(name) {
    if (!has$5(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (NATIVE_SYMBOL && has$5(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore[name];
  };

  var isObject$3 = isObject$5;
  var isSymbol$2 = isSymbol$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol = wellKnownSymbol$1;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive$1 = function toPrimitive$1(input, pref) {
    if (!isObject$3(input) || isSymbol$2(input)) return input;
    var exoticToPrim = input[TO_PRIMITIVE];
    var result;

    if (exoticToPrim !== undefined) {
      if (pref === undefined) pref = 'default';
      result = exoticToPrim.call(input, pref);
      if (!isObject$3(result) || isSymbol$2(result)) return result;
      throw TypeError("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol$1 = isSymbol$3; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey$2 = function toPropertyKey$2(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol$1(key) ? key : String(key);
  };

  var global$6 = global$c;
  var isObject$2 = isObject$5;
  var document$1 = global$6.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject$2(document$1) && isObject$2(document$1.createElement);

  var documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$4 = descriptors;
  var fails$2 = fails$6;
  var createElement = documentCreateElement; // Thank's IE8 for his funny defineProperty

  var ie8DomDefine = !DESCRIPTORS$4 && !fails$2(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });
  var DESCRIPTORS$3 = descriptors;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$2;
  var toIndexedObject$2 = toIndexedObject$3;
  var toPropertyKey$1 = toPropertyKey$2;
  var has$4 = has$6;
  var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$2(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has$4(O, P)) return createPropertyDescriptor$1(!propertyIsEnumerableModule$1.f.call(O, P), O[P]);
  };
  var objectDefineProperty = {};
  var isObject$1 = isObject$5;

  var anObject$2 = function anObject$2(it) {
    if (!isObject$1(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var DESCRIPTORS$2 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject$1 = anObject$2;
  var toPropertyKey = toPropertyKey$2; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  objectDefineProperty.f = DESCRIPTORS$2 ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPropertyKey(P);
    anObject$1(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var DESCRIPTORS$1 = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$2;
  var createNonEnumerableProperty$3 = DESCRIPTORS$1 ? function (object, key, value) {
    return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  var redefine$1 = {
    exports: {}
  };
  var store$1 = sharedStore;
  var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof store$1.inspectSource != 'function') {
    store$1.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;
  var global$5 = global$c;
  var inspectSource$1 = inspectSource$2;
  var WeakMap$1 = global$5.WeakMap;
  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$1(WeakMap$1));
  var shared$1 = shared$3.exports;
  var uid = uid$2;
  var keys = shared$1('keys');

  var sharedKey$1 = function sharedKey$1(key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$3 = {};
  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$4 = global$c;
  var isObject = isObject$5;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
  var objectHas = has$6;
  var shared = sharedStore;
  var sharedKey = sharedKey$1;
  var hiddenKeys$2 = hiddenKeys$3;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap = global$4.WeakMap;
  var set$1, get, has$3;

  var enforce = function enforce(it) {
    return has$3(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;

    set$1 = function set$1(it, metadata) {
      if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };

    get = function get(it) {
      return wmget.call(store, it) || {};
    };

    has$3 = function has$3(it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$2[STATE] = true;

    set$1 = function set$1(it, metadata) {
      if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$2(it, STATE, metadata);
      return metadata;
    };

    get = function get(it) {
      return objectHas(it, STATE) ? it[STATE] : {};
    };

    has$3 = function has$3(it) {
      return objectHas(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has$3,
    enforce: enforce,
    getterFor: getterFor
  };
  var global$3 = global$c;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
  var has$2 = has$6;
  var setGlobal$1 = setGlobal$3;
  var inspectSource = inspectSource$2;
  var InternalStateModule = internalState;
  var getInternalState = InternalStateModule.get;
  var enforceInternalState = InternalStateModule.enforce;
  var TEMPLATE = String(String).split('String');
  (redefine$1.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$2(value, 'name')) {
        createNonEnumerableProperty$1(value, 'name', key);
      }

      state = enforceInternalState(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }

    if (O === global$3) {
      if (simple) O[key] = value;else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });
  var objectGetOwnPropertyNames = {};
  var ceil$1 = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger$3 = function toInteger$3(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil$1)(argument);
  };

  var toInteger$2 = toInteger$3;
  var min$1 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$2 = function toLength$2(argument) {
    return argument > 0 ? min$1(toInteger$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toInteger$1 = toInteger$3;
  var max = Math.max;
  var min = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$1 = function toAbsoluteIndex$1(index, length) {
    var integer = toInteger$1(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };

  var toIndexedObject$1 = toIndexedObject$3;
  var toLength$1 = toLength$2;
  var toAbsoluteIndex = toAbsoluteIndex$1; // `Array.prototype.{ indexOf, includes }` methods implementation

  var createMethod$1 = function createMethod$1(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$1($this);
      var length = toLength$1(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false)
  };
  var has$1 = has$6;
  var toIndexedObject = toIndexedObject$3;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$1 = hiddenKeys$3;

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (has$1(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }

    return result;
  }; // IE8- don't enum bug keys


  var enumBugKeys$2 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$2;
  var hiddenKeys = enumBugKeys$1.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys);
  };

  var objectGetOwnPropertySymbols = {}; // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  var getBuiltIn = getBuiltIn$3;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject = anObject$2; // all object keys, includes non-enumerable and symbols

  var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var has = has$6;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function copyConstructorProperties$1(target, source) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var fails$1 = fails$6;
  var replacement = /#|\.prototype\./;

  var isForced$1 = function isForced$1(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails$1(detection) : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';
  var isForced_1 = isForced$1;
  var global$2 = global$c;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty = createNonEnumerableProperty$3;
  var redefine = redefine$1.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced = isForced_1;
  /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$2;
    } else if (STATIC) {
      target = global$2[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$2[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof2(sourceProperty) === _typeof2(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  };

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$2; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe

  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
  };

  var DESCRIPTORS = descriptors;
  var fails = fails$6;
  var objectKeys = objectKeys$1;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject = toObject$2;
  var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

  var defineProperty = Object.defineProperty; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({
      b: 1
    }, $assign(defineProperty({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;

    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;
  var $$4 = _export;
  var assign = objectAssign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing

  $$4({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign
  }, {
    assign: assign
  });
  var isSymbol = isSymbol$3;

  var toString$2 = function toString$2(argument) {
    if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
    return String(argument);
  };

  var toInteger = toInteger$3;
  var toString$1 = toString$2;
  var requireObjectCoercible$1 = requireObjectCoercible$4; // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  var stringRepeat = function repeat(count) {
    var str = toString$1(requireObjectCoercible$1(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) result += str;
    }

    return result;
  };

  var $$3 = _export;
  var repeat$1 = stringRepeat; // `String.prototype.repeat` method
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  $$3({
    target: 'String',
    proto: true
  }, {
    repeat: repeat$1
  }); // https://github.com/tc39/proposal-string-pad-start-end

  var toLength = toLength$2;
  var toString = toString$2;
  var repeat = stringRepeat;
  var requireObjectCoercible = requireObjectCoercible$4;
  var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

  var createMethod = function createMethod(IS_END) {
    return function ($this, maxLength, fillString) {
      var S = toString(requireObjectCoercible($this));
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : toString(fillString);
      var intMaxLength = toLength(maxLength);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr == '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };

  var stringPad = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod(true)
  }; // https://github.com/zloirock/core-js/issues/280

  var userAgent = engineUserAgent; // eslint-disable-next-line unicorn/no-unsafe-regex -- safe

  var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);
  var $$2 = _export;
  var $padStart = stringPad.start;
  var WEBKIT_BUG$1 = stringPadWebkitBug; // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart

  $$2({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG$1
  }, {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var $$1 = _export;
  var $padEnd = stringPad.end;
  var WEBKIT_BUG = stringPadWebkitBug; // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend

  $$1({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
  }, {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var $ = _export;
  var global$1 = global$c; // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis

  $({
    global: true
  }, {
    globalThis: global$1
  });

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  /** Checks if value is string */


  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  /**
   Direction
   @prop {string} NONE
   @prop {string} LEFT
   @prop {string} FORCE_LEFT
   @prop {string} RIGHT
   @prop {string} FORCE_RIGHT
   */


  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };
  /** */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;

      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;

      default:
        return direction;
    }
  }
  /** Escapes regular expression control chars */


  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes


  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i;

    if (arrA && arrB) {
      if (a.length != b.length) return false;

      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;

    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
          dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }

      for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      }

      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }

    return false;
  }
  /** Selection range */

  /** Provides details of changing input */


  var ActionDetails = /*#__PURE__*/function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);

      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    /**
     Start changing position
     @readonly
     */


    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      /**
       Inserted symbols count
       @readonly
       */

    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
      /**
       Inserted symbols
       @readonly
       */

    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      /**
       Removed symbols count
       @readonly
       */

    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
      }
      /**
       Removed symbols
       @readonly
       */

    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      /**
       Unchanged head symbols
       @readonly
       */

    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
      /**
       Unchanged tail symbols
       @readonly
       */

    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      /**
       Remove direction
       @readonly
       */

    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

        return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);

    return ActionDetails;
  }();
  /**
   Provides details of changing model value
   @param {Object} [details]
   @param {string} [details.inserted] - Inserted symbols
   @param {boolean} [details.skip] - Can skip chars
   @param {number} [details.removeCount] - Removed symbols count
   @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
   */


  var ChangeDetails = /*#__PURE__*/function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);

      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }
    /**
     Aggregate changes
     @returns {ChangeDetails} `this`
     */


    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
      /** Total offset considering all changes */

    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);

    return ChangeDetails;
  }();
  /** Provides details of continuous extracted tail */


  var ContinuousTailDetails = /*#__PURE__*/function () {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */
    function ContinuousTailDetails() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, ContinuousTailDetails);

      this.value = value;
      this.from = from;
      this.stop = stop;
    }

    _createClass(ContinuousTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }, {
      key: "shiftBefore",
      value: function shiftBefore(pos) {
        if (this.from >= pos || !this.value.length) return '';
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }]);

    return ContinuousTailDetails;
  }();
  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */


  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // currently available only for input-like elements

    return new IMask.InputMask(el, opts);
  }
  /** Supported mask type */

  /** Provides common masking stuff */


  var Masked = /*#__PURE__*/function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */
    // $FlowFixMe no ideas

    /** Transforms value before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing in the end of editing */

    /** Format typed value to string */

    /** Parse strgin to get typed value */

    /** Enable characters overwriting */

    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);

      this._value = '';

      this._update(Object.assign({}, Masked.DEFAULTS, opts));

      this.isInitialized = true;
    }
    /** Sets and applies new options */


    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
      /**
       Sets new options
       @protected
       */

    }, {
      key: "_update",
      value: function _update(opts) {
        Object.assign(this, opts);
      }
      /** Mask state */

    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }
      /** Resets value */

    }, {
      key: "reset",
      value: function reset() {
        this._value = '';
      }
      /** */

    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }
      /** Resolve new value */

    }, {
      key: "resolve",
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, '');
        this.doCommit();
        return this.value;
      }
      /** */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.value);
      },
      set: function set(value) {
        this.value = this.doFormat(value);
      }
      /** Value that includes raw user input */

    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
      /** Finds nearest input position in direction */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      /** Extracts value in range considering flags */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
      /** Extracts tail in range */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
      /** Appends tail */
      // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      /** Appends char */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        if (!ch) return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
      /** Appends char */

    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        var consistentState = this.state;

        var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);

        if (details.inserted) {
          var consistentTail;
          var appended = this.doValidate(flags) !== false;

          if (appended && checkTail != null) {
            // validation ok, check tail
            var beforeTailState = this.state;

            if (this.overwrite) {
              consistentTail = checkTail.state;
              checkTail.shiftBefore(this.value.length);
            }

            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

            if (appended && tailDetails.inserted) this.state = beforeTailState;
          } // revert all if something went wrong


          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }

        return details;
      }
      /** Appends optional placeholder at end */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        return new ChangeDetails();
      }
      /** Appends symbols considering flags */
      // $FlowFixMe no ideas

    }, {
      key: "append",
      value: function append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        var details = new ChangeDetails();
        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags && flags.tail) flags._beforeTailState = this.state;

        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, checkTail));
        } // append tail but aggregate only tailShift


        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        return details;
      }
      /** */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
      /** Calls function and reapplies current value */

    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var rawInput = this.rawInputValue;
        var value = this.value;
        var ret = fn();
        this.rawInputValue = rawInput; // append lost trailing chars at end

        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.value.length), {}, '');
        }

        delete this._refreshing;
        return ret;
      }
      /** */

    }, {
      key: "runIsolated",
      value: function runIsolated(fn) {
        if (this._isolated || !this.isInitialized) return fn(this);
        this._isolated = true;
        var state = this.state;
        var ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }
      /**
       Prepares string before mask processing
       @protected
       */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
      /**
       Validates if value is acceptable
       @protected
       */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
      /**
       Does additional processing in the end of editing
       @protected
       */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      /** */

    }, {
      key: "doFormat",
      value: function doFormat(value) {
        return this.format ? this.format(value, this) : value;
      }
      /** */

    }, {
      key: "doParse",
      value: function doParse(str) {
        return this.parse ? this.parse(str, this) : str;
      }
      /** */

    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var startChangePos = this.nearestInputPos(start, removeDirection);
        var changeDetails = new ChangeDetails({
          tailShift: startChangePos - start // adjust tailShift if start was aligned

        }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
          input: true
        }, tail));
        return changeDetails;
      }
    }]);

    return Masked;
  }();

  Masked.DEFAULTS = {
    format: function format(v) {
      return v;
    },
    parse: function parse(v) {
      return v;
    }
  };
  IMask.Masked = Masked;
  /** Get Masked class by mask type */

  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    } // $FlowFixMe


    if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

    if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

    if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

    if (mask instanceof Function) return IMask.MaskedFunction; // $FlowFixMe

    if (mask instanceof IMask.Masked) return mask.constructor;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    // $FlowFixMe

    return IMask.Masked;
  }
  /** Creates new {@link Masked} depending on mask type */


  function createMask(opts) {
    // $FlowFixMe
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    opts = Object.assign({}, opts);
    var mask = opts.mask; // $FlowFixMe

    if (IMask.Masked && mask instanceof IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
    return new MaskedClass(opts);
  }

  IMask.createMask = createMask;
  var _excluded$4 = ["mask"];
  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /** */

  var PatternInputDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);

      var mask = opts.mask,
          blockOpts = _objectWithoutProperties(opts, _excluded$4);

      this.masked = createMask({
        mask: mask
      });
      Object.assign(this, blockOpts);
    }

    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this._isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        if (fromPos === 0 && toPos >= 1) {
          this._isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }

        return new ChangeDetails();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this._isFilled) return new ChangeDetails();
        var state = this.masked.state; // simulate input

        var details = this.masked._appendChar(str, flags);

        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }

        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }

        details.skip = !details.inserted && !this.isOptional;
        this._isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked;

        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._isFilled || this.isOptional) return details;
        this._isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;

        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;

        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;

          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;

        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          _isFilled: this._isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this._isFilled = state._isFilled;
      }
    }]);

    return PatternInputDefinition;
  }();

  var PatternFixedDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */
    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);

      Object.assign(this, opts);
      this._value = '';
    }

    _createClass(PatternFixedDefinition, [{
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;

          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this._value) return details;
        var appended = this.char === str[0];
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value) return details;
        this._value = details.inserted = this.char;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails('');
      } // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str, flags);

        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }

        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }]);

    return PatternFixedDefinition;
  }();

  var _excluded$3 = ["chunks"];

  var ChunksTailDetails = /*#__PURE__*/function () {
    /** */
    function ChunksTailDetails() {
      var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, ChunksTailDetails);

      this.chunks = chunks;
      this.from = from;
    }

    _createClass(ChunksTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join('');
      } // $FlowFixMe no ideas

    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk)) return;
        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;

        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            var firstTailChunk;

            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          } // if tail chunk still has value


          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        // $FlowFixMe
        if (!(masked instanceof IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }

        var details = new ChangeDetails();

        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];

          var lastBlockIter = masked._mapPosToBlock(masked.value.length);

          var stop = chunk.stop;
          var chunkBlock = void 0;

          if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              details.aggregate(masked._appendPlaceholder(stop));
            }

            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }

          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last

            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted; // get not inserted chars

            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }

        return details;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (c) {
            return c.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(state) {
        var chunks = state.chunks,
            props = _objectWithoutProperties(state, _excluded$3);

        Object.assign(this, props);
        this.chunks = chunks.map(function (cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

          chunk.state = cstate;
          return chunk;
        });
      }
    }, {
      key: "shiftBefore",
      value: function shiftBefore(pos) {
        if (this.from >= pos || !this.chunks.length) return '';
        var chunkShiftPos = pos - this.from;
        var ci = 0;

        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shiftBefore(chunkShiftPos);

          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }

          if (shiftChar) return shiftChar;
        }

        return '';
      }
    }]);

    return ChunksTailDetails;
  }();
  /** Masking by RegExp */


  var MaskedRegExp = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedRegExp, _Masked);

    var _super = _createSuper(MaskedRegExp);

    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedRegExp, [{
      key: "_update",
      value:
      /**
       @override
       @param {Object} opts
       */
      function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };

        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedRegExp;
  }(Masked);

  IMask.MaskedRegExp = MaskedRegExp;
  var _excluded$2 = ["_blocks"];
  /**
   Pattern mask
   @param {Object} opts
   @param {Object} opts.blocks
   @param {Object} opts.definitions
   @param {string} opts.placeholderChar
   @param {boolean} opts.lazy
   */

  var MaskedPattern = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedPattern, _Masked);

    var _super = _createSuper(MaskedPattern);
    /** */

    /** */

    /** Single char for empty input */

    /** Show placeholder only when needed */


    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MaskedPattern); // TODO type $Shape<MaskedPatternOptions>={} does not work


      opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
    }
    /**
     @override
     @param {Object} opts
     */


    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);

        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

        this._rebuildMask();
      }
      /** */

    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;

        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;

        for (var i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            var _ret = function () {
              var p = pattern.slice(i);
              var bNames = Object.keys(_this.blocks).filter(function (bName) {
                return p.indexOf(bName) === 0;
              }); // order by key length

              bNames.sort(function (a, b) {
                return b.length - a.length;
              }); // use block name with max length

              var bName = bNames[0];

              if (bName) {
                // $FlowFixMe no ideas
                var maskedBlock = createMask(Object.assign({
                  parent: _this,
                  lazy: _this.lazy,
                  placeholderChar: _this.placeholderChar,
                  overwrite: _this.overwrite
                }, _this.blocks[bName]));

                if (maskedBlock) {
                  _this._blocks.push(maskedBlock); // store block index


                  if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }

                i += bName.length - 1;
                return "continue";
              }
            }();

            if (_ret === "continue") continue;
          }

          var _char = pattern[i];

          var _isInput = (_char in defs);

          if (_char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);

            continue;
          }

          if (_char === '{' || _char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }

          if (_char === '[' || _char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }

          if (_char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            _char = pattern[i];
            if (!_char) break;
            _isInput = false;
          }

          var def = _isInput ? new PatternInputDefinition({
            parent: this,
            lazy: this.lazy,
            placeholderChar: this.placeholderChar,
            mask: defs[_char],
            isOptional: optionalBlock
          }) : new PatternFixedDefinition({
            char: _char,
            isUnmasking: unmaskingBlock
          });

          this._blocks.push(def);
        }
      }
      /**
       @override
       */

    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set(state) {
        var _blocks = state._blocks,
            maskedState = _objectWithoutProperties(state, _excluded$2);

        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });

        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }
      /**
       @override
       */

    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }
      /**
       @override
       */

    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }
      /**
       @override
       */

    }, {
      key: "doCommit",
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }
      /**
       @override
       */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
       @override
       */

    }, {
      key: "value",
      get: function get() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
      /**
       @override
       */

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }
      /**
       @override
       */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blockIter = this._mapPosToBlock(this.value.length);

        var details = new ChangeDetails();
        if (!blockIter) return details;

        for (var bi = blockIter.index;; ++bi) {
          var _block = this._blocks[bi];
          if (!_block) break;

          var blockDetails = _block._appendChar(ch, flags);

          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }
      /**
       @override
       */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this2 = this;

        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;

        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
          var blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this2._findStopBefore(bi);
          blockChunk.from = _this2._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });

        return chunkTail;
      }
      /**
       @override
       */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });

        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;

        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }

        return stopBefore;
      }
      /** Appends placeholder depending on laziness */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;

        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;

        var startBlockIter = this._mapPosToBlock(this.value.length);

        if (!startBlockIter) return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (!b.lazy || toBlockIndex != null) {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];

            var bDetails = b._appendPlaceholder.apply(b, args);

            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });

        return details;
      }
      /** Finds block in pos */

    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';

        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;

          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      /** */

    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }
      /** */

    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;

        var fromBlockIter = this._mapPosToBlock(fromPos);

        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos); // process first block


          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            } // process last block


            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      /**
       @override
       */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });

        return removeDetails;
      }
      /**
       @override
       */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE; // TODO refactor - extract alignblock

        var beginBlockData = this._mapPosToBlock(cursorPos) || {
          index: 0,
          offset: 0
        };
        var beginBlockOffset = beginBlockData.offset,
            beginBlockIndex = beginBlockData.index;
        var beginBlock = this._blocks[beginBlockIndex];
        if (!beginBlock) return cursorPos;
        var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

        if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
          beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
        }

        var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
        var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

        if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
        var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

        if (direction === DIRECTION.NONE) {
          // NONE direction used to calculate start input position if no chars were removed
          // FOR NONE:
          // -
          // input|any
          // ->
          //  any|input
          // <-
          //  filled-input|any
          // check if first block at left is input
          if (searchBlockIndex > 0) {
            var blockIndexAtLeft = searchBlockIndex - 1;
            var blockAtLeft = this._blocks[blockIndexAtLeft];
            var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

            if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
              return this._blockStartPos(searchBlockIndex);
            }
          } // ->


          var firstInputAtRight = searchBlockIndex;

          for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
            var blockAtRight = this._blocks[bi];

            var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);

            if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
              return this._blockStartPos(bi) + _blockInputPos;
            }
          } // <-
          // find first non-fixed symbol


          for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
            var _block3 = this._blocks[_bi];

            var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE); // is input


            if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
              return this._blockStartPos(_bi) + _block3.value.length;
            }
          }

          return cursorPos;
        }

        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // -
          //  any|filled-input
          // <-
          //  any|first not empty is not-len-aligned
          //  not-0-aligned|any
          // ->
          //  any|not-len-aligned or end
          // check if first block at right is filled input
          var firstFilledBlockIndexAtRight;

          for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
            if (this._blocks[_bi2].value) {
              firstFilledBlockIndexAtRight = _bi2;
              break;
            }
          }

          if (firstFilledBlockIndexAtRight != null) {
            var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

            var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

            if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
              // filled block is input
              return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
            }
          } // <-
          // find this vars


          var firstFilledInputBlockIndex = -1;
          var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

          for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
            var _block4 = this._blocks[_bi3];

            var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

            if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

            if (_blockInputPos4 !== 0) {
              if (_blockInputPos4 !== _block4.value.length) {
                // aligned inside block - return immediately
                return this._blockStartPos(_bi3) + _blockInputPos4;
              } else {
                // found filled
                firstFilledInputBlockIndex = _bi3;
                break;
              }
            }
          }

          if (direction === DIRECTION.LEFT) {
            // try find first empty input before start searching position only when not forced
            for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
              var _block5 = this._blocks[_bi4];

              var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);

              var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

              if (blockAlignedPos > cursorPos) break; // if block is not lazy input

              if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
            }
          } // process overflow


          if (firstFilledInputBlockIndex >= 0) {
            return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
          } // for lazy if has aligned left inside fixed and has came to the start - use start position


          if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
            return 0;
          }

          if (firstEmptyInputBlockIndex != null) {
            return this._blockStartPos(firstEmptyInputBlockIndex);
          } // find first input


          for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
            var _block6 = this._blocks[_bi5];

            var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


            if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
              return this._blockStartPos(_bi5) + _blockInputPos6;
            }
          }

          return 0;
        }

        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // ->
          //  any|not-len-aligned and filled
          //  any|not-len-aligned
          // <-
          //  not-0-aligned or start|any
          var firstInputBlockAlignedIndex;
          var firstInputBlockAlignedPos;

          for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
            var _block7 = this._blocks[_bi6];

            var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos7 !== _block7.value.length) {
              firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
              firstInputBlockAlignedIndex = _bi6;
              break;
            }
          }

          if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
            for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
              var _block8 = this._blocks[_bi7];

              var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

              if (_blockInputPos8 !== _block8.value.length) {
                return this._blockStartPos(_bi7) + _blockInputPos8;
              }
            }

            return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
          }

          for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
            var _block9 = this._blocks[_bi8];

            var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

            if (_blockInputPos9 !== 0) {
              var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

              if (alignedPos >= cursorPos) return alignedPos;
              break;
            }
          }
        }

        return cursorPos;
      }
      /** Get block by name */

    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
      /** Get all blocks by name */

    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;

        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this4._blocks[gi];
        });
      }
    }]);

    return MaskedPattern;
  }(Masked);

  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;

  function isInput(block) {
    if (!block) return false;
    var value = block.value;
    return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
  }

  IMask.MaskedPattern = MaskedPattern;
  /** Pattern which accepts ranges */

  var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);

    var _super = _createSuper(MaskedRange);

    function MaskedRange() {
      _classCallCheck(this, MaskedRange);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedRange, [{
      key: "_matchFrom",
      get:
      /**
       Optionally sets max length of pattern.
       Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
       */

      /** Min bound */

      /** Max bound */

      /** */
      function get() {
        return this.maxLength - String(this.from).length;
      }
      /**
       @override
       */

    }, {
      key: "_update",
      value: function _update(opts) {
        // TODO type
        opts = Object.assign({
          to: this.to || 0,
          from: this.from || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var toStr = String(opts.to).padStart(maxLength, '0');
        var sameCharsCount = 0;

        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }

        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }
      /**
       @override
       */

    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = '';
        var maxstr = '';

        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
            _ref2 = _slicedToArray(_ref, 3),
            placeholder = _ref2[1],
            num = _ref2[2];

        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }

        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      }
      /**
       @override
       */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
        if (!this.autofix) return str;
        var fromStr = String(this.from).padStart(this.maxLength, '0');
        var toStr = String(this.to).padStart(this.maxLength, '0');
        var val = this.value;
        var prepStr = '';

        for (var ci = 0; ci < str.length; ++ci) {
          var nextVal = val + prepStr + str[ci];

          var _this$boundaries = this.boundaries(nextVal),
              _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
              minstr = _this$boundaries2[0],
              maxstr = _this$boundaries2[1];

          if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
        }

        return prepStr;
      }
      /**
       @override
       */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

        var _this$boundaries3 = this.boundaries(str),
            _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
            minstr = _this$boundaries4[0],
            maxstr = _this$boundaries4[1];

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedRange;
  }(MaskedPattern);

  IMask.MaskedRange = MaskedRange;
  /** Date mask */

  var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedDate, _MaskedPattern);

    var _super = _createSuper(MaskedDate);
    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
     @param {Object} opts
     */


    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);

      return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
    }
    /**
     @override
     */


    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;
        if (opts.pattern) opts.mask = opts.pattern;
        var blocks = opts.blocks;
        opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;

          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }

        Object.assign(opts.blocks, blocks); // add autofix

        Object.keys(opts.blocks).forEach(function (bk) {
          var b = opts.blocks[bk];
          if (!('autofix' in b)) b.autofix = opts.autofix;
        });

        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }
      /**
       @override
       */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var date = this.date;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
      /** Checks if date is exists */

    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }
      /** Parsed Date */

    }, {
      key: "date",
      get: function get() {
        return this.typedValue;
      },
      set: function set(date) {
        this.typedValue = date;
      }
      /**
       @override
       */

    }, {
      key: "typedValue",
      get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
      }
    }]);

    return MaskedDate;
  }(MaskedPattern);

  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
          _str$split2 = _slicedToArray(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    }
  };

  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };

  IMask.MaskedDate = MaskedDate;
  /**
   Generic element API to use with mask
   @interface
   */

  var MaskElement = /*#__PURE__*/function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }

    _createClass(MaskElement, [{
      key: "selectionStart",
      get:
      /** */

      /** */

      /** */

      /** Safely returns selection start */
      function get() {
        var start;

        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}

        return start != null ? start : this.value.length;
      }
      /** Safely returns selection end */

    }, {
      key: "selectionEnd",
      get: function get() {
        var end;

        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}

        return end != null ? end : this.value.length;
      }
      /** Safely sets element selection */

    }, {
      key: "select",
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
      /** Should be overriden in subclasses */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */

    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
      /** Should be overriden in subclasses */

    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }]);

    return MaskElement;
  }();

  IMask.MaskElement = MaskElement;
  /** Bridge between HTMLElement and {@link Masked} */

  var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);

    var _super = _createSuper(HTMLMaskElement);
    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
     @param {HTMLInputElement|HTMLTextAreaElement} input
     */


    function HTMLMaskElement(input) {
      var _this;

      _classCallCheck(this, HTMLMaskElement);

      _this = _super.call(this);
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    /** */
    // $FlowFixMe https://github.com/facebook/flow/issues/2839


    _createClass(HTMLMaskElement, [{
      key: "rootElement",
      get: function get() {
        return this.input.getRootNode ? this.input.getRootNode() : document;
      }
      /**
       Is element in focus
       @readonly
       */

    }, {
      key: "isActive",
      get: function get() {
        //$FlowFixMe
        return this.input === this.rootElement.activeElement;
      }
      /**
       Returns HTMLElement selection start
       @override
       */

    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
      /**
       Returns HTMLElement selection end
       @override
       */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
      /**
       Sets HTMLElement selection
       @override
       */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      /**
       HTMLElement value
       @override
       */

    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
      /**
       Binds HTMLElement events to mask internal events
       @override
       */

    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {
        var _this2 = this;

        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
      /**
       Unbinds HTMLElement events to mask internal events
       @override
       */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;

        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
      /** */

    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }

        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }]);

    return HTMLMaskElement;
  }(MaskElement);

  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };
  IMask.HTMLMaskElement = HTMLMaskElement;

  var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
    _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

    var _super = _createSuper(HTMLContenteditableMaskElement);

    function HTMLContenteditableMaskElement() {
      _classCallCheck(this, HTMLContenteditableMaskElement);

      return _super.apply(this, arguments);
    }

    _createClass(HTMLContenteditableMaskElement, [{
      key: "_unsafeSelectionStart",
      get:
      /**
       Returns HTMLElement selection start
       @override
       */
      function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        return selection && selection.anchorOffset;
      }
      /**
       Returns HTMLElement selection end
       @override
       */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        return selection && this._unsafeSelectionStart + String(selection).length;
      }
      /**
       Sets HTMLElement selection
       @override
       */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        var range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();

        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      /**
       HTMLElement value
       @override
       */

    }, {
      key: "value",
      get: function get() {
        // $FlowFixMe
        return this.input.textContent;
      },
      set: function set(value) {
        this.input.textContent = value;
      }
    }]);

    return HTMLContenteditableMaskElement;
  }(HTMLMaskElement);

  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  var _excluded$1 = ["mask"];
  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask = /*#__PURE__*/function () {
    /**
     View element
     @readonly
     */

    /**
     Internal {@link Masked} model
     @readonly
     */

    /**
     @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
     @param {Object} opts
     */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);

      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

      this._bindEvents(); // refresh


      this.updateValue();

      this._onChange();
    }
    /** Read or update mask */


    _createClass(InputMask, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (this.maskEquals(mask)) return;

        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }

        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
      /** Raw value */

    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Unmasked value */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Typed unmasked value */

    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
      /**
       Starts listening to element events
       @protected
       */

    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
      /**
       Stops listening to element events
       @protected
       */

    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        if (this.el) this.el.unbindEvents();
      }
      /**
       Fires custom event
       @protected
       */

    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l.apply(void 0, args);
        });
      }
      /**
       Current selection start
       @readonly
       */

    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      /** Current cursor position */

    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);

        this._saveSelection();
      }
      /**
       Stores current selection
       @protected
       */

    }, {
      key: "_saveSelection",
      value: function _saveSelection() {
        if (this.value !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
      /** Syncronizes model value from view */

    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
      /** Syncronizes view from model value, fires change events */

    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        var mask = opts.mask,
            restOpts = _objectWithoutProperties(opts, _excluded$1);

        var updateMask = !this.maskEquals(mask);
        var updateOpts = !objectIncludes(this.masked, restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts);
        if (updateMask || updateOpts) this.updateControl();
      }
      /** Updates cursor */

    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

        this._delayUpdateCursor(cursorPos);
      }
      /**
       Delays cursor update to support mobile browsers
       @private
       */

    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;

        this._abortUpdateCursor();

        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed

          _this.cursorPos = _this._changingCursorPos;

          _this._abortUpdateCursor();
        }, 10);
      }
      /**
       Fires custom events
       @protected
       */

    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept', this._inputEvent);

        if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
      }
      /**
       Aborts delayed cursor update
       @private
       */

    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
      /** Aligns cursor to nearest available position */

    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
      }
      /** Aligns cursor only if selection is empty */

    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        this.alignCursor();
      }
      /** Adds listener on custom event */

    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];

        this._listeners[ev].push(handler);

        return this;
      }
      /** Removes custom event listener */

    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return this;

        if (!handler) {
          delete this._listeners[ev];
          return this;
        }

        var hIndex = this._listeners[ev].indexOf(handler);

        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
      /** Handles view input event */

    }, {
      key: "_onInput",
      value: function _onInput(e) {
        this._inputEvent = e;

        this._abortUpdateCursor(); // fix strange IE behavior


        if (!this._selection) return this.updateValue();
        var details = new ActionDetails( // new state
        this.el.value, this.cursorPos, // old state
        this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
      }
      /** Handles view change event and commits model value */

    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }

        this.masked.doCommit();
        this.updateControl();

        this._saveSelection();
      }
      /** Handles view drop event, prevents by default */

    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      /** Restore last selection on focus */

    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        this.alignCursorFriendly();
      }
      /** Restore last selection on focus */

    }, {
      key: "_onClick",
      value: function _onClick(ev) {
        this.alignCursorFriendly();
      }
      /** Unbind view events and removes element reference */

    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(); // $FlowFixMe why not do so?


        this._listeners.length = 0; // $FlowFixMe

        delete this.el;
      }
    }]);

    return InputMask;
  }();

  IMask.InputMask = InputMask;
  /** Pattern which validates enum values */

  var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedEnum, _MaskedPattern);

    var _super = _createSuper(MaskedEnum);

    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedEnum, [{
      key: "_update",
      value:
      /**
       @override
       @param {Object} opts
       */
      function _update(opts) {
        // TODO type
        if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }
      /**
       @override
       */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this,
            _get2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.enum.some(function (e) {
          return e.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedEnum;
  }(MaskedPattern);

  IMask.MaskedEnum = MaskedEnum;
  /**
   Number mask
   @param {Object} opts
   @param {string} opts.radix - Single char
   @param {string} opts.thousandsSeparator - Single char
   @param {Array<string>} opts.mapToRadix - Array of single chars
   @param {number} opts.min
   @param {number} opts.max
   @param {number} opts.scale - Digits after point
   @param {boolean} opts.signed - Allow negative
   @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
   @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
   */

  var MaskedNumber = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedNumber, _Masked);

    var _super = _createSuper(MaskedNumber);
    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */


    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);

      return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
    }
    /**
     @override
     */


    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

        this._updateRegExps();
      }
      /** */

    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        var midInput = '(0|([1-9]+\\d*))?';
        var mid = '\\d*';
        var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      /** */

    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      /** */

    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      /**
       @override
       */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var _get2;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
      }
      /** */

    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = 0;

        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }

        return count;
      }
      /** */

    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      /**
       @override
       */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;

        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }
      /**
       @override
       */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
        var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

        this._value = this._removeThousandsSeparators(this.value);

        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        this._value = this._insertThousandsSeparators(this._value);
        var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }
      /** */

    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }

        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);

        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

        var separatorAroundToPos = this._findSeparatorAround(to);

        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      /**
       @override
       */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);

        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      /**
       @override
       */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;

        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

              if (separatorAtLeftPos >= 0) {
                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }

              break;
            }

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              var separatorAtRightPos = this._findSeparatorAround(cursorPos);

              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }

        return cursorPos;
      }
      /**
       @override
       */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

        var valid = regexp.test(this._removeThousandsSeparators(this.value));

        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
        }

        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }
      /**
       @override
       */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number; // check bounds

          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = String(validnum);
          var formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }

        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }
      /** */

    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        }); // add leading zero

        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      /** */

    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      /**
       @override
       */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
      }
      /**
       @override
       */

    }, {
      key: "typedValue",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(n) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
      }
      /** Parsed Number */

    }, {
      key: "number",
      get: function get() {
        return this.typedValue;
      },
      set: function set(number) {
        this.typedValue = number;
      }
      /**
       Is negative allowed
       @readonly
       */

    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
    }]);

    return MaskedNumber;
  }(Masked);

  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };
  IMask.MaskedNumber = MaskedNumber;
  /** Masking by custom Function */

  var MaskedFunction = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedFunction, _Masked);

    var _super = _createSuper(MaskedFunction);

    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedFunction, [{
      key: "_update",
      value:
      /**
       @override
       @param {Object} opts
       */
      function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;

        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedFunction;
  }(Masked);

  IMask.MaskedFunction = MaskedFunction;
  var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];
  /** Dynamic mask for choosing apropriate mask in run-time */

  var MaskedDynamic = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedDynamic, _Masked);

    var _super = _createSuper(MaskedDynamic);
    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
     @param {Object} opts
     */


    function MaskedDynamic(opts) {
      var _this;

      _classCallCheck(this, MaskedDynamic);

      _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
      _this.currentMask = null;
      return _this;
    }
    /**
     @override
     */


    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];
        }
      }
      /**
       @override
       */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var details = this._applyDispatch(ch, flags);

        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, flags));
        }

        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
        flags._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

        this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset();

            if (insertValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              var d = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d.inserted.length - prevValueBeforeTail.length;
            }

            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
          }
        }

        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = this._applyDispatch.apply(this, arguments);

        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }

        return details;
      }
      /**
       @override
       */

    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
      /**
       @override
       */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2, _this$currentMask;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
      }
      /**
       @override
       */

    }, {
      key: "reset",
      value: function reset() {
        if (this.currentMask) this.currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }
      /**
       @override
       */

    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }
      /**
       @override
       */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
       @override
       */

    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : '';
      } // probably typedValue should not be used with dynamic
      ,
      set: function set(value) {
        var unmaskedValue = String(value); // double check it

        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }

        this.unmaskedValue = unmaskedValue;
      }
      /**
       @override
       */

    }, {
      key: "isComplete",
      get: function get() {
        return !!this.currentMask && this.currentMask.isComplete;
      }
      /**
       @override
       */

    }, {
      key: "remove",
      value: function remove() {
        var details = new ChangeDetails();

        if (this.currentMask) {
          var _this$currentMask2;

          details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
          .aggregate(this._applyDispatch());
        }

        return details;
      }
      /**
       @override
       */

    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        });
      },
      set: function set(state) {
        var compiledMasks = state.compiledMasks,
            currentMaskRef = state.currentMaskRef,
            currentMask = state.currentMask,
            maskedState = _objectWithoutProperties(state, _excluded);

        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });

        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }

        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }
      /**
       @override
       */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$currentMask3;

        return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
      }
      /**
       @override
       */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask4, _get3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
      }
      /**
       @override
       */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();

        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }
      /**
       @override
       */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask5, _get4;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
      },
      set: function set(overwrite) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }]);

    return MaskedDynamic;
  }(Masked);

  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue; // simulate input

      var inputs = masked.compiledMasks.map(function (m, index) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
        m.append(appended, flags);
        var weight = m.rawInputValue.length;
        return {
          weight: weight,
          index: index
        };
      }); // pop masks with longer values first

      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;
  /** Mask pipe source and destination types */

  var PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };
  /** Creates new pipe function depending on mask type, source and destination options */

  function createPipe(mask) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    var masked = createMask(mask);
    return function (value) {
      return masked.runIsolated(function (m) {
        m[from] = value;
        return m[to];
      });
    };
  }
  /** Pipes value through mask depending on mask type, source and destination options */


  function pipe(value) {
    for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipeArgs[_key - 1] = arguments[_key];
    }

    return createPipe.apply(void 0, pipeArgs)(value);
  }

  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;

  try {
    globalThis.IMask = IMask;
  } catch (e) {}

  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports['default'] = IMask;
  exports.pipe = pipe;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Swiper 8.4.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 12, 2022
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(function (i) {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function a() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  var i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function r() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }

  var n = /*#__PURE__*/function (_Array) {
    _inherits(n, _Array);

    var _super = _createSuper(n);

    function n(e) {
      var _this;

      _classCallCheck(this, n);

      "number" == typeof e ? _this = _super.call(this, e) : (_this = _super.call.apply(_super, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this)));
      return _possibleConstructorReturn(_this);
    }

    return _createClass(n);
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function l(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(l(e))) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    var s = r(),
        i = a();
    var l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);

    if ("string" == typeof e) {
      var _s = e.trim();

      if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
        var _e = "div";
        0 === _s.indexOf("<li") && (_e = "ul"), 0 === _s.indexOf("<tr") && (_e = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e = "tr"), 0 === _s.indexOf("<tbody") && (_e = "table"), 0 === _s.indexOf("<option") && (_e = "select");

        var _t = i.createElement(_e);

        _t.innerHTML = _s;

        for (var _e2 = 0; _e2 < _t.childNodes.length; _e2 += 1) {
          l.push(_t.childNodes[_e2]);
        }
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
            a = t.querySelectorAll(e);

        for (var _e3 = 0; _e3 < a.length; _e3 += 1) {
          s.push(a[_e3]);
        }

        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }

    return new n(function (e) {
      var t = [];

      for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
        -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
      }

      return t;
    }(l));
  }

  d.fn = n.prototype;
  var c = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(a));
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(a));
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return o(this, function (e) {
        return a.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        a.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
        if (2 === arguments.length) this[_s3].setAttribute(e, t);else for (var _t2 in e) {
          this[_s3][_t2] = e[_t2], this[_s3].setAttribute(_t2, e[_t2]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t3 = 0; _t3 < this.length; _t3 += 1) {
        this[_t3].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
        this[_t4].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        this[_t5].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = t[0],
          i = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;
        if (!t) return;
        var s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);else {
          var _e4 = d(t).parents();

          for (var _t6 = 0; _t6 < _e4.length; _t6 += 1) {
            d(_e4[_t6]).is(i) && r.apply(_e4[_t6], s);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && ((a = t[0], r = t[1], n = t[2]), i = void 0), n || (n = !1);
      var c = a.split(" ");
      var p;

      for (var _e5 = 0; _e5 < this.length; _e5 += 1) {
        var _t7 = this[_e5];
        if (i) for (p = 0; p < c.length; p += 1) {
          var _e6 = c[p];
          _t7.dom7LiveListeners || (_t7.dom7LiveListeners = {}), _t7.dom7LiveListeners[_e6] || (_t7.dom7LiveListeners[_e6] = []), _t7.dom7LiveListeners[_e6].push({
            listener: r,
            proxyListener: l
          }), _t7.addEventListener(_e6, l, n);
        } else for (p = 0; p < c.length; p += 1) {
          var _e7 = c[p];
          _t7.dom7Listeners || (_t7.dom7Listeners = {}), _t7.dom7Listeners[_e7] || (_t7.dom7Listeners[_e7] = []), _t7.dom7Listeners[_e7].push({
            listener: r,
            proxyListener: o
          }), _t7.addEventListener(_e7, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = t[0],
          i = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && ((a = t[0], r = t[1], n = t[2]), i = void 0), n || (n = !1);
      var l = a.split(" ");

      for (var _e8 = 0; _e8 < l.length; _e8 += 1) {
        var _t8 = l[_e8];

        for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
          var _s4 = this[_e9];

          var _a = void 0;

          if (!i && _s4.dom7Listeners ? _a = _s4.dom7Listeners[_t8] : i && _s4.dom7LiveListeners && (_a = _s4.dom7LiveListeners[_t8]), _a && _a.length) for (var _e10 = _a.length - 1; _e10 >= 0; _e10 -= 1) {
            var _i = _a[_e10];
            r && _i.listener === r || r && _i.listener && _i.listener.dom7proxy && _i.listener.dom7proxy === r ? (_s4.removeEventListener(_t8, _i.proxyListener, n), _a.splice(_e10, 1)) : r || (_s4.removeEventListener(_t8, _i.proxyListener, n), _a.splice(_e10, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      var e = r();

      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) {
        s[a] = arguments[a];
      }

      var i = s[0].split(" "),
          n = s[1];

      for (var _t9 = 0; _t9 < i.length; _t9 += 1) {
        var _a2 = i[_t9];

        for (var _t10 = 0; _t10 < this.length; _t10 += 1) {
          var _i2 = this[_t10];

          if (e.CustomEvent) {
            var _t11 = new e.CustomEvent(_a2, {
              detail: n,
              bubbles: !0,
              cancelable: !0
            });

            _i2.dom7EventData = s.filter(function (e, t) {
              return t > 0;
            }), _i2.dispatchEvent(_t11), _i2.dom7EventData = [], delete _i2.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e11 = this.styles();

          return this[0].offsetWidth + parseFloat(_e11.getPropertyValue("margin-right")) + parseFloat(_e11.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e12 = this.styles();

          return this[0].offsetHeight + parseFloat(_e12.getPropertyValue("margin-top")) + parseFloat(_e12.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e13 = r(),
            _t12 = a(),
            _s5 = this[0],
            _i3 = _s5.getBoundingClientRect(),
            _n = _t12.body,
            _l = _s5.clientTop || _n.clientTop || 0,
            _o = _s5.clientLeft || _n.clientLeft || 0,
            _d = _s5 === _e13 ? _e13.scrollY : _s5.scrollTop,
            _c = _s5 === _e13 ? _e13.scrollX : _s5.scrollLeft;

        return {
          top: _i3.top + _d - _l,
          left: _i3.left + _c - _o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s = r();
      var a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var _t13 in e) {
              this[a].style[_t13] = e[_t13];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, s) {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var _t14 = 0; _t14 < this.length; _t14 += 1) {
        this[_t14].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t15 = 0; _t15 < this.length; _t15 += 1) {
        this[_t15].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = r(),
          s = a(),
          i = this[0];
      var l, o;
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (l = d(e), o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      if (e === s) return i === s;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        var _s6 = t + e;

        return d(_s6 < 0 ? [] : [this[_s6]]);
      }

      return d([this[e]]);
    },
    append: function append() {
      var e;
      var t = a();

      for (var _s7 = 0; _s7 < arguments.length; _s7 += 1) {
        e = _s7 < 0 || arguments.length <= _s7 ? void 0 : arguments[_s7];

        for (var _s8 = 0; _s8 < this.length; _s8 += 1) {
          if ("string" == typeof e) {
            var _a3 = t.createElement("div");

            for (_a3.innerHTML = e; _a3.firstChild;) {
              this[_s8].appendChild(_a3.firstChild);
            }
          } else if (e instanceof n) for (var _t16 = 0; _t16 < e.length; _t16 += 1) {
            this[_s8].appendChild(e[_t16]);
          } else this[_s8].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = a();
      var s, i;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof e) {
          var _a4 = t.createElement("div");

          for (_a4.innerHTML = e, i = _a4.childNodes.length - 1; i >= 0; i -= 1) {
            this[s].insertBefore(_a4.childNodes[i], this[s].childNodes[0]);
          }
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) {
          this[s].insertBefore(e[i], this[s].childNodes[0]);
        } else this[s].insertBefore(e, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.nextElementSibling;) {
        var _a5 = s.nextElementSibling;
        e ? d(_a5).is(e) && t.push(_a5) : t.push(_a5), s = _a5;
      }

      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t17 = this[0];
        return e ? _t17.previousElementSibling && d(_t17.previousElementSibling).is(e) ? d([_t17.previousElementSibling]) : d([]) : _t17.previousElementSibling ? d([_t17.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        var _a6 = s.previousElementSibling;
        e ? d(_a6).is(e) && t.push(_a6) : t.push(_a6), s = _a6;
      }

      return d(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s9 = 0; _s9 < this.length; _s9 += 1) {
        null !== this[_s9].parentNode && (e ? d(this[_s9].parentNode).is(e) && t.push(this[_s9].parentNode) : t.push(this[_s9].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
        var _a7 = this[_s10].parentNode;

        for (; _a7;) {
          e ? d(_a7).is(e) && t.push(_a7) : t.push(_a7), _a7 = _a7.parentNode;
        }
      }

      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s11 = 0; _s11 < this.length; _s11 += 1) {
        var _a8 = this[_s11].querySelectorAll(e);

        for (var _e14 = 0; _e14 < _a8.length; _e14 += 1) {
          t.push(_a8[_e14]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s12 = 0; _s12 < this.length; _s12 += 1) {
        var _a9 = this[_s12].children;

        for (var _s13 = 0; _s13 < _a9.length; _s13 += 1) {
          e && !d(_a9[_s13]).is(e) || t.push(_a9[_s13]);
        }
      }

      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e15 = 0; _e15 < this.length; _e15 += 1) {
        this[_e15].parentNode && this[_e15].parentNode.removeChild(this[_e15]);
      }

      return this;
    }
  };

  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function u() {
    return Date.now();
  }

  function h(e, t) {
    void 0 === t && (t = "x");
    var s = r();
    var a, i, n;

    var l = function (e) {
      var t = r();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);

    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function m(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function f(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }

  function g() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];

    for (var _s14 = 1; _s14 < arguments.length; _s14 += 1) {
      var _a10 = _s14 < 0 || arguments.length <= _s14 ? void 0 : arguments[_s14];

      if (null != _a10 && !f(_a10)) {
        var _s15 = Object.keys(Object(_a10)).filter(function (e) {
          return t.indexOf(e) < 0;
        });

        for (var _t18 = 0, _i4 = _s15.length; _t18 < _i4; _t18 += 1) {
          var _i5 = _s15[_t18],
              _r = Object.getOwnPropertyDescriptor(_a10, _i5);

          void 0 !== _r && _r.enumerable && (m(e[_i5]) && m(_a10[_i5]) ? _a10[_i5].__swiper__ ? e[_i5] = _a10[_i5] : g(e[_i5], _a10[_i5]) : !m(e[_i5]) && m(_a10[_i5]) ? (e[_i5] = {}, _a10[_i5].__swiper__ ? e[_i5] = _a10[_i5] : g(e[_i5], _a10[_i5])) : e[_i5] = _a10[_i5]);
        }
      }
    }

    return e;
  }

  function v(e, t, s) {
    e.style.setProperty(t, s);
  }

  function w(e) {
    var t = e.swiper,
        s = e.targetPosition,
        a = e.side;
    var i = r(),
        n = -t.translate;
    var l,
        o = null;
    var d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

    var c = s > n ? "next" : "prev",
        p = function p(e, t) {
      return "next" === c && e >= t || "prev" === c && e <= t;
    },
        u = function u() {
      l = new Date().getTime(), null === o && (o = l);
      var e = Math.max(Math.min((l - o) / d, 1), 0),
          r = .5 - Math.cos(e * Math.PI) / 2;
      var c = n + r * (s - n);
      if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, a, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, a, c));
      }), void i.cancelAnimationFrame(t.cssModeFrameID);
      t.cssModeFrameID = i.requestAnimationFrame(u);
    };

    u();
  }

  var b, x, y;

  function E() {
    return b || (b = function () {
      var e = r(),
          t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          var t = !1;

          try {
            var _s16 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s16);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), b;
  }

  function C(e) {
    return void 0 === e && (e = {}), x || (x = function (e) {
      var _ref = void 0 === e ? {} : e,
          t = _ref.userAgent;

      var s = E(),
          a = r(),
          i = a.navigator.platform,
          n = t || a.navigator.userAgent,
          l = {
        ios: !1,
        android: !1
      },
          o = a.screen.width,
          d = a.screen.height,
          c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      var p = n.match(/(iPad).*OS\s([\d_]+)/);
      var u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          m = "Win32" === i;
      var f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(d)) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), x;
  }

  function T() {
    return y || (y = function () {
      var e = r();
      return {
        isSafari: function () {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), y;
  }

  Object.keys(c).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: c[e],
      writable: !0
    });
  });
  var $ = {
    on: function on(e, t, s) {
      var a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      var i = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function once(e, t, s) {
      var a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;

      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
          r[n] = arguments[n];
        }

        t.apply(a, r);
      }

      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      var a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      var t, s, a;

      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
        r[n] = arguments[n];
      }

      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
          e.apply(a, [t].concat(_toConsumableArray(s)));
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
          e.apply(a, s);
        });
      }), e;
    }
  };
  var S = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var a = e.$el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }

      var a = e.params,
          i = e.$wrapperEl,
          r = e.size,
          n = e.rtlTranslate,
          l = e.wrongRTL,
          o = e.virtual && a.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = i.children(".".concat(e.params.slideClass)),
          p = o ? e.virtual.slides.length : c.length;
      var u = [];
      var h = [],
          m = [];
      var f = a.slidesOffsetBefore;
      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
      var g = a.slidesOffsetAfter;
      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
      var w = e.snapGrid.length,
          b = e.slidesGrid.length;
      var x = a.spaceBetween,
          y = -f,
          E = 0,
          C = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
      var T = a.grid && a.grid.rows > 1 && e.grid;
      var $;
      T && e.grid.initSlides(p);
      var S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
        return void 0 !== a.breakpoints[e].slidesPerView;
      }).length > 0;

      for (var _i6 = 0; _i6 < p; _i6 += 1) {
        $ = 0;

        var _n2 = c.eq(_i6);

        if (T && e.grid.updateSlide(_i6, _n2, p, t), "none" !== _n2.css("display")) {
          if ("auto" === a.slidesPerView) {
            S && (c[_i6].style[t("width")] = "");

            var _r2 = getComputedStyle(_n2[0]),
                _l2 = _n2[0].style.transform,
                _o2 = _n2[0].style.webkitTransform;

            if (_l2 && (_n2[0].style.transform = "none"), _o2 && (_n2[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n2.outerWidth(!0) : _n2.outerHeight(!0);else {
              var _e16 = s(_r2, "width"),
                  _t19 = s(_r2, "padding-left"),
                  _a11 = s(_r2, "padding-right"),
                  _i7 = s(_r2, "margin-left"),
                  _l3 = s(_r2, "margin-right"),
                  _o3 = _r2.getPropertyValue("box-sizing");

              if (_o3 && "border-box" === _o3) $ = _e16 + _i7 + _l3;else {
                var _n2$ = _n2[0],
                    _s17 = _n2$.clientWidth,
                    _r3 = _n2$.offsetWidth;
                $ = _e16 + _t19 + _a11 + _i7 + _l3 + (_r3 - _s17);
              }
            }
            _l2 && (_n2[0].style.transform = _l2), _o2 && (_n2[0].style.webkitTransform = _o2), a.roundLengths && ($ = Math.floor($));
          } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[_i6] && (c[_i6].style[t("width")] = "".concat($, "px"));

          c[_i6] && (c[_i6].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i6 && (y = y - r / 2 - x), 0 === _i6 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1;
        }
      }

      if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
        width: "".concat(e.virtualSize + a.spaceBetween, "px")
      }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
        var _t20 = [];

        for (var _s18 = 0; _s18 < u.length; _s18 += 1) {
          var _i8 = u[_s18];
          a.roundLengths && (_i8 = Math.floor(_i8)), u[_s18] <= e.virtualSize - r && _t20.push(_i8);
        }

        u = _t20, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
      }

      if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
        var _s19 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

        c.filter(function (e, t) {
          return !a.cssMode || t !== c.length - 1;
        }).css(_defineProperty({}, _s19, "".concat(x, "px")));
      }

      if (a.centeredSlides && a.centeredSlidesBounds) {
        var _e17 = 0;
        m.forEach(function (t) {
          _e17 += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), _e17 -= a.spaceBetween;

        var _t21 = _e17 - r;

        u = u.map(function (e) {
          return e < 0 ? -f : e > _t21 ? _t21 + g : e;
        });
      }

      if (a.centerInsufficientSlides) {
        var _e18 = 0;

        if (m.forEach(function (t) {
          _e18 += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), _e18 -= a.spaceBetween, _e18 < r) {
          var _t22 = (r - _e18) / 2;

          u.forEach(function (e, s) {
            u[s] = e - _t22;
          }), h.forEach(function (e, s) {
            h[s] = e + _t22;
          });
        }
      }

      if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
      }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");

        var _t23 = -e.snapGrid[0],
            _s20 = -e.slidesGrid[0];

        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t23;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s20;
        });
      }

      if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        var _t24 = "".concat(a.containerModifierClass, "backface-hidden"),
            _s21 = e.$el.hasClass(_t24);

        p <= a.maxBackfaceHiddenSlides ? _s21 || e.$el.addClass(_t24) : _s21 && e.$el.removeClass(_t24);
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          s = [],
          a = t.virtual && t.params.virtual.enabled;
      var i,
          r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

      var n = function n(e) {
        return a ? t.slides.filter(function (t) {
          return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
        })[0] : t.slides.eq(e)[0];
      };

      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || d([])).each(function (e) {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          var _e19 = t.activeIndex + i;

          if (_e19 > t.slides.length && !a) break;
          s.push(n(_e19));
        }
      } else s.push(n(t.activeIndex));

      for (i = 0; i < s.length; i += 1) {
        if (void 0 !== s[i]) {
          var _e20 = s[i].offsetHeight;
          r = _e20 > r ? _e20 : r;
        }
      }

      (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides;

      for (var _s22 = 0; _s22 < t.length; _s22 += 1) {
        t[_s22].swiperSlideOffset = e.isHorizontal() ? t[_s22].offsetLeft : t[_s22].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
          s = t.params,
          a = t.slides,
          i = t.rtlTranslate,
          r = t.snapGrid;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      var n = -e;
      i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e21 = 0; _e21 < a.length; _e21 += 1) {
        var _l4 = a[_e21];
        var _o4 = _l4.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_o4 -= a[0].swiperSlideOffset);

        var _d2 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
            _c2 = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
            _p = -(n - _o4),
            _u = _p + t.slidesSizesGrid[_e21];

        (_p >= 0 && _p < t.size - 1 || _u > 1 && _u <= t.size || _p <= 0 && _u >= t.size) && (t.visibleSlides.push(_l4), t.visibleSlidesIndexes.push(_e21), a.eq(_e21).addClass(s.slideVisibleClass)), _l4.progress = i ? -_d2 : _d2, _l4.originalProgress = i ? -_c2 : _c2;
      }

      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (void 0 === e) {
        var _s23 = t.rtlTranslate ? -1 : 1;

        e = t && t.translate && t.translate * _s23 || 0;
      }

      var s = t.params,
          a = t.maxTranslate() - t.minTranslate();
      var i = t.progress,
          r = t.isBeginning,
          n = t.isEnd;
      var l = r,
          o = n;
      0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
        progress: i,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          s = e.params,
          a = e.$wrapperEl,
          i = e.activeIndex,
          r = e.realIndex,
          n = e.virtual && s.virtual.enabled;
      var l;
      t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
      var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
      var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          a = t.slidesGrid,
          i = t.snapGrid,
          r = t.params,
          n = t.activeIndex,
          l = t.realIndex,
          o = t.snapIndex;
      var d,
          c = e;

      if (void 0 === c) {
        for (var _e22 = 0; _e22 < a.length; _e22 += 1) {
          void 0 !== a[_e22 + 1] ? s >= a[_e22] && s < a[_e22 + 1] - (a[_e22 + 1] - a[_e22]) / 2 ? c = _e22 : s >= a[_e22] && s < a[_e22 + 1] && (c = _e22 + 1) : s >= a[_e22] && (c = _e22);
        }

        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }

      if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
        var _e23 = Math.min(r.slidesPerGroupSkip, c);

        d = _e23 + Math.floor((c - _e23) / r.slidesPerGroup);
      }
      if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
      var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          s = t.params,
          a = d(e).closest(".".concat(s.slideClass))[0];
      var i,
          r = !1;
      if (a) for (var _e24 = 0; _e24 < t.slides.length; _e24 += 1) {
        if (t.slides[_e24] === a) {
          r = !0, i = _e24;
          break;
        }
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var M = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          s = this.rtlTranslate,
          a = this.translate,
          i = this.$wrapperEl;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      var r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
          a = s.rtlTranslate,
          i = s.params,
          r = s.$wrapperEl,
          n = s.wrapperEl,
          l = s.progress;
      var o,
          d = 0,
          c = 0;
      s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
      var p = s.maxTranslate() - s.minTranslate();
      o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      var r = this,
          n = r.params,
          l = r.wrapperEl;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      var o = r.minTranslate(),
          d = r.maxTranslate();
      var c;

      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        var _e25 = r.isHorizontal();

        if (0 === t) l[_e25 ? "scrollLeft" : "scrollTop"] = -c;else {
          var _l$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: -c,
            side: _e25 ? "left" : "top"
          }), !0;
          l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e25 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
        }
        return !0;
      }

      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };

  function P(e) {
    var t = e.swiper,
        s = e.runCallbacks,
        a = e.direction,
        i = e.step;
    var r = t.activeIndex,
        n = t.previousIndex;
    var l = a;

    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition".concat(i)), s && r !== n) {
      if ("reset" === l) return void t.emit("slideResetTransition".concat(i));
      t.emit("slideChangeTransition".concat(i)), "next" === l ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i));
    }
  }

  var k = {
    slideTo: function slideTo(e, t, s, a, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

      if ("string" == typeof e) {
        var _t25 = parseInt(e, 10);

        if (!isFinite(_t25)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = _t25;
      }

      var r = this;
      var n = e;
      n < 0 && (n = 0);
      var l = r.params,
          o = r.snapGrid,
          d = r.slidesGrid,
          c = r.previousIndex,
          p = r.activeIndex,
          u = r.rtlTranslate,
          h = r.wrapperEl,
          m = r.enabled;
      if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
      var f = Math.min(r.params.slidesPerGroupSkip, n);
      var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1);
      var v = -o[g];
      if (l.normalizeSlideIndex) for (var _e26 = 0; _e26 < d.length; _e26 += 1) {
        var _t26 = -Math.floor(100 * v),
            _s24 = Math.floor(100 * d[_e26]),
            _a12 = Math.floor(100 * d[_e26 + 1]);

        void 0 !== d[_e26 + 1] ? _t26 >= _s24 && _t26 < _a12 - (_a12 - _s24) / 2 ? n = _e26 : _t26 >= _s24 && _t26 < _a12 && (n = _e26 + 1) : _t26 >= _s24 && (n = _e26);
      }

      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
      }

      var b;
      if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

      if (l.cssMode) {
        var _e27 = r.isHorizontal(),
            _s25 = u ? v : -v;

        if (0 === t) {
          var _t27 = r.virtual && r.params.virtual.enabled;

          _t27 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e27 ? "scrollLeft" : "scrollTop"] = _s25, _t27 && requestAnimationFrame(function () {
            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
          });
        } else {
          var _h$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: _s25,
            side: _e27 ? "left" : "top"
          }), !0;
          h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e27 ? "left" : "top", _s25), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
        }

        return !0;
      }

      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function slideToLoop(e, t, s, a) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        var _t28 = parseInt(e, 10);

        if (!isFinite(_t28)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = _t28;
      }

      var i = this;
      var r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function slideNext(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
          i = a.animating,
          r = a.enabled,
          n = a.params;
      if (!r) return a;
      var l = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      var o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function slidePrev(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
          i = a.params,
          r = a.animating,
          n = a.snapGrid,
          l = a.slidesGrid,
          o = a.rtlTranslate,
          d = a.enabled;
      if (!d) return a;

      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var p = c(o ? a.translate : -a.translate),
          u = n.map(function (e) {
        return c(e);
      });
      var h = n[u.indexOf(p) - 1];

      if (void 0 === h && i.cssMode) {
        var _e28;

        n.forEach(function (t, s) {
          p >= t && (_e28 = s);
        }), void 0 !== _e28 && (h = n[_e28 > 0 ? _e28 - 1 : _e28]);
      }

      var m = 0;

      if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
        var _i9 = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;

        return a.slideTo(_i9, e, t, s);
      }

      return a.slideTo(m, e, t, s);
    },
    slideReset: function slideReset(e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest(e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
      var i = this;
      var r = i.activeIndex;
      var n = Math.min(i.params.slidesPerGroupSkip, r),
          l = n + Math.floor((r - n) / i.params.slidesPerGroup),
          o = i.rtlTranslate ? i.translate : -i.translate;

      if (o >= i.snapGrid[l]) {
        var _e29 = i.snapGrid[l];
        o - _e29 > (i.snapGrid[l + 1] - _e29) * a && (r += i.params.slidesPerGroup);
      } else {
        var _e30 = i.snapGrid[l - 1];
        o - _e30 <= (i.snapGrid[l] - _e30) * a && (r -= i.params.slidesPerGroup);
      }

      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl,
          a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var i,
          r = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var z = {
    loopCreate: function loopCreate() {
      var e = this,
          t = a(),
          s = e.params,
          i = e.$wrapperEl,
          r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
      var n = r.children(".".concat(s.slideClass));

      if (s.loopFillGroupWithBlank) {
        var _e31 = s.slidesPerGroup - n.length % s.slidesPerGroup;

        if (_e31 !== s.slidesPerGroup) {
          for (var _a13 = 0; _a13 < _e31; _a13 += 1) {
            var _e32 = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

            r.append(_e32);
          }

          n = r.children(".".concat(s.slideClass));
        }
      }

      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
      var l = [],
          o = [];
      n.each(function (e, t) {
        d(e).attr("data-swiper-slide-index", t);
      });

      for (var _t29 = 0; _t29 < e.loopedSlides; _t29 += 1) {
        var _e33 = _t29 - Math.floor(_t29 / n.length) * n.length;

        o.push(n.eq(_e33)[0]), l.unshift(n.eq(n.length - _e33 - 1)[0]);
      }

      for (var _e34 = 0; _e34 < o.length; _e34 += 1) {
        r.append(d(o[_e34].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }

      for (var _e35 = l.length - 1; _e35 >= 0; _e35 -= 1) {
        r.prepend(d(l[_e35].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this;
      e.emit("beforeLoopFix");
      var t = e.activeIndex,
          s = e.slides,
          a = e.loopedSlides,
          i = e.allowSlidePrev,
          r = e.allowSlideNext,
          n = e.snapGrid,
          l = e.rtlTranslate;
      var o;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var d = -n[t] - e.getTranslate();

      if (t < a) {
        o = s.length - 3 * a + t, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        o = -s.length + t + a, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      }

      e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          s = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
    }
  };

  function L(e) {
    var t = this,
        s = a(),
        i = r(),
        n = t.touchEventsData,
        l = t.params,
        o = t.touches,
        c = t.enabled;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    var m = !!l.noSwipingClass && "" !== l.noSwipingClass,
        f = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
    var g = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        v = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (v ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === a() || s === r()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        var i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
      }(t);
    }(g, h[0]) : h.closest(g)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
    var w = o.currentX,
        b = o.currentY,
        x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (x && (w <= y || w >= i.innerWidth - y)) {
      if ("prevent" !== x) return;
      e.preventDefault();
    }

    if (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      var _e36 = !0;

      h.is(n.focusableElements) && (_e36 = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();

      var _a14 = _e36 && t.allowTouchMove && l.touchStartPreventDefault;

      !l.touchStartForcePreventDefault && !_a14 || h[0].isContentEditable || p.preventDefault();
    }

    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }

  function O(e) {
    var t = a(),
        s = this,
        i = s.touchEventsData,
        r = s.params,
        n = s.touches,
        l = s.rtlTranslate,
        o = s.enabled;
    if (!o) return;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    var p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? p.pageX : c.pageX,
        m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    var f = n.currentX - n.startX,
        g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e37;

      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e37 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e37 > r.touchAngle : 90 - _e37 > r.touchAngle);
    }

    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    var w = !0,
        b = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, b))) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, b))), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }

    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }

  function I(e) {
    var t = this,
        s = t.touchEventsData,
        a = t.params,
        i = t.touches,
        r = t.rtlTranslate,
        n = t.slidesGrid,
        l = t.enabled;
    if (!l) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = u(),
        c = d - s.touchStartTime;

    if (t.allowClick) {
      var _e38 = o.path || o.composedPath && o.composedPath();

      t.updateClickedSlide(_e38 && _e38[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
    }

    if (s.lastClickTime = u(), p(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var m = 0,
        f = t.slidesSizesGrid[0];

    for (var _e39 = 0; _e39 < n.length; _e39 += _e39 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      var _t30 = _e39 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      void 0 !== n[_e39 + _t30] ? h >= n[_e39] && h < n[_e39 + _t30] && (m = _e39, f = n[_e39 + _t30] - n[_e39]) : h >= n[_e39] && (m = _e39, f = n[n.length - 1] - n[n.length - 2]);
    }

    var g = null,
        v = null;
    a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    var w = (h - n[m]) / f,
        b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }

  function A() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var a = e.allowSlideNext,
        i = e.allowSlidePrev,
        r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function D(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function G() {
    var e = this,
        t = e.wrapperEl,
        s = e.rtlTranslate,
        a = e.enabled;
    if (!a) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var N = !1;

  function B() {}

  var H = function H(e, t) {
    var s = a(),
        i = e.params,
        r = e.touchEvents,
        n = e.el,
        l = e.wrapperEl,
        o = e.device,
        d = e.support,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (d.touch) {
      var _t31 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      n[p](r.start, e.onTouchStart, _t31), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, _t31), r.cancel && n[p](r.cancel, e.onTouchEnd, _t31);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
  };

  var X = {
    attachEvents: function attachEvents() {
      var e = this,
          t = a(),
          s = e.params,
          i = e.support;
      e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on");
    },
    detachEvents: function detachEvents() {
      H(this, "off");
    }
  };

  var Y = function Y(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };

  var R = {
    addClasses: function addClasses() {
      var e = this,
          t = e.classNames,
          s = e.params,
          a = e.rtl,
          i = e.$el,
          r = e.device,
          n = e.support,
          l = function (e, t) {
        var s = [];
        return e.forEach(function (e) {
          "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
            e[a] && s.push(t + a);
          }) : "string" == typeof e && s.push(t + e);
        }), s;
      }(["initialized", s.direction, {
        "pointer-events": !n.touch
      }, {
        "free-mode": e.params.freeMode && s.freeMode.enabled
      }, {
        autoheight: s.autoHeight
      }, {
        rtl: a
      }, {
        grid: s.grid && s.grid.rows > 1
      }, {
        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
      }, {
        android: r.android
      }, {
        ios: r.ios
      }, {
        "css-mode": s.cssMode
      }, {
        centered: s.cssMode && s.centeredSlides
      }, {
        "watch-progress": s.watchSlidesProgress
      }], s.containerModifierClass);

      t.push.apply(t, _toConsumableArray(l)), i.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
    },
    removeClasses: function removeClasses() {
      var e = this.$el,
          t = this.classNames;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    }
  };
  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function q(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      var a = Object.keys(s)[0],
          i = s[a];
      "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), g(t, s)) : g(t, s)) : g(t, s);
    };
  }

  var j = {
    eventsEmitter: $,
    update: S,
    translate: M,
    transition: {
      setTransition: function setTransition(e, t) {
        var s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            a = s.params;
        a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            a = s.params;
        s.animating = !1, a.cssMode || (s.setTransition(0), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: k,
    loop: z,
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: X,
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            a = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            i = e.params,
            r = e.$el,
            n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        var o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
        d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
          var s = i[t] && i[t].enabled,
              a = o[t] && o[t].enabled;
          s && !a && e[t].disable(), !s && a && e[t].enable();
        });
        var u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), g(e.params, o);
        var m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
      },
      getBreakpoint: function getBreakpoint(e, t, s) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
        var a = !1;
        var i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            var _t32 = parseFloat(e.substr(1));

            return {
              value: n * _t32,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        l.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });

        for (var _e40 = 0; _e40 < l.length; _e40 += 1) {
          var _l$_e = l[_e40],
              _r4 = _l$_e.point,
              _n3 = _l$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_n3, "px)")).matches && (a = _r4) : _n3 <= s.clientWidth && (a = _r4);
        }

        return a || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            s = e.params,
            a = s.slidesOffsetBefore;

        if (a) {
          var _t33 = e.slides.length - 1,
              _s26 = e.slidesGrid[_t33] + e.slidesSizesGrid[_t33] + 2 * a;

          e.isLocked = e.size > _s26;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: R,
    images: {
      loadImage: function loadImage(e, t, s, a, i, n) {
        var l = r();
        var o;

        function c() {
          n && n();
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s27 = 0; _s27 < e.imagesToLoad.length; _s27 += 1) {
          var _a15 = e.imagesToLoad[_s27];
          e.loadImage(_a15, _a15.currentSrc || _a15.getAttribute("src"), _a15.srcset || _a15.getAttribute("srcset"), _a15.sizes || _a15.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      _ = {};

  var V = /*#__PURE__*/function () {
    function V() {
      var _a16, _a17, _r$modules;

      _classCallCheck(this, V);

      var e, t;

      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) {
        a[i] = arguments[i];
      }

      if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : (_a16 = a, _a17 = _slicedToArray(_a16, 2), e = _a17[0], t = _a17[1], _a16), t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
        var _e41 = [];
        return d(t.el).each(function (s) {
          var a = g({}, t, {
            el: s
          });

          _e41.push(new V(a));
        }), _e41;
      }

      var r = this;
      r.__swiper__ = !0, r.support = E(), r.device = C({
        userAgent: t.userAgent
      }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = _toConsumableArray(r.__modules__), t.modules && Array.isArray(t.modules) && (_r$modules = r.modules).push.apply(_r$modules, _toConsumableArray(t.modules));
      var n = {};
      r.modules.forEach(function (e) {
        e({
          swiper: r,
          extendParams: q(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        });
      });
      var l = g({}, W, n);
      return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(function (e) {
        r.on(e, r.params.on[e]);
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
        enabled: r.params.enabled,
        el: e,
        classNames: [],
        slides: d(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === r.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === r.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
          return r.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, r.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: u(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r;
    }

    _createClass(V, [{
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var a = s.minTranslate(),
            i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.each(function (s) {
          var a = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: a
          }), e.emit("_slideClass", s, a);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var s = this.params,
            a = this.slides,
            i = this.slidesGrid,
            r = this.slidesSizesGrid,
            n = this.size,
            l = this.activeIndex;
        var o = 1;

        if (s.centeredSlides) {
          var _e42,
              _t34 = a[l].swiperSlideSize;

          for (var _s28 = l + 1; _s28 < a.length; _s28 += 1) {
            a[_s28] && !_e42 && (_t34 += a[_s28].swiperSlideSize, o += 1, _t34 > n && (_e42 = !0));
          }

          for (var _s29 = l - 1; _s29 >= 0; _s29 -= 1) {
            a[_s29] && !_e42 && (_t34 += a[_s29].swiperSlideSize, o += 1, _t34 > n && (_e42 = !0));
          }
        } else if ("current" === e) for (var _e43 = l + 1; _e43 < a.length; _e43 += 1) {
          (t ? i[_e43] + r[_e43] - i[l] < n : i[_e43] - i[l] < n) && (o += 1);
        } else for (var _e44 = l - 1; _e44 >= 0; _e44 -= 1) {
          i[l] - i[_e44] < n && (o += 1);
        }

        return o;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function a() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var i;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var s = this,
            a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(e) {
        var t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.$el.removeClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;

        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };

        var r = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var _t35 = d(e.shadowRoot.querySelector(i()));

            return _t35.children = function (e) {
              return s.children(e);
            }, _t35;
          }

          return s.children ? s.children(i()) : d(s).children(i());
        }();

        if (0 === r.length && t.params.createElements) {
          var _e45 = a().createElement("div");

          r = d(_e45), _e45.className = t.params.wrapperClass, s.append(_e45), s.children(".".concat(t.params.slideClass)).each(function (e) {
            r.append(e);
          });
        }

        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var s = this,
            a = s.params,
            i = s.$el,
            r = s.$wrapperEl,
            n = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        g(_, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return _;
      }
    }, {
      key: "defaults",
      get: function get() {
        return W;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        var t = V.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return V.installModule(e);
        }), V) : (V.installModule(e), V);
      }
    }]);

    return V;
  }();

  function F(e, t, s, i) {
    var r = a();
    return e.params.createElements && Object.keys(i).forEach(function (a) {
      if (!s[a] && !0 === s.auto) {
        var _n4 = e.$el.children(".".concat(i[a]))[0];
        _n4 || (_n4 = r.createElement("div"), _n4.className = i[a], e.$el.append(_n4)), s[a] = _n4, t[a] = _n4;
      }
    }), s;
  }

  function U(e) {
    return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }

  function K(e) {
    var t = this,
        s = t.$wrapperEl,
        a = t.params;
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t36 = 0; _t36 < e.length; _t36 += 1) {
      e[_t36] && s.append(e[_t36]);
    } else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }

  function Z(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    s.loop && t.loopDestroy();
    var r = i + 1;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _t37 = 0; _t37 < e.length; _t37 += 1) {
        e[_t37] && a.prepend(e[_t37]);
      }

      r = i + e.length;
    } else a.prepend(e);

    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }

  function Q(e, t) {
    var s = this,
        a = s.$wrapperEl,
        i = s.params,
        r = s.activeIndex;
    var n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
    var l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    var o = n > e ? n + 1 : n;
    var d = [];

    for (var _t38 = l - 1; _t38 >= e; _t38 -= 1) {
      var _e46 = s.slides.eq(_t38);

      _e46.remove(), d.unshift(_e46);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (var _e47 = 0; _e47 < t.length; _e47 += 1) {
        t[_e47] && a.append(t[_e47]);
      }

      o = n > e ? n + t.length : n;
    } else a.append(t);

    for (var _e48 = 0; _e48 < d.length; _e48 += 1) {
      a.append(d[_e48]);
    }

    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }

  function J(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    var r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
    var n,
        l = r;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _s30 = 0; _s30 < e.length; _s30 += 1) {
        n = e[_s30], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      }

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function ee() {
    var e = this,
        t = [];

    for (var _s31 = 0; _s31 < e.slides.length; _s31 += 1) {
      t.push(_s31);
    }

    e.removeSlide(t);
  }

  function te(e) {
    var t = e.effect,
        s = e.swiper,
        a = e.on,
        i = e.setTranslate,
        r = e.setTransition,
        n = e.overwriteParams,
        l = e.perspective,
        o = e.recreateShadows,
        d = e.getEffectParams;
    var c;
    a("beforeInit", function () {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      var e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", function () {
      s.params.effect === t && i();
    }), a("setTransition", function (e, a) {
      s.params.effect === t && r(a);
    }), a("transitionEnd", function () {
      if (s.params.effect === t && o) {
        if (!d || !d().slideShadows) return;
        s.slides.each(function (e) {
          s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
        }), o();
      }
    }), a("virtualUpdate", function () {
      s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(function () {
        c && s.slides && s.slides.length && (i(), c = !1);
      }));
    });
  }

  function se(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }

  function ae(e) {
    var t = e.swiper,
        s = e.duration,
        a = e.transformEl,
        i = e.allSlides;
    var r = t.slides,
        n = t.activeIndex,
        l = t.$wrapperEl;

    if (t.params.virtualTranslate && 0 !== s) {
      var _e49,
          _s32 = !1;

      _e49 = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), _e49.transitionEnd(function () {
        if (_s32) return;
        if (!t || t.destroyed) return;
        _s32 = !0, t.animating = !1;
        var e = ["webkitTransitionEnd", "transitionend"];

        for (var _t39 = 0; _t39 < e.length; _t39 += 1) {
          l.trigger(e[_t39]);
        }
      });
    }
  }

  function ie(e, t, s) {
    var a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
        i = e.transformEl ? t.find(e.transformEl) : t;
    var r = i.children(".".concat(a));
    return r.length || (r = d("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
  }

  Object.keys(j).forEach(function (e) {
    Object.keys(j[e]).forEach(function (t) {
      V.prototype[t] = j[e][t];
    });
  }), V.use([function (e) {
    var t = e.swiper,
        s = e.on,
        a = e.emit;
    var i = r();
    var n = null,
        l = null;

    var o = function o() {
      t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
    },
        d = function d() {
      t && !t.destroyed && t.initialized && a("orientationchange");
    };

    s("init", function () {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(function (e) {
        l = i.requestAnimationFrame(function () {
          var s = t.width,
              a = t.height;
          var i = s,
              r = a;
          e.forEach(function (e) {
            var s = e.contentBoxSize,
                a = e.contentRect,
                n = e.target;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
          }), i === s && r === a || o();
        });
      }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
    }), s("destroy", function () {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;

    var n = [],
        l = r(),
        o = function o(e, t) {
      void 0 === t && (t = {});
      var s = new (l.MutationObserver || l.WebkitMutationObserver)(function (e) {
        if (1 === e.length) return void i("observerUpdate", e[0]);

        var t = function t() {
          i("observerUpdate", e[0]);
        };

        l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), n.push(s);
    };

    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e50 = t.$el.parents();

          for (var _t40 = 0; _t40 < _e50.length; _t40 += 1) {
            o(_e50[_t40]);
          }
        }

        o(t.$el[0], {
          childList: t.params.observeSlideChildren
        }), o(t.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), a("destroy", function () {
      n.forEach(function (e) {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  var re = [function (e) {
    var t,
        s = e.swiper,
        a = e.extendParams,
        i = e.on,
        r = e.emit;

    function n(e, t) {
      var a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      var i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
    }

    function l(e) {
      var _s$params = s.params,
          t = _s$params.slidesPerView,
          a = _s$params.slidesPerGroup,
          i = _s$params.centeredSlides,
          _s$params$virtual = s.params.virtual,
          l = _s$params$virtual.addSlidesBefore,
          o = _s$params$virtual.addSlidesAfter,
          _s$virtual = s.virtual,
          d = _s$virtual.from,
          c = _s$virtual.to,
          p = _s$virtual.slides,
          u = _s$virtual.slidesGrid,
          h = _s$virtual.offset;
      s.params.cssMode || s.updateActiveIndex();
      var m = s.activeIndex || 0;
      var f, g, v;
      f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
      var w = Math.max((m || 0) - v, 0),
          b = Math.min((m || 0) + g, p.length - 1),
          x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

      function y() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
      }

      if (Object.assign(s.virtual, {
        from: w,
        to: b,
        offset: x,
        slidesGrid: s.slidesGrid
      }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, "".concat(x, "px")), s.updateProgress(), void r("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: x,
        from: w,
        to: b,
        slides: function () {
          var e = [];

          for (var _t41 = w; _t41 <= b; _t41 += 1) {
            e.push(p[_t41]);
          }

          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
      var E = [],
          C = [];
      if (e) s.$wrapperEl.find(".".concat(s.params.slideClass)).remove();else for (var _e51 = d; _e51 <= c; _e51 += 1) {
        (_e51 < w || _e51 > b) && s.$wrapperEl.find(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(_e51, "\"]")).remove();
      }

      for (var _t42 = 0; _t42 < p.length; _t42 += 1) {
        _t42 >= w && _t42 <= b && (void 0 === c || e ? C.push(_t42) : (_t42 > c && C.push(_t42), _t42 < d && E.push(_t42)));
      }

      C.forEach(function (e) {
        s.$wrapperEl.append(n(p[e], e));
      }), E.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        s.$wrapperEl.prepend(n(p[e], e));
      }), s.$wrapperEl.children(".swiper-slide").css(f, "".concat(x, "px")), y();
    }

    a({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, i("beforeInit", function () {
      s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push("".concat(s.params.containerModifierClass, "virtual")), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l());
    }), i("setTranslate", function () {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(function () {
        l();
      }, 100)) : l());
    }), i("init update resize", function () {
      s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
    }), Object.assign(s.virtual, {
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var _t43 = 0; _t43 < e.length; _t43 += 1) {
          e[_t43] && s.virtual.slides.push(e[_t43]);
        } else s.virtual.slides.push(e);
        l(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = s.activeIndex;
        var a = t + 1,
            i = 1;

        if (Array.isArray(e)) {
          for (var _t44 = 0; _t44 < e.length; _t44 += 1) {
            e[_t44] && s.virtual.slides.unshift(e[_t44]);
          }

          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);

        if (s.params.virtual.cache) {
          var _e52 = s.virtual.cache,
              _t45 = {};
          Object.keys(_e52).forEach(function (s) {
            var a = _e52[s],
                r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), _t45[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = _t45;
        }

        l(!0), s.slideTo(a, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null == e) return;
        var t = s.activeIndex;
        if (Array.isArray(e)) for (var _a18 = e.length - 1; _a18 >= 0; _a18 -= 1) {
          s.virtual.slides.splice(e[_a18], 1), s.params.virtual.cache && delete s.virtual.cache[e[_a18]], e[_a18] < t && (t -= 1), t = Math.max(t, 0);
        } else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        l(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function removeAllSlides() {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0);
      },
      update: l
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        n = e.emit;
    var l = a(),
        o = r();

    function c(e) {
      if (!t.enabled) return;
      var s = t.rtlTranslate;
      var a = e;
      a.originalEvent && (a = a.originalEvent);
      var i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          var _e53 = !1;

          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

          var _a19 = t.$el,
              _i10 = _a19[0].clientWidth,
              _r5 = _a19[0].clientHeight,
              _n5 = o.innerWidth,
              _l5 = o.innerHeight,
              _d3 = t.$el.offset();

          s && (_d3.left -= t.$el[0].scrollLeft);
          var _c3 = [[_d3.left, _d3.top], [_d3.left + _i10, _d3.top], [_d3.left, _d3.top + _r5], [_d3.left + _i10, _d3.top + _r5]];

          for (var _t46 = 0; _t46 < _c3.length; _t46 += 1) {
            var _s33 = _c3[_t46];

            if (_s33[0] >= 0 && _s33[0] <= _n5 && _s33[1] >= 0 && _s33[1] <= _l5) {
              if (0 === _s33[0] && 0 === _s33[1]) continue;
              _e53 = !0;
            }
          }

          if (!_e53) return;
        }

        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i);
      }
    }

    function p() {
      t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0);
    }

    function u() {
      t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1);
    }

    t.keyboard = {
      enabled: !1
    }, s({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", function () {
      t.params.keyboard.enabled && p();
    }), i("destroy", function () {
      t.keyboard.enabled && u();
    }), Object.assign(t.keyboard, {
      enable: p,
      disable: u
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var n = r();
    var l;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), t.mousewheel = {
      enabled: !1
    };
    var o,
        c = u();
    var h = [];

    function m() {
      t.enabled && (t.mouseEntered = !0);
    }

    function f() {
      t.enabled && (t.mouseEntered = !1);
    }

    function g(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = new n.Date().getTime(), !1));
    }

    function v(e) {
      var s = e,
          a = !0;
      if (!t.enabled) return;
      var r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      var n = t.$el;
      if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      var c = 0;

      var m = t.rtlTranslate ? -1 : 1,
          f = function (e) {
        var t = 0,
            s = 0,
            a = 0,
            i = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: a,
          pixelY: i
        };
      }(s);

      if (r.forceToAxis) {
        if (t.isHorizontal()) {
          if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
          c = -f.pixelX * m;
        } else {
          if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
          c = -f.pixelY;
        }
      } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
      if (0 === c) return !0;
      r.invert && (c = -c);
      var v = t.getTranslate() + c * r.sensitivity;

      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        var _e54 = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c)
        },
            _a20 = o && _e54.time < o.time + 500 && _e54.delta <= o.delta && _e54.direction === o.direction;

        if (!_a20) {
          o = void 0, t.params.loop && t.loopFix();

          var _n6 = t.getTranslate() + c * r.sensitivity;

          var _d4 = t.isBeginning,
              _u2 = t.isEnd;

          if (_n6 >= t.minTranslate() && (_n6 = t.minTranslate()), _n6 <= t.maxTranslate() && (_n6 = t.maxTranslate()), t.setTransition(0), t.setTranslate(_n6), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!_d4 && t.isBeginning || !_u2 && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
            clearTimeout(l), l = void 0, h.length >= 15 && h.shift();

            var _s34 = h.length ? h[h.length - 1] : void 0,
                _a21 = h[0];

            if (h.push(_e54), _s34 && (_e54.delta > _s34.delta || _e54.direction !== _s34.direction)) h.splice(0);else if (h.length >= 15 && _e54.time - _a21.time < 500 && _a21.delta - _e54.delta >= 1 && _e54.delta <= 6) {
              var _s35 = c > 0 ? .8 : .2;

              o = _e54, h.splice(0), l = p(function () {
                t.slideToClosest(t.params.speed, !0, void 0, _s35);
              }, 0);
            }
            l || (l = p(function () {
              o = _e54, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (_a20 || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), _n6 === t.minTranslate() || _n6 === t.maxTranslate()) return !0;
        }
      } else {
        var _s36 = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c),
          raw: e
        };
        h.length >= 2 && h.shift();

        var _a22 = h.length ? h[h.length - 1] : void 0;

        if (h.push(_s36), _a22 ? (_s36.direction !== _a22.direction || _s36.delta > _a22.delta || _s36.time > _a22.time + 150) && g(_s36) : g(_s36), function (e) {
          var s = t.params.mousewheel;

          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(_s36)) return !0;
      }

      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }

    function w(e) {
      var s = t.$el;
      "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
    }

    function b() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0);
    }

    function x() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0);
    }

    a("init", function () {
      !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
    }), a("destroy", function () {
      t.params.cssMode && b(), t.mousewheel.enabled && x();
    }), Object.assign(t.mousewheel, {
      enable: b,
      disable: x
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;

    function r(e) {
      var s;
      return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
    }

    function n(e, s) {
      var a = t.params.navigation;
      e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
    }

    function l() {
      if (t.params.loop) return;
      var _t$navigation = t.navigation,
          e = _t$navigation.$nextEl,
          s = _t$navigation.$prevEl;
      n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
    }

    function o(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }

    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }

    function p() {
      var e = t.params.navigation;
      if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      var s = r(e.nextEl),
          a = r(e.prevEl);
      s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: a,
        prevEl: a && a[0]
      }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
    }

    function u() {
      var _t$navigation2 = t.navigation,
          e = _t$navigation2.$nextEl,
          s = _t$navigation2.$prevEl;
      e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
    }

    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, a("init", function () {
      !1 === t.params.navigation.enabled ? h() : (p(), l());
    }), a("toEdge fromEdge lock unlock", function () {
      l();
    }), a("destroy", function () {
      u();
    }), a("enable disable", function () {
      var _t$navigation3 = t.navigation,
          e = _t$navigation3.$nextEl,
          s = _t$navigation3.$prevEl;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
    }), a("click", function (e, s) {
      var _t$navigation4 = t.navigation,
          a = _t$navigation4.$nextEl,
          r = _t$navigation4.$prevEl,
          n = s.target;

      if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;

        var _e55;

        a ? _e55 = a.hasClass(t.params.navigation.hiddenClass) : r && (_e55 = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === _e55 ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
      }
    });

    var h = function h() {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
    };

    Object.assign(t.navigation, {
      enable: function enable() {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
      },
      disable: h,
      update: l,
      init: p,
      destroy: u
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var r = "swiper-pagination";
    var n;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(r, "-bullet"),
        bulletActiveClass: "".concat(r, "-bullet-active"),
        modifierClass: "".concat(r, "-"),
        currentClass: "".concat(r, "-current"),
        totalClass: "".concat(r, "-total"),
        hiddenClass: "".concat(r, "-hidden"),
        progressbarFillClass: "".concat(r, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
        clickableClass: "".concat(r, "-clickable"),
        lockClass: "".concat(r, "-lock"),
        horizontalClass: "".concat(r, "-horizontal"),
        verticalClass: "".concat(r, "-vertical"),
        paginationDisabledClass: "".concat(r, "-disabled")
      }
    }), t.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var l = 0;

    function o() {
      return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
    }

    function c(e, s) {
      var a = t.params.pagination.bulletActiveClass;
      e[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
    }

    function p() {
      var e = t.rtl,
          s = t.params.pagination;
      if (o()) return;
      var a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          r = t.pagination.$el;
      var p;
      var u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

      if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        var _a23 = t.pagination.bullets;

        var _i11, _o5, _u3;

        if (s.dynamicBullets && (n = _a23.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), _i11 = Math.max(p - l, 0), _o5 = _i11 + (Math.min(_a23.length, s.dynamicMainBullets) - 1), _u3 = (_o5 + _i11) / 2), _a23.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), r.length > 1) _a23.each(function (e) {
          var t = d(e),
              a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i11 && a <= _o5 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i11 && c(t, "prev"), a === _o5 && c(t, "next"));
        });else {
          var _e56 = _a23.eq(p),
              _r6 = _e56.index();

          if (_e56.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _e57 = _a23.eq(_i11),
                _n7 = _a23.eq(_o5);

            for (var _e58 = _i11; _e58 <= _o5; _e58 += 1) {
              _a23.eq(_e58).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (t.params.loop) {
              if (_r6 >= _a23.length) {
                for (var _e59 = s.dynamicMainBullets; _e59 >= 0; _e59 -= 1) {
                  _a23.eq(_a23.length - _e59).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _a23.eq(_a23.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else c(_e57, "prev"), c(_n7, "next");
            } else c(_e57, "prev"), c(_n7, "next");
          }
        }

        if (s.dynamicBullets) {
          var _i12 = Math.min(_a23.length, s.dynamicMainBullets + 4),
              _r7 = (n * _i12 - n) / 2 - _u3 * n,
              _l6 = e ? "right" : "left";

          _a23.css(t.isHorizontal() ? _l6 : "top", "".concat(_r7, "px"));
        }
      }

      if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _e60;

        _e60 = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";

        var _a24 = (p + 1) / u;

        var _i13 = 1,
            _n8 = 1;
        "horizontal" === _e60 ? _i13 = _a24 : _n8 = _a24, r.find(U(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i13, ") scaleY(").concat(_n8, ")")).transition(t.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function u() {
      var e = t.params.pagination;
      if (o()) return;
      var s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          a = t.pagination.$el;
      var r = "";

      if ("bullets" === e.type) {
        var _i14 = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && _i14 > s && (_i14 = s);

        for (var _s37 = 0; _s37 < _i14; _s37 += 1) {
          e.renderBullet ? r += e.renderBullet.call(t, _s37, e.bulletClass) : r += "<".concat(e.bulletElement, " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");
        }

        a.html(r), t.pagination.bullets = a.find(U(e.bulletClass));
      }

      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>"), a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>"), a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
    }

    function h() {
      t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      var e = t.params.pagination;
      if (!e.el) return;
      var s = d(e.el);
      0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(function (e) {
        return d(e).parents(".swiper")[0] === t.el;
      }))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), function (e) {
        e.preventDefault();
        var s = d(this).index() * t.params.slidesPerGroup;
        t.params.loop && (s += t.loopedSlides), t.slideTo(s);
      }), Object.assign(t.pagination, {
        $el: s,
        el: s[0]
      }), t.enabled || s.addClass(e.lockClass));
    }

    function m() {
      var e = t.params.pagination;
      if (o()) return;
      var s = t.pagination.$el;
      s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
    }

    a("init", function () {
      !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
    }), a("activeIndexChange", function () {
      (t.params.loop || void 0 === t.snapIndex) && p();
    }), a("snapIndexChange", function () {
      t.params.loop || p();
    }), a("slidesLengthChange", function () {
      t.params.loop && (u(), p());
    }), a("snapGridLengthChange", function () {
      t.params.loop || (u(), p());
    }), a("destroy", function () {
      m();
    }), a("enable disable", function () {
      var e = t.pagination.$el;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
    }), a("lock unlock", function () {
      p();
    }), a("click", function (e, s) {
      var a = s.target,
          r = t.pagination.$el;

      if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;

        var _e61 = r.hasClass(t.params.pagination.hiddenClass);

        i(!0 === _e61 ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
      }
    });

    var f = function f() {
      t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m();
    };

    Object.assign(t.pagination, {
      enable: function enable() {
        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p();
      },
      disable: f,
      render: u,
      update: p,
      init: h,
      destroy: m
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        r = e.emit;
    var n = a();
    var l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;

    function g() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
          s = t.rtlTranslate,
          a = t.progress,
          i = e.$dragEl,
          r = e.$el,
          n = t.params.scrollbar;
      var l = o,
          d = (c - o) * a;
      s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform("translate3d(".concat(d, "px, 0, 0)")), i[0].style.width = "".concat(l, "px")) : (i.transform("translate3d(0px, ".concat(d, "px, 0)")), i[0].style.height = "".concat(l, "px")), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(function () {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }

    function v() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
          s = e.$dragEl,
          a = e.$el;
      s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = "".concat(o, "px") : s[0].style.height = "".concat(o, "px"), a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
    }

    function w(e) {
      return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    }

    function b(e) {
      var s = t.scrollbar,
          a = t.rtlTranslate,
          i = s.$el;
      var r;
      r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      var n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }

    function x(e) {
      var s = t.params.scrollbar,
          a = t.scrollbar,
          i = t.$wrapperEl,
          n = a.$el,
          o = a.$dragEl;
      h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
    }

    function y(e) {
      var s = t.scrollbar,
          a = t.$wrapperEl,
          i = s.$el,
          n = s.$dragEl;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e));
    }

    function E(e) {
      var s = t.params.scrollbar,
          a = t.scrollbar,
          i = t.$wrapperEl,
          n = a.$el;
      h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p(function () {
        n.css("opacity", 0), n.transition(400);
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }

    function C(e) {
      var s = t.scrollbar,
          a = t.touchEventsTouch,
          i = t.touchEventsDesktop,
          r = t.params,
          l = t.support,
          o = s.$el;
      if (!o) return;
      var d = o[0],
          c = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          p = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      if (!d) return;
      var u = "on" === e ? "addEventListener" : "removeEventListener";
      l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
    }

    function T() {
      var e = t.scrollbar,
          s = t.$el;
      t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var a = t.params.scrollbar;
      if (!a.el) return;
      var i = d(a.el);
      t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
      var r = i.find(".".concat(t.params.scrollbar.dragClass));
      0 === r.length && (r = d("<div class=\"".concat(t.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(e, {
        $el: i,
        el: i[0],
        $dragEl: r,
        dragEl: r[0]
      }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }

    function $() {
      var e = t.params.scrollbar,
          s = t.scrollbar.$el;
      s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off");
    }

    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, i("init", function () {
      !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
    }), i("update resize observerUpdate lock unlock", function () {
      v();
    }), i("setTranslate", function () {
      g();
    }), i("setTransition", function (e, s) {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      }(s);
    }), i("enable disable", function () {
      var e = t.scrollbar.$el;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }), i("destroy", function () {
      $();
    });

    var S = function S() {
      t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $();
    };

    Object.assign(t.scrollbar, {
      enable: function enable() {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g();
      },
      disable: S,
      updateSize: v,
      setTranslate: g,
      init: T,
      destroy: $
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      parallax: {
        enabled: !1
      }
    });

    var i = function i(e, s) {
      var a = t.rtl,
          i = d(e),
          r = a ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
      var l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      var c = i.attr("data-swiper-parallax-scale"),
          p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        var _e62 = p - (p - 1) * (1 - Math.abs(s));

        i[0].style.opacity = _e62;
      }

      if (null == c) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        var _e63 = c - (c - 1) * (1 - Math.abs(s));

        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e63, ")"));
      }
    },
        r = function r() {
      var e = t.$el,
          s = t.slides,
          a = t.progress,
          r = t.snapGrid;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
        i(e, a);
      }), s.each(function (e, s) {
        var n = e.progress;
        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          i(e, n);
        });
      });
    };

    a("beforeInit", function () {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", function () {
      t.params.parallax.enabled && r();
    }), a("setTranslate", function () {
      t.params.parallax.enabled && r();
    }), a("setTransition", function (e, s) {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        var s = t.$el;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var s = d(t);
          var a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), s.transition(a);
        });
      }(s);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var n = r();
    s({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), t.zoom = {
      enabled: !1
    };
    var l,
        o,
        c,
        p = 1,
        u = !1;
    var m = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    },
        f = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
        g = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    var v = 1;

    function w(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - s, 2));
    }

    function b(e) {
      var s = t.support,
          a = t.params.zoom;

      if (o = !1, c = !1, !s.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        o = !0, m.scaleStart = w(e);
      }

      m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass)), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass)), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0;
    }

    function x(e) {
      var s = t.support,
          a = t.params.zoom,
          i = t.zoom;

      if (!s.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        c = !0, m.scaleMove = w(e);
      }

      m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + Math.pow(i.scale - m.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), m.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === e.type && b(e);
    }

    function y(e) {
      var s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;

      if (!a.gestures) {
        if (!o || !c) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
        o = !1, c = !1;
      }

      m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0));
    }

    function E(e) {
      var s = t.zoom;
      if (!m.$imageEl || 0 === m.$imageEl.length) return;
      if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
      f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
      var a = f.width * s.scale,
          i = f.height * s.scale;

      if (!(a < m.slideWidth && i < m.slideHeight)) {
        if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
          if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
        }

        e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - Math.pow(f.minX - f.currentX + 1, .8)), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + Math.pow(f.currentX - f.maxX + 1, .8)), f.currentY < f.minY && (f.currentY = f.minY + 1 - Math.pow(f.minY - f.currentY + 1, .8)), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + Math.pow(f.currentY - f.maxY + 1, .8)), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }
    }

    function C() {
      var e = t.zoom;
      m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0);
    }

    function T(e) {
      var s = t.zoom,
          a = t.params.zoom;
      if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass))), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass))), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
      var i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform("translate3d(".concat(h, "px, ").concat(g, "px,0)")), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }

    function $() {
      var e = t.zoom,
          s = t.params.zoom;
      m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(s.containerClass))), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass("".concat(s.zoomedSlideClass)), m.$slideEl = void 0);
    }

    function S(e) {
      var s = t.zoom;
      s.scale && 1 !== s.scale ? $() : T(e);
    }

    function M() {
      var e = t.support;
      return {
        passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !e.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }

    function P() {
      return ".".concat(t.params.slideClass);
    }

    function k(e) {
      var _M = M(),
          s = _M.passiveListener,
          a = P();

      t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s);
    }

    function z() {
      l || (l = !0, k("on"));
    }

    function L() {
      l && (l = !1, k("off"));
    }

    function O() {
      var e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;

      var s = t.support,
          _M2 = M(),
          a = _M2.passiveListener,
          i = _M2.activeListenerWithCapture,
          r = P();

      s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    function I() {
      var e = t.zoom;
      if (!e.enabled) return;
      var s = t.support;
      e.enabled = !1;

      var _M3 = M(),
          a = _M3.passiveListener,
          i = _M3.activeListenerWithCapture,
          r = P();

      s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    Object.defineProperty(t.zoom, "scale", {
      get: function get() {
        return v;
      },
      set: function set(e) {
        if (v !== e) {
          var _t47 = m.$imageEl ? m.$imageEl[0] : void 0,
              _s38 = m.$slideEl ? m.$slideEl[0] : void 0;

          i("zoomChange", e, _t47, _s38);
        }

        v = e;
      }
    }), a("init", function () {
      t.params.zoom.enabled && O();
    }), a("destroy", function () {
      I();
    }), a("touchStart", function (e, s) {
      t.zoom.enabled && function (e) {
        var s = t.device;
        m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      }(s);
    }), a("touchEnd", function (e, s) {
      t.zoom.enabled && function () {
        var e = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
        f.isTouched = !1, f.isMoved = !1;
        var s = 300,
            a = 300;
        var i = g.x * s,
            r = f.currentX + i,
            n = g.y * a,
            l = f.currentY + n;
        0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
        var o = Math.max(s, a);
        f.currentX = r, f.currentY = l;
        var d = f.width * e.scale,
            c = f.height * e.scale;
        f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }();
    }), a("doubleTap", function (e, s) {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
    }), a("transitionEnd", function () {
      t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", function () {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
      enable: O,
      disable: I,
      in: T,
      out: $,
      toggle: S
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    s({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), t.lazy = {};
    var n = !1,
        l = !1;

    function o(e, s) {
      void 0 === s && (s = !0);
      var a = t.params.lazy;
      if (void 0 === e) return;
      if (0 === t.slides.length) return;
      var r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : t.slides.eq(e),
          n = r.find(".".concat(a.elementClass, ":not(.").concat(a.loadedClass, "):not(.").concat(a.loadingClass, ")"));
      !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(function (e) {
        var n = d(e);
        n.addClass(a.loadingClass);
        var l = n.attr("data-background"),
            c = n.attr("data-src"),
            p = n.attr("data-srcset"),
            u = n.attr("data-sizes"),
            h = n.parent("picture");
        t.loadImage(n[0], c || l, p, u, !1, function () {
          if (null != t && t && (!t || t.params) && !t.destroyed) {
            if (l ? (n.css("background-image", "url(\"".concat(l, "\")")), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
              var t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(".".concat(a.preloaderClass)).remove(), t.params.loop && s) {
              var _e64 = r.attr("data-swiper-slide-index");

              if (r.hasClass(t.params.slideDuplicateClass)) {
                o(t.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e64, "\"]:not(.").concat(t.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                o(t.$wrapperEl.children(".".concat(t.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e64, "\"]")).index(), !1);
              }
            }

            i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
          }
        }), i("lazyImageLoad", r[0], n[0]);
      });
    }

    function c() {
      var e = t.$wrapperEl,
          s = t.params,
          a = t.slides,
          i = t.activeIndex,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
      var c = s.slidesPerView;

      function p(t) {
        if (r) {
          if (e.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")).length) return !0;
        } else if (a[t]) return !0;

        return !1;
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }

      if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(".".concat(s.slideVisibleClass)).each(function (e) {
        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (c > 1) for (var _e65 = i; _e65 < i + c; _e65 += 1) {
        p(_e65) && o(_e65);
      } else o(i);
      if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        var _e66 = n.loadPrevNextAmount,
            _t48 = Math.ceil(c),
            _s39 = Math.min(i + _t48 + Math.max(_e66, _t48), a.length),
            _r8 = Math.max(i - Math.max(_t48, _e66), 0);

        for (var _e67 = i + _t48; _e67 < _s39; _e67 += 1) {
          p(_e67) && o(_e67);
        }

        for (var _e68 = _r8; _e68 < i; _e68 += 1) {
          p(_e68) && o(_e68);
        }
      } else {
        var _t49 = e.children(".".concat(s.slideNextClass));

        _t49.length > 0 && o(u(_t49));

        var _a25 = e.children(".".concat(s.slidePrevClass));

        _a25.length > 0 && o(u(_a25));
      }
    }

    function p() {
      var e = r();
      if (!t || t.destroyed) return;
      var s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          u = t.rtlTranslate;
      var h = !1;
      u && (o.left -= t.$el[0].scrollLeft);
      var m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];

      for (var _e69 = 0; _e69 < m.length; _e69 += 1) {
        var _t50 = m[_e69];

        if (_t50[0] >= 0 && _t50[0] <= i && _t50[1] >= 0 && _t50[1] <= l) {
          if (0 === _t50[0] && 0 === _t50[1]) continue;
          h = !0;
        }
      }

      var f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f));
    }

    a("beforeInit", function () {
      t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
    }), a("init", function () {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("scroll", function () {
      t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
    }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionStart", function () {
      t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionEnd", function () {
      t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
    }), a("slideChange", function () {
      var _t$params = t.params,
          e = _t$params.lazy,
          s = _t$params.cssMode,
          a = _t$params.watchSlidesProgress,
          i = _t$params.touchReleaseOnEdges,
          r = _t$params.resistanceRatio;
      e.enabled && (s || a && (i || 0 === r)) && c();
    }), a("destroy", function () {
      t.$el && t.$el.find(".".concat(t.params.lazy.loadingClass)).removeClass(t.params.lazy.loadingClass);
    }), Object.assign(t.lazy, {
      load: c,
      loadInSlide: o
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;

    function i(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) {
            s = e + t >> 1, a[s] <= i ? t = s : e = s;
          }

          return e;
        };
      }();

      var a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }

    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
    }

    s({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), t.controller = {
      control: void 0
    }, a("beforeInit", function () {
      t.controller.control = t.params.controller.control;
    }), a("update", function () {
      r();
    }), a("resize", function () {
      r();
    }), a("observerUpdate", function () {
      r();
    }), a("setTranslate", function (e, s, a) {
      t.controller.control && t.controller.setTranslate(s, a);
    }), a("setTransition", function (e, s, a) {
      t.controller.control && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function setTranslate(e, s) {
        var a = t.controller.control;
        var r, n;
        var l = t.constructor;

        function o(e) {
          var s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(a)) for (var _e70 = 0; _e70 < a.length; _e70 += 1) {
          a[_e70] !== s && a[_e70] instanceof l && o(a[_e70]);
        } else a instanceof l && s !== a && o(a);
      },
      setTransition: function setTransition(e, s) {
        var a = t.constructor,
            i = t.controller.control;
        var r;

        function n(s) {
          s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p(function () {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(function () {
            i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) {
          i[r] !== s && i[r] instanceof a && n(i[r]);
        } else i instanceof a && s !== i && n(i);
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null
      }
    }), t.a11y = {
      clicked: !1
    };
    var i = null;

    function r(e) {
      var t = i;
      0 !== t.length && (t.html(""), t.html(e));
    }

    function n(e) {
      e.attr("tabIndex", "0");
    }

    function l(e) {
      e.attr("tabIndex", "-1");
    }

    function o(e, t) {
      e.attr("role", t);
    }

    function c(e, t) {
      e.attr("aria-roledescription", t);
    }

    function p(e, t) {
      e.attr("aria-label", t);
    }

    function u(e) {
      e.attr("aria-disabled", !0);
    }

    function h(e) {
      e.attr("aria-disabled", !1);
    }

    function m(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      var s = t.params.a11y,
          a = d(e.target);
      t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
    }

    function f() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }

    function g() {
      return f() && t.params.pagination.clickable;
    }

    var v = function v(e, t, s) {
      n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    },
        w = function w() {
      t.a11y.clicked = !0;
    },
        b = function b() {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          t.a11y.clicked = !1;
        });
      });
    },
        x = function x(e) {
      if (t.a11y.clicked) return;
      var s = e.target.closest(".".concat(t.params.slideClass));
      if (!s || !t.slides.includes(s)) return;
      var a = t.slides.indexOf(s) === t.activeIndex,
          i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
      a || i || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0));
    },
        y = function y() {
      var e = t.params.a11y;
      e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
      var s = t.params.loop ? t.slides.filter(function (e) {
        return !e.classList.contains(t.params.slideDuplicateClass);
      }).length : t.slides.length;
      e.slideLabelMessage && t.slides.each(function (a, i) {
        var r = d(a),
            n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
        p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
      });
    },
        E = function E() {
      var e = t.params.a11y;
      t.$el.append(i);
      var s = t.$el;
      e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
      var a = t.$wrapperEl,
          r = e.id || a.attr("id") || "swiper-wrapper-".concat((n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      })));
      var n;
      var l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      var o;
      var d, u;
      o = r, a.attr("id", o), function (e, t) {
        e.attr("aria-live", t);
      }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0);
    };

    a("beforeInit", function () {
      i = d("<span class=\"".concat(t.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), a("afterInit", function () {
      t.params.a11y.enabled && E();
    }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function () {
      t.params.a11y.enabled && y();
    }), a("fromEdge toEdge afterInit lock unlock", function () {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        var _t$navigation5 = t.navigation,
            e = _t$navigation5.$nextEl,
            s = _t$navigation5.$prevEl;
        s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
      }();
    }), a("paginationUpdate", function () {
      t.params.a11y.enabled && function () {
        var e = t.params.a11y;
        f() && t.pagination.bullets.each(function (s) {
          var a = d(s);
          t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(".".concat(t.params.pagination.bulletActiveClass)) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
        });
      }();
    }), a("destroy", function () {
      t.params.a11y.enabled && function () {
        var e, s;
        i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0);
      }();
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    });
    var i = !1,
        n = {};

    var l = function l(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
        o = function o(e) {
      var t = r();
      var s;
      s = e ? new URL(e) : t.location;
      var a = s.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
        d = function d(e, s) {
      var a = r();
      if (!i || !t.params.history.enabled) return;
      var n;
      n = t.params.url ? new URL(t.params.url) : a.location;
      var o = t.slides.eq(s);
      var d = l(o.attr("data-history"));

      if (t.params.history.root.length > 0) {
        var _s40 = t.params.history.root;
        "/" === _s40[_s40.length - 1] && (_s40 = _s40.slice(0, _s40.length - 1)), d = "".concat(_s40, "/").concat(e, "/").concat(d);
      } else n.pathname.includes(e) || (d = "".concat(e, "/").concat(d));

      t.params.history.keepQuery && (d += n.search);
      var c = a.history.state;
      c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
        value: d
      }, null, d) : a.history.pushState({
        value: d
      }, null, d));
    },
        c = function c(e, s, a) {
      if (s) for (var _i15 = 0, _r9 = t.slides.length; _i15 < _r9; _i15 += 1) {
        var _r10 = t.slides.eq(_i15);

        if (l(_r10.attr("data-history")) === s && !_r10.hasClass(t.params.slideDuplicateClass)) {
          var _s41 = _r10.index();

          t.slideTo(_s41, e, a);
        }
      } else t.slideTo(0, e, a);
    },
        p = function p() {
      n = o(t.params.url), c(t.params.speed, n.value, !1);
    };

    a("init", function () {
      t.params.history.enabled && function () {
        var e = r();

        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p));
        }
      }();
    }), a("destroy", function () {
      t.params.history.enabled && function () {
        var e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p);
      }();
    }), a("transitionEnd _freeModeNoMomentumRelease", function () {
      i && d(t.params.history.key, t.activeIndex);
    }), a("slideChange", function () {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.emit,
        n = e.on,
        l = !1;
    var o = a(),
        c = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });

    var p = function p() {
      i("hashChange");
      var e = o.location.hash.replace("#", "");

      if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
        var _s42 = t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-hash=\"").concat(e, "\"]")).index();

        if (void 0 === _s42) return;
        t.slideTo(_s42);
      }
    },
        u = function u() {
      if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#".concat(t.slides.eq(t.activeIndex).attr("data-hash")) || ""), i("hashSet");else {
        var _e71 = t.slides.eq(t.activeIndex),
            _s43 = _e71.attr("data-hash") || _e71.attr("data-history");

        o.location.hash = _s43 || "", i("hashSet");
      }
    };

    n("init", function () {
      t.params.hashNavigation.enabled && function () {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        var e = o.location.hash.replace("#", "");

        if (e) {
          var _s44 = 0;

          for (var _a26 = 0, _i16 = t.slides.length; _a26 < _i16; _a26 += 1) {
            var _i17 = t.slides.eq(_a26);

            if ((_i17.attr("data-hash") || _i17.attr("data-history")) === e && !_i17.hasClass(t.params.slideDuplicateClass)) {
              var _e72 = _i17.index();

              t.slideTo(_e72, _s44, t.params.runCallbacksOnInit, !0);
            }
          }
        }

        t.params.hashNavigation.watchState && d(c).on("hashchange", p);
      }();
    }), n("destroy", function () {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
    }), n("transitionEnd _freeModeNoMomentumRelease", function () {
      l && u();
    }), n("slideChange", function () {
      l && t.params.cssMode && u();
    });
  }, function (e) {
    var t,
        s = e.swiper,
        i = e.extendParams,
        r = e.on,
        n = e.emit;

    function l() {
      if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
      var e = s.slides.eq(s.activeIndex);
      var a = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p(function () {
        var e;
        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
      }, a);
    }

    function o() {
      return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0);
    }

    function d() {
      return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0);
    }

    function c(e) {
      s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].addEventListener(e, h);
      }) : (s.autoplay.paused = !1, l())));
    }

    function u() {
      var e = a();
      "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
    }

    function h(e) {
      s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].removeEventListener(e, h);
      }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
    }

    function m() {
      s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].removeEventListener(e, h);
      });
    }

    function f() {
      s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l());
    }

    s.autoplay = {
      running: !1,
      paused: !1
    }, i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), r("init", function () {
      if (s.params.autoplay.enabled) {
        o();
        a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
      }
    }), r("beforeTransitionStart", function (e, t, a) {
      s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
    }), r("sliderFirstMove", function () {
      s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
    }), r("touchEnd", function () {
      s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
    }), r("destroy", function () {
      s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
      a().removeEventListener("visibilitychange", u);
    }), Object.assign(s.autoplay, {
      pause: c,
      run: l,
      start: o,
      stop: d
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var i = !1,
        r = !1;

    function n() {
      var e = t.thumbs.swiper;
      if (!e || e.destroyed) return;
      var s = e.clickedIndex,
          a = e.clickedSlide;
      if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var i;

      if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
        var _e73 = t.activeIndex;
        t.slides.eq(_e73).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, _e73 = t.activeIndex);

        var _s45 = t.slides.eq(_e73).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
            _a27 = t.slides.eq(_e73).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

        i = void 0 === _s45 ? _a27 : void 0 === _a27 ? _s45 : _a27 - _e73 < _e73 - _s45 ? _a27 : _s45;
      }

      t.slideTo(i);
    }

    function l() {
      var e = t.params.thumbs;
      if (i) return !1;
      i = !0;
      var s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (m(e.swiper)) {
        var _a28 = Object.assign({}, e.swiper);

        Object.assign(_a28, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(_a28), r = !0;
      }
      return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
    }

    function o(e) {
      var s = t.thumbs.swiper;
      if (!s || s.destroyed) return;
      var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
      var i = 1;
      var r = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _e74 = 0; _e74 < i; _e74 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e74, "\"]")).addClass(r);
      } else for (var _e75 = 0; _e75 < i; _e75 += 1) {
        s.slides.eq(t.realIndex + _e75).addClass(r);
      }
      var n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;

      if (t.realIndex !== s.realIndex || l) {
        var _i18,
            _r11,
            _o6 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_o6).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o6 = s.activeIndex);

          var _e76 = s.slides.eq(_o6).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
              _a29 = s.slides.eq(_o6).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

          _i18 = void 0 === _e76 ? _a29 : void 0 === _a29 ? _e76 : _a29 - _o6 == _o6 - _e76 ? s.params.slidesPerGroup > 1 ? _a29 : _o6 : _a29 - _o6 < _o6 - _e76 ? _a29 : _e76, _r11 = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else _i18 = t.realIndex, _r11 = _i18 > t.previousIndex ? "next" : "prev";

        l && (_i18 += "next" === _r11 ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_i18) < 0 && (s.params.centeredSlides ? _i18 = _i18 > _o6 ? _i18 - Math.floor(a / 2) + 1 : _i18 + Math.floor(a / 2) - 1 : _i18 > _o6 && s.params.slidesPerGroup, s.slideTo(_i18, e ? 0 : void 0));
      }
    }

    t.thumbs = {
      swiper: null
    }, a("beforeInit", function () {
      var e = t.params.thumbs;
      e && e.swiper && (l(), o(!0));
    }), a("slideChange update resize observerUpdate", function () {
      o();
    }), a("setTransition", function (e, s) {
      var a = t.thumbs.swiper;
      a && !a.destroyed && a.setTransition(s);
    }), a("beforeDestroy", function () {
      var e = t.thumbs.swiper;
      e && !e.destroyed && r && e.destroy();
    }), Object.assign(t.thumbs, {
      init: l,
      update: o
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.emit,
        i = e.once;
    s({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function onTouchStart() {
          var e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function onTouchMove() {
          var e = t.touchEventsData,
              s = t.touches;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: u()
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          var s = e.currentPos;
          var r = t.params,
              n = t.$wrapperEl,
              l = t.rtlTranslate,
              o = t.snapGrid,
              d = t.touchEventsData,
              c = u() - d.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (d.velocities.length > 1) {
                var _e78 = d.velocities.pop(),
                    _s47 = d.velocities.pop(),
                    _a30 = _e78.position - _s47.position,
                    _i19 = _e78.time - _s47.time;

                t.velocity = _a30 / _i19, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (_i19 > 150 || u() - _e78.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;

              t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;

              var _e77 = 1e3 * r.freeMode.momentumRatio;

              var _s46 = t.velocity * _e77;

              var _c4 = t.translate + _s46;

              l && (_c4 = -_c4);

              var _p2,
                  _h = !1;

              var _m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;

              var _f;

              if (_c4 < t.maxTranslate()) r.freeMode.momentumBounce ? (_c4 + t.maxTranslate() < -_m && (_c4 = t.maxTranslate() - _m), _p2 = t.maxTranslate(), _h = !0, d.allowMomentumBounce = !0) : _c4 = t.maxTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (_c4 > t.minTranslate()) r.freeMode.momentumBounce ? (_c4 - t.minTranslate() > _m && (_c4 = t.minTranslate() + _m), _p2 = t.minTranslate(), _h = !0, d.allowMomentumBounce = !0) : _c4 = t.minTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (r.freeMode.sticky) {
                var _e79;

                for (var _t51 = 0; _t51 < o.length; _t51 += 1) {
                  if (o[_t51] > -_c4) {
                    _e79 = _t51;
                    break;
                  }
                }

                _c4 = Math.abs(o[_e79] - _c4) < Math.abs(o[_e79 - 1] - _c4) || "next" === t.swipeDirection ? o[_e79] : o[_e79 - 1], _c4 = -_c4;
              }

              if (_f && i("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (_e77 = l ? Math.abs((-_c4 - t.translate) / t.velocity) : Math.abs((_c4 - t.translate) / t.velocity), r.freeMode.sticky) {
                  var _s48 = Math.abs((l ? -_c4 : _c4) - t.translate),
                      _a31 = t.slidesSizesGrid[t.activeIndex];

                  _e77 = _s48 < _a31 ? r.speed : _s48 < 2 * _a31 ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();

              r.freeMode.momentumBounce && _h ? (t.updateProgress(_p2), t.setTransition(_e77), t.setTranslate(_c4), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(function () {
                  t.setTranslate(_p2), n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(_c4), t.setTransition(_e77), t.setTranslate(_c4), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(_c4), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }

            (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        }
      }
    });
  }, function (e) {
    var t,
        s,
        a,
        i = e.swiper,
        r = e.extendParams;
    r({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), i.grid = {
      initSlides: function initSlides(e) {
        var r = i.params.slidesPerView,
            _i$params$grid = i.params.grid,
            n = _i$params$grid.rows,
            l = _i$params$grid.fill;
        s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
      },
      updateSlide: function updateSlide(e, r, n, l) {
        var _i$params = i.params,
            o = _i$params.slidesPerGroup,
            d = _i$params.spaceBetween,
            _i$params$grid2 = i.params.grid,
            c = _i$params$grid2.rows,
            p = _i$params$grid2.fill;
        var u, h, m;

        if ("row" === p && o > 1) {
          var _s49 = Math.floor(e / (o * c)),
              _a32 = e - c * o * _s49,
              _i20 = 0 === _s49 ? o : Math.min(Math.ceil((n - _s49 * c * o) / c), o);

          m = Math.floor(_a32 / _i20), h = _a32 - m * _i20 + _s49 * o, u = h + m * t / c, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

        r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
      },
      updateWrapperSize: function updateWrapperSize(e, s, a) {
        var _i$params2 = i.params,
            r = _i$params2.spaceBetween,
            n = _i$params2.centeredSlides,
            l = _i$params2.roundLengths,
            o = i.params.grid.rows;

        if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css(_defineProperty({}, a("width"), "".concat(i.virtualSize + r, "px"))), n) {
          s.splice(0, s.length);
          var _e80 = [];

          for (var _t52 = 0; _t52 < s.length; _t52 += 1) {
            var _a33 = s[_t52];
            l && (_a33 = Math.floor(_a33)), s[_t52] < i.virtualSize + s[0] && _e80.push(_a33);
          }

          s.push.apply(s, _e80);
        }
      }
    };
  }, function (e) {
    var t = e.swiper;
    Object.assign(t, {
      appendSlide: K.bind(t),
      prependSlide: Z.bind(t),
      addSlide: Q.bind(t),
      removeSlide: J.bind(t),
      removeAllSlides: ee.bind(t)
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), te({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.params.fadeEffect;

        for (var _a34 = 0; _a34 < e.length; _a34 += 1) {
          var _e81 = t.slides.eq(_a34);

          var _i21 = -_e81[0].swiperSlideOffset;

          t.params.virtualTranslate || (_i21 -= t.translate);
          var _r12 = 0;
          t.isHorizontal() || (_r12 = _i21, _i21 = 0);

          var _n9 = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_e81[0].progress), 0) : 1 + Math.min(Math.max(_e81[0].progress, -1), 0);

          se(s, _e81).css({
            opacity: _n9
          }).transform("translate3d(".concat(_i21, "px, ").concat(_r12, "px, 0px)"));
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.fadeEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    });

    var i = function i(e, t, s) {
      var a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
          i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === a.length && (a = d("<div class=\"swiper-slide-shadow-".concat(s ? "left" : "top", "\"></div>")), e.append(a)), 0 === i.length && (i = d("<div class=\"swiper-slide-shadow-".concat(s ? "right" : "bottom", "\"></div>")), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
    };

    te({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.$el,
            s = t.$wrapperEl,
            a = t.slides,
            r = t.width,
            n = t.height,
            l = t.rtlTranslate,
            o = t.size,
            c = t.browser,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
        var m,
            f = 0;
        p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
          height: "".concat(r, "px")
        })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));

        for (var _e82 = 0; _e82 < a.length; _e82 += 1) {
          var _t53 = a.eq(_e82);

          var _s50 = _e82;
          h && (_s50 = parseInt(_t53.attr("data-swiper-slide-index"), 10));

          var _r13 = 90 * _s50,
              _n10 = Math.floor(_r13 / 360);

          l && (_r13 = -_r13, _n10 = Math.floor(-_r13 / 360));

          var _d5 = Math.max(Math.min(_t53[0].progress, 1), -1);

          var _c5 = 0,
              _m2 = 0,
              _g = 0;
          _s50 % 4 == 0 ? (_c5 = 4 * -_n10 * o, _g = 0) : (_s50 - 1) % 4 == 0 ? (_c5 = 0, _g = 4 * -_n10 * o) : (_s50 - 2) % 4 == 0 ? (_c5 = o + 4 * _n10 * o, _g = o) : (_s50 - 3) % 4 == 0 && (_c5 = -o, _g = 3 * o + 4 * o * _n10), l && (_c5 = -_c5), u || (_m2 = _c5, _c5 = 0);

          var _v = "rotateX(".concat(u ? 0 : -_r13, "deg) rotateY(").concat(u ? _r13 : 0, "deg) translate3d(").concat(_c5, "px, ").concat(_m2, "px, ").concat(_g, "px)");

          _d5 <= 1 && _d5 > -1 && (f = 90 * _s50 + 90 * _d5, l && (f = 90 * -_s50 - 90 * _d5)), _t53.transform(_v), p.slideShadows && i(_t53, _d5, u);
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(o / 2, "px"),
          "transform-origin": "50% 50% -".concat(o / 2, "px")
        }), p.shadow) if (u) m.transform("translate3d(0px, ".concat(r / 2 + p.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(p.shadowScale, ")"));else {
          var _e83 = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
              _t54 = 1.5 - (Math.sin(2 * _e83 * Math.PI / 360) / 2 + Math.cos(2 * _e83 * Math.PI / 360) / 2),
              _s51 = p.shadowScale,
              _a35 = p.shadowScale / _t54,
              _i22 = p.shadowOffset;

          m.transform("scale3d(".concat(_s51, ", 1, ").concat(_a35, ") translate3d(0px, ").concat(n / 2 + _i22, "px, ").concat(-n / 2 / _a35, "px) rotateX(-90deg)"));
        }
        var g = c.isSafari || c.isWebView ? -o / 2 : 0;
        s.transform("translate3d(0px,0,".concat(g, "px) rotateX(").concat(t.isHorizontal() ? 0 : f, "deg) rotateY(").concat(t.isHorizontal() ? -f : 0, "deg)")), s[0].style.setProperty("--swiper-cube-translate-z", "".concat(g, "px"));
      },
      setTransition: function setTransition(e) {
        var s = t.$el,
            a = t.slides;
        a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
      },
      recreateShadows: function recreateShadows() {
        var e = t.isHorizontal();
        t.slides.each(function (t) {
          var s = Math.max(Math.min(t.progress, 1), -1);
          i(d(t), s, e);
        });
      },
      getEffectParams: function getEffectParams() {
        return t.params.cubeEffect;
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    });

    var i = function i(e, s, a) {
      var i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
          r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
    };

    te({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.rtlTranslate,
            a = t.params.flipEffect;

        for (var _r14 = 0; _r14 < e.length; _r14 += 1) {
          var _n11 = e.eq(_r14);

          var _l7 = _n11[0].progress;
          t.params.flipEffect.limitRotation && (_l7 = Math.max(Math.min(_n11[0].progress, 1), -1));
          var _o7 = _n11[0].swiperSlideOffset;

          var _d6 = -180 * _l7,
              _c6 = 0,
              _p3 = t.params.cssMode ? -_o7 - t.translate : -_o7,
              _u4 = 0;

          t.isHorizontal() ? s && (_d6 = -_d6) : (_u4 = _p3, _p3 = 0, _c6 = -_d6, _d6 = 0), _n11[0].style.zIndex = -Math.abs(Math.round(_l7)) + e.length, a.slideShadows && i(_n11, _l7, a);

          var _h2 = "translate3d(".concat(_p3, "px, ").concat(_u4, "px, 0px) rotateX(").concat(_c6, "deg) rotateY(").concat(_d6, "deg)");

          se(a, _n11).transform(_h2);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.flipEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      recreateShadows: function recreateShadows() {
        var e = t.params.flipEffect;
        t.slides.each(function (s) {
          var a = d(s);
          var r = a[0].progress;
          t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
        });
      },
      getEffectParams: function getEffectParams() {
        return t.params.flipEffect;
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), te({
      effect: "coverflow",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.width,
            s = t.height,
            a = t.slides,
            i = t.slidesSizesGrid,
            r = t.params.coverflowEffect,
            n = t.isHorizontal(),
            l = t.translate,
            o = n ? e / 2 - l : s / 2 - l,
            d = n ? r.rotate : -r.rotate,
            c = r.depth;

        for (var _e84 = 0, _t55 = a.length; _e84 < _t55; _e84 += 1) {
          var _t56 = a.eq(_e84),
              _s52 = i[_e84],
              _l8 = (o - _t56[0].swiperSlideOffset - _s52 / 2) / _s52,
              _p4 = "function" == typeof r.modifier ? r.modifier(_l8) : _l8 * r.modifier;

          var _u5 = n ? d * _p4 : 0,
              _h3 = n ? 0 : d * _p4,
              _m3 = -c * Math.abs(_p4),
              _f2 = r.stretch;

          "string" == typeof _f2 && -1 !== _f2.indexOf("%") && (_f2 = parseFloat(r.stretch) / 100 * _s52);

          var _g2 = n ? 0 : _f2 * _p4,
              _v2 = n ? _f2 * _p4 : 0,
              _w = 1 - (1 - r.scale) * Math.abs(_p4);

          Math.abs(_v2) < .001 && (_v2 = 0), Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_m3) < .001 && (_m3 = 0), Math.abs(_u5) < .001 && (_u5 = 0), Math.abs(_h3) < .001 && (_h3 = 0), Math.abs(_w) < .001 && (_w = 0);

          var _b = "translate3d(".concat(_v2, "px,").concat(_g2, "px,").concat(_m3, "px)  rotateX(").concat(_h3, "deg) rotateY(").concat(_u5, "deg) scale(").concat(_w, ")");

          if (se(r, _t56).transform(_b), _t56[0].style.zIndex = 1 - Math.abs(Math.round(_p4)), r.slideShadows) {
            var _e85 = n ? _t56.find(".swiper-slide-shadow-left") : _t56.find(".swiper-slide-shadow-top"),
                _s53 = n ? _t56.find(".swiper-slide-shadow-right") : _t56.find(".swiper-slide-shadow-bottom");

            0 === _e85.length && (_e85 = ie(r, _t56, n ? "left" : "top")), 0 === _s53.length && (_s53 = ie(r, _t56, n ? "right" : "bottom")), _e85.length && (_e85[0].style.opacity = _p4 > 0 ? _p4 : 0), _s53.length && (_s53[0].style.opacity = -_p4 > 0 ? -_p4 : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.coverflowEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });

    var i = function i(e) {
      return "string" == typeof e ? e : "".concat(e, "px");
    };

    te({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.$wrapperEl,
            a = t.slidesSizesGrid,
            r = t.params.creativeEffect,
            n = r.progressMultiplier,
            l = t.params.centeredSlides;

        if (l) {
          var _e86 = a[0] / 2 - t.params.slidesOffsetBefore || 0;

          s.transform("translateX(calc(50% - ".concat(_e86, "px))"));
        }

        var _loop = function _loop(_s54) {
          var a = e.eq(_s54),
              o = a[0].progress,
              d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
          var c = d;
          l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
          var p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
          var m = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          var f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(function (e, t) {
            u[t] = "calc(".concat(e, "px + (").concat(i(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), h.forEach(function (e, t) {
            h[t] = f.rotate[t] * Math.abs(d * n);
          }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
          var g = u.join(", "),
              v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
              w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
              b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
              x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);

          if (m && f.shadow || !m) {
            var _e87 = a.children(".swiper-slide-shadow");

            if (0 === _e87.length && f.shadow && (_e87 = ie(r, a)), _e87.length) {
              var _t57 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;

              _e87[0].style.opacity = Math.min(Math.max(Math.abs(_t57), 0), 1);
            }
          }

          var y = se(r, a);
          y.transform(x).css({
            opacity: b
          }), f.origin && y.css("transform-origin", f.origin);
        };

        for (var _s54 = 0; _s54 < e.length; _s54 += 1) {
          _loop(_s54);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.creativeEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      perspective: function perspective() {
        return t.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    }), te({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.activeIndex,
            a = t.params.cardsEffect,
            _t$touchEventsData = t.touchEventsData,
            i = _t$touchEventsData.startTranslate,
            r = _t$touchEventsData.isTouched,
            n = t.translate;

        for (var _l9 = 0; _l9 < e.length; _l9 += 1) {
          var _o8 = e.eq(_l9),
              _d7 = _o8[0].progress,
              _c7 = Math.min(Math.max(_d7, -4), 4);

          var _p5 = _o8[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform("translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (_p5 -= e[0].swiperSlideOffset);

          var _u6 = t.params.cssMode ? -_p5 - t.translate : -_p5,
              _h4 = 0;

          var _m4 = -100 * Math.abs(_c7);

          var _f3 = 1,
              _g3 = -a.perSlideRotate * _c7,
              _v3 = a.perSlideOffset - .75 * Math.abs(_c7);

          var _w2 = t.virtual && t.params.virtual.enabled ? t.virtual.from + _l9 : _l9,
              _b2 = (_w2 === s || _w2 === s - 1) && _c7 > 0 && _c7 < 1 && (r || t.params.cssMode) && n < i,
              _x = (_w2 === s || _w2 === s + 1) && _c7 < 0 && _c7 > -1 && (r || t.params.cssMode) && n > i;

          if (_b2 || _x) {
            var _e88 = Math.pow(1 - Math.abs((Math.abs(_c7) - .5) / .5), .5);

            _g3 += -28 * _c7 * _e88, _f3 += -.5 * _e88, _v3 += 96 * _e88, _h4 = -25 * _e88 * Math.abs(_c7) + "%";
          }

          if (_u6 = _c7 < 0 ? "calc(".concat(_u6, "px + (").concat(_v3 * Math.abs(_c7), "%))") : _c7 > 0 ? "calc(".concat(_u6, "px + (-").concat(_v3 * Math.abs(_c7), "%))") : "".concat(_u6, "px"), !t.isHorizontal()) {
            var _e89 = _h4;
            _h4 = _u6, _u6 = _e89;
          }

          var _y = _c7 < 0 ? "" + (1 + (1 - _f3) * _c7) : "" + (1 - (1 - _f3) * _c7),
              _E = "\n        translate3d(".concat(_u6, ", ").concat(_h4, ", ").concat(_m4, "px)\n        rotateZ(").concat(a.rotate ? _g3 : 0, "deg)\n        scale(").concat(_y, ")\n      ");

          if (a.slideShadows) {
            var _e90 = _o8.find(".swiper-slide-shadow");

            0 === _e90.length && (_e90 = ie(a, _o8)), _e90.length && (_e90[0].style.opacity = Math.min(Math.max((Math.abs(_c7) - .5) / .5, 0), 1));
          }

          _o8[0].style.zIndex = -Math.abs(Math.round(_d7)) + e.length;
          se(a, _o8).transform(_E);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.cardsEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }];
  return V.use(re), V;
});
"use strict";

addEventListener('DOMContentLoaded', function () {
  var calculatorsForm = Array.from(document.querySelectorAll('#price option')).map(function (option) {
    return {
      value: option.value,
      price: option.dataset.price,
      priceAzs: option.dataset.priceAzs
    };
  });
  var maskOptionsTel = {
    mask: '+{7} (000) 000-00-00'
  };
  var inputTellField = document.querySelectorAll('[data-input-mask="tel"]');
  inputTellField.forEach(function (input) {
    IMask(input, maskOptionsTel);
  });
  var selectElements = document.querySelectorAll('.select select');
  selectElements.forEach(function (select) {
    var choices = new Choices(select, {
      searchEnabled: false
    });
  });

  function formatValue(num) {
    var formattedValue = Math.round(num * 100) / 100;
    formattedValue = String(formattedValue).split('.');
    formattedValue[0] = new Intl.NumberFormat('ru-RU').format(formattedValue[0]);
    formattedValue = formattedValue.join('.') + ' ₽';
    return formattedValue;
  }

  var inputRangeRoundElement = document.querySelectorAll('.input__round');
  var shiftX = 0;
  inputRangeRoundElement.forEach(function (item) {
    var currentInput = item.closest('.input').querySelector('input');
    var minVal = +currentInput.dataset.minValue;
    var maxVal = +currentInput.dataset.maxValue;
    var maskOptionsLiter = {
      mask: 'NB {литров}',
      lazy: false,
      blocks: {
        NB: {
          mask: IMask.MaskedRange,
          autofix: true,
          lazy: true
        }
      }
    };

    if (typeof minVal === 'number') {
      maskOptionsLiter.blocks.NB.from = minVal;
    }

    if (typeof maxVal === 'number') {
      maskOptionsLiter.blocks.NB.to = maxVal;
    }

    var instanseInput = IMask(currentInput, maskOptionsLiter);
    currentInput.addEventListener('blur', function () {
      if (typeof minVal === 'number') instanseInput.value = String(minVal);
    });
    if (typeof minVal === 'number') instanseInput.value = String(minVal);
    item.addEventListener('mousedown', function (e) {
      e.preventDefault();
      shiftX = e.clientX - item.getBoundingClientRect().left;
      var lineElement = item.nextElementSibling;
      var onMouseMoveHanleFunction = onMouseMove(item.parentElement, item, lineElement, instanseInput, minVal, maxVal, currentInput);
      document.addEventListener('mousemove', onMouseMoveHanleFunction);
      document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', onMouseMoveHanleFunction);
      }, {
        once: true
      });
    });
    item.addEventListener('touchstart', function (e) {
      e.preventDefault();
      shiftX = e.changedTouches[0].clientX - item.getBoundingClientRect().left;
      var lineElement = item.nextElementSibling;
      var onMouseMoveHanleFunction = onMouseMove(item.parentElement, item, lineElement, instanseInput, minVal, maxVal, currentInput);
      document.addEventListener('touchmove', onMouseMoveHanleFunction);
      document.addEventListener('touchend', function () {
        document.removeEventListener('touchmove', onMouseMoveHanleFunction);
      }, {
        once: true
      });
    });
  });

  function onMouseMove(parentElement, roundElement, lineElement, instanseInput, minVal, maxVal, input) {
    return function (event) {
      var newLeftPixelPosition = (event.clientX ? event.clientX : event.changedTouches[0].clientX) - shiftX - parentElement.getBoundingClientRect().left;
      var maxLeftPixelPosition = (parentElement.offsetWidth - roundElement.offsetWidth) * 100 / parentElement.offsetWidth;
      var newLeftPercentPosition = newLeftPixelPosition * 100 / parentElement.offsetWidth;

      if (newLeftPercentPosition < 0) {
        newLeftPercentPosition = 0;
      }

      if (newLeftPercentPosition > maxLeftPixelPosition) {
        newLeftPercentPosition = maxLeftPixelPosition;
      }

      roundElement.style.left = newLeftPercentPosition + '%';
      lineElement.style.width = newLeftPercentPosition + '%';
      var percentValue = newLeftPercentPosition * 100 / maxLeftPixelPosition / 100;
      var resultValue = Math.round((maxVal - minVal) * percentValue + minVal);
      instanseInput.value = String(resultValue);
      var event = new Event('input', {
        bubbles: true,
        cancelable: true
      });
      input.dispatchEvent(event);
    };
  }

  function calculateFunc() {
    var liter = parseInt(document.querySelector('#count').value);
    var priceInfo = calculatorsForm.filter(function (item) {
      return item.value === document.querySelector('#price').value;
    })[0];
    var currentFinalPrice = liter * parseFloat(priceInfo.price);
    document.getElementById('result-final-price').textContent = formatValue(currentFinalPrice);
    var currentAzsFinalPrice = liter * parseFloat(priceInfo.priceAzs);
    document.getElementById('result-stonk').textContent = formatValue(currentAzsFinalPrice - currentFinalPrice);
    document.getElementById('result-azs').textContent = formatValue(priceInfo.priceAzs);
    document.getElementById('result-current').textContent = formatValue(priceInfo.price);
  }

  document.querySelector('#count').addEventListener('input', calculateFunc);
  document.querySelector('#price').addEventListener('change', calculateFunc);
  calculateFunc();
  var slidersElements = document.querySelectorAll('.slider');
  slidersElements.forEach(function (slider) {
    var sliderElement = slider.querySelector('.swiper');
    var sliderButtonLeft = slider.querySelector('.slider__left');
    var sliderButtonRight = slider.querySelector('.slider__right');
    var sliderPagginations = slider.querySelector('.slider__paggination');
    var sliderConfig = {
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        761: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1021: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    };

    if (sliderPagginations) {
      sliderConfig.pagination = {
        el: sliderPagginations
      };
    }

    if (sliderButtonLeft && sliderButtonRight) {
      sliderConfig.navigation = {
        nextEl: sliderButtonRight,
        prevEl: sliderButtonLeft
      };
    }

    if (slider.classList.contains('partners')) {
      sliderConfig.spaceBetween = 100;
    }

    if (slider.classList.contains('reviews')) {
      sliderConfig.slidesPerView = 2;
      sliderConfig.breakpoints[1021].slidesPerView = 2;
      sliderConfig.breakpoints[761].slidesPerView = 2;
      sliderConfig.breakpoints[450].slidesPerView = 1;
    }

    var swiper = new Swiper(sliderElement, sliderConfig);

    if (slider.classList.contains('sertificate')) {
      swiper.slides[4].classList.add('right-last-slide');
      swiper.on('slideChange', function () {
        swiper.slides.forEach(function (slide, index) {
          slide.classList.remove('right-last-slide');

          if (index === swiper.activeIndex + 4) {
            slide.classList.add('right-last-slide');
          }
        });
      });
    }
  });

  if (Fancybox) {
    Fancybox.bind("[data-fancybox]", {
      autoFocus: false,
      placeFocusBack: false
    });
  }

  var mobileDropdownButtons = document.querySelectorAll('.mobilemenu .dropdown__button');
  mobileDropdownButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      var dropdownContainer = item.nextElementSibling;

      if (!dropdownContainer.classList.contains('active')) {
        dropdownContainer.classList.add('active');
        item.classList.add('active');
        dropdownContainer.style.height = 'auto';
        var height = dropdownContainer.clientHeight + 'px';
        dropdownContainer.style.height = '0px';
        setTimeout(function () {
          dropdownContainer.style.height = height;
        }, 0);
      } else {
        dropdownContainer.style.height = '0px';
        dropdownContainer.addEventListener('transitionend', function () {
          dropdownContainer.classList.remove('active');
          item.classList.remove('active');
        }, {
          once: true
        });
      }
    });
  });
  var mobileOpenButtons = document.querySelectorAll('.mobile-menu-button');
  mobileOpenButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.body.classList.add('no-scroll');
      document.querySelector('.mobilemenu').classList.add('active');
    });
  });
  document.querySelector('.mobilemenu__close').addEventListener('click', function () {
    document.body.classList.remove('no-scroll');
    document.querySelector('.mobilemenu').classList.remove('active');
  });
});