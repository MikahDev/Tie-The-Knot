(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sass/style.scss */ "./assets/sass/style.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");












/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

 // any CSS you import will output into a single css file (app.css in this case)

 // start the Stimulus application



(function ($) {
  "use strict";
  /*------------------------------------------
      Nice Select
  -------------------------------------------*/

  $('.select').niceSelect();
  /*------------------------------------------
      = ALL ESSENTIAL FUNCTIONS
  -------------------------------------------*/
  // Toggle mobile navigation

  function toggleMobileNavigation() {
    var navbar = $(".navigation-holder");
    var openBtn = $(".mobail-menu .open-btn");
    var xbutton = $(".mobail-menu .navbar-toggler");
    openBtn.on("click", function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass("slideInn");
      xbutton.toggleClass("x-close");
      return false;
    });
  }

  toggleMobileNavigation(); // Function for toggle class for small menu

  function toggleClassForSmallNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $("#navbar > ul");

    if (windowWidth <= 991) {
      mainNav.addClass("small-nav");
    } else {
      mainNav.removeClass("small-nav");
    }
  }

  toggleClassForSmallNav(); // Function for small menu

  function smallNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $(".navigation-holder");
    var smallNav = $(".navigation-holder > .small-nav");
    var subMenu = smallNav.find(".sub-menu");
    var megamenu = smallNav.find(".mega-menu");
    var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

    if (windowWidth <= 991) {
      subMenu.hide();
      megamenu.hide();
      menuItemWidthSubMenu.on("click", function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass("rotate");
      });
    } else if (windowWidth > 991) {
      mainNav.find(".sub-menu").show();
      mainNav.find(".mega-menu").show();
    }
  }

  smallNavFunctionality(); // function for active menuitem

  function activeMenuItem($links) {
    var top = $(window).scrollTop(),
        windowHeight = $(window).height(),
        documentHeight = $(document).height(),
        cur_pos = top + 2,
        sections = $("section"),
        nav = $links,
        nav_height = nav.outerHeight();
    sections.each(function () {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("> ul > li > a").parent().removeClass("current-menu-item");
        nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("current-menu-item");
      } else if (cur_pos === 2) {
        nav.find("> ul > li > a").parent().removeClass("current-menu-item");
      }
    });
  } // smooth-scrolling


  function smoothScrolling($scrollLinks, $topOffset) {
    var links = $scrollLinks;
    var topGap = $topOffset;
    links.on("click", function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          $("html, body").animate({
            scrollTop: target.offset().top - topGap
          }, 1000, "easeInOutExpo");
          return false;
        }
      }

      return false;
    });
  }

  $("body").on("click", function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $(".menu-close").on("click", function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $(".menu-close").on("click", function () {
    $('.open-btn').removeClass('x-close');
  }); // tooltips

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  }); // Parallax background

  function bgParallax() {
    if ($(".parallax").length) {
      $(".parallax").each(function () {
        var height = $(this).position().top;
        var resize = height - $(window).scrollTop();
        var doParallax = -(resize / 5);
        var positionValue = doParallax + "px";
        var img = $(this).data("bg-image");
        $(this).css({
          backgroundImage: "url(" + img + ")",
          backgroundPosition: "50%" + positionValue,
          backgroundSize: "cover"
        });
      });
    }
  } // HERO SLIDER


  var menu = [];
  jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      progress: function progress() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function touchStart() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function setTransition(speed) {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
        }
      }
    }
  };
  var swiper = new Swiper(".swiper-container", swiperOptions); // DATA BACKGROUND IMAGE

  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });
  /*------------------------------------------
      = HIDE PRELOADER
  -------------------------------------------*/

  function preloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(100).fadeOut(500, function () {
        //active wow
        wow.init();
      });
    }
  }
  /*------------------------------------------
      = WATER RIPPLE
  -------------------------------------------*/


  if ($(".ripple").length) {
    $('.ripple').ripples({
      resolution: 512,
      dropRadius: 20,
      //px
      perturbance: 0.04
    }); // Automatic drops

    setInterval(function () {
      var $el = $('.ripple');
      var x = Math.random() * $el.outerWidth();
      var y = Math.random() * $el.outerHeight();
      var dropRadius = 20;
      var strength = 0.04 + Math.random() * 0.04;
      $el.ripples('drop', x, y, dropRadius, strength);
    }, 400);
  }
  /*------------------------------------------
      = PARTICLE GROUND
  -------------------------------------------*/


  if ($(".particleground").length) {
    $('.particleground').particleground({
      dotColor: "#f7e0e3",
      lineColor: "#f7e0e3",
      lineWidth: 0.4,
      particleRadius: 6
    });
  }
  /*------------------------------------------
       = VIDEO BACKGROUND
   -------------------------------------------*/


  if ($(".video-player").length) {
    $('.video-player').YTPlayer({
      showControls: false,
      playerVars: {
        modestbranding: 0,
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        wmode: 'transparent',
        branding: 0,
        rel: 0,
        autohide: 0,
        origin: window.location.origin
      }
    });
  }
  /*------------------------------------------
      = WOW ANIMATION SETTING
  -------------------------------------------*/


  var wow = new WOW({
    boxClass: 'wow',
    // default
    animateClass: 'animated',
    // default
    offset: 0,
    // default
    mobile: true,
    // default
    live: true // default

  });
  /*------------------------------------------
      = ACTIVE POPUP IMAGE
  -------------------------------------------*/

  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      wrapCSS: "project-fancybox-title-style"
    });
  }
  /*------------------------------------------
      = POPUP YOUTUBE, VIMEO, GMAPS
  -------------------------------------------*/


  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  /*------------------------------------------
      = POPUP VIDEO
  -------------------------------------------*/

  if ($(".video-btn").length) {
    $(".video-btn").on("click", function () {
      $.fancybox({
        href: this.href,
        type: $(this).data("type"),
        'title': this.title,
        helpers: {
          title: {
            type: 'inside'
          },
          media: {}
        },
        beforeShow: function beforeShow() {
          $(".fancybox-wrap").addClass("gallery-fancybox");
        }
      });
      return false;
    });
  }
  /*------------------------------------------
      = ACTIVE GALLERY POPUP IMAGE
  -------------------------------------------*/


  if ($(".popup-gallery").length) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function opener(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  }
  /*------------------------------------------
      = FUNCTION FORM SORTING GALLERY
  -------------------------------------------*/


  function sortingGallery() {
    if ($(".sortable-gallery .gallery-filters").length) {
      var $container = $('.gallery-container');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $(".gallery-filters li a").on("click", function () {
        $('.gallery-filters li .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    }
  }

  sortingGallery();
  /*------------------------------------------
      = MASONRY GALLERY SETTING
  -------------------------------------------*/

  function masonryGridSetting() {
    if ($('.masonry-gallery').length) {
      var $grid = $('.masonry-gallery').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
      });
      $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
      });
    }
  } // masonryGridSetting();

  /*------------------------------------------
    = FUNFACT
  -------------------------------------------*/


  if ($(".odometer").length) {
    $('.odometer').appear();
    $(document.body).on('appear', '.odometer', function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }
  /*------------------------------------------
      = STICKY HEADER
  -------------------------------------------*/
  // Function for clone an element for sticky menu


  function cloneNavForSticyMenu($ele, $newElmClass) {
    $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
  } // clone home style 1 navigation for sticky menu


  if ($('.wpo-site-header .navigation').length) {
    cloneNavForSticyMenu($('.wpo-site-header .navigation'), "sticky-header");
  }

  var lastScrollTop = '';

  function stickyMenu($targetMenu, $toggleClass, $topOffset) {
    var st = $(window).scrollTop();
    var mainMenuTop = $('.wpo-site-header .navigation');

    if ($(window).scrollTop() > 500) {
      if (st > lastScrollTop) {
        // hide sticky menu on scroll down
        $targetMenu.addClass($toggleClass);
      } else {
        // active sticky menu on scroll up
        $targetMenu.addClass($toggleClass);
      }
    } else {
      $targetMenu.removeClass($toggleClass);
    }

    lastScrollTop = st;
  }
  /*------------------------------------------
          = Header search toggle
      -------------------------------------------*/


  if ($(".header-search-form-wrapper").length) {
    var searchToggleBtn = $(".search-toggle-btn");
    var searchToggleBtnIcon = $(".search-toggle-btn i");
    var searchContent = $(".header-search-form");
    var body = $("body");
    searchToggleBtn.on("click", function (e) {
      searchContent.toggleClass("header-search-content-toggle");
      searchToggleBtnIcon.toggleClass("fi flaticon-search fi ti-close");
      e.stopPropagation();
    });
    body.on("click", function () {
      searchContent.removeClass("header-search-content-toggle");
    }).find(searchContent).on("click", function (e) {
      e.stopPropagation();
    });
  }
  /*------------------------------------------
      = Header shopping cart toggle
  -------------------------------------------*/


  if ($(".mini-cart").length) {
    var cartToggleBtn = $(".cart-toggle-btn");
    var cartContent = $(".mini-cart-content");
    var cartCloseBtn = $(".mini-cart-close");
    var body = $("body");
    cartToggleBtn.on("click", function (e) {
      cartContent.toggleClass("mini-cart-content-toggle");
      e.stopPropagation();
    });
    cartCloseBtn.on("click", function (e) {
      cartContent.removeClass("mini-cart-content-toggle");
      e.stopPropagation();
    });
    body.on("click", function () {
      cartContent.removeClass("mini-cart-content-toggle");
    }).find(cartContent).on("click", function (e) {
      e.stopPropagation();
    });
  }
  /*------------------------------------------
      = RECENT CASE SECTION SHOW HIDE
  -------------------------------------------*/


  if ($('.service-thumbs').length) {
    $('.service-thumb').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-case'));
      $('.service-thumb').removeClass('active-thumb');
      $(this).addClass('active-thumb');
      $('.service-content .service-data').hide(0);
      $('.service-data').fadeOut(300).removeClass('active-service-data');
      $(target).fadeIn(300).addClass('active-service-data');
    });
  }
  /*------------------------------------------
      = Testimonial SLIDER
  -------------------------------------------*/


  if ($(".testimonial-slider").length) {
    $(".testimonial-slider").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 100,
      loop: true,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
      items: 2,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 2
        },
        1200: {
          items: 2
        },
        1300: {
          items: 2
        },
        1400: {
          items: 2
        },
        1500: {
          items: 2
        }
      }
    });
  }
  /*------------------------------------------
      = PARTNERS SLIDER
  -------------------------------------------*/


  if ($(".partners-slider").length) {
    $(".partners-slider").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 0,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        550: {
          items: 2
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
  }
  /*------------------------------------------
  wpo-service-active SLIDER
  -------------------------------------------*/


  if ($(".wpo-service-active").length) {
    $(".wpo-service-active").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false
        },
        575: {
          items: 1
        },
        767: {
          items: 2
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  }
  /*------------------------------------------
  wpo-service-active SLIDER
  -------------------------------------------*/


  if ($(".static-hero-slide-img").length) {
    $(".static-hero-slide-img").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 10,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false
        },
        575: {
          items: 1
        },
        767: {
          items: 1
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  }
  /*------------------------------------------
  portfolio-slider
  -------------------------------------------*/


  if ($(".portfolio-slider").length) {
    $(".portfolio-slider").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 15,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false
        },
        575: {
          items: 1
        },
        767: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    });
  }
  /*------------------------------------------
      = POST SLIDER
  -------------------------------------------*/


  if ($(".post-slider".length)) {
    $(".post-slider").owlCarousel({
      mouseDrag: false,
      smartSpeed: 500,
      margin: 30,
      loop: true,
      nav: true,
      navText: ['<i class="fi ti-arrow-left"></i>', '<i class="fi ti-arrow-right"></i>'],
      dots: false,
      items: 1
    });
  }
  /*------------------------------------------
      = COUNTDOWN CLOCK
  -------------------------------------------*/


  if ($("#clock").length) {
    $('#clock').countdown('2023-09-02 13:00', function (event) {
      var $this = $(this).html(event.strftime('' + '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>' + '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>' + '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' + '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'));
    });
  }
  /*------------------------------------------
      = COUNTDOWN CLOCK2
  -------------------------------------------*/


  if ($("#clock2").length) {
    $('#clock2').countdown('2023-06-30 23:00', function (event) {
      var $this = $(this).html(event.strftime('' + '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>' + '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>' + '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' + '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'));
    });
  }
  /*------------------------------------------
      = TOUCHSPIN FOR PRODUCT SINGLE PAGE
  -------------------------------------------*/


  if ($("input[name='product-count']").length) {
    $("input[name='product-count']").TouchSpin({
      verticalbuttons: true
    });
  }
  /*----------------------------
      = SHOP PRICE SLIDER
  ------------------------------ */


  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: true,
      min: 12,
      max: 200,
      values: [0, 100],
      slide: function slide(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
  }
  /*-----------------------
     cart-plus-minus-button
   -------------------------*/


  $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);
  });
  /*------------------------------------------
     = BACK TO TOP BTN SETTING
  -------------------------------------------*/

  $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;

    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("slow");
    } else {
      $("a.back-to-top").fadeOut("slow");
    }
  }

  $(".back-to-top").on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 700);
    return false;
  });
  /*------------------------------------------
      = CONTACT FORM SUBMISSION
  -------------------------------------------*/

  if ($("#contact-form-main").length) {
    $("#contact-form-main").validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: "required",
        phone: "required",
        what: "required",
        service: "required",
        guest: "required",
        meal: "required"
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter your email address",
        phone: "Please enter your phone number",
        what: "Please enter your Reason",
        service: "Please select your contact service",
        guest: "Please select your guest Number",
        meal: "Please select your Meal Name"
      },
      submitHandler: function submitHandler(form) {
        $.ajax({
          type: "POST",
          url: "mail-contact.php",
          data: $(form).serialize(),
          success: function success() {
            $("#loader").hide();
            $("#success").slideDown("slow");
            setTimeout(function () {
              $("#success").slideUp("slow");
            }, 3000);
            form.reset();
          },
          error: function error() {
            $("#loader").hide();
            $("#error").slideDown("slow");
            setTimeout(function () {
              $("#error").slideUp("slow");
            }, 3000);
          }
        });
        return false; // required to block normal submit since you used ajax
      }
    });
  }
  /*==========================================================================
      WHEN DOCUMENT LOADING
  ==========================================================================*/


  $(window).on('load', function () {
    preloader();
    sortingGallery();
    toggleMobileNavigation();
    smallNavFunctionality();
    smoothScrolling($("#navbar > ul > li > a[href^='#']"), $(".wpo-site-header .navigation").innerHeight());
  });
  /*==========================================================================
      WHEN WINDOW SCROLL
  ==========================================================================*/

  $(window).on("scroll", function () {
    if ($(".wpo-site-header").length) {
      stickyMenu($('.wpo-site-header .navigation'), "sticky-on");
    }

    toggleBackToTopBtn();
    activeMenuItem($(".navigation-holder"));
  });
  /*==========================================================================
      WHEN WINDOW RESIZE
  ==========================================================================*/

  $(window).on("resize", function () {
    toggleClassForSmallNav(); //smallNavFunctionality();

    clearTimeout($.data(this, 'resizeTimer'));
    $.data(this, 'resizeTimer', setTimeout(function () {
      smallNavFunctionality();
    }, 200));
  }); // color-variation

  /*------------------------------------------
    color toggle
  -------------------------------------------*/

  if ($(".color-switcher-wrap").length) {
    var colorToggleBtn = $(".color-toggle-btn");
    var colorContent = $(".color-switcher-item");
    var body = $("body");
    colorToggleBtn.on("click", function (e) {
      colorContent.toggleClass("color-switcher-open");
      e.stopPropagation();
    });
    body.on("click", function () {
      colorContent.removeClass("color-switcher-open");
    }).find(searchContent).on("click", function (e) {
      e.stopPropagation();
    });
  } // color-change


  $('.color-switcher-wrap ul li.btn').on("click", function (e) {
    e.stopPropagation();
    $('.color-switcher-wrap ul li.btn').removeClass('active');
    $(this).addClass('active');
    var getId = $(this).attr('id');
    $("body").attr('class', '');

    if (getId == 'Button1') {
      $('body').addClass('color1');
      localStorage.setItem('switerColor', 'color1');
    } else if (getId == 'Button2') {
      $('body').addClass('color2');
      localStorage.setItem('switerColor', 'color2');
    } else if (getId == 'Button3') {
      $('body').addClass('color3');
      localStorage.setItem('switerColor', 'color3');
    } else if (getId == 'Button4') {
      $('body').addClass('color4');
      localStorage.setItem('switerColor', 'color4');
    } else if (getId == 'Button5') {
      $('body').addClass('color5');
      localStorage.setItem('switerColor', 'color5');
    } else if (getId == 'Button6') {
      $('body').addClass('color6');
      localStorage.setItem('switerColor', 'color6');
    } else if (getId == 'Button7') {
      $('body').addClass('color7');
      localStorage.setItem('switerColor', 'color7');
    } else if (getId == 'Button8') {
      $('body').addClass('color8');
      localStorage.setItem('switerColor', 'color8');
    } else if (getId == 'Button9') {
      $('body').addClass('color9');
      localStorage.setItem('switerColor', 'color9');
    } else if (getId == 'Button10') {
      $('body').addClass('color10');
      localStorage.setItem('switerColor', 'color10');
    } else if (getId == 'Button11') {
      $('body').addClass('color11');
      localStorage.setItem('switerColor', 'color11');
    } else if (getId == 'Button12') {
      $('body').addClass('color12');
      localStorage.setItem('switerColor', 'color12');
    }
  });
  $(window).on('load', function () {
    if (localStorage.getItem('switerColor') == 'color1') {
      $('body').addClass('color1');
      $('#Button1').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color2') {
      $('body').addClass('color2');
      $('#Button2').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color3') {
      $('body').addClass('color3');
      $('#Button3').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color4') {
      $('body').addClass('color4');
      $('#Button4').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color5') {
      $('body').addClass('color5');
      $('#Button5').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color6') {
      $('body').addClass('color6');
      $('#Button6').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color7') {
      $('body').addClass('color7');
      $('#Button7').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color8') {
      $('body').addClass('color8');
      $('#Button8').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color9') {
      $('body').addClass('color9');
      $('#Button9').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color10') {
      $('body').addClass('color10');
      $('#Button10').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color11') {
      $('body').addClass('color11');
      $('#Button11').addClass('active');
    } else if (localStorage.getItem('switerColor') == 'color12') {
      $('body').addClass('color12');
      $('#Button12').addClass('active');
    }
  });
})(__webpack_provided_window_dot_jQuery);

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/sass/style.scss":
/*!********************************!*\
  !*** ./assets/sass/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-cb6bd7"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixRQUFuQjtNQUNBZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLFFBQWQsQ0FBdUIsUUFBdkI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxRQUExQyxFQUFtRDtNQUNyRG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixRQUFuQjtNQUNBZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLFFBQWQsQ0FBdUIsUUFBdkI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxRQUExQyxFQUFtRDtNQUNyRG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixRQUFuQjtNQUNBZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLFFBQWQsQ0FBdUIsUUFBdkI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxRQUExQyxFQUFtRDtNQUNyRG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixRQUFuQjtNQUNBZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLFFBQWQsQ0FBdUIsUUFBdkI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxRQUExQyxFQUFtRDtNQUNyRG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixRQUFuQjtNQUNBZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLFFBQWQsQ0FBdUIsUUFBdkI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxRQUExQyxFQUFtRDtNQUNyRG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixRQUFuQjtNQUNBZixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLFFBQWQsQ0FBdUIsUUFBdkI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxTQUExQyxFQUFvRDtNQUN0RG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixTQUFuQjtNQUNBZixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVlLFFBQWYsQ0FBd0IsUUFBeEI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxTQUExQyxFQUFvRDtNQUN0RG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixTQUFuQjtNQUNBZixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVlLFFBQWYsQ0FBd0IsUUFBeEI7SUFDSCxDQUhLLE1BR0EsSUFBR2tRLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixhQUFyQixLQUF1QyxTQUExQyxFQUFvRDtNQUN0RG5SLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsUUFBVixDQUFtQixTQUFuQjtNQUNBZixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVlLFFBQWYsQ0FBd0IsUUFBeEI7SUFDSDtFQUVKLENBdkNEO0FBeUNILENBeGtDRCxFQXdrQ0dILG9DQXhrQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NiQTs7QUFDTyxJQUFNeVEsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9zdHlsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc2Fzcy9zdHlsZS5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuKGZ1bmN0aW9uKCQpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgTmljZSBTZWxlY3RcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICQoJy5zZWxlY3QnKS5uaWNlU2VsZWN0KCk7XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IEFMTCBFU1NFTlRJQUwgRlVOQ1RJT05TXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICAgIC8vIFRvZ2dsZSBtb2JpbGUgbmF2aWdhdGlvblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU5hdmlnYXRpb24oKSB7XG4gICAgICAgIHZhciBuYXZiYXIgPSAkKFwiLm5hdmlnYXRpb24taG9sZGVyXCIpO1xuICAgICAgICB2YXIgb3BlbkJ0biA9ICQoXCIubW9iYWlsLW1lbnUgLm9wZW4tYnRuXCIpO1xuICAgICAgICB2YXIgeGJ1dHRvbiA9ICQoXCIubW9iYWlsLW1lbnUgLm5hdmJhci10b2dnbGVyXCIpO1xuXG4gICAgICAgIG9wZW5CdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbmF2YmFyLnRvZ2dsZUNsYXNzKFwic2xpZGVJbm5cIik7XG4gICAgICAgICAgICB4YnV0dG9uLnRvZ2dsZUNsYXNzKFwieC1jbG9zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVNb2JpbGVOYXZpZ2F0aW9uKCk7XG5cblxuICAgIC8vIEZ1bmN0aW9uIGZvciB0b2dnbGUgY2xhc3MgZm9yIHNtYWxsIG1lbnVcbiAgICBmdW5jdGlvbiB0b2dnbGVDbGFzc0ZvclNtYWxsTmF2KCkge1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIG1haW5OYXYgPSAkKFwiI25hdmJhciA+IHVsXCIpO1xuXG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCA8PSA5OTEpIHtcbiAgICAgICAgICAgIG1haW5OYXYuYWRkQ2xhc3MoXCJzbWFsbC1uYXZcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluTmF2LnJlbW92ZUNsYXNzKFwic21hbGwtbmF2XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3NGb3JTbWFsbE5hdigpO1xuXG5cbiAgICAvLyBGdW5jdGlvbiBmb3Igc21hbGwgbWVudVxuICAgIGZ1bmN0aW9uIHNtYWxsTmF2RnVuY3Rpb25hbGl0eSgpIHtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciBtYWluTmF2ID0gJChcIi5uYXZpZ2F0aW9uLWhvbGRlclwiKTtcbiAgICAgICAgdmFyIHNtYWxsTmF2ID0gJChcIi5uYXZpZ2F0aW9uLWhvbGRlciA+IC5zbWFsbC1uYXZcIik7XG4gICAgICAgIHZhciBzdWJNZW51ID0gc21hbGxOYXYuZmluZChcIi5zdWItbWVudVwiKTtcbiAgICAgICAgdmFyIG1lZ2FtZW51ID0gc21hbGxOYXYuZmluZChcIi5tZWdhLW1lbnVcIik7XG4gICAgICAgIHZhciBtZW51SXRlbVdpZHRoU3ViTWVudSA9IHNtYWxsTmF2LmZpbmQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIik7XG5cbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDk5MSkge1xuICAgICAgICAgICAgc3ViTWVudS5oaWRlKCk7XG4gICAgICAgICAgICBtZWdhbWVudS5oaWRlKCk7XG4gICAgICAgICAgICBtZW51SXRlbVdpZHRoU3ViTWVudS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcyhcInJvdGF0ZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPiA5OTEpIHtcbiAgICAgICAgICAgIG1haW5OYXYuZmluZChcIi5zdWItbWVudVwiKS5zaG93KCk7XG4gICAgICAgICAgICBtYWluTmF2LmZpbmQoXCIubWVnYS1tZW51XCIpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNtYWxsTmF2RnVuY3Rpb25hbGl0eSgpO1xuXG5cbiAgICAvLyBmdW5jdGlvbiBmb3IgYWN0aXZlIG1lbnVpdGVtXG4gICAgZnVuY3Rpb24gYWN0aXZlTWVudUl0ZW0oJGxpbmtzKSB7XG4gICAgICAgIHZhciB0b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgICAgICBkb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpLFxuICAgICAgICAgICAgY3VyX3BvcyA9IHRvcCArIDIsXG4gICAgICAgICAgICBzZWN0aW9ucyA9ICQoXCJzZWN0aW9uXCIpLFxuICAgICAgICAgICAgbmF2ID0gJGxpbmtzLFxuICAgICAgICAgICAgbmF2X2hlaWdodCA9IG5hdi5vdXRlckhlaWdodCgpO1xuXG5cbiAgICAgICAgc2VjdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIG5hdl9oZWlnaHQsXG4gICAgICAgICAgICAgICAgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgICAgICBpZiAoY3VyX3BvcyA+PSB0b3AgJiYgY3VyX3BvcyA8PSBib3R0b20pIHtcbiAgICAgICAgICAgICAgICBuYXYuZmluZChcIj4gdWwgPiBsaSA+IGFcIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJjdXJyZW50LW1lbnUtaXRlbVwiKTtcbiAgICAgICAgICAgICAgICBuYXYuZmluZChcImFbaHJlZj0nI1wiICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgXCInXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImN1cnJlbnQtbWVudS1pdGVtXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJfcG9zID09PSAyKSB7XG4gICAgICAgICAgICAgICAgbmF2LmZpbmQoXCI+IHVsID4gbGkgPiBhXCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiY3VycmVudC1tZW51LWl0ZW1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBzbW9vdGgtc2Nyb2xsaW5nXG4gICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsaW5nKCRzY3JvbGxMaW5rcywgJHRvcE9mZnNldCkge1xuICAgICAgICB2YXIgbGlua3MgPSAkc2Nyb2xsTGlua3M7XG4gICAgICAgIHZhciB0b3BHYXAgPSAkdG9wT2Zmc2V0O1xuXG4gICAgICAgIGxpbmtzLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArXCJdXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gdG9wR2FwXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDAsIFwiZWFzZUluT3V0RXhwb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLm5hdmlnYXRpb24taG9sZGVyJykucmVtb3ZlQ2xhc3MoJ3NsaWRlSW5uJyk7XG4gICAgfSk7XG4gICAgJChcIi5tZW51LWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5uYXZpZ2F0aW9uLWhvbGRlcicpLnJlbW92ZUNsYXNzKCdzbGlkZUlubicpO1xuICAgIH0pO1xuICAgICQoXCIubWVudS1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcub3Blbi1idG4nKS5yZW1vdmVDbGFzcygneC1jbG9zZScpO1xuICAgIH0pO1xuXG5cblxuICAgIC8vIHRvb2x0aXBzXG5cbiAgICB2YXIgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykpXG4gICAgdmFyIHRvb2x0aXBMaXN0ID0gdG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xuICAgICAgICByZXR1cm4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKHRvb2x0aXBUcmlnZ2VyRWwpXG4gICAgfSlcblxuXG4gICAgLy8gUGFyYWxsYXggYmFja2dyb3VuZFxuICAgIGZ1bmN0aW9uIGJnUGFyYWxsYXgoKSB7XG4gICAgICAgIGlmICgkKFwiLnBhcmFsbGF4XCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5wYXJhbGxheFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKHRoaXMpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAgICAgICAgIHZhciByZXNpemUgICAgID0gaGVpZ2h0IC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIHZhciBkb1BhcmFsbGF4ID0gLShyZXNpemUvNSk7XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uVmFsdWUgICA9IGRvUGFyYWxsYXggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgdmFyIGltZyA9ICQodGhpcykuZGF0YShcImJnLWltYWdlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgaW1nICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCVcIiArIHBvc2l0aW9uVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSEVSTyBTTElERVJcbiAgICB2YXIgbWVudSA9IFtdO1xuICAgIGpRdWVyeSgnLnN3aXBlci1zbGlkZScpLmVhY2goIGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgbWVudS5wdXNoKCBqUXVlcnkodGhpcykuZmluZCgnLnNsaWRlLWlubmVyJykuYXR0cihcImRhdGEtdGV4dFwiKSApO1xuICAgIH0pO1xuICAgIHZhciBpbnRlcmxlYXZlT2Zmc2V0ID0gMC41O1xuICAgIHZhciBzd2lwZXJPcHRpb25zID0ge1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgcGFyYWxsYXg6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogNjUwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICAgIH0sXG5cbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlUHJvZ3Jlc3MgPSBzd2lwZXIuc2xpZGVzW2ldLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJPZmZzZXQgPSBzd2lwZXIud2lkdGggKiBpbnRlcmxlYXZlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBzbGlkZVByb2dyZXNzICogaW5uZXJPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZXNbaV0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1pbm5lclwiKS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUzZChcIiArIGlubmVyVHJhbnNsYXRlICsgXCJweCwgMCwgMClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbihzcGVlZCkge1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVzW2ldLnN0eWxlLnRyYW5zaXRpb24gPSBzcGVlZCArIFwibXNcIjtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWlubmVyXCIpLnN0eWxlLnRyYW5zaXRpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQgKyBcIm1zXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1jb250YWluZXJcIiwgc3dpcGVyT3B0aW9ucyk7XG5cbiAgICAvLyBEQVRBIEJBQ0tHUk9VTkQgSU1BR0VcbiAgICB2YXIgc2xpZGVyQmdTZXR0aW5nID0gJChcIi5zbGlkZS1iZy1pbWFnZVwiKTtcbiAgICBzbGlkZXJCZ1NldHRpbmcuZWFjaChmdW5jdGlvbihpbmR4KXtcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtYmFja2dyb3VuZFwiKSl7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoXCIgKyAkKHRoaXMpLmRhdGEoXCJiYWNrZ3JvdW5kXCIpICsgXCIpXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBISURFIFBSRUxPQURFUlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGZ1bmN0aW9uIHByZWxvYWRlcigpIHtcbiAgICAgICAgaWYoJCgnLnByZWxvYWRlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmRlbGF5KDEwMCkuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy9hY3RpdmUgd293XG4gICAgICAgICAgICAgICAgd293LmluaXQoKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gV0FURVIgUklQUExFXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIucmlwcGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAkKCcucmlwcGxlJykucmlwcGxlcyh7XG4gICAgICAgICAgICByZXNvbHV0aW9uOiA1MTIsXG4gICAgICAgICAgICBkcm9wUmFkaXVzOiAyMCwgLy9weFxuICAgICAgICAgICAgcGVydHVyYmFuY2U6IDAuMDQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpYyBkcm9wc1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKCcucmlwcGxlJyk7XG4gICAgICAgICAgICB2YXIgeCA9IE1hdGgucmFuZG9tKCkgKiAkZWwub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLnJhbmRvbSgpICogJGVsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgZHJvcFJhZGl1cyA9IDIwO1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMC4wNCArIE1hdGgucmFuZG9tKCkgKiAwLjA0O1xuXG4gICAgICAgICAgICAkZWwucmlwcGxlcygnZHJvcCcsIHgsIHksIGRyb3BSYWRpdXMsIHN0cmVuZ3RoKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gUEFSVElDTEUgR1JPVU5EXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIucGFydGljbGVncm91bmRcIikubGVuZ3RoKSB7XG4gICAgICAgICQoJy5wYXJ0aWNsZWdyb3VuZCcpLnBhcnRpY2xlZ3JvdW5kKHtcbiAgICAgICAgICAgIGRvdENvbG9yOiBcIiNmN2UwZTNcIixcbiAgICAgICAgICAgIGxpbmVDb2xvcjogXCIjZjdlMGUzXCIsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDAuNCxcbiAgICAgICAgICAgIHBhcnRpY2xlUmFkaXVzOiA2XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgID0gVklERU8gQkFDS0dST1VORFxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi52aWRlby1wbGF5ZXJcIikubGVuZ3RoKSB7XG4gICAgICAgICQoJy52aWRlby1wbGF5ZXInKS5ZVFBsYXllcih7XG4gICAgICAgICAgICBzaG93Q29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAwLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiAxLFxuICAgICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxuICAgICAgICAgICAgICAgIHdtb2RlOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGJyYW5kaW5nOiAwLFxuICAgICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgICBhdXRvaGlkZTogMCxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFdPVyBBTklNQVRJT04gU0VUVElOR1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIHZhciB3b3cgPSBuZXcgV09XKHtcbiAgICAgICAgYm94Q2xhc3M6ICAgICAnd293JywgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJywgLy8gZGVmYXVsdFxuICAgICAgICBvZmZzZXQ6ICAgICAgIDAsICAgICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgbW9iaWxlOiAgICAgICB0cnVlLCAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGxpdmU6ICAgICAgICAgdHJ1ZSAgICAgICAgLy8gZGVmYXVsdFxuICAgIH0pO1xuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IEFDVElWRSBQT1BVUCBJTUFHRVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLmZhbmN5Ym94XCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLmZhbmN5Ym94XCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgIG9wZW5FZmZlY3QgIDogXCJlbGFzdGljXCIsXG4gICAgICAgICAgICBjbG9zZUVmZmVjdCA6IFwiZWxhc3RpY1wiLFxuICAgICAgICAgICAgd3JhcENTUyAgICAgOiBcInByb2plY3QtZmFuY3lib3gtdGl0bGUtc3R5bGVcIlxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gUE9QVVAgWU9VVFVCRSwgVklNRU8sIEdNQVBTXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgJCgnLnBvcHVwLXlvdXR1YmUsIC5wb3B1cC12aW1lbywgLnBvcHVwLWdtYXBzJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICBmaXhlZENvbnRlbnRQb3M6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFBPUFVQIFZJREVPXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIudmlkZW8tYnRuXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLnZpZGVvLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgdHlwZTogJCh0aGlzKS5kYXRhKFwidHlwZVwiKSxcbiAgICAgICAgICAgICAgICAndGl0bGUnICAgICAgICAgOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgIGhlbHBlcnMgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IHsgdHlwZSA6ICdpbnNpZGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhIDoge31cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgYmVmb3JlU2hvdyA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuZmFuY3lib3gtd3JhcFwiKS5hZGRDbGFzcyhcImdhbGxlcnktZmFuY3lib3hcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IEFDVElWRSBHQUxMRVJZIFBPUFVQIElNQUdFXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIucG9wdXAtZ2FsbGVyeVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLnBvcHVwLWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnYScsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgICAgICBvcGVuZXI6IGZ1bmN0aW9uKG9wZW5lckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoJ2ltZycpID8gb3BlbmVyRWxlbWVudCA6IG9wZW5lckVsZW1lbnQuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gRlVOQ1RJT04gRk9STSBTT1JUSU5HIEdBTExFUllcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBmdW5jdGlvbiBzb3J0aW5nR2FsbGVyeSgpIHtcbiAgICAgICAgaWYgKCQoXCIuc29ydGFibGUtZ2FsbGVyeSAuZ2FsbGVyeS1maWx0ZXJzXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSAkKCcuZ2FsbGVyeS1jb250YWluZXInKTtcbiAgICAgICAgICAgICRjb250YWluZXIuaXNvdG9wZSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOicqJyxcbiAgICAgICAgICAgICAgICBhbmltYXRpb25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA3NTAsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIi5nYWxsZXJ5LWZpbHRlcnMgbGkgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5nYWxsZXJ5LWZpbHRlcnMgbGkgLmN1cnJlbnQnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5pc290b3BlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOnNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydGluZ0dhbGxlcnkoKTtcblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBNQVNPTlJZIEdBTExFUlkgU0VUVElOR1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGZ1bmN0aW9uIG1hc29ucnlHcmlkU2V0dGluZygpIHtcbiAgICAgICAgaWYgKCQoJy5tYXNvbnJ5LWdhbGxlcnknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciAkZ3JpZCA9ICAkKCcubWFzb25yeS1nYWxsZXJ5JykubWFzb25yeSh7XG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1pdGVtJyxcbiAgICAgICAgICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkZ3JpZC5pbWFnZXNMb2FkZWQoKS5wcm9ncmVzcyggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGdyaWQubWFzb25yeSgnbGF5b3V0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hc29ucnlHcmlkU2V0dGluZygpO1xuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgPSBGVU5GQUNUXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLm9kb21ldGVyXCIpLmxlbmd0aCkge1xuICAgICAgICAkKCcub2RvbWV0ZXInKS5hcHBlYXIoKTtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbignYXBwZWFyJywgJy5vZG9tZXRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBvZG8gPSAkKFwiLm9kb21ldGVyXCIpO1xuICAgICAgICAgICAgb2RvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50TnVtYmVyID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jb3VudFwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoY291bnROdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFNUSUNLWSBIRUFERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8vIEZ1bmN0aW9uIGZvciBjbG9uZSBhbiBlbGVtZW50IGZvciBzdGlja3kgbWVudVxuICAgIGZ1bmN0aW9uIGNsb25lTmF2Rm9yU3RpY3lNZW51KCRlbGUsICRuZXdFbG1DbGFzcykge1xuICAgICAgICAkZWxlLmFkZENsYXNzKCdvcmlnaW5hbCcpLmNsb25lKCkuaW5zZXJ0QWZ0ZXIoJGVsZSkuYWRkQ2xhc3MoJG5ld0VsbUNsYXNzKS5yZW1vdmVDbGFzcygnb3JpZ2luYWwnKTtcbiAgICB9XG5cbiAgICAvLyBjbG9uZSBob21lIHN0eWxlIDEgbmF2aWdhdGlvbiBmb3Igc3RpY2t5IG1lbnVcbiAgICBpZiAoJCgnLndwby1zaXRlLWhlYWRlciAubmF2aWdhdGlvbicpLmxlbmd0aCkge1xuICAgICAgICBjbG9uZU5hdkZvclN0aWN5TWVudSgkKCcud3BvLXNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uJyksIFwic3RpY2t5LWhlYWRlclwiKTtcbiAgICB9XG5cbiAgICB2YXIgbGFzdFNjcm9sbFRvcCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gc3RpY2t5TWVudSgkdGFyZ2V0TWVudSwgJHRvZ2dsZUNsYXNzLCAkdG9wT2Zmc2V0KSB7XG4gICAgICAgIHZhciBzdCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIG1haW5NZW51VG9wID0gJCgnLndwby1zaXRlLWhlYWRlciAubmF2aWdhdGlvbicpO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA1MDApIHtcbiAgICAgICAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICAvLyBoaWRlIHN0aWNreSBtZW51IG9uIHNjcm9sbCBkb3duXG4gICAgICAgICAgICAgICAgJHRhcmdldE1lbnUuYWRkQ2xhc3MoJHRvZ2dsZUNsYXNzKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RpY2t5IG1lbnUgb24gc2Nyb2xsIHVwXG4gICAgICAgICAgICAgICAgJHRhcmdldE1lbnUuYWRkQ2xhc3MoJHRvZ2dsZUNsYXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldE1lbnUucmVtb3ZlQ2xhc3MoJHRvZ2dsZUNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcblxuXG4gICAgfVxuXG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICA9IEhlYWRlciBzZWFyY2ggdG9nZ2xlXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmKCQoXCIuaGVhZGVyLXNlYXJjaC1mb3JtLXdyYXBwZXJcIikubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzZWFyY2hUb2dnbGVCdG4gPSAkKFwiLnNlYXJjaC10b2dnbGUtYnRuXCIpO1xuICAgICAgICB2YXIgc2VhcmNoVG9nZ2xlQnRuSWNvbiA9ICQoXCIuc2VhcmNoLXRvZ2dsZS1idG4gaVwiKTtcbiAgICAgICAgdmFyIHNlYXJjaENvbnRlbnQgPSAkKFwiLmhlYWRlci1zZWFyY2gtZm9ybVwiKTtcbiAgICAgICAgdmFyIGJvZHkgPSAkKFwiYm9keVwiKTtcblxuICAgICAgICBzZWFyY2hUb2dnbGVCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzZWFyY2hDb250ZW50LnRvZ2dsZUNsYXNzKFwiaGVhZGVyLXNlYXJjaC1jb250ZW50LXRvZ2dsZVwiKTtcbiAgICAgICAgICAgIHNlYXJjaFRvZ2dsZUJ0bkljb24udG9nZ2xlQ2xhc3MoXCJmaSBmbGF0aWNvbi1zZWFyY2ggZmkgdGktY2xvc2VcIik7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBib2R5Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWFyY2hDb250ZW50LnJlbW92ZUNsYXNzKFwiaGVhZGVyLXNlYXJjaC1jb250ZW50LXRvZ2dsZVwiKTtcbiAgICAgICAgfSkuZmluZChzZWFyY2hDb250ZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBIZWFkZXIgc2hvcHBpbmcgY2FydCB0b2dnbGVcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZigkKFwiLm1pbmktY2FydFwiKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNhcnRUb2dnbGVCdG4gPSAkKFwiLmNhcnQtdG9nZ2xlLWJ0blwiKTtcbiAgICAgICAgdmFyIGNhcnRDb250ZW50ID0gJChcIi5taW5pLWNhcnQtY29udGVudFwiKTtcbiAgICAgICAgdmFyIGNhcnRDbG9zZUJ0biA9ICQoXCIubWluaS1jYXJ0LWNsb3NlXCIpO1xuICAgICAgICB2YXIgYm9keSA9ICQoXCJib2R5XCIpO1xuXG4gICAgICAgIGNhcnRUb2dnbGVCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjYXJ0Q29udGVudC50b2dnbGVDbGFzcyhcIm1pbmktY2FydC1jb250ZW50LXRvZ2dsZVwiKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhcnRDbG9zZUJ0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNhcnRDb250ZW50LnJlbW92ZUNsYXNzKFwibWluaS1jYXJ0LWNvbnRlbnQtdG9nZ2xlXCIpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FydENvbnRlbnQucmVtb3ZlQ2xhc3MoXCJtaW5pLWNhcnQtY29udGVudC10b2dnbGVcIik7XG4gICAgICAgIH0pLmZpbmQoY2FydENvbnRlbnQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFJFQ0VOVCBDQVNFIFNFQ1RJT04gU0hPVyBISURFXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYoJCgnLnNlcnZpY2UtdGh1bWJzJykubGVuZ3RoKXtcbiAgICAgICAgJCgnLnNlcnZpY2UtdGh1bWInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtY2FzZScpKTtcbiAgICAgICAgICAgICQoJy5zZXJ2aWNlLXRodW1iJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10aHVtYicpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRodW1iJyk7XG4gICAgICAgICAgICAkKCcuc2VydmljZS1jb250ZW50IC5zZXJ2aWNlLWRhdGEnKS5oaWRlKDApO1xuICAgICAgICAgICAgJCgnLnNlcnZpY2UtZGF0YScpLmZhZGVPdXQoMzAwKS5yZW1vdmVDbGFzcygnYWN0aXZlLXNlcnZpY2UtZGF0YScpO1xuICAgICAgICAgICAgJCh0YXJnZXQpLmZhZGVJbigzMDApLmFkZENsYXNzKCdhY3RpdmUtc2VydmljZS1kYXRhJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi50ZXN0aW1vbmlhbC1zbGlkZXJcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIudGVzdGltb25pYWwtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgc21hcnRTcGVlZDogMzAwLFxuICAgICAgICAgICAgbWFyZ2luOiAxMDAsXG4gICAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6dHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgaXRlbXM6MixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgNzY3IDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTIwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEzMDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDE0MDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTUwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBQQVJUTkVSUyBTTElERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi5wYXJ0bmVycy1zbGlkZXJcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIucGFydG5lcnMtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGF1dG9wbGF5OnRydWUsXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAzMDAsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6dHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICAgICAgbmF2OmZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDU1MCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgOTkyIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogNFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAxMjAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgd3BvLXNlcnZpY2UtYWN0aXZlIFNMSURFUlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLndwby1zZXJ2aWNlLWFjdGl2ZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIi53cG8tc2VydmljZS1hY3RpdmVcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgYXV0b3BsYXk6ZmFsc2UsXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAzMDAsXG4gICAgICAgICAgICBtYXJnaW46IDMwLFxuICAgICAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOnRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgIG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmaSBmbGF0aWNvbi1sZWZ0LWFycm93XCI+PC9pPicsJzxpIGNsYXNzPVwiZmkgZmxhdGljb24tcmlnaHQtYXJyb3ctMVwiPjwvaT4nXSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICA1NzUgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzY3IDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgOTkyIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAxMjAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud3BvLXNlcnZpY2UtYWN0aXZlIFNMSURFUlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIuc3RhdGljLWhlcm8tc2xpZGUtaW1nXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLnN0YXRpYy1oZXJvLXNsaWRlLWltZ1wiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBhdXRvcGxheTp0cnVlLFxuICAgICAgICAgICAgc21hcnRTcGVlZDogMzAwLFxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmkgZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZpIGZsYXRpY29uLXJpZ2h0LWFycm93LTFcIj48L2k+J10sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgNTc1IDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDc2NyA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDk5MiA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgMTIwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcG9ydGZvbGlvLXNsaWRlclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLnBvcnRmb2xpby1zbGlkZXJcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIucG9ydGZvbGlvLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBhdXRvcGxheTp0cnVlLFxuICAgICAgICAgICAgc21hcnRTcGVlZDogMzAwLFxuICAgICAgICAgICAgbWFyZ2luOiAxNSxcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmkgZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZpIGZsYXRpY29uLXJpZ2h0LWFycm93LTFcIj48L2k+J10sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgNTc1IDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDc2NyA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDk5MiA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgMTIwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBQT1NUIFNMSURFUlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmKCQoXCIucG9zdC1zbGlkZXJcIi5sZW5ndGgpKSB7XG4gICAgICAgICQoXCIucG9zdC1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgbW91c2VEcmFnOiBmYWxzZSxcbiAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDUwMCxcbiAgICAgICAgICAgIG1hcmdpbjogMzAsXG4gICAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmkgdGktYXJyb3ctbGVmdFwiPjwvaT4nLCc8aSBjbGFzcz1cImZpIHRpLWFycm93LXJpZ2h0XCI+PC9pPiddLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpdGVtczogMVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBDT1VOVERPV04gQ0xPQ0tcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIiNjbG9ja1wiKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnI2Nsb2NrJykuY291bnRkb3duKCcyMDIzLTA5LTAyIDEzOjAwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJ1xuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJib3hcIj48ZGl2PjxkaXYgY2xhc3M9XCJ0aW1lXCI+JUQ8L2Rpdj4gPHNwYW4+RGF5czwvc3Bhbj4gPC9kaXY+PC9kaXY+J1xuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJib3hcIj48ZGl2PjxkaXYgY2xhc3M9XCJ0aW1lXCI+JUg8L2Rpdj4gPHNwYW4+SG91cnM8L3NwYW4+IDwvZGl2PjwvZGl2PidcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYm94XCI+PGRpdj48ZGl2IGNsYXNzPVwidGltZVwiPiVNPC9kaXY+IDxzcGFuPk1pbnM8L3NwYW4+IDwvZGl2PjwvZGl2PidcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYm94XCI+PGRpdj48ZGl2IGNsYXNzPVwidGltZVwiPiVTPC9kaXY+IDxzcGFuPlNlY3M8L3NwYW4+IDwvZGl2PjwvZGl2PicpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gQ09VTlRET1dOIENMT0NLMlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiI2Nsb2NrMlwiKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnI2Nsb2NrMicpLmNvdW50ZG93bignMjAyMy0wNi0zMCAyMzowMCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJydcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYm94XCI+PGRpdj48ZGl2IGNsYXNzPVwidGltZVwiPiVEPC9kaXY+IDxzcGFuPkRheXM8L3NwYW4+IDwvZGl2PjwvZGl2PidcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYm94XCI+PGRpdj48ZGl2IGNsYXNzPVwidGltZVwiPiVIPC9kaXY+IDxzcGFuPkhvdXJzPC9zcGFuPiA8L2Rpdj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImJveFwiPjxkaXY+PGRpdiBjbGFzcz1cInRpbWVcIj4lTTwvZGl2PiA8c3Bhbj5NaW5zPC9zcGFuPiA8L2Rpdj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImJveFwiPjxkaXY+PGRpdiBjbGFzcz1cInRpbWVcIj4lUzwvZGl2PiA8c3Bhbj5TZWNzPC9zcGFuPiA8L2Rpdj48L2Rpdj4nKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFRPVUNIU1BJTiBGT1IgUFJPRFVDVCBTSU5HTEUgUEFHRVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiaW5wdXRbbmFtZT0ncHJvZHVjdC1jb3VudCddXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiaW5wdXRbbmFtZT0ncHJvZHVjdC1jb3VudCddXCIpLlRvdWNoU3Bpbih7XG4gICAgICAgICAgICB2ZXJ0aWNhbGJ1dHRvbnM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBTSE9QIFBSSUNFIFNMSURFUlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIGlmKCQoXCIjc2xpZGVyLXJhbmdlXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiI3NsaWRlci1yYW5nZVwiKS5zbGlkZXIoe1xuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICBtaW46IDEyLFxuICAgICAgICAgICAgbWF4OiAyMDAsXG4gICAgICAgICAgICB2YWx1ZXM6IFswLCAxMDBdLFxuICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICQoXCIjYW1vdW50XCIpLnZhbChcIiRcIiArIHVpLnZhbHVlc1swXSArIFwiIC0gJFwiICsgdWkudmFsdWVzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNhbW91bnRcIikudmFsKFwiJFwiICsgJChcIiNzbGlkZXItcmFuZ2VcIikuc2xpZGVyKFwidmFsdWVzXCIsIDApICsgXCIgLSAkXCIgKyAkKFwiI3NsaWRlci1yYW5nZVwiKS5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSkpO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgIGNhcnQtcGx1cy1taW51cy1idXR0b25cbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgJChcIi5jYXJ0LXBsdXMtbWludXNcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVjIHF0eWJ1dHRvblwiPi08L2Rpdj48ZGl2IGNsYXNzPVwiaW5jIHF0eWJ1dHRvblwiPis8L2Rpdj4nKTtcbiAgICAkKFwiLnF0eWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9ICRidXR0b24ucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbCgpO1xuICAgICAgICBpZiAoJGJ1dHRvbi50ZXh0KCkgPT0gXCIrXCIpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBwYXJzZUZsb2F0KG9sZFZhbHVlKSArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEb24ndCBhbGxvdyBkZWNyZW1lbnRpbmcgYmVsb3cgemVyb1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSBwYXJzZUZsb2F0KG9sZFZhbHVlKSAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1ZhbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJGJ1dHRvbi5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG5ld1ZhbCk7XG4gICAgfSk7XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgPSBCQUNLIFRPIFRPUCBCVE4gU0VUVElOR1xuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgJChcImJvZHlcIikuYXBwZW5kKFwiPGEgaHJlZj0nIycgY2xhc3M9J2JhY2stdG8tdG9wJz48aSBjbGFzcz0ndGktYXJyb3ctdXAnPjwvaT48L2E+XCIpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQmFja1RvVG9wQnRuKCkge1xuICAgICAgICB2YXIgYW1vdW50U2Nyb2xsZWQgPSAxMDAwO1xuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gYW1vdW50U2Nyb2xsZWQpIHtcbiAgICAgICAgICAgICQoXCJhLmJhY2stdG8tdG9wXCIpLmZhZGVJbihcInNsb3dcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiYS5iYWNrLXRvLXRvcFwiKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoXCIuYmFjay10by10b3BcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCA3MDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IENPTlRBQ1QgRk9STSBTVUJNSVNTSU9OXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIjY29udGFjdC1mb3JtLW1haW5cIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIjY29udGFjdC1mb3JtLW1haW5cIikudmFsaWRhdGUoe1xuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZW1haWw6IFwicmVxdWlyZWRcIixcblxuICAgICAgICAgICAgICAgIHBob25lOiBcInJlcXVpcmVkXCIsXG5cbiAgICAgICAgICAgICAgICB3aGF0OiBcInJlcXVpcmVkXCIsXG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInJlcXVpcmVkXCIsXG5cbiAgICAgICAgICAgICAgICBndWVzdDogXCJyZXF1aXJlZFwiLFxuXG4gICAgICAgICAgICAgICAgbWVhbDogXCJyZXF1aXJlZFwiLFxuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICBwaG9uZTogXCJQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXJcIixcbiAgICAgICAgICAgICAgICB3aGF0OiBcIlBsZWFzZSBlbnRlciB5b3VyIFJlYXNvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwiUGxlYXNlIHNlbGVjdCB5b3VyIGNvbnRhY3Qgc2VydmljZVwiLFxuICAgICAgICAgICAgICAgIGd1ZXN0OiBcIlBsZWFzZSBzZWxlY3QgeW91ciBndWVzdCBOdW1iZXJcIixcbiAgICAgICAgICAgICAgICBtZWFsOiBcIlBsZWFzZSBzZWxlY3QgeW91ciBNZWFsIE5hbWVcIlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIm1haWwtY29udGFjdC5waHBcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogJChmb3JtKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCggXCIjbG9hZGVyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoIFwiI3N1Y2Nlc3NcIikuc2xpZGVEb3duKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCBcIiNzdWNjZXNzXCIpLnNsaWRlVXAoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCggXCIjbG9hZGVyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoIFwiI2Vycm9yXCIpLnNsaWRlRG93biggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCggXCIjZXJyb3JcIikuc2xpZGVVcCggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyByZXF1aXJlZCB0byBibG9jayBub3JtYWwgc3VibWl0IHNpbmNlIHlvdSB1c2VkIGFqYXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgV0hFTiBET0NVTUVOVCBMT0FESU5HXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHByZWxvYWRlcigpO1xuXG4gICAgICAgIHNvcnRpbmdHYWxsZXJ5KCk7XG5cbiAgICAgICAgdG9nZ2xlTW9iaWxlTmF2aWdhdGlvbigpO1xuXG4gICAgICAgIHNtYWxsTmF2RnVuY3Rpb25hbGl0eSgpO1xuXG4gICAgICAgIHNtb290aFNjcm9sbGluZygkKFwiI25hdmJhciA+IHVsID4gbGkgPiBhW2hyZWZePScjJ11cIiksICQoXCIud3BvLXNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uXCIpLmlubmVySGVpZ2h0KCkpO1xuICAgIH0pO1xuXG5cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgV0hFTiBXSU5ET1cgU0NST0xMXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAoJChcIi53cG8tc2l0ZS1oZWFkZXJcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGlja3lNZW51KCAkKCcud3BvLXNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uJyksIFwic3RpY2t5LW9uXCIgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUJhY2tUb1RvcEJ0bigpO1xuXG4gICAgICAgIGFjdGl2ZU1lbnVJdGVtKCQoXCIubmF2aWdhdGlvbi1ob2xkZXJcIikpO1xuXG4gICAgfSk7XG5cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgV0hFTiBXSU5ET1cgUkVTSVpFXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3NGb3JTbWFsbE5hdigpO1xuICAgICAgICAvL3NtYWxsTmF2RnVuY3Rpb25hbGl0eSgpO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3Jlc2l6ZVRpbWVyJykpO1xuICAgICAgICAkLmRhdGEodGhpcywgJ3Jlc2l6ZVRpbWVyJywgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNtYWxsTmF2RnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICB9LCAyMDApKTtcbiAgICB9KTtcblxuXG4gICAgLy8gY29sb3ItdmFyaWF0aW9uXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY29sb3IgdG9nZ2xlXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYoJChcIi5jb2xvci1zd2l0Y2hlci13cmFwXCIpLmxlbmd0aCkge1xuICAgICAgICB2YXIgY29sb3JUb2dnbGVCdG4gPSAkKFwiLmNvbG9yLXRvZ2dsZS1idG5cIik7XG4gICAgICAgIHZhciBjb2xvckNvbnRlbnQgPSAkKFwiLmNvbG9yLXN3aXRjaGVyLWl0ZW1cIik7XG4gICAgICAgIHZhciBib2R5ID0gJChcImJvZHlcIik7XG5cbiAgICAgICAgY29sb3JUb2dnbGVCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb2xvckNvbnRlbnQudG9nZ2xlQ2xhc3MoXCJjb2xvci1zd2l0Y2hlci1vcGVuXCIpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29sb3JDb250ZW50LnJlbW92ZUNsYXNzKFwiY29sb3Itc3dpdGNoZXItb3BlblwiKTtcbiAgICAgICAgfSkuZmluZChzZWFyY2hDb250ZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvbG9yLWNoYW5nZVxuICAgICQoJy5jb2xvci1zd2l0Y2hlci13cmFwIHVsIGxpLmJ0bicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICQoJy5jb2xvci1zd2l0Y2hlci13cmFwIHVsIGxpLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICBsZXQgZ2V0SWQgPSAkKHRoaXMpLmF0dHIoJ2lkJylcblxuICAgICAgICAkKFwiYm9keVwiKS5hdHRyKCdjbGFzcycsICcnKTtcblxuICAgICAgICBpZihnZXRJZCA9PSAnQnV0dG9uMScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjEnKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yMScpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b24yJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMicpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3IyJylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjMnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IzJylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjMnKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uNCcpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjQnKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yNCcpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b241Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yNScpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3I1JylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjYnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3I2JylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjYnKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uNycpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjcnKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yNycpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b244Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yOCcpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3I4JylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjknKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3I5JylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjknKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uMTAnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IxMCcpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3IxMCcpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b24xMScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjExJylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjExJylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjEyJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMTInKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yMTInKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3IxJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMScpXG4gICAgICAgICAgICAkKCcjQnV0dG9uMScpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3IyJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMicpXG4gICAgICAgICAgICAkKCcjQnV0dG9uMicpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3IzJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMycpXG4gICAgICAgICAgICAkKCcjQnV0dG9uMycpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3I0Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yNCcpXG4gICAgICAgICAgICAkKCcjQnV0dG9uNCcpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3I1Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yNScpXG4gICAgICAgICAgICAkKCcjQnV0dG9uNScpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3I2Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yNicpXG4gICAgICAgICAgICAkKCcjQnV0dG9uNicpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3I3Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yNycpXG4gICAgICAgICAgICAkKCcjQnV0dG9uNycpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3I4Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yOCcpXG4gICAgICAgICAgICAkKCcjQnV0dG9uOCcpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3I5Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yOScpXG4gICAgICAgICAgICAkKCcjQnV0dG9uOScpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3IxMCcpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjEwJylcbiAgICAgICAgICAgICQoJyNCdXR0b24xMCcpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3IxMScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjExJylcbiAgICAgICAgICAgICQoJyNCdXR0b24xMScpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dpdGVyQ29sb3InKSA9PSAnY29sb3IxMicpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjEyJylcbiAgICAgICAgICAgICQoJyNCdXR0b24xMicpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59KSh3aW5kb3cualF1ZXJ5KTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCIkIiwibmljZVNlbGVjdCIsInRvZ2dsZU1vYmlsZU5hdmlnYXRpb24iLCJuYXZiYXIiLCJvcGVuQnRuIiwieGJ1dHRvbiIsIm9uIiwiZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlQ2xhc3NGb3JTbWFsbE5hdiIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1haW5OYXYiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic21hbGxOYXZGdW5jdGlvbmFsaXR5Iiwic21hbGxOYXYiLCJzdWJNZW51IiwiZmluZCIsIm1lZ2FtZW51IiwibWVudUl0ZW1XaWR0aFN1Yk1lbnUiLCJoaWRlIiwiJHRoaXMiLCJzaWJsaW5ncyIsInNsaWRlVG9nZ2xlIiwicHJldmVudERlZmF1bHQiLCJzaG93IiwiYWN0aXZlTWVudUl0ZW0iLCIkbGlua3MiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJoZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50IiwiY3VyX3BvcyIsInNlY3Rpb25zIiwibmF2IiwibmF2X2hlaWdodCIsIm91dGVySGVpZ2h0IiwiZWFjaCIsIm9mZnNldCIsImJvdHRvbSIsInBhcmVudCIsImF0dHIiLCJzbW9vdGhTY3JvbGxpbmciLCIkc2Nyb2xsTGlua3MiLCIkdG9wT2Zmc2V0IiwibGlua3MiLCJ0b3BHYXAiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsImxlbmd0aCIsInNsaWNlIiwiYW5pbWF0ZSIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9vbHRpcExpc3QiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwiYm9vdHN0cmFwIiwiVG9vbHRpcCIsImJnUGFyYWxsYXgiLCJwb3NpdGlvbiIsInJlc2l6ZSIsImRvUGFyYWxsYXgiLCJwb3NpdGlvblZhbHVlIiwiaW1nIiwiZGF0YSIsImNzcyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwibWVudSIsImpRdWVyeSIsImluZGV4IiwicHVzaCIsImludGVybGVhdmVPZmZzZXQiLCJzd2lwZXJPcHRpb25zIiwibG9vcCIsInNwZWVkIiwicGFyYWxsYXgiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInByb2dyZXNzIiwic3dpcGVyIiwiaSIsInNsaWRlcyIsInNsaWRlUHJvZ3Jlc3MiLCJpbm5lck9mZnNldCIsIndpZHRoIiwiaW5uZXJUcmFuc2xhdGUiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0b3VjaFN0YXJ0IiwidHJhbnNpdGlvbiIsInNldFRyYW5zaXRpb24iLCJTd2lwZXIiLCJzbGlkZXJCZ1NldHRpbmciLCJpbmR4IiwicHJlbG9hZGVyIiwiZmFkZU91dCIsIndvdyIsImluaXQiLCJyaXBwbGVzIiwicmVzb2x1dGlvbiIsImRyb3BSYWRpdXMiLCJwZXJ0dXJiYW5jZSIsInNldEludGVydmFsIiwiJGVsIiwieCIsIk1hdGgiLCJyYW5kb20iLCJvdXRlcldpZHRoIiwieSIsInN0cmVuZ3RoIiwicGFydGljbGVncm91bmQiLCJkb3RDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsInBhcnRpY2xlUmFkaXVzIiwiWVRQbGF5ZXIiLCJzaG93Q29udHJvbHMiLCJwbGF5ZXJWYXJzIiwibW9kZXN0YnJhbmRpbmciLCJjb250cm9scyIsInNob3dpbmZvIiwid21vZGUiLCJicmFuZGluZyIsInJlbCIsImF1dG9oaWRlIiwib3JpZ2luIiwiV09XIiwiYm94Q2xhc3MiLCJhbmltYXRlQ2xhc3MiLCJtb2JpbGUiLCJsaXZlIiwiZmFuY3lib3giLCJvcGVuRWZmZWN0IiwiY2xvc2VFZmZlY3QiLCJ3cmFwQ1NTIiwibWFnbmlmaWNQb3B1cCIsInR5cGUiLCJtYWluQ2xhc3MiLCJyZW1vdmFsRGVsYXkiLCJmaXhlZENvbnRlbnRQb3MiLCJocmVmIiwidGl0bGUiLCJoZWxwZXJzIiwibWVkaWEiLCJiZWZvcmVTaG93IiwiZGVsZWdhdGUiLCJnYWxsZXJ5IiwiZW5hYmxlZCIsInpvb20iLCJkdXJhdGlvbiIsImVhc2luZyIsIm9wZW5lciIsIm9wZW5lckVsZW1lbnQiLCJpcyIsInNvcnRpbmdHYWxsZXJ5IiwiJGNvbnRhaW5lciIsImlzb3RvcGUiLCJmaWx0ZXIiLCJhbmltYXRpb25PcHRpb25zIiwicXVldWUiLCJzZWxlY3RvciIsIm1hc29ucnlHcmlkU2V0dGluZyIsIiRncmlkIiwibWFzb25yeSIsIml0ZW1TZWxlY3RvciIsImNvbHVtbldpZHRoIiwicGVyY2VudFBvc2l0aW9uIiwiaW1hZ2VzTG9hZGVkIiwiYXBwZWFyIiwiYm9keSIsIm9kbyIsImNvdW50TnVtYmVyIiwiaHRtbCIsImNsb25lTmF2Rm9yU3RpY3lNZW51IiwiJGVsZSIsIiRuZXdFbG1DbGFzcyIsImNsb25lIiwiaW5zZXJ0QWZ0ZXIiLCJsYXN0U2Nyb2xsVG9wIiwic3RpY2t5TWVudSIsIiR0YXJnZXRNZW51IiwiJHRvZ2dsZUNsYXNzIiwic3QiLCJtYWluTWVudVRvcCIsInNlYXJjaFRvZ2dsZUJ0biIsInNlYXJjaFRvZ2dsZUJ0bkljb24iLCJzZWFyY2hDb250ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2FydFRvZ2dsZUJ0biIsImNhcnRDb250ZW50IiwiY2FydENsb3NlQnRuIiwiZmFkZUluIiwib3dsQ2Fyb3VzZWwiLCJzbWFydFNwZWVkIiwibWFyZ2luIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiZG90cyIsIml0ZW1zIiwicmVzcG9uc2l2ZSIsImFycm93cyIsIm5hdlRleHQiLCJtb3VzZURyYWciLCJjb3VudGRvd24iLCJldmVudCIsInN0cmZ0aW1lIiwiVG91Y2hTcGluIiwidmVydGljYWxidXR0b25zIiwic2xpZGVyIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJ2YWx1ZXMiLCJzbGlkZSIsInVpIiwidmFsIiwiYXBwZW5kIiwiJGJ1dHRvbiIsIm9sZFZhbHVlIiwidGV4dCIsIm5ld1ZhbCIsInBhcnNlRmxvYXQiLCJ0b2dnbGVCYWNrVG9Ub3BCdG4iLCJhbW91bnRTY3JvbGxlZCIsInZhbGlkYXRlIiwicnVsZXMiLCJuYW1lIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJlbWFpbCIsInBob25lIiwid2hhdCIsInNlcnZpY2UiLCJndWVzdCIsIm1lYWwiLCJtZXNzYWdlcyIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwiYWpheCIsInVybCIsInNlcmlhbGl6ZSIsInN1Y2Nlc3MiLCJzbGlkZURvd24iLCJzZXRUaW1lb3V0Iiwic2xpZGVVcCIsInJlc2V0IiwiZXJyb3IiLCJpbm5lckhlaWdodCIsImNsZWFyVGltZW91dCIsImNvbG9yVG9nZ2xlQnRuIiwiY29sb3JDb250ZW50IiwiZ2V0SWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=