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
/* harmony import */ var modernizr_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! modernizr-loader */ "./node_modules/modernizr-loader/index.js");
/* harmony import */ var modernizr_loader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(modernizr_loader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sass/style.scss */ "./assets/sass/style.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-58ca02"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQWYsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsUUFBMUMsRUFBbUQ7TUFDckRuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQWYsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsUUFBMUMsRUFBbUQ7TUFDckRuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQWYsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsUUFBMUMsRUFBbUQ7TUFDckRuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQWYsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsUUFBMUMsRUFBbUQ7TUFDckRuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQWYsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsUUFBMUMsRUFBbUQ7TUFDckRuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQWYsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsU0FBMUMsRUFBb0Q7TUFDdERuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsU0FBbkI7TUFDQWYsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZSxRQUFmLENBQXdCLFFBQXhCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsU0FBMUMsRUFBb0Q7TUFDdERuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsU0FBbkI7TUFDQWYsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZSxRQUFmLENBQXdCLFFBQXhCO0lBQ0gsQ0FISyxNQUdBLElBQUdrUSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsYUFBckIsS0FBdUMsU0FBMUMsRUFBb0Q7TUFDdERuUixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLFFBQVYsQ0FBbUIsU0FBbkI7TUFDQWYsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZSxRQUFmLENBQXdCLFFBQXhCO0lBQ0g7RUFFSixDQXZDRDtBQXlDSCxDQXhrQ0QsRUF3a0NHSCxvQ0F4a0NIOzs7Ozs7Ozs7Ozs7Ozs7O0NDZEE7O0FBQ08sSUFBTXlRLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUFELENBQTVCLEVBTVA7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nhc3Mvc3R5bGUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnbW9kZXJuaXpyLWxvYWRlcidcblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbihmdW5jdGlvbigkKSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE5pY2UgU2VsZWN0XG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAkKCcuc2VsZWN0JykubmljZVNlbGVjdCgpO1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBBTEwgRVNTRU5USUFMIEZVTkNUSU9OU1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgICAvLyBUb2dnbGUgbW9iaWxlIG5hdmlnYXRpb25cbiAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVOYXZpZ2F0aW9uKCkge1xuICAgICAgICB2YXIgbmF2YmFyID0gJChcIi5uYXZpZ2F0aW9uLWhvbGRlclwiKTtcbiAgICAgICAgdmFyIG9wZW5CdG4gPSAkKFwiLm1vYmFpbC1tZW51IC5vcGVuLWJ0blwiKTtcbiAgICAgICAgdmFyIHhidXR0b24gPSAkKFwiLm1vYmFpbC1tZW51IC5uYXZiYXItdG9nZ2xlclwiKTtcblxuICAgICAgICBvcGVuQnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIG5hdmJhci50b2dnbGVDbGFzcyhcInNsaWRlSW5uXCIpO1xuICAgICAgICAgICAgeGJ1dHRvbi50b2dnbGVDbGFzcyhcIngtY2xvc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlTW9iaWxlTmF2aWdhdGlvbigpO1xuXG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgdG9nZ2xlIGNsYXNzIGZvciBzbWFsbCBtZW51XG4gICAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3NGb3JTbWFsbE5hdigpIHtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciBtYWluTmF2ID0gJChcIiNuYXZiYXIgPiB1bFwiKTtcblxuICAgICAgICBpZiAod2luZG93V2lkdGggPD0gOTkxKSB7XG4gICAgICAgICAgICBtYWluTmF2LmFkZENsYXNzKFwic21hbGwtbmF2XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbk5hdi5yZW1vdmVDbGFzcyhcInNtYWxsLW5hdlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzRm9yU21hbGxOYXYoKTtcblxuXG4gICAgLy8gRnVuY3Rpb24gZm9yIHNtYWxsIG1lbnVcbiAgICBmdW5jdGlvbiBzbWFsbE5hdkZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgbWFpbk5hdiA9ICQoXCIubmF2aWdhdGlvbi1ob2xkZXJcIik7XG4gICAgICAgIHZhciBzbWFsbE5hdiA9ICQoXCIubmF2aWdhdGlvbi1ob2xkZXIgPiAuc21hbGwtbmF2XCIpO1xuICAgICAgICB2YXIgc3ViTWVudSA9IHNtYWxsTmF2LmZpbmQoXCIuc3ViLW1lbnVcIik7XG4gICAgICAgIHZhciBtZWdhbWVudSA9IHNtYWxsTmF2LmZpbmQoXCIubWVnYS1tZW51XCIpO1xuICAgICAgICB2YXIgbWVudUl0ZW1XaWR0aFN1Yk1lbnUgPSBzbWFsbE5hdi5maW5kKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpO1xuXG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCA8PSA5OTEpIHtcbiAgICAgICAgICAgIHN1Yk1lbnUuaGlkZSgpO1xuICAgICAgICAgICAgbWVnYW1lbnUuaGlkZSgpO1xuICAgICAgICAgICAgbWVudUl0ZW1XaWR0aFN1Yk1lbnUub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoXCJyb3RhdGVcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID4gOTkxKSB7XG4gICAgICAgICAgICBtYWluTmF2LmZpbmQoXCIuc3ViLW1lbnVcIikuc2hvdygpO1xuICAgICAgICAgICAgbWFpbk5hdi5maW5kKFwiLm1lZ2EtbWVudVwiKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzbWFsbE5hdkZ1bmN0aW9uYWxpdHkoKTtcblxuXG4gICAgLy8gZnVuY3Rpb24gZm9yIGFjdGl2ZSBtZW51aXRlbVxuICAgIGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCRsaW5rcykge1xuICAgICAgICB2YXIgdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICAgICAgZG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSxcbiAgICAgICAgICAgIGN1cl9wb3MgPSB0b3AgKyAyLFxuICAgICAgICAgICAgc2VjdGlvbnMgPSAkKFwic2VjdGlvblwiKSxcbiAgICAgICAgICAgIG5hdiA9ICRsaW5rcyxcbiAgICAgICAgICAgIG5hdl9oZWlnaHQgPSBuYXYub3V0ZXJIZWlnaHQoKTtcblxuXG4gICAgICAgIHNlY3Rpb25zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgaWYgKGN1cl9wb3MgPj0gdG9wICYmIGN1cl9wb3MgPD0gYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgbmF2LmZpbmQoXCI+IHVsID4gbGkgPiBhXCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiY3VycmVudC1tZW51LWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgbmF2LmZpbmQoXCJhW2hyZWY9JyNcIiArICQodGhpcykuYXR0cignaWQnKSArIFwiJ11cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJjdXJyZW50LW1lbnUtaXRlbVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyX3BvcyA9PT0gMikge1xuICAgICAgICAgICAgICAgIG5hdi5maW5kKFwiPiB1bCA+IGxpID4gYVwiKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImN1cnJlbnQtbWVudS1pdGVtXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gc21vb3RoLXNjcm9sbGluZ1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbGluZygkc2Nyb2xsTGlua3MsICR0b3BPZmZzZXQpIHtcbiAgICAgICAgdmFyIGxpbmtzID0gJHNjcm9sbExpbmtzO1xuICAgICAgICB2YXIgdG9wR2FwID0gJHRvcE9mZnNldDtcblxuICAgICAgICBsaW5rcy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKFwiW25hbWU9XCIgKyB0aGlzLmhhc2guc2xpY2UoMSkgK1wiXVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIHRvcEdhcFxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwLCBcImVhc2VJbk91dEV4cG9cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5uYXZpZ2F0aW9uLWhvbGRlcicpLnJlbW92ZUNsYXNzKCdzbGlkZUlubicpO1xuICAgIH0pO1xuICAgICQoXCIubWVudS1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubmF2aWdhdGlvbi1ob2xkZXInKS5yZW1vdmVDbGFzcygnc2xpZGVJbm4nKTtcbiAgICB9KTtcbiAgICAkKFwiLm1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLm9wZW4tYnRuJykucmVtb3ZlQ2xhc3MoJ3gtY2xvc2UnKTtcbiAgICB9KTtcblxuXG5cbiAgICAvLyB0b29sdGlwc1xuXG4gICAgdmFyIHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKVxuICAgIHZhciB0b29sdGlwTGlzdCA9IHRvb2x0aXBUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHRvb2x0aXBUcmlnZ2VyRWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxuICAgIH0pXG5cblxuICAgIC8vIFBhcmFsbGF4IGJhY2tncm91bmRcbiAgICBmdW5jdGlvbiBiZ1BhcmFsbGF4KCkge1xuICAgICAgICBpZiAoJChcIi5wYXJhbGxheFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIucGFyYWxsYXhcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh0aGlzKS5wb3NpdGlvbigpLnRvcDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzaXplICAgICA9IGhlaWdodCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICB2YXIgZG9QYXJhbGxheCA9IC0ocmVzaXplLzUpO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblZhbHVlICAgPSBkb1BhcmFsbGF4ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHZhciBpbWcgPSAkKHRoaXMpLmRhdGEoXCJiZy1pbWFnZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltZyArIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNTAlXCIgKyBwb3NpdGlvblZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhFUk8gU0xJREVSXG4gICAgdmFyIG1lbnUgPSBbXTtcbiAgICBqUXVlcnkoJy5zd2lwZXItc2xpZGUnKS5lYWNoKCBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIG1lbnUucHVzaCggalF1ZXJ5KHRoaXMpLmZpbmQoJy5zbGlkZS1pbm5lcicpLmF0dHIoXCJkYXRhLXRleHRcIikgKTtcbiAgICB9KTtcbiAgICB2YXIgaW50ZXJsZWF2ZU9mZnNldCA9IDAuNTtcbiAgICB2YXIgc3dpcGVyT3B0aW9ucyA9IHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIHBhcmFsbGF4OiB0cnVlLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDY1MDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgICB9LFxuXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZVByb2dyZXNzID0gc3dpcGVyLnNsaWRlc1tpXS5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlubmVyT2Zmc2V0ID0gc3dpcGVyLndpZHRoICogaW50ZXJsZWF2ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlubmVyVHJhbnNsYXRlID0gc2xpZGVQcm9ncmVzcyAqIGlubmVyT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtaW5uZXJcIikuc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlM2QoXCIgKyBpbm5lclRyYW5zbGF0ZSArIFwicHgsIDAsIDApXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZXNbaV0uc3R5bGUudHJhbnNpdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24oc3BlZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5zdHlsZS50cmFuc2l0aW9uID0gc3BlZWQgKyBcIm1zXCI7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZXNbaV0ucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1pbm5lclwiKS5zdHlsZS50cmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkICsgXCJtc1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyXCIsIHN3aXBlck9wdGlvbnMpO1xuXG4gICAgLy8gREFUQSBCQUNLR1JPVU5EIElNQUdFXG4gICAgdmFyIHNsaWRlckJnU2V0dGluZyA9ICQoXCIuc2xpZGUtYmctaW1hZ2VcIik7XG4gICAgc2xpZGVyQmdTZXR0aW5nLmVhY2goZnVuY3Rpb24oaW5keCl7XG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLWJhY2tncm91bmRcIikpe1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKFwiICsgJCh0aGlzKS5kYXRhKFwiYmFja2dyb3VuZFwiKSArIFwiKVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gSElERSBQUkVMT0FERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBmdW5jdGlvbiBwcmVsb2FkZXIoKSB7XG4gICAgICAgIGlmKCQoJy5wcmVsb2FkZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5wcmVsb2FkZXInKS5kZWxheSgxMDApLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vYWN0aXZlIHdvd1xuICAgICAgICAgICAgICAgIHdvdy5pbml0KCk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFdBVEVSIFJJUFBMRVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLnJpcHBsZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLnJpcHBsZScpLnJpcHBsZXMoe1xuICAgICAgICAgICAgcmVzb2x1dGlvbjogNTEyLFxuICAgICAgICAgICAgZHJvcFJhZGl1czogMjAsIC8vcHhcbiAgICAgICAgICAgIHBlcnR1cmJhbmNlOiAwLjA0LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBdXRvbWF0aWMgZHJvcHNcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJGVsID0gJCgnLnJpcHBsZScpO1xuICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJhbmRvbSgpICogJGVsLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciB5ID0gTWF0aC5yYW5kb20oKSAqICRlbC5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIGRyb3BSYWRpdXMgPSAyMDtcbiAgICAgICAgICAgIHZhciBzdHJlbmd0aCA9IDAuMDQgKyBNYXRoLnJhbmRvbSgpICogMC4wNDtcblxuICAgICAgICAgICAgJGVsLnJpcHBsZXMoJ2Ryb3AnLCB4LCB5LCBkcm9wUmFkaXVzLCBzdHJlbmd0aCk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFBBUlRJQ0xFIEdST1VORFxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLnBhcnRpY2xlZ3JvdW5kXCIpLmxlbmd0aCkge1xuICAgICAgICAkKCcucGFydGljbGVncm91bmQnKS5wYXJ0aWNsZWdyb3VuZCh7XG4gICAgICAgICAgICBkb3RDb2xvcjogXCIjZjdlMGUzXCIsXG4gICAgICAgICAgICBsaW5lQ29sb3I6IFwiI2Y3ZTBlM1wiLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAwLjQsXG4gICAgICAgICAgICBwYXJ0aWNsZVJhZGl1czogNlxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICA9IFZJREVPIEJBQ0tHUk9VTkRcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIudmlkZW8tcGxheWVyXCIpLmxlbmd0aCkge1xuICAgICAgICAkKCcudmlkZW8tcGxheWVyJykuWVRQbGF5ZXIoe1xuICAgICAgICAgICAgc2hvd0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMCxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogMSxcbiAgICAgICAgICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgICAgICAgICB3bW9kZTogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBicmFuZGluZzogMCxcbiAgICAgICAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgICAgICAgYXV0b2hpZGU6IDAsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBXT1cgQU5JTUFUSU9OIFNFVFRJTkdcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICB2YXIgd293ID0gbmV3IFdPVyh7XG4gICAgICAgIGJveENsYXNzOiAgICAgJ3dvdycsICAgICAgLy8gZGVmYXVsdFxuICAgICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGRlZmF1bHRcbiAgICAgICAgb2Zmc2V0OiAgICAgICAwLCAgICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIG1vYmlsZTogICAgICAgdHJ1ZSwgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICBsaXZlOiAgICAgICAgIHRydWUgICAgICAgIC8vIGRlZmF1bHRcbiAgICB9KTtcblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBBQ1RJVkUgUE9QVVAgSU1BR0VcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi5mYW5jeWJveFwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIi5mYW5jeWJveFwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICBvcGVuRWZmZWN0ICA6IFwiZWxhc3RpY1wiLFxuICAgICAgICAgICAgY2xvc2VFZmZlY3QgOiBcImVsYXN0aWNcIixcbiAgICAgICAgICAgIHdyYXBDU1MgICAgIDogXCJwcm9qZWN0LWZhbmN5Ym94LXRpdGxlLXN0eWxlXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IFBPUFVQIFlPVVRVQkUsIFZJTUVPLCBHTUFQU1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICQoJy5wb3B1cC15b3V0dWJlLCAucG9wdXAtdmltZW8sIC5wb3B1cC1nbWFwcycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICByZW1vdmFsRGVsYXk6IDE2MCxcbiAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBQT1BVUCBWSURFT1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLnZpZGVvLWJ0blwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIi52aWRlby1idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJC5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgICAgICAgICAgIHR5cGU6ICQodGhpcykuZGF0YShcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgJ3RpdGxlJyAgICAgICAgIDogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICBoZWxwZXJzICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiB7IHR5cGUgOiAnaW5zaWRlJyB9LFxuICAgICAgICAgICAgICAgICAgICBtZWRpYSA6IHt9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGJlZm9yZVNob3cgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmZhbmN5Ym94LXdyYXBcIikuYWRkQ2xhc3MoXCJnYWxsZXJ5LWZhbmN5Ym94XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBBQ1RJVkUgR0FMTEVSWSBQT1BVUCBJTUFHRVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLnBvcHVwLWdhbGxlcnlcIikubGVuZ3RoKSB7XG4gICAgICAgICQoJy5wb3B1cC1nYWxsZXJ5JykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcblxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCcsXG4gICAgICAgICAgICAgICAgb3BlbmVyOiBmdW5jdGlvbihvcGVuZXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuZXJFbGVtZW50LmlzKCdpbWcnKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IEZVTkNUSU9OIEZPUk0gU09SVElORyBHQUxMRVJZXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgZnVuY3Rpb24gc29ydGluZ0dhbGxlcnkoKSB7XG4gICAgICAgIGlmICgkKFwiLnNvcnRhYmxlLWdhbGxlcnkgLmdhbGxlcnktZmlsdGVyc1wiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gJCgnLmdhbGxlcnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAkY29udGFpbmVyLmlzb3RvcGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjonKicsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNzUwLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIuZ2FsbGVyeS1maWx0ZXJzIGxpIGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuZ2FsbGVyeS1maWx0ZXJzIGxpIC5jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgICRjb250YWluZXIuaXNvdG9wZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjpzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDc1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRpbmdHYWxsZXJ5KCk7XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gTUFTT05SWSBHQUxMRVJZIFNFVFRJTkdcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBmdW5jdGlvbiBtYXNvbnJ5R3JpZFNldHRpbmcoKSB7XG4gICAgICAgIGlmICgkKCcubWFzb25yeS1nYWxsZXJ5JykubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgJGdyaWQgPSAgJCgnLm1hc29ucnktZ2FsbGVyeScpLm1hc29ucnkoe1xuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtaXRlbScsXG4gICAgICAgICAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGdyaWQuaW1hZ2VzTG9hZGVkKCkucHJvZ3Jlc3MoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRncmlkLm1hc29ucnkoJ2xheW91dCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYXNvbnJ5R3JpZFNldHRpbmcoKTtcblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgID0gRlVORkFDVFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi5vZG9tZXRlclwiKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLm9kb21ldGVyJykuYXBwZWFyKCk7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2FwcGVhcicsICcub2RvbWV0ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgb2RvID0gJChcIi5vZG9tZXRlclwiKTtcbiAgICAgICAgICAgIG9kby5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb3VudE51bWJlciA9ICQodGhpcykuYXR0cihcImRhdGEtY291bnRcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKGNvdW50TnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBTVElDS1kgSEVBREVSXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgY2xvbmUgYW4gZWxlbWVudCBmb3Igc3RpY2t5IG1lbnVcbiAgICBmdW5jdGlvbiBjbG9uZU5hdkZvclN0aWN5TWVudSgkZWxlLCAkbmV3RWxtQ2xhc3MpIHtcbiAgICAgICAgJGVsZS5hZGRDbGFzcygnb3JpZ2luYWwnKS5jbG9uZSgpLmluc2VydEFmdGVyKCRlbGUpLmFkZENsYXNzKCRuZXdFbG1DbGFzcykucmVtb3ZlQ2xhc3MoJ29yaWdpbmFsJyk7XG4gICAgfVxuXG4gICAgLy8gY2xvbmUgaG9tZSBzdHlsZSAxIG5hdmlnYXRpb24gZm9yIHN0aWNreSBtZW51XG4gICAgaWYgKCQoJy53cG8tc2l0ZS1oZWFkZXIgLm5hdmlnYXRpb24nKS5sZW5ndGgpIHtcbiAgICAgICAgY2xvbmVOYXZGb3JTdGljeU1lbnUoJCgnLndwby1zaXRlLWhlYWRlciAubmF2aWdhdGlvbicpLCBcInN0aWNreS1oZWFkZXJcIik7XG4gICAgfVxuXG4gICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAnJztcblxuICAgIGZ1bmN0aW9uIHN0aWNreU1lbnUoJHRhcmdldE1lbnUsICR0b2dnbGVDbGFzcywgJHRvcE9mZnNldCkge1xuICAgICAgICB2YXIgc3QgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciBtYWluTWVudVRvcCA9ICQoJy53cG8tc2l0ZS1oZWFkZXIgLm5hdmlnYXRpb24nKTtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gNTAwKSB7XG4gICAgICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkZSBzdGlja3kgbWVudSBvbiBzY3JvbGwgZG93blxuICAgICAgICAgICAgICAgICR0YXJnZXRNZW51LmFkZENsYXNzKCR0b2dnbGVDbGFzcyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0aWNreSBtZW51IG9uIHNjcm9sbCB1cFxuICAgICAgICAgICAgICAgICR0YXJnZXRNZW51LmFkZENsYXNzKCR0b2dnbGVDbGFzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0YXJnZXRNZW51LnJlbW92ZUNsYXNzKCR0b2dnbGVDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XG5cblxuICAgIH1cblxuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgPSBIZWFkZXIgc2VhcmNoIHRvZ2dsZVxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZigkKFwiLmhlYWRlci1zZWFyY2gtZm9ybS13cmFwcGVyXCIpLmxlbmd0aCkge1xuICAgICAgICB2YXIgc2VhcmNoVG9nZ2xlQnRuID0gJChcIi5zZWFyY2gtdG9nZ2xlLWJ0blwiKTtcbiAgICAgICAgdmFyIHNlYXJjaFRvZ2dsZUJ0bkljb24gPSAkKFwiLnNlYXJjaC10b2dnbGUtYnRuIGlcIik7XG4gICAgICAgIHZhciBzZWFyY2hDb250ZW50ID0gJChcIi5oZWFkZXItc2VhcmNoLWZvcm1cIik7XG4gICAgICAgIHZhciBib2R5ID0gJChcImJvZHlcIik7XG5cbiAgICAgICAgc2VhcmNoVG9nZ2xlQnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc2VhcmNoQ29udGVudC50b2dnbGVDbGFzcyhcImhlYWRlci1zZWFyY2gtY29udGVudC10b2dnbGVcIik7XG4gICAgICAgICAgICBzZWFyY2hUb2dnbGVCdG5JY29uLnRvZ2dsZUNsYXNzKFwiZmkgZmxhdGljb24tc2VhcmNoIGZpIHRpLWNsb3NlXCIpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VhcmNoQ29udGVudC5yZW1vdmVDbGFzcyhcImhlYWRlci1zZWFyY2gtY29udGVudC10b2dnbGVcIik7XG4gICAgICAgIH0pLmZpbmQoc2VhcmNoQ29udGVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gSGVhZGVyIHNob3BwaW5nIGNhcnQgdG9nZ2xlXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYoJChcIi5taW5pLWNhcnRcIikubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjYXJ0VG9nZ2xlQnRuID0gJChcIi5jYXJ0LXRvZ2dsZS1idG5cIik7XG4gICAgICAgIHZhciBjYXJ0Q29udGVudCA9ICQoXCIubWluaS1jYXJ0LWNvbnRlbnRcIik7XG4gICAgICAgIHZhciBjYXJ0Q2xvc2VCdG4gPSAkKFwiLm1pbmktY2FydC1jbG9zZVwiKTtcbiAgICAgICAgdmFyIGJvZHkgPSAkKFwiYm9keVwiKTtcblxuICAgICAgICBjYXJ0VG9nZ2xlQnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2FydENvbnRlbnQudG9nZ2xlQ2xhc3MoXCJtaW5pLWNhcnQtY29udGVudC10b2dnbGVcIik7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYXJ0Q2xvc2VCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjYXJ0Q29udGVudC5yZW1vdmVDbGFzcyhcIm1pbmktY2FydC1jb250ZW50LXRvZ2dsZVwiKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJvZHkub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhcnRDb250ZW50LnJlbW92ZUNsYXNzKFwibWluaS1jYXJ0LWNvbnRlbnQtdG9nZ2xlXCIpO1xuICAgICAgICB9KS5maW5kKGNhcnRDb250ZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBSRUNFTlQgQ0FTRSBTRUNUSU9OIFNIT1cgSElERVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmKCQoJy5zZXJ2aWNlLXRodW1icycpLmxlbmd0aCl7XG4gICAgICAgICQoJy5zZXJ2aWNlLXRodW1iJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoJCh0aGlzKS5hdHRyKCdkYXRhLWNhc2UnKSk7XG4gICAgICAgICAgICAkKCcuc2VydmljZS10aHVtYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGh1bWInKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10aHVtYicpO1xuICAgICAgICAgICAgJCgnLnNlcnZpY2UtY29udGVudCAuc2VydmljZS1kYXRhJykuaGlkZSgwKTtcbiAgICAgICAgICAgICQoJy5zZXJ2aWNlLWRhdGEnKS5mYWRlT3V0KDMwMCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zZXJ2aWNlLWRhdGEnKTtcbiAgICAgICAgICAgICQodGFyZ2V0KS5mYWRlSW4oMzAwKS5hZGRDbGFzcygnYWN0aXZlLXNlcnZpY2UtZGF0YScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gVGVzdGltb25pYWwgU0xJREVSXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIudGVzdGltb25pYWwtc2xpZGVyXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIG1hcmdpbjogMTAwLFxuICAgICAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOnRydWUsXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgIGl0ZW1zOjIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDc2NyA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEyMDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMzAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAxNDAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDE1MDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gUEFSVE5FUlMgU0xJREVSXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIucGFydG5lcnMtc2xpZGVyXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLnBhcnRuZXJzLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBhdXRvcGxheTp0cnVlLFxuICAgICAgICAgICAgc21hcnRTcGVlZDogMzAwLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOnRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgICAgIG5hdjpmYWxzZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAwIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICA1NTAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDk5MiA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgMTIwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHdwby1zZXJ2aWNlLWFjdGl2ZSBTTElERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi53cG8tc2VydmljZS1hY3RpdmVcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIud3BvLXNlcnZpY2UtYWN0aXZlXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGF1dG9wbGF5OmZhbHNlLFxuICAgICAgICAgICAgc21hcnRTcGVlZDogMzAwLFxuICAgICAgICAgICAgbWFyZ2luOiAzMCxcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmkgZmxhdGljb24tbGVmdC1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZpIGZsYXRpY29uLXJpZ2h0LWFycm93LTFcIj48L2k+J10sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgNTc1IDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDc2NyA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDk5MiA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgMTIwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndwby1zZXJ2aWNlLWFjdGl2ZSBTTElERVJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiLnN0YXRpYy1oZXJvLXNsaWRlLWltZ1wiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIi5zdGF0aWMtaGVyby1zbGlkZS1pbWdcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6dHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgbmF2VGV4dDogWyc8aSBjbGFzcz1cImZpIGZsYXRpY29uLWxlZnQtYXJyb3dcIj48L2k+JywnPGkgY2xhc3M9XCJmaSBmbGF0aWNvbi1yaWdodC1hcnJvdy0xXCI+PC9pPiddLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDU3NSA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA3NjcgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICA5OTIgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDEyMDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHBvcnRmb2xpby1zbGlkZXJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIi5wb3J0Zm9saW8tc2xpZGVyXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLnBvcnRmb2xpby1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIG1hcmdpbjogMTUsXG4gICAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6dHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgbmF2VGV4dDogWyc8aSBjbGFzcz1cImZpIGZsYXRpY29uLWxlZnQtYXJyb3dcIj48L2k+JywnPGkgY2xhc3M9XCJmaSBmbGF0aWNvbi1yaWdodC1hcnJvdy0xXCI+PC9pPiddLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDU3NSA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA3NjcgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICA5OTIgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIDEyMDAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gUE9TVCBTTElERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZigkKFwiLnBvc3Qtc2xpZGVyXCIubGVuZ3RoKSkge1xuICAgICAgICAkKFwiLnBvc3Qtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIG1vdXNlRHJhZzogZmFsc2UsXG4gICAgICAgICAgICBzbWFydFNwZWVkOiA1MDAsXG4gICAgICAgICAgICBtYXJnaW46IDMwLFxuICAgICAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgbmF2VGV4dDogWyc8aSBjbGFzcz1cImZpIHRpLWFycm93LWxlZnRcIj48L2k+JywnPGkgY2xhc3M9XCJmaSB0aS1hcnJvdy1yaWdodFwiPjwvaT4nXSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gQ09VTlRET1dOIENMT0NLXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaWYgKCQoXCIjY2xvY2tcIikubGVuZ3RoKSB7XG4gICAgICAgICQoJyNjbG9jaycpLmNvdW50ZG93bignMjAyMy0wOS0wMiAxMzowMCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJydcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYm94XCI+PGRpdj48ZGl2IGNsYXNzPVwidGltZVwiPiVEPC9kaXY+IDxzcGFuPkRheXM8L3NwYW4+IDwvZGl2PjwvZGl2PidcbiAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYm94XCI+PGRpdj48ZGl2IGNsYXNzPVwidGltZVwiPiVIPC9kaXY+IDxzcGFuPkhvdXJzPC9zcGFuPiA8L2Rpdj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImJveFwiPjxkaXY+PGRpdiBjbGFzcz1cInRpbWVcIj4lTTwvZGl2PiA8c3Bhbj5NaW5zPC9zcGFuPiA8L2Rpdj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImJveFwiPjxkaXY+PGRpdiBjbGFzcz1cInRpbWVcIj4lUzwvZGl2PiA8c3Bhbj5TZWNzPC9zcGFuPiA8L2Rpdj48L2Rpdj4nKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICA9IENPVU5URE9XTiBDTE9DSzJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcIiNjbG9jazJcIikubGVuZ3RoKSB7XG4gICAgICAgICQoJyNjbG9jazInKS5jb3VudGRvd24oJzIwMjMtMDYtMzAgMjM6MDAnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5odG1sKGV2ZW50LnN0cmZ0aW1lKCcnXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImJveFwiPjxkaXY+PGRpdiBjbGFzcz1cInRpbWVcIj4lRDwvZGl2PiA8c3Bhbj5EYXlzPC9zcGFuPiA8L2Rpdj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cImJveFwiPjxkaXY+PGRpdiBjbGFzcz1cInRpbWVcIj4lSDwvZGl2PiA8c3Bhbj5Ib3Vyczwvc3Bhbj4gPC9kaXY+PC9kaXY+J1xuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJib3hcIj48ZGl2PjxkaXYgY2xhc3M9XCJ0aW1lXCI+JU08L2Rpdj4gPHNwYW4+TWluczwvc3Bhbj4gPC9kaXY+PC9kaXY+J1xuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJib3hcIj48ZGl2PjxkaXYgY2xhc3M9XCJ0aW1lXCI+JVM8L2Rpdj4gPHNwYW4+U2Vjczwvc3Bhbj4gPC9kaXY+PC9kaXY+JykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBUT1VDSFNQSU4gRk9SIFBST0RVQ1QgU0lOR0xFIFBBR0VcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZiAoJChcImlucHV0W25hbWU9J3Byb2R1Y3QtY291bnQnXVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcImlucHV0W25hbWU9J3Byb2R1Y3QtY291bnQnXVwiKS5Ub3VjaFNwaW4oe1xuICAgICAgICAgICAgdmVydGljYWxidXR0b25zOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgID0gU0hPUCBQUklDRSBTTElERVJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBpZigkKFwiI3NsaWRlci1yYW5nZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIiNzbGlkZXItcmFuZ2VcIikuc2xpZGVyKHtcbiAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgbWluOiAxMixcbiAgICAgICAgICAgIG1heDogMjAwLFxuICAgICAgICAgICAgdmFsdWVzOiBbMCwgMTAwXSxcbiAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Ftb3VudFwiKS52YWwoXCIkXCIgKyB1aS52YWx1ZXNbMF0gKyBcIiAtICRcIiArIHVpLnZhbHVlc1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjYW1vdW50XCIpLnZhbChcIiRcIiArICQoXCIjc2xpZGVyLXJhbmdlXCIpLnNsaWRlcihcInZhbHVlc1wiLCAwKSArIFwiIC0gJFwiICsgJChcIiNzbGlkZXItcmFuZ2VcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpKTtcbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICBjYXJ0LXBsdXMtbWludXMtYnV0dG9uXG4gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICQoXCIuY2FydC1wbHVzLW1pbnVzXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlYyBxdHlidXR0b25cIj4tPC9kaXY+PGRpdiBjbGFzcz1cImluYyBxdHlidXR0b25cIj4rPC9kaXY+Jyk7XG4gICAgJChcIi5xdHlidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRidXR0b24gPSAkKHRoaXMpO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSAkYnV0dG9uLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS52YWwoKTtcbiAgICAgICAgaWYgKCRidXR0b24udGV4dCgpID09IFwiK1wiKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gcGFyc2VGbG9hdChvbGRWYWx1ZSkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgZGVjcmVtZW50aW5nIGJlbG93IHplcm9cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gcGFyc2VGbG9hdChvbGRWYWx1ZSkgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRidXR0b24ucGFyZW50KCkuZmluZChcImlucHV0XCIpLnZhbChuZXdWYWwpO1xuICAgIH0pO1xuXG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgID0gQkFDSyBUTyBUT1AgQlROIFNFVFRJTkdcbiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICQoXCJib2R5XCIpLmFwcGVuZChcIjxhIGhyZWY9JyMnIGNsYXNzPSdiYWNrLXRvLXRvcCc+PGkgY2xhc3M9J3RpLWFycm93LXVwJz48L2k+PC9hPlwiKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUJhY2tUb1RvcEJ0bigpIHtcbiAgICAgICAgdmFyIGFtb3VudFNjcm9sbGVkID0gMTAwMDtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IGFtb3VudFNjcm9sbGVkKSB7XG4gICAgICAgICAgICAkKFwiYS5iYWNrLXRvLXRvcFwiKS5mYWRlSW4oXCJzbG93XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcImEuYmFjay10by10b3BcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkKFwiLmJhY2stdG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgPSBDT05UQUNUIEZPUk0gU1VCTUlTU0lPTlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmICgkKFwiI2NvbnRhY3QtZm9ybS1tYWluXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiI2NvbnRhY3QtZm9ybS1tYWluXCIpLnZhbGlkYXRlKHtcbiAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAyXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGVtYWlsOiBcInJlcXVpcmVkXCIsXG5cbiAgICAgICAgICAgICAgICBwaG9uZTogXCJyZXF1aXJlZFwiLFxuXG4gICAgICAgICAgICAgICAgd2hhdDogXCJyZXF1aXJlZFwiLFxuXG4gICAgICAgICAgICAgICAgc2VydmljZTogXCJyZXF1aXJlZFwiLFxuXG4gICAgICAgICAgICAgICAgZ3Vlc3Q6IFwicmVxdWlyZWRcIixcblxuICAgICAgICAgICAgICAgIG1lYWw6IFwicmVxdWlyZWRcIixcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwiUGxlYXNlIGVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgd2hhdDogXCJQbGVhc2UgZW50ZXIgeW91ciBSZWFzb25cIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcIlBsZWFzZSBzZWxlY3QgeW91ciBjb250YWN0IHNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBndWVzdDogXCJQbGVhc2Ugc2VsZWN0IHlvdXIgZ3Vlc3QgTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgbWVhbDogXCJQbGVhc2Ugc2VsZWN0IHlvdXIgTWVhbCBOYW1lXCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJtYWlsLWNvbnRhY3QucGhwXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICQoZm9ybSkuc2VyaWFsaXplKCksXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoIFwiI2xvYWRlclwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCBcIiNzdWNjZXNzXCIpLnNsaWRlRG93biggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCggXCIjc3VjY2Vzc1wiKS5zbGlkZVVwKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoIFwiI2xvYWRlclwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCBcIiNlcnJvclwiKS5zbGlkZURvd24oIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoIFwiI2Vycm9yXCIpLnNsaWRlVXAoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gcmVxdWlyZWQgdG8gYmxvY2sgbm9ybWFsIHN1Ym1pdCBzaW5jZSB5b3UgdXNlZCBhamF4XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIFdIRU4gRE9DVU1FTlQgTE9BRElOR1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBwcmVsb2FkZXIoKTtcblxuICAgICAgICBzb3J0aW5nR2FsbGVyeSgpO1xuXG4gICAgICAgIHRvZ2dsZU1vYmlsZU5hdmlnYXRpb24oKTtcblxuICAgICAgICBzbWFsbE5hdkZ1bmN0aW9uYWxpdHkoKTtcblxuICAgICAgICBzbW9vdGhTY3JvbGxpbmcoJChcIiNuYXZiYXIgPiB1bCA+IGxpID4gYVtocmVmXj0nIyddXCIpLCAkKFwiLndwby1zaXRlLWhlYWRlciAubmF2aWdhdGlvblwiKS5pbm5lckhlaWdodCgpKTtcbiAgICB9KTtcblxuXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIFdIRU4gV0lORE9XIFNDUk9MTFxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKCQoXCIud3BvLXNpdGUtaGVhZGVyXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RpY2t5TWVudSggJCgnLndwby1zaXRlLWhlYWRlciAubmF2aWdhdGlvbicpLCBcInN0aWNreS1vblwiICk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVCYWNrVG9Ub3BCdG4oKTtcblxuICAgICAgICBhY3RpdmVNZW51SXRlbSgkKFwiLm5hdmlnYXRpb24taG9sZGVyXCIpKTtcblxuICAgIH0pO1xuXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIFdIRU4gV0lORE9XIFJFU0laRVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzRm9yU21hbGxOYXYoKTtcbiAgICAgICAgLy9zbWFsbE5hdkZ1bmN0aW9uYWxpdHkoKTtcblxuICAgICAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICdyZXNpemVUaW1lcicpKTtcbiAgICAgICAgJC5kYXRhKHRoaXMsICdyZXNpemVUaW1lcicsIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbWFsbE5hdkZ1bmN0aW9uYWxpdHkoKTtcbiAgICAgICAgfSwgMjAwKSk7XG4gICAgfSk7XG5cblxuICAgIC8vIGNvbG9yLXZhcmlhdGlvblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNvbG9yIHRvZ2dsZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmKCQoXCIuY29sb3Itc3dpdGNoZXItd3JhcFwiKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvbG9yVG9nZ2xlQnRuID0gJChcIi5jb2xvci10b2dnbGUtYnRuXCIpO1xuICAgICAgICB2YXIgY29sb3JDb250ZW50ID0gJChcIi5jb2xvci1zd2l0Y2hlci1pdGVtXCIpO1xuICAgICAgICB2YXIgYm9keSA9ICQoXCJib2R5XCIpO1xuXG4gICAgICAgIGNvbG9yVG9nZ2xlQnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29sb3JDb250ZW50LnRvZ2dsZUNsYXNzKFwiY29sb3Itc3dpdGNoZXItb3BlblwiKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJvZHkub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbG9yQ29udGVudC5yZW1vdmVDbGFzcyhcImNvbG9yLXN3aXRjaGVyLW9wZW5cIik7XG4gICAgICAgIH0pLmZpbmQoc2VhcmNoQ29udGVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjb2xvci1jaGFuZ2VcbiAgICAkKCcuY29sb3Itc3dpdGNoZXItd3JhcCB1bCBsaS5idG4nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkKCcuY29sb3Itc3dpdGNoZXItd3JhcCB1bCBsaS5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgbGV0IGdldElkID0gJCh0aGlzKS5hdHRyKCdpZCcpXG5cbiAgICAgICAgJChcImJvZHlcIikuYXR0cignY2xhc3MnLCAnJyk7XG5cbiAgICAgICAgaWYoZ2V0SWQgPT0gJ0J1dHRvbjEnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IxJylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjEnKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uMicpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjInKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yMicpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b24zJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMycpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3IzJylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjQnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3I0JylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjQnKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uNScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjUnKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yNScpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b242Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yNicpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3I2JylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjcnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3I3JylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjcnKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uOCcpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjgnKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yOCcpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b245Jyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yOScpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3I5JylcbiAgICAgICAgfWVsc2UgaWYoZ2V0SWQgPT0gJ0J1dHRvbjEwJyl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbG9yMTAnKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3aXRlckNvbG9yJywgJ2NvbG9yMTAnKVxuICAgICAgICB9ZWxzZSBpZihnZXRJZCA9PSAnQnV0dG9uMTEnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IxMScpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dpdGVyQ29sb3InLCAnY29sb3IxMScpXG4gICAgICAgIH1lbHNlIGlmKGdldElkID09ICdCdXR0b24xMicpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjEyJylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2l0ZXJDb2xvcicsICdjb2xvcjEyJylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yMScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjEnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjEnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yMicpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjInKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjInKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yMycpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjMnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjMnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yNCcpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjQnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjQnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yNScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjUnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjUnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yNicpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjYnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjYnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yNycpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjcnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjcnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yOCcpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjgnKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjgnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yOScpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb2xvcjknKVxuICAgICAgICAgICAgJCgnI0J1dHRvbjknKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yMTAnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IxMCcpXG4gICAgICAgICAgICAkKCcjQnV0dG9uMTAnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yMTEnKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IxMScpXG4gICAgICAgICAgICAkKCcjQnV0dG9uMTEnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3aXRlckNvbG9yJykgPT0gJ2NvbG9yMTInKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29sb3IxMicpXG4gICAgICAgICAgICAkKCcjQnV0dG9uMTInKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgfSlcblxufSkod2luZG93LmpRdWVyeSk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiJCIsIm5pY2VTZWxlY3QiLCJ0b2dnbGVNb2JpbGVOYXZpZ2F0aW9uIiwibmF2YmFyIiwib3BlbkJ0biIsInhidXR0b24iLCJvbiIsImUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZUNsYXNzRm9yU21hbGxOYXYiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYWluTmF2IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNtYWxsTmF2RnVuY3Rpb25hbGl0eSIsInNtYWxsTmF2Iiwic3ViTWVudSIsImZpbmQiLCJtZWdhbWVudSIsIm1lbnVJdGVtV2lkdGhTdWJNZW51IiwiaGlkZSIsIiR0aGlzIiwic2libGluZ3MiLCJzbGlkZVRvZ2dsZSIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImFjdGl2ZU1lbnVJdGVtIiwiJGxpbmtzIiwidG9wIiwic2Nyb2xsVG9wIiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJkb2N1bWVudCIsImN1cl9wb3MiLCJzZWN0aW9ucyIsIm5hdiIsIm5hdl9oZWlnaHQiLCJvdXRlckhlaWdodCIsImVhY2giLCJvZmZzZXQiLCJib3R0b20iLCJwYXJlbnQiLCJhdHRyIiwic21vb3RoU2Nyb2xsaW5nIiwiJHNjcm9sbExpbmtzIiwiJHRvcE9mZnNldCIsImxpbmtzIiwidG9wR2FwIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsInRvb2x0aXBMaXN0IiwibWFwIiwidG9vbHRpcFRyaWdnZXJFbCIsImJvb3RzdHJhcCIsIlRvb2x0aXAiLCJiZ1BhcmFsbGF4IiwicG9zaXRpb24iLCJyZXNpemUiLCJkb1BhcmFsbGF4IiwicG9zaXRpb25WYWx1ZSIsImltZyIsImRhdGEiLCJjc3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsIm1lbnUiLCJqUXVlcnkiLCJpbmRleCIsInB1c2giLCJpbnRlcmxlYXZlT2Zmc2V0Iiwic3dpcGVyT3B0aW9ucyIsImxvb3AiLCJzcGVlZCIsInBhcmFsbGF4IiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwcm9ncmVzcyIsInN3aXBlciIsImkiLCJzbGlkZXMiLCJzbGlkZVByb2dyZXNzIiwiaW5uZXJPZmZzZXQiLCJ3aWR0aCIsImlubmVyVHJhbnNsYXRlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwidHJhbnNmb3JtIiwidG91Y2hTdGFydCIsInRyYW5zaXRpb24iLCJzZXRUcmFuc2l0aW9uIiwiU3dpcGVyIiwic2xpZGVyQmdTZXR0aW5nIiwiaW5keCIsInByZWxvYWRlciIsImZhZGVPdXQiLCJ3b3ciLCJpbml0IiwicmlwcGxlcyIsInJlc29sdXRpb24iLCJkcm9wUmFkaXVzIiwicGVydHVyYmFuY2UiLCJzZXRJbnRlcnZhbCIsIiRlbCIsIngiLCJNYXRoIiwicmFuZG9tIiwib3V0ZXJXaWR0aCIsInkiLCJzdHJlbmd0aCIsInBhcnRpY2xlZ3JvdW5kIiwiZG90Q29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJwYXJ0aWNsZVJhZGl1cyIsIllUUGxheWVyIiwic2hvd0NvbnRyb2xzIiwicGxheWVyVmFycyIsIm1vZGVzdGJyYW5kaW5nIiwiY29udHJvbHMiLCJzaG93aW5mbyIsIndtb2RlIiwiYnJhbmRpbmciLCJyZWwiLCJhdXRvaGlkZSIsIm9yaWdpbiIsIldPVyIsImJveENsYXNzIiwiYW5pbWF0ZUNsYXNzIiwibW9iaWxlIiwibGl2ZSIsImZhbmN5Ym94Iiwib3BlbkVmZmVjdCIsImNsb3NlRWZmZWN0Iiwid3JhcENTUyIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5IiwiZml4ZWRDb250ZW50UG9zIiwiaHJlZiIsInRpdGxlIiwiaGVscGVycyIsIm1lZGlhIiwiYmVmb3JlU2hvdyIsImRlbGVnYXRlIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJ6b29tIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvcGVuZXIiLCJvcGVuZXJFbGVtZW50IiwiaXMiLCJzb3J0aW5nR2FsbGVyeSIsIiRjb250YWluZXIiLCJpc290b3BlIiwiZmlsdGVyIiwiYW5pbWF0aW9uT3B0aW9ucyIsInF1ZXVlIiwic2VsZWN0b3IiLCJtYXNvbnJ5R3JpZFNldHRpbmciLCIkZ3JpZCIsIm1hc29ucnkiLCJpdGVtU2VsZWN0b3IiLCJjb2x1bW5XaWR0aCIsInBlcmNlbnRQb3NpdGlvbiIsImltYWdlc0xvYWRlZCIsImFwcGVhciIsImJvZHkiLCJvZG8iLCJjb3VudE51bWJlciIsImh0bWwiLCJjbG9uZU5hdkZvclN0aWN5TWVudSIsIiRlbGUiLCIkbmV3RWxtQ2xhc3MiLCJjbG9uZSIsImluc2VydEFmdGVyIiwibGFzdFNjcm9sbFRvcCIsInN0aWNreU1lbnUiLCIkdGFyZ2V0TWVudSIsIiR0b2dnbGVDbGFzcyIsInN0IiwibWFpbk1lbnVUb3AiLCJzZWFyY2hUb2dnbGVCdG4iLCJzZWFyY2hUb2dnbGVCdG5JY29uIiwic2VhcmNoQ29udGVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNhcnRUb2dnbGVCdG4iLCJjYXJ0Q29udGVudCIsImNhcnRDbG9zZUJ0biIsImZhZGVJbiIsIm93bENhcm91c2VsIiwic21hcnRTcGVlZCIsIm1hcmdpbiIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImRvdHMiLCJpdGVtcyIsInJlc3BvbnNpdmUiLCJhcnJvd3MiLCJuYXZUZXh0IiwibW91c2VEcmFnIiwiY291bnRkb3duIiwiZXZlbnQiLCJzdHJmdGltZSIsIlRvdWNoU3BpbiIsInZlcnRpY2FsYnV0dG9ucyIsInNsaWRlciIsInJhbmdlIiwibWluIiwibWF4IiwidmFsdWVzIiwic2xpZGUiLCJ1aSIsInZhbCIsImFwcGVuZCIsIiRidXR0b24iLCJvbGRWYWx1ZSIsInRleHQiLCJuZXdWYWwiLCJwYXJzZUZsb2F0IiwidG9nZ2xlQmFja1RvVG9wQnRuIiwiYW1vdW50U2Nyb2xsZWQiLCJ2YWxpZGF0ZSIsInJ1bGVzIiwibmFtZSIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwiZW1haWwiLCJwaG9uZSIsIndoYXQiLCJzZXJ2aWNlIiwiZ3Vlc3QiLCJtZWFsIiwibWVzc2FnZXMiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybSIsImFqYXgiLCJ1cmwiLCJzZXJpYWxpemUiLCJzdWNjZXNzIiwic2xpZGVEb3duIiwic2V0VGltZW91dCIsInNsaWRlVXAiLCJyZXNldCIsImVycm9yIiwiaW5uZXJIZWlnaHQiLCJjbGVhclRpbWVvdXQiLCJjb2xvclRvZ2dsZUJ0biIsImNvbG9yQ29udGVudCIsImdldElkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9