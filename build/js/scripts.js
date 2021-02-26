"use strict";

(function () {
  var refs = {
    homePage: document.querySelector('[data-home]'),
    libraryPage: document.querySelector('[data-library]'),
    iconButton: document.querySelector('[data-icon]')
  };
  var homePage = refs.homePage,
      libraryPage = refs.libraryPage,
      iconButton = refs.iconButton;
  homePage.addEventListener('click', homeEfect);
  iconButton.addEventListener('click', homeEfect);
  libraryPage.addEventListener('click', libraryEfect);

  function homeEfect() {
    if (!homePage.classList.contains('current')) {
      homePage.classList.add('current');

      if (libraryPage.classList.contains('current')) {
        libraryPage.classList.remove('current');
      }
    }
  }

  function libraryEfect() {
    if (!libraryPage.classList.contains('current')) {
      libraryPage.classList.add('current');

      if (homePage.classList.contains('current')) {
        homePage.classList.remove('current');
      }
    }
  }
})();
"use strict";

var load = document.querySelector('.loader');

function loaderShow() {
  load.classList.remove('is-hidden');
}

function loaderHide() {
  load.classList.add('is-hidden');
}
"use strict";

var preloader = document.getElementById('load');
window.addEventListener('load', function () {
  setTimeout(function () {
    setTimeout(function () {
      parallaxWidthCheck();
    }, 3000);
    preloader.classList.add('done');
  }, 1000);
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var firebaseConfig = {
  apiKey: 'AIzaSyBNIAhHTVSS_FgmrIA50_fMlsJIzrHPLUw',
  authDomain: 'filmgeek-js.firebaseapp.com',
  projectId: 'filmgeek-js',
  storageBucket: 'filmgeek-js.appspot.com',
  messagingSenderId: '759026227062',
  appId: '1:759026227062:web:451d5ef97d20e7288acc57',
  measurementId: 'G-9HJTT3B2GK'
};
var SIGN_UP_SUCCESS = 'Congratulations! You made the right choice!!!';
var SIGN_IN_SUCCESS = 'Perfect! You are on Board!!!';
var SIGN_IN_FAIL = 'Oops!Something went wrong!Try again!!!';
var DEMAND_TO_REGISTER = 'To be able to use all features of our Magic source, please pass the registration!';
var DEFAULT_SIGN_UP = 'Become a part of our filmgeek club!';
var DEFAULT_SIGN_IN = 'Welcome back! Write your data below!';
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var auth = firebase.auth();
var userStatus;
auth.onAuthStateChanged(function (user) {
  if (user) {
    btnSignOut.classList.remove('is-hidden');
    btnSignUp.classList.add('is-hidden');
    btnSignIn.classList.add('is-hidden');
    btnSignIn.disabled = true;
    userStatus = true;
  } else {
    btnSignOut.classList.add('is-hidden');
    btnSignUp.classList.remove('is-hidden');
    btnSignIn.classList.remove('is-hidden');
    btnSignIn.disabled = false;
    userStatus = false;
  }
});

function modalClose(params) {
  authBackdrop.classList.add('auth__backdrop--hidden');
  body.classList.remove('overflow');
}

(function modalBtnAddListener(params) {
  var modalExit = document.querySelectorAll('.auth__exit');

  var array = _toConsumableArray(modalExit);

  array.forEach(function (e) {
    e.addEventListener('click', modalClose);
  });
})();

var authBackdrop = document.querySelector('.auth__backdrop');
var authModalSignIn = document.querySelector('.signIn__modal');
var authModalSignUp = document.querySelector('.signUp__modal');
var signUpEmail = document.getElementById('authEmail');
var signUpPassword = document.getElementById('authPassword');
var signUpBtn = document.getElementById('signUp-submit');
var authMessage = document.querySelector('.auth__message');
var signInEmail = document.getElementById('signInEmail');
var signInPassword = document.getElementById('signInPassword');
var signInBtn = document.getElementById('signIn-submit');
var btnSignIn = document.querySelector('.signIn-user');
var btnSignUp = document.querySelector('.signUp-user');
var btnSignOut = document.querySelector('.signOut-user');
btnSignOut.addEventListener('click', function () {
  auth.signOut();
});
btnSignIn.addEventListener('click', function () {
  body.classList.add('overflow');
  authModalSignIn.classList.remove('signIn-hidden');
  authModalSignUp.classList.add('signUp-hidden');
  authBackdrop.classList.remove('auth__backdrop--hidden');
  welcomeTextSignIn.textContent = DEFAULT_SIGN_IN;
});
authMessage.addEventListener('click', function () {
  authModalSignIn.classList.remove('signIn-hidden');
  authModalSignUp.classList.add('signUp-hidden');
  welcomeTextSignIn.textContent = DEFAULT_SIGN_IN;
});
btnSignUp.addEventListener('click', function () {
  body.classList.add('overflow');
  authModalSignUp.classList.remove('signUp-hidden');
  authModalSignIn.classList.add('signIn-hidden');
  authBackdrop.classList.remove('auth__backdrop--hidden');
  welcomeTextSignUp.textContent = DEFAULT_SIGN_UP;
});
signUpBtn.addEventListener('click', signUp);
signInBtn.addEventListener('click', signIn);

function signUp(params) {
  body.classList.remove('overflow');
  var signUpRequest = auth.createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value);
  var signUpError = '';
  signUpRequest.catch(function (e) {
    signUpError = e.message;
  });
  setTimeout(function () {
    if (signUpError) {
      welcomeTextSignUp.textContent = SIGN_IN_FAIL;
    } else {
      welcomeTextSignUp.textContent = SIGN_UP_SUCCESS;
      setTimeout(function () {
        authBackdrop.classList.add('auth__backdrop--hidden');
      }, 2000);
    }
  }, 1000);
}

function signIn(params) {
  body.classList.remove('overflow');
  var signInRequest = auth.signInWithEmailAndPassword(signInEmail.value, signInPassword.value);
  var signInError = '';
  signInRequest.catch(function (e) {
    signInError = e.message;
  });
  setTimeout(function () {
    if (signInError) {
      welcomeTextSignIn.textContent = SIGN_IN_FAIL;
    } else {
      welcomeTextSignIn.textContent = SIGN_IN_SUCCESS;
      setTimeout(function () {
        authBackdrop.classList.add('auth__backdrop--hidden');
      }, 2000);
    }
  }, 1000);
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var tns = function tns() {
  var win = window;

  var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
    return setTimeout(cb, 16);
  };

  var win$1 = window;

  var caf = win$1.cancelAnimationFrame || win$1.mozCancelAnimationFrame || function (id) {
    clearTimeout(id);
  };

  function extend() {
    var obj,
        name,
        copy,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;

    for (; i < length; i++) {
      if ((obj = arguments[i]) !== null) {
        for (name in obj) {
          copy = obj[name];

          if (target === copy) {
            continue;
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    return target;
  }

  function checkStorageValue(value) {
    return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
  }

  function setLocalStorage(storage, key, value, access) {
    if (access) {
      try {
        storage.setItem(key, value);
      } catch (e) {}
    }

    return value;
  }

  function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    return 'tns' + window.tnsId;
  }

  function getBody() {
    var doc = document,
        body = doc.body;

    if (!body) {
      body = doc.createElement('body');
      body.fake = true;
    }

    return body;
  }

  var docElement = document.documentElement;

  function setFakeBody(body) {
    var docOverflow = '';

    if (body.fake) {
      docOverflow = docElement.style.overflow; //avoid crashing IE8, if background image is used

      body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

      body.style.overflow = docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    return docOverflow;
  }

  function resetFakeBody(body, docOverflow) {
    if (body.fake) {
      body.remove();
      docElement.style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line

      docElement.offsetHeight;
    }
  } // get css-calc


  function calc() {
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        div = doc.createElement('div'),
        result = false;
    body.appendChild(div);

    try {
      var str = '(10px * 10)',
          vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
          val;

      for (var i = 0; i < 3; i++) {
        val = vals[i];
        div.style.width = val;

        if (div.offsetWidth === 100) {
          result = val.replace(str, '');
          break;
        }
      }
    } catch (e) {}

    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return result;
  } // get subpixel support value


  function percentageLayout() {
    // check subpixel layout supporting
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        wrapper = doc.createElement('div'),
        outer = doc.createElement('div'),
        str = '',
        count = 70,
        perPage = 3,
        supported = false;
    wrapper.className = 'tns-t-subp2';
    outer.className = 'tns-t-ct';

    for (var i = 0; i < count; i++) {
      str += '<div></div>';
    }

    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
    body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
    return supported;
  }

  function mediaquerySupport() {
    if (window.matchMedia || window.msMatchMedia) {
      return true;
    }

    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        div = doc.createElement('div'),
        style = doc.createElement('style'),
        rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
        position;
    style.type = 'text/css';
    div.className = 'tns-mq-test';
    body.appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(doc.createTextNode(rule));
    }

    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return position === 'absolute';
  } // create and append style sheet


  function createStyleSheet(media, nonce) {
    // Create the <style> tag
    var style = document.createElement('style'); // style.setAttribute("type", "text/css");
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")

    if (media) {
      style.setAttribute('media', media);
    } // Add nonce attribute for Content Security Policy


    if (nonce) {
      style.setAttribute('nonce', nonce);
    } // WebKit hack :(
    // style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page


    document.querySelector('head').appendChild(style);
    return style.sheet ? style.sheet : style.styleSheet;
  } // cross browsers addRule method


  function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
    'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index); // });
  } // cross browsers addRule method


  function removeCSSRule(sheet, index) {
    // return raf(function() {
    'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
  }

  function getCssRulesLength(sheet) {
    var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
  }

  function toDegree(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  function getTouchDirection(angle, range) {
    var direction = false,
        gap = Math.abs(90 - Math.abs(angle));

    if (gap >= 90 - range) {
      direction = 'horizontal';
    } else if (gap <= range) {
      direction = 'vertical';
    }

    return direction;
  } // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/


  function forEach(arr, callback, scope) {
    for (var i = 0, l = arr.length; i < l; i++) {
      callback.call(scope, arr[i], i);
    }
  }

  var classListSupport = 'classList' in document.createElement('_');
  var hasClass = classListSupport ? function (el, str) {
    return el.classList.contains(str);
  } : function (el, str) {
    return el.className.indexOf(str) >= 0;
  };
  var addClass = classListSupport ? function (el, str) {
    if (!hasClass(el, str)) {
      el.classList.add(str);
    }
  } : function (el, str) {
    if (!hasClass(el, str)) {
      el.className += ' ' + str;
    }
  };
  var removeClass = classListSupport ? function (el, str) {
    if (hasClass(el, str)) {
      el.classList.remove(str);
    }
  } : function (el, str) {
    if (hasClass(el, str)) {
      el.className = el.className.replace(str, '');
    }
  };

  function hasAttr(el, attr) {
    return el.hasAttribute(attr);
  }

  function getAttr(el, attr) {
    return el.getAttribute(attr);
  }

  function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== 'undefined';
  }

  function setAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [els];

    if (Object.prototype.toString.call(attrs) !== '[object Object]') {
      return;
    }

    for (var i = els.length; i--;) {
      for (var key in attrs) {
        els[i].setAttribute(key, attrs[key]);
      }
    }
  }

  function removeAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [els];
    attrs = attrs instanceof Array ? attrs : [attrs];
    var attrLength = attrs.length;

    for (var i = els.length; i--;) {
      for (var j = attrLength; j--;) {
        els[i].removeAttribute(attrs[j]);
      }
    }
  }

  function arrayFromNodeList(nl) {
    var arr = [];

    for (var i = 0, l = nl.length; i < l; i++) {
      arr.push(nl[i]);
    }

    return arr;
  }

  function hideElement(el, forceHide) {
    if (el.style.display !== 'none') {
      el.style.display = 'none';
    }
  }

  function showElement(el, forceHide) {
    if (el.style.display === 'none') {
      el.style.display = '';
    }
  }

  function isVisible(el) {
    return window.getComputedStyle(el).display !== 'none';
  }

  function whichProperty(props) {
    if (typeof props === 'string') {
      var arr = [props],
          Props = props.charAt(0).toUpperCase() + props.substr(1),
          prefixes = ['Webkit', 'Moz', 'ms', 'O'];
      prefixes.forEach(function (prefix) {
        if (prefix !== 'ms' || props === 'transform') {
          arr.push(prefix + Props);
        }
      });
      props = arr;
    }

    var el = document.createElement('fakeelement'),
        len = props.length;

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];

      if (el.style[prop] !== undefined) {
        return prop;
      }
    }

    return false; // explicit for ie9-
  }

  function has3DTransforms(tf) {
    if (!tf) {
      return false;
    }

    if (!window.getComputedStyle) {
      return false;
    }

    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        el = doc.createElement('p'),
        has3d,
        cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
    cssTF += 'transform'; // Add it to the body to get the computed style

    body.insertBefore(el, null);
    el.style[tf] = 'translate3d(1px,1px,1px)';
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
    body.fake ? resetFakeBody(body, docOverflow) : el.remove();
    return has3d !== undefined && has3d.length > 0 && has3d !== 'none';
  } // get transitionend, animationend based on transitionDuration
  // @propin: string
  // @propOut: string, first-letter uppercase
  // Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd


  function getEndProperty(propIn, propOut) {
    var endProp = false;

    if (/^Webkit/.test(propIn)) {
      endProp = 'webkit' + propOut + 'End';
    } else if (/^O/.test(propIn)) {
      endProp = 'o' + propOut + 'End';
    } else if (propIn) {
      endProp = propOut.toLowerCase() + 'end';
    }

    return endProp;
  } // Test via a getter in the options object to see if the passive property is accessed


  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}

  var passiveOption = supportsPassive ? {
    passive: true
  } : false;

  function addEvents(el, obj, preventScrolling) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
      el.addEventListener(prop, obj[prop], option);
    }
  }

  function removeEvents(el, obj) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
      el.removeEventListener(prop, obj[prop], option);
    }
  }

  function Events() {
    return {
      topics: {},
      on: function on(eventName, fn) {
        this.topics[eventName] = this.topics[eventName] || [];
        this.topics[eventName].push(fn);
      },
      off: function off(eventName, fn) {
        if (this.topics[eventName]) {
          for (var i = 0; i < this.topics[eventName].length; i++) {
            if (this.topics[eventName][i] === fn) {
              this.topics[eventName].splice(i, 1);
              break;
            }
          }
        }
      },
      emit: function emit(eventName, data) {
        data.type = eventName;

        if (this.topics[eventName]) {
          this.topics[eventName].forEach(function (fn) {
            fn(data, eventName);
          });
        }
      }
    };
  }

  function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10),
        unit = to.indexOf('%') >= 0 ? '%' : 'px',
        to = to.replace(unit, ''),
        from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
        positionTick = (to - from) / duration * tick,
        running;
    setTimeout(moveElement, tick);

    function moveElement() {
      duration -= tick;
      from += positionTick;
      element.style[attr] = prefix + from + unit + postfix;

      if (duration > 0) {
        setTimeout(moveElement, tick);
      } else {
        callback();
      }
    }
  } // Object.keys


  if (!Object.keys) {
    Object.keys = function (object) {
      var keys = [];

      for (var name in object) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          keys.push(name);
        }
      }

      return keys;
    };
  } // ChildNode.remove


  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  var tns = function tns(options) {
    options = extend({
      container: '.my-slider',
      mode: 'carousel',
      axis: 'horizontal',
      items: 3,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: false,
      autoWidth: false,
      viewportMax: false,
      slideBy: 2,
      center: false,
      controls: false,
      controlsPosition: 'bottom',
      controlsText: ['prev', 'next'],
      controlsContainer: false,
      prevButton: false,
      nextButton: false,
      nav: true,
      navPosition: 'top',
      navContainer: false,
      navAsThumbnails: false,
      arrowKeys: true,
      speed: 1000,
      autoplay: true,
      autoplayPosition: 'top',
      autoplayTimeout: 5000,
      autoplayDirection: 'forward',
      autoplayText: ['start', 'stop'],
      autoplayHoverPause: false,
      autoplayButton: false,
      autoplayButtonOutput: false,
      autoplayResetOnVisibility: true,
      animateIn: 'tns-fadeIn',
      animateOut: 'tns-fadeOut',
      animateNormal: 'tns-normal',
      animateDelay: false,
      loop: true,
      rewind: false,
      autoHeight: false,
      responsive: false,
      lazyload: false,
      lazyloadSelector: '.tns-lazy-img',
      touch: true,
      mouseDrag: true,
      swipeAngle: 15,
      nested: false,
      preventActionWhenRunning: false,
      preventScrollOnTouch: false,
      freezable: true,
      onInit: false,
      useLocalStorage: true,
      nonce: false
    }, options || {});
    var doc = document,
        win = window,
        KEYS = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    },
        tnsStorage = {},
        localStorageAccess = options.useLocalStorage;

    if (localStorageAccess) {
      // check browser version and local storage access
      var browserInfo = navigator.userAgent;
      var uid = new Date();

      try {
        tnsStorage = win.localStorage;

        if (tnsStorage) {
          tnsStorage.setItem(uid, uid);
          localStorageAccess = tnsStorage.getItem(uid) == uid;
          tnsStorage.removeItem(uid);
        } else {
          localStorageAccess = false;
        }

        if (!localStorageAccess) {
          tnsStorage = {};
        }
      } catch (e) {
        localStorageAccess = false;
      }

      if (localStorageAccess) {
        // remove storage when browser version changes
        if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
          ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
            tnsStorage.removeItem(item);
          });
        } // update browserInfo


        localStorage['tnsApp'] = browserInfo;
      }
    }

    var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
        PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
        CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
        TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
        HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
        TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
        TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
        ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
        ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
        TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
        ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess); // get element nodes from selectors

    var supportConsoleWarn = win.console && typeof win.console.warn === 'function',
        tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
        optionsElements = {};
    tnsList.forEach(function (item) {
      if (typeof options[item] === 'string') {
        var str = options[item],
            el = doc.querySelector(str);
        optionsElements[item] = str;

        if (el && el.nodeName) {
          options[item] = el;
        } else {
          if (supportConsoleWarn) {
            console.warn("Can't find", options[item]);
          }

          return;
        }
      }
    }); // make sure at least 1 slide

    if (options.container.children.length < 1) {
      if (supportConsoleWarn) {
        console.warn('No slides found in', options.container);
      }

      return;
    } // update options


    var responsive = options.responsive,
        nested = options.nested,
        carousel = options.mode === 'carousel' ? true : false;

    if (responsive) {
      // apply responsive[0] to options and remove it
      if (0 in responsive) {
        options = extend(options, responsive[0]);
        delete responsive[0];
      }

      var responsiveTem = {};

      for (var key in responsive) {
        var val = responsive[key]; // update responsive
        // from: 300: 2
        // to:
        //   300: {
        //     items: 2
        //   }

        val = typeof val === 'number' ? {
          items: val
        } : val;
        responsiveTem[key] = val;
      }

      responsive = responsiveTem;
      responsiveTem = null;
    } // update options


    function updateOptions(obj) {
      for (var key in obj) {
        if (!carousel) {
          if (key === 'slideBy') {
            obj[key] = 'page';
          }

          if (key === 'edgePadding') {
            obj[key] = false;
          }

          if (key === 'autoHeight') {
            obj[key] = false;
          }
        } // update responsive options


        if (key === 'responsive') {
          updateOptions(obj[key]);
        }
      }
    }

    if (!carousel) {
      updateOptions(options);
    } // === define and set variables ===


    if (!carousel) {
      options.axis = 'horizontal';
      options.slideBy = 'page';
      options.edgePadding = false;
      var animateIn = options.animateIn,
          animateOut = options.animateOut,
          animateDelay = options.animateDelay,
          animateNormal = options.animateNormal;
    }

    var horizontal = options.axis === 'horizontal' ? true : false,
        outerWrapper = doc.createElement('div'),
        innerWrapper = doc.createElement('div'),
        middleWrapper,
        container = options.container,
        containerParent = container.parentNode,
        containerHTML = container.outerHTML,
        slideItems = container.children,
        slideCount = slideItems.length,
        breakpointZone,
        windowWidth = getWindowWidth(),
        isOn = false;

    if (responsive) {
      setBreakpointZone();
    }

    if (carousel) {
      container.className += ' tns-vpfix';
    } // fixedWidth: viewport > rightBoundary > indexMax


    var autoWidth = options.autoWidth,
        fixedWidth = getOption('fixedWidth'),
        edgePadding = getOption('edgePadding'),
        gutter = getOption('gutter'),
        viewport = getViewportWidth(),
        center = getOption('center'),
        items = !autoWidth ? Math.floor(getOption('items')) : 1,
        slideBy = getOption('slideBy'),
        viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
        arrowKeys = getOption('arrowKeys'),
        speed = getOption('speed'),
        rewind = options.rewind,
        loop = rewind ? false : options.loop,
        autoHeight = getOption('autoHeight'),
        controls = getOption('controls'),
        controlsText = getOption('controlsText'),
        nav = getOption('nav'),
        touch = getOption('touch'),
        mouseDrag = getOption('mouseDrag'),
        autoplay = getOption('autoplay'),
        autoplayTimeout = getOption('autoplayTimeout'),
        autoplayText = getOption('autoplayText'),
        autoplayHoverPause = getOption('autoplayHoverPause'),
        autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
        sheet = createStyleSheet(null, getOption('nonce')),
        lazyload = options.lazyload,
        lazyloadSelector = options.lazyloadSelector,
        slidePositions,
        // collection of slide positions
    slideItemsOut = [],
        cloneCount = loop ? getCloneCountForLoop() : 0,
        slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
        hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
        rightBoundary = fixedWidth ? getRightBoundary() : null,
        updateIndexBeforeTransform = !carousel || !loop ? true : false,
        // transform
    transformAttr = horizontal ? 'left' : 'top',
        transformPrefix = '',
        transformPostfix = '',
        // index
    getIndexMax = function () {
      if (fixedWidth) {
        return function () {
          return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
        };
      } else if (autoWidth) {
        return function () {
          for (var i = 0; i < slideCountNew; i++) {
            if (slidePositions[i] >= -rightBoundary) {
              return i;
            }
          }
        };
      } else {
        return function () {
          if (center && carousel && !loop) {
            return slideCount - 1;
          } else {
            return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
          }
        };
      }
    }(),
        index = getStartIndex(getOption('startIndex')),
        indexCached = index,
        displayIndex = getCurrentSlide(),
        indexMin = 0,
        indexMax = !autoWidth ? getIndexMax() : null,
        // resize
    resizeTimer,
        preventActionWhenRunning = options.preventActionWhenRunning,
        swipeAngle = options.swipeAngle,
        moveDirectionExpected = swipeAngle ? '?' : true,
        running = false,
        onInit = options.onInit,
        events = new Events(),
        // id, class
    newContainerClasses = ' tns-slider tns-' + options.mode,
        slideId = container.id || getSlideId(),
        disable = getOption('disable'),
        disabled = false,
        freezable = options.freezable,
        freeze = freezable && !autoWidth ? getFreeze() : false,
        frozen = false,
        controlsEvents = {
      click: onControlsClick,
      keydown: onControlsKeydown
    },
        navEvents = {
      click: onNavClick,
      keydown: onNavKeydown
    },
        hoverEvents = {
      mouseover: mouseoverPause,
      mouseout: mouseoutRestart
    },
        visibilityEvent = {
      visibilitychange: onVisibilityChange
    },
        docmentKeydownEvent = {
      keydown: onDocumentKeydown
    },
        touchEvents = {
      touchstart: onPanStart,
      touchmove: onPanMove,
      touchend: onPanEnd,
      touchcancel: onPanEnd
    },
        dragEvents = {
      mousedown: onPanStart,
      mousemove: onPanMove,
      mouseup: onPanEnd,
      mouseleave: onPanEnd
    },
        hasControls = hasOption('controls'),
        hasNav = hasOption('nav'),
        navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
        hasAutoplay = hasOption('autoplay'),
        hasTouch = hasOption('touch'),
        hasMouseDrag = hasOption('mouseDrag'),
        slideActiveClass = 'tns-slide-active',
        slideClonedClass = 'tns-slide-cloned',
        imgCompleteClass = 'tns-complete',
        imgEvents = {
      load: onImgLoaded,
      error: onImgFailed
    },
        imgsComplete,
        liveregionCurrent,
        preventScroll = options.preventScrollOnTouch === 'force' ? true : false; // controls


    if (hasControls) {
      var controlsContainer = options.controlsContainer,
          controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
          prevButton = options.prevButton,
          nextButton = options.nextButton,
          prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
          nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
          prevIsButton,
          nextIsButton;
    } // nav


    if (hasNav) {
      var navContainer = options.navContainer,
          navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
          navItems,
          pages = autoWidth ? slideCount : getPages(),
          pagesCached = 0,
          navClicked = -1,
          navCurrentIndex = getCurrentNavIndex(),
          navCurrentIndexCached = navCurrentIndex,
          navActiveClass = 'tns-nav-active',
          navStr = 'Carousel Page ',
          navStrCurrent = ' (Current Slide)';
    } // autoplay


    if (hasAutoplay) {
      var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
          autoplayButton = options.autoplayButton,
          autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
          autoplayHtmlStrings = ["<span class='tns-visually-hidden'>", ' animation</span>'],
          autoplayTimer,
          animating,
          autoplayHoverPaused,
          autoplayUserPaused,
          autoplayVisibilityPaused;
    }

    if (hasTouch || hasMouseDrag) {
      var initPosition = {},
          lastPosition = {},
          translateInit,
          disX,
          disY,
          panStart = false,
          rafIndex,
          getDist = horizontal ? function (a, b) {
        return a.x - b.x;
      } : function (a, b) {
        return a.y - b.y;
      };
    } // disable slider when slidecount <= items


    if (!autoWidth) {
      resetVariblesWhenDisable(disable || freeze);
    }

    if (TRANSFORM) {
      transformAttr = TRANSFORM;
      transformPrefix = 'translate';

      if (HAS3DTRANSFORMS) {
        transformPrefix += horizontal ? '3d(' : '3d(0px, ';
        transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
      } else {
        transformPrefix += horizontal ? 'X(' : 'Y(';
        transformPostfix = ')';
      }
    }

    if (carousel) {
      container.className = container.className.replace('tns-vpfix', '');
    }

    initStructure();
    initSheet();
    initSliderTransform(); // === COMMON FUNCTIONS === //

    function resetVariblesWhenDisable(condition) {
      if (condition) {
        controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
      }
    }

    function getCurrentSlide() {
      var tem = carousel ? index - cloneCount : index;

      while (tem < 0) {
        tem += slideCount;
      }

      return tem % slideCount + 1;
    }

    function getStartIndex(ind) {
      ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
      return carousel ? ind + cloneCount : ind;
    }

    function getAbsIndex(i) {
      if (i == null) {
        i = index;
      }

      if (carousel) {
        i -= cloneCount;
      }

      while (i < 0) {
        i += slideCount;
      }

      return Math.floor(i % slideCount);
    }

    function getCurrentNavIndex() {
      var absIndex = getAbsIndex(),
          result;
      result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge

      if (!loop && carousel && index === indexMax) {
        result = pages - 1;
      }

      return result;
    }

    function getItemsMax() {
      // fixedWidth or autoWidth while viewportMax is not available
      if (autoWidth || fixedWidth && !viewportMax) {
        return slideCount - 1; // most cases
      } else {
        var str = fixedWidth ? 'fixedWidth' : 'items',
            arr = [];

        if (fixedWidth || options[str] < slideCount) {
          arr.push(options[str]);
        }

        if (responsive) {
          for (var bp in responsive) {
            var tem = responsive[bp][str];

            if (tem && (fixedWidth || tem < slideCount)) {
              arr.push(tem);
            }
          }
        }

        if (!arr.length) {
          arr.push(0);
        }

        return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
      }
    }

    function getCloneCountForLoop() {
      var itemsMax = getItemsMax(),
          result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
      result = Math.max(itemsMax, result);
      return hasOption('edgePadding') ? result + 1 : result;
    }

    function getWindowWidth() {
      return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }

    function getInsertPosition(pos) {
      return pos === 'top' ? 'afterbegin' : 'beforeend';
    }

    function getClientWidth(el) {
      if (el == null) {
        return;
      }

      var div = doc.createElement('div'),
          rect,
          width;
      el.appendChild(div);
      rect = div.getBoundingClientRect();
      width = rect.right - rect.left;
      div.remove();
      return width || getClientWidth(el.parentNode);
    }

    function getViewportWidth() {
      var gap = edgePadding ? edgePadding * 2 - gutter : 0;
      return getClientWidth(containerParent) - gap;
    }

    function hasOption(item) {
      if (options[item]) {
        return true;
      } else {
        if (responsive) {
          for (var bp in responsive) {
            if (responsive[bp][item]) {
              return true;
            }
          }
        }

        return false;
      }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy


    function getOption(item, ww) {
      if (ww == null) {
        ww = windowWidth;
      }

      if (item === 'items' && fixedWidth) {
        return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
      } else {
        var result = options[item];

        if (responsive) {
          for (var bp in responsive) {
            // bp: convert string to number
            if (ww >= parseInt(bp)) {
              if (item in responsive[bp]) {
                result = responsive[bp][item];
              }
            }
          }
        }

        if (item === 'slideBy' && result === 'page') {
          result = getOption('items');
        }

        if (!carousel && (item === 'slideBy' || item === 'items')) {
          result = Math.floor(result);
        }

        return result;
      }
    }

    function getSlideMarginLeft(i) {
      return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
    }

    function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
      var str = '';

      if (edgePaddingTem !== undefined) {
        var gap = edgePaddingTem;

        if (gutterTem) {
          gap -= gutterTem;
        }

        str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
      } else if (gutterTem && !fixedWidthTem) {
        var gutterTemUnit = '-' + gutterTem + 'px',
            dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
        str = 'margin: 0 ' + dir + ';';
      }

      if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
        str += getTransitionDurationStyle(speedTem);
      }

      return str;
    }

    function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
      if (fixedWidthTem) {
        return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
      } else {
        return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
      }
    }

    function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
      var width;

      if (fixedWidthTem) {
        width = fixedWidthTem + gutterTem + 'px';
      } else {
        if (!carousel) {
          itemsTem = Math.floor(itemsTem);
        }

        var dividend = carousel ? slideCountNew : itemsTem;
        width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
      }

      width = 'width:' + width; // inner slider: overwrite outer slider styles

      return nested !== 'inner' ? width + ';' : width + ' !important;';
    }

    function getSlideGutterStyle(gutterTem) {
      var str = ''; // gutter maybe interger || 0
      // so can't use 'if (gutter)'

      if (gutterTem !== false) {
        var prop = horizontal ? 'padding-' : 'margin-',
            dir = horizontal ? 'right' : 'bottom';
        str = prop + dir + ': ' + gutterTem + 'px;';
      }

      return str;
    }

    function getCSSPrefix(name, num) {
      var prefix = name.substring(0, name.length - num).toLowerCase();

      if (prefix) {
        prefix = '-' + prefix + '-';
      }

      return prefix;
    }

    function getTransitionDurationStyle(speed) {
      return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
    }

    function getAnimationDurationStyle(speed) {
      return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
    }

    function initStructure() {
      var classOuter = 'tns-outer',
          classInner = 'tns-inner',
          hasGutter = hasOption('gutter');
      outerWrapper.className = classOuter;
      innerWrapper.className = classInner;
      outerWrapper.id = slideId + '-ow';
      innerWrapper.id = slideId + '-iw'; // set container properties

      if (container.id === '') {
        container.id = slideId;
      }

      newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
      newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';

      if (autoWidth) {
        newContainerClasses += ' tns-autowidth';
      }

      newContainerClasses += ' tns-' + options.axis;
      container.className += newContainerClasses; // add constrain layer for carousel

      if (carousel) {
        middleWrapper = doc.createElement('div');
        middleWrapper.id = slideId + '-mw';
        middleWrapper.className = 'tns-ovh';
        outerWrapper.appendChild(middleWrapper);
        middleWrapper.appendChild(innerWrapper);
      } else {
        outerWrapper.appendChild(innerWrapper);
      }

      if (autoHeight) {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.className += ' tns-ah';
      }

      containerParent.insertBefore(outerWrapper, container);
      innerWrapper.appendChild(container); // add id, class, aria attributes
      // before clone slides

      forEach(slideItems, function (item, i) {
        addClass(item, 'tns-item');

        if (!item.id) {
          item.id = slideId + '-item' + i;
        }

        if (!carousel && animateNormal) {
          addClass(item, animateNormal);
        }

        setAttrs(item, {
          'aria-hidden': 'true',
          tabindex: '-1'
        });
      }); // ## clone slides
      // carousel: n + slides + n
      // gallery:      slides + n

      if (cloneCount) {
        var fragmentBefore = doc.createDocumentFragment(),
            fragmentAfter = doc.createDocumentFragment();

        for (var j = cloneCount; j--;) {
          var num = j % slideCount,
              cloneFirst = slideItems[num].cloneNode(true);
          addClass(cloneFirst, slideClonedClass);
          removeAttrs(cloneFirst, 'id');
          fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

          if (carousel) {
            var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
            addClass(cloneLast, slideClonedClass);
            removeAttrs(cloneLast, 'id');
            fragmentBefore.appendChild(cloneLast);
          }
        }

        container.insertBefore(fragmentBefore, container.firstChild);
        container.appendChild(fragmentAfter);
        slideItems = container.children;
      }
    }

    function initSliderTransform() {
      // ## images loaded/failed
      if (hasOption('autoHeight') || autoWidth || !horizontal) {
        var imgs = container.querySelectorAll('img'); // add img load event listener

        forEach(imgs, function (img) {
          var src = img.src;

          if (!lazyload) {
            // not data img
            if (src && src.indexOf('data:image') < 0) {
              img.src = '';
              addEvents(img, imgEvents);
              addClass(img, 'loading');
              img.src = src; // data img
            } else {
              imgLoaded(img);
            }
          }
        }); // set imgsComplete

        raf(function () {
          imgsLoadedCheck(arrayFromNodeList(imgs), function () {
            imgsComplete = true;
          });
        }); // reset imgs for auto height: check visible imgs only

        if (hasOption('autoHeight')) {
          imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
        }

        lazyload ? initSliderTransformStyleCheck() : raf(function () {
          imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
        });
      } else {
        // set container transform property
        if (carousel) {
          doContainerTransformSilent();
        } // update slider tools and events


        initTools();
        initEvents();
      }
    }

    function initSliderTransformStyleCheck() {
      if (autoWidth && slideCount > 1) {
        // check styles application
        var num = loop ? index : slideCount - 1;

        (function stylesApplicationCheck() {
          var left = slideItems[num].getBoundingClientRect().left;
          var right = slideItems[num - 1].getBoundingClientRect().right;
          Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function () {
            stylesApplicationCheck();
          }, 16);
        })();
      } else {
        initSliderTransformCore();
      }
    }

    function initSliderTransformCore() {
      // run Fn()s which are rely on image loading
      if (!horizontal || autoWidth) {
        setSlidePositions();

        if (autoWidth) {
          rightBoundary = getRightBoundary();

          if (freezable) {
            freeze = getFreeze();
          }

          indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=

          resetVariblesWhenDisable(disable || freeze);
        } else {
          updateContentWrapperHeight();
        }
      } // set container transform property


      if (carousel) {
        doContainerTransformSilent();
      } // update slider tools and events


      initTools();
      initEvents();
    }

    function initSheet() {
      // gallery:
      // set animation classes and left value for gallery slider
      if (!carousel) {
        for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
          var item = slideItems[i];
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, animateIn);
          removeClass(item, animateNormal);
        }
      } // #### LAYOUT
      // ## INLINE-BLOCK VS FLOAT
      // ## PercentageLayout:
      // slides: inline-block
      // remove blank space between slides by set font-size: 0
      // ## Non PercentageLayout:
      // slides: float
      //         margin-right: -100%
      //         margin-left: ~
      // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing


      if (horizontal) {
        if (PERCENTAGELAYOUT || autoWidth) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
          addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
        } else if (carousel) {
          forEach(slideItems, function (slide, i) {
            slide.style.marginLeft = getSlideMarginLeft(i);
          });
        }
      } // ## BASIC STYLES


      if (CSSMQ) {
        // middle wrapper style
        if (TRANSITIONDURATION) {
          var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
          addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
        } // inner wrapper styles


        str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
        addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet)); // container styles

        if (carousel) {
          str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';

          if (TRANSITIONDURATION) {
            str += getTransitionDurationStyle(speed);
          }

          addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
        } // slide styles


        str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';

        if (options.gutter) {
          str += getSlideGutterStyle(options.gutter);
        } // set gallery items transition-duration


        if (!carousel) {
          if (TRANSITIONDURATION) {
            str += getTransitionDurationStyle(speed);
          }

          if (ANIMATIONDURATION) {
            str += getAnimationDurationStyle(speed);
          }
        }

        if (str) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        } // non CSS mediaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)

      } else {
        // middle wrapper styles
        update_carousel_transition_duration(); // inner wrapper styles

        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles

        if (carousel && horizontal && !autoWidth) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        } // slide styles


        var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';

        if (gutter) {
          str += getSlideGutterStyle(gutter);
        } // append to the last line


        if (str) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }
      } // ## MEDIAQUERIES


      if (responsive && CSSMQ) {
        for (var bp in responsive) {
          // bp: convert string to number
          bp = parseInt(bp);
          var opts = responsive[bp],
              str = '',
              middleWrapperStr = '',
              innerWrapperStr = '',
              containerStr = '',
              slideStr = '',
              itemsBP = !autoWidth ? getOption('items', bp) : null,
              fixedWidthBP = getOption('fixedWidth', bp),
              speedBP = getOption('speed', bp),
              edgePaddingBP = getOption('edgePadding', bp),
              autoHeightBP = getOption('autoHeight', bp),
              gutterBP = getOption('gutter', bp); // middle wrapper string

          if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
            middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
          } // inner wrapper string


          if ('edgePadding' in opts || 'gutter' in opts) {
            innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
          } // container string


          if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
            containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
          }

          if (TRANSITIONDURATION && 'speed' in opts) {
            containerStr += getTransitionDurationStyle(speedBP);
          }

          if (containerStr) {
            containerStr = '#' + slideId + '{' + containerStr + '}';
          } // slide string


          if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
            slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
          }

          if ('gutter' in opts) {
            slideStr += getSlideGutterStyle(gutterBP);
          } // set gallery items transition-duration


          if (!carousel && 'speed' in opts) {
            if (TRANSITIONDURATION) {
              slideStr += getTransitionDurationStyle(speedBP);
            }

            if (ANIMATIONDURATION) {
              slideStr += getAnimationDurationStyle(speedBP);
            }
          }

          if (slideStr) {
            slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
          } // add up


          str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

          if (str) {
            sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
          }
        }
      }
    }

    function initTools() {
      // == slides ==
      updateSlideStatus(); // == live region ==

      outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
      liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current'); // == autoplayInit ==

      if (hasAutoplay) {
        var txt = autoplay ? 'stop' : 'start';

        if (autoplayButton) {
          setAttrs(autoplayButton, {
            'data-action': txt
          });
        } else if (options.autoplayButtonOutput) {
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
          autoplayButton = outerWrapper.querySelector('[data-action]');
        } // add event


        if (autoplayButton) {
          addEvents(autoplayButton, {
            click: toggleAutoplay
          });
        }

        if (autoplay) {
          startAutoplay();

          if (autoplayHoverPause) {
            addEvents(container, hoverEvents);
          }

          if (autoplayResetOnVisibility) {
            addEvents(container, visibilityEvent);
          }
        }
      } // == navInit ==


      if (hasNav) {
        var initIndex = !carousel ? 0 : cloneCount; // customized nav
        // will not hide the navs in case they're thumbnails

        if (navContainer) {
          setAttrs(navContainer, {
            'aria-label': 'Carousel Pagination'
          });
          navItems = navContainer.children;
          forEach(navItems, function (item, i) {
            setAttrs(item, {
              'data-nav': i,
              tabindex: '-1',
              'aria-label': navStr + (i + 1),
              'aria-controls': slideId
            });
          }); // generated nav
        } else {
          var navHtml = '',
              hiddenStr = navAsThumbnails ? '' : 'style="display:none"';

          for (var i = 0; i < slideCount; i++) {
            // hide nav items by default
            navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
          }

          navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
          navContainer = outerWrapper.querySelector('.tns-nav');
          navItems = navContainer.children;
        }

        updateNavVisibility(); // add transition

        if (TRANSITIONDURATION) {
          var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
              str = 'transition: all ' + speed / 1000 + 's';

          if (prefix) {
            str = '-' + prefix + '-' + str;
          }

          addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
        }

        setAttrs(navItems[navCurrentIndex], {
          'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
        });
        removeAttrs(navItems[navCurrentIndex], 'tabindex');
        addClass(navItems[navCurrentIndex], navActiveClass); // add events

        addEvents(navContainer, navEvents);
      } // == controlsInit ==


      if (hasControls) {
        if (!controlsContainer && (!prevButton || !nextButton)) {
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + '</button></div>');
          controlsContainer = outerWrapper.querySelector('.tns-controls');
        }

        if (!prevButton || !nextButton) {
          prevButton = controlsContainer.children[0];
          nextButton = controlsContainer.children[1];
        }

        if (options.controlsContainer) {
          setAttrs(controlsContainer, {
            'aria-label': 'Carousel Navigation',
            tabindex: '0'
          });
        }

        if (options.controlsContainer || options.prevButton && options.nextButton) {
          setAttrs([prevButton, nextButton], {
            'aria-controls': slideId,
            tabindex: '-1'
          });
        }

        if (options.controlsContainer || options.prevButton && options.nextButton) {
          setAttrs(prevButton, {
            'data-controls': 'prev'
          });
          setAttrs(nextButton, {
            'data-controls': 'next'
          });
        }

        prevIsButton = isButton(prevButton);
        nextIsButton = isButton(nextButton);
        updateControlsStatus(); // add events

        if (controlsContainer) {
          addEvents(controlsContainer, controlsEvents);
        } else {
          addEvents(prevButton, controlsEvents);
          addEvents(nextButton, controlsEvents);
        }
      } // hide tools if needed


      disableUI();
    }

    function initEvents() {
      // add events
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        addEvents(container, eve);
      }

      if (touch) {
        addEvents(container, touchEvents, options.preventScrollOnTouch);
      }

      if (mouseDrag) {
        addEvents(container, dragEvents);
      }

      if (arrowKeys) {
        addEvents(doc, docmentKeydownEvent);
      }

      if (nested === 'inner') {
        events.on('outerResized', function () {
          resizeTasks();
          events.emit('innerLoaded', info());
        });
      } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
        addEvents(win, {
          resize: onResize
        });
      }

      if (autoHeight) {
        if (nested === 'outer') {
          events.on('innerLoaded', doAutoHeight);
        } else if (!disable) {
          doAutoHeight();
        }
      }

      doLazyLoad();

      if (disable) {
        disableSlider();
      } else if (freeze) {
        freezeSlider();
      }

      events.on('indexChanged', additionalUpdates);

      if (nested === 'inner') {
        events.emit('innerLoaded', info());
      }

      if (typeof onInit === 'function') {
        onInit(info());
      }

      isOn = true;
    }

    function destroy() {
      // sheet
      sheet.disabled = true;

      if (sheet.ownerNode) {
        sheet.ownerNode.remove();
      } // remove win event listeners


      removeEvents(win, {
        resize: onResize
      }); // arrowKeys, controls, nav

      if (arrowKeys) {
        removeEvents(doc, docmentKeydownEvent);
      }

      if (controlsContainer) {
        removeEvents(controlsContainer, controlsEvents);
      }

      if (navContainer) {
        removeEvents(navContainer, navEvents);
      } // autoplay


      removeEvents(container, hoverEvents);
      removeEvents(container, visibilityEvent);

      if (autoplayButton) {
        removeEvents(autoplayButton, {
          click: toggleAutoplay
        });
      }

      if (autoplay) {
        clearInterval(autoplayTimer);
      } // container


      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        removeEvents(container, eve);
      }

      if (touch) {
        removeEvents(container, touchEvents);
      }

      if (mouseDrag) {
        removeEvents(container, dragEvents);
      } // cache Object values in options && reset HTML


      var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
      tnsList.forEach(function (item, i) {
        var el = item === 'container' ? outerWrapper : options[item];

        if (_typeof(el) === 'object' && el) {
          var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
              parentEl = el.parentNode;
          el.outerHTML = htmlList[i];
          options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
        }
      }); // reset variables

      tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
      // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

      for (var a in this) {
        if (a !== 'rebuild') {
          this[a] = null;
        }
      }

      isOn = false;
    } // === ON RESIZE ===
    // responsive || fixedWidth || autoWidth || !horizontal


    function onResize(e) {
      raf(function () {
        resizeTasks(getEvent(e));
      });
    }

    function resizeTasks(e) {
      if (!isOn) {
        return;
      }

      if (nested === 'outer') {
        events.emit('outerResized', info(e));
      }

      windowWidth = getWindowWidth();
      var bpChanged,
          breakpointZoneTem = breakpointZone,
          needContainerTransform = false;

      if (responsive) {
        setBreakpointZone();
        bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?

        if (bpChanged) {
          events.emit('newBreakpointStart', info(e));
        }
      }

      var indChanged,
          itemsChanged,
          itemsTem = items,
          disableTem = disable,
          freezeTem = freeze,
          arrowKeysTem = arrowKeys,
          controlsTem = controls,
          navTem = nav,
          touchTem = touch,
          mouseDragTem = mouseDrag,
          autoplayTem = autoplay,
          autoplayHoverPauseTem = autoplayHoverPause,
          autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
          indexTem = index;

      if (bpChanged) {
        var fixedWidthTem = fixedWidth,
            autoHeightTem = autoHeight,
            controlsTextTem = controlsText,
            centerTem = center,
            autoplayTextTem = autoplayText;

        if (!CSSMQ) {
          var gutterTem = gutter,
              edgePaddingTem = edgePadding;
        }
      } // get option:
      // fixed width: viewport, fixedWidth, gutter => items
      // others: window width => all variables
      // all: items => slideBy


      arrowKeys = getOption('arrowKeys');
      controls = getOption('controls');
      nav = getOption('nav');
      touch = getOption('touch');
      center = getOption('center');
      mouseDrag = getOption('mouseDrag');
      autoplay = getOption('autoplay');
      autoplayHoverPause = getOption('autoplayHoverPause');
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

      if (bpChanged) {
        disable = getOption('disable');
        fixedWidth = getOption('fixedWidth');
        speed = getOption('speed');
        autoHeight = getOption('autoHeight');
        controlsText = getOption('controlsText');
        autoplayText = getOption('autoplayText');
        autoplayTimeout = getOption('autoplayTimeout');

        if (!CSSMQ) {
          edgePadding = getOption('edgePadding');
          gutter = getOption('gutter');
        }
      } // update options


      resetVariblesWhenDisable(disable);
      viewport = getViewportWidth(); // <= edgePadding, gutter

      if ((!horizontal || autoWidth) && !disable) {
        setSlidePositions();

        if (!horizontal) {
          updateContentWrapperHeight(); // <= setSlidePositions

          needContainerTransform = true;
        }
      }

      if (fixedWidth || autoWidth) {
        rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
        // fixedWidth: <= viewport, fixedWidth, gutter

        indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
        // fixedWidth: <= rightBoundary, fixedWidth, gutter
      }

      if (bpChanged || fixedWidth) {
        items = getOption('items');
        slideBy = getOption('slideBy');
        itemsChanged = items !== itemsTem;

        if (itemsChanged) {
          if (!fixedWidth && !autoWidth) {
            indexMax = getIndexMax();
          } // <= items
          // check index before transform in case
          // slider reach the right edge then items become bigger


          updateIndex();
        }
      }

      if (bpChanged) {
        if (disable !== disableTem) {
          if (disable) {
            disableSlider();
          } else {
            enableSlider(); // <= slidePositions, rightBoundary, indexMax
          }
        }
      }

      if (freezable && (bpChanged || fixedWidth || autoWidth)) {
        freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
        // <= fixedWidth: fixedWidth, gutter, rightBoundary
        // <= others: items

        if (freeze !== freezeTem) {
          if (freeze) {
            doContainerTransform(getContainerTransformValue(getStartIndex(0)));
            freezeSlider();
          } else {
            unfreezeSlider();
            needContainerTransform = true;
          }
        }
      }

      resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility

      if (!autoplay) {
        autoplayHoverPause = autoplayResetOnVisibility = false;
      }

      if (arrowKeys !== arrowKeysTem) {
        arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
      }

      if (controls !== controlsTem) {
        if (controls) {
          if (controlsContainer) {
            showElement(controlsContainer);
          } else {
            if (prevButton) {
              showElement(prevButton);
            }

            if (nextButton) {
              showElement(nextButton);
            }
          }
        } else {
          if (controlsContainer) {
            hideElement(controlsContainer);
          } else {
            if (prevButton) {
              hideElement(prevButton);
            }

            if (nextButton) {
              hideElement(nextButton);
            }
          }
        }
      }

      if (nav !== navTem) {
        if (nav) {
          showElement(navContainer);
          updateNavVisibility();
        } else {
          hideElement(navContainer);
        }
      }

      if (touch !== touchTem) {
        touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
      }

      if (mouseDrag !== mouseDragTem) {
        mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
      }

      if (autoplay !== autoplayTem) {
        if (autoplay) {
          if (autoplayButton) {
            showElement(autoplayButton);
          }

          if (!animating && !autoplayUserPaused) {
            startAutoplay();
          }
        } else {
          if (autoplayButton) {
            hideElement(autoplayButton);
          }

          if (animating) {
            stopAutoplay();
          }
        }
      }

      if (autoplayHoverPause !== autoplayHoverPauseTem) {
        autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
      }

      if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
        autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
      }

      if (bpChanged) {
        if (fixedWidth !== fixedWidthTem || center !== centerTem) {
          needContainerTransform = true;
        }

        if (autoHeight !== autoHeightTem) {
          if (!autoHeight) {
            innerWrapper.style.height = '';
          }
        }

        if (controls && controlsText !== controlsTextTem) {
          prevButton.innerHTML = controlsText[0];
          nextButton.innerHTML = controlsText[1];
        }

        if (autoplayButton && autoplayText !== autoplayTextTem) {
          var i = autoplay ? 1 : 0,
              html = autoplayButton.innerHTML,
              len = html.length - autoplayTextTem[i].length;

          if (html.substring(len) === autoplayTextTem[i]) {
            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
          }
        }
      } else {
        if (center && (fixedWidth || autoWidth)) {
          needContainerTransform = true;
        }
      }

      if (itemsChanged || fixedWidth && !autoWidth) {
        pages = getPages();
        updateNavVisibility();
      }

      indChanged = index !== indexTem;

      if (indChanged) {
        events.emit('indexChanged', info());
        needContainerTransform = true;
      } else if (itemsChanged) {
        if (!indChanged) {
          additionalUpdates();
        }
      } else if (fixedWidth || autoWidth) {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
      }

      if (itemsChanged && !carousel) {
        updateGallerySlidePositions();
      }

      if (!disable && !freeze) {
        // non-mediaqueries: IE8
        if (bpChanged && !CSSMQ) {
          // middle wrapper styles
          // inner wrapper styles
          if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
          }

          if (horizontal) {
            // container styles
            if (carousel) {
              container.style.width = getContainerWidth(fixedWidth, gutter, items);
            } // slide styles


            var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
            // add new styles

            removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
            addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
          }
        } // auto height


        if (autoHeight) {
          doAutoHeight();
        }

        if (needContainerTransform) {
          doContainerTransformSilent();
          indexCached = index;
        }
      }

      if (bpChanged) {
        events.emit('newBreakpointEnd', info(e));
      }
    } // === INITIALIZATION FUNCTIONS === //


    function getFreeze() {
      if (!fixedWidth && !autoWidth) {
        var a = center ? items - (items - 1) / 2 : items;
        return slideCount <= a;
      }

      var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
          vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

      if (center) {
        vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
      }

      return width <= vp;
    }

    function setBreakpointZone() {
      breakpointZone = 0;

      for (var bp in responsive) {
        bp = parseInt(bp); // convert string to number

        if (windowWidth >= bp) {
          breakpointZone = bp;
        }
      }
    } // (slideBy, indexMin, indexMax) => index


    var updateIndex = function () {
      return loop ? carousel ? // loop + carousel
      function () {
        var leftEdge = indexMin,
            rightEdge = indexMax;
        leftEdge += slideBy;
        rightEdge -= slideBy; // adjust edges when has edge paddings
        // or fixed-width slider with extra space on the right side

        if (edgePadding) {
          leftEdge += 1;
          rightEdge -= 1;
        } else if (fixedWidth) {
          if ((viewport + gutter) % (fixedWidth + gutter)) {
            rightEdge -= 1;
          }
        }

        if (cloneCount) {
          if (index > rightEdge) {
            index -= slideCount;
          } else if (index < leftEdge) {
            index += slideCount;
          }
        }
      } : // loop + gallery
      function () {
        if (index > indexMax) {
          while (index >= indexMin + slideCount) {
            index -= slideCount;
          }
        } else if (index < indexMin) {
          while (index <= indexMax - slideCount) {
            index += slideCount;
          }
        }
      } : // non-loop
      function () {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
    }();

    function disableUI() {
      if (!autoplay && autoplayButton) {
        hideElement(autoplayButton);
      }

      if (!nav && navContainer) {
        hideElement(navContainer);
      }

      if (!controls) {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) {
            hideElement(prevButton);
          }

          if (nextButton) {
            hideElement(nextButton);
          }
        }
      }
    }

    function enableUI() {
      if (autoplay && autoplayButton) {
        showElement(autoplayButton);
      }

      if (nav && navContainer) {
        showElement(navContainer);
      }

      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) {
            showElement(prevButton);
          }

          if (nextButton) {
            showElement(nextButton);
          }
        }
      }
    }

    function freezeSlider() {
      if (frozen) {
        return;
      } // remove edge padding from inner wrapper


      if (edgePadding) {
        innerWrapper.style.margin = '0px';
      } // add class tns-transparent to cloned slides


      if (cloneCount) {
        var str = 'tns-transparent';

        for (var i = cloneCount; i--;) {
          if (carousel) {
            addClass(slideItems[i], str);
          }

          addClass(slideItems[slideCountNew - i - 1], str);
        }
      } // update tools


      disableUI();
      frozen = true;
    }

    function unfreezeSlider() {
      if (!frozen) {
        return;
      } // restore edge padding for inner wrapper
      // for mordern browsers


      if (edgePadding && CSSMQ) {
        innerWrapper.style.margin = '';
      } // remove class tns-transparent to cloned slides


      if (cloneCount) {
        var str = 'tns-transparent';

        for (var i = cloneCount; i--;) {
          if (carousel) {
            removeClass(slideItems[i], str);
          }

          removeClass(slideItems[slideCountNew - i - 1], str);
        }
      } // update tools


      enableUI();
      frozen = false;
    }

    function disableSlider() {
      if (disabled) {
        return;
      }

      sheet.disabled = true;
      container.className = container.className.replace(newContainerClasses.substring(1), '');
      removeAttrs(container, ['style']);

      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) {
            hideElement(slideItems[j]);
          }

          hideElement(slideItems[slideCountNew - j - 1]);
        }
      } // vertical slider


      if (!horizontal || !carousel) {
        removeAttrs(innerWrapper, ['style']);
      } // gallery


      if (!carousel) {
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i];
          removeAttrs(item, ['style']);
          removeClass(item, animateIn);
          removeClass(item, animateNormal);
        }
      } // update tools


      disableUI();
      disabled = true;
    }

    function enableSlider() {
      if (!disabled) {
        return;
      }

      sheet.disabled = false;
      container.className += newContainerClasses;
      doContainerTransformSilent();

      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) {
            showElement(slideItems[j]);
          }

          showElement(slideItems[slideCountNew - j - 1]);
        }
      } // gallery


      if (!carousel) {
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i],
              classN = i < index + items ? animateIn : animateNormal;
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, classN);
        }
      } // update tools


      enableUI();
      disabled = false;
    }

    function updateLiveRegion() {
      var str = getLiveRegionStr();

      if (liveregionCurrent.innerHTML !== str) {
        liveregionCurrent.innerHTML = str;
      }
    }

    function getLiveRegionStr() {
      var arr = getVisibleSlideRange(),
          start = arr[0] + 1,
          end = arr[1] + 1;
      return start === end ? start + '' : start + ' to ' + end;
    }

    function getVisibleSlideRange(val) {
      if (val == null) {
        val = getContainerTransformValue();
      }

      var start = index,
          end,
          rangestart,
          rangeend; // get range start, range end for autoWidth and fixedWidth

      if (center || edgePadding) {
        if (autoWidth || fixedWidth) {
          rangestart = -(parseFloat(val) + edgePadding);
          rangeend = rangestart + viewport + edgePadding * 2;
        }
      } else {
        if (autoWidth) {
          rangestart = slidePositions[index];
          rangeend = rangestart + viewport;
        }
      } // get start, end
      // - check auto width


      if (autoWidth) {
        slidePositions.forEach(function (point, i) {
          if (i < slideCountNew) {
            if ((center || edgePadding) && point <= rangestart + 0.5) {
              start = i;
            }

            if (rangeend - point >= 0.5) {
              end = i;
            }
          }
        }); // - check percentage width, fixed width
      } else {
        if (fixedWidth) {
          var cell = fixedWidth + gutter;

          if (center || edgePadding) {
            start = Math.floor(rangestart / cell);
            end = Math.ceil(rangeend / cell - 1);
          } else {
            end = start + Math.ceil(viewport / cell) - 1;
          }
        } else {
          if (center || edgePadding) {
            var a = items - 1;

            if (center) {
              start -= a / 2;
              end = index + a / 2;
            } else {
              end = index + a;
            }

            if (edgePadding) {
              var b = edgePadding * items / viewport;
              start -= b;
              end += b;
            }

            start = Math.floor(start);
            end = Math.ceil(end);
          } else {
            end = start + items - 1;
          }
        }

        start = Math.max(start, 0);
        end = Math.min(end, slideCountNew - 1);
      }

      return [start, end];
    }

    function doLazyLoad() {
      if (lazyload && !disable) {
        var arg = getVisibleSlideRange();
        arg.push(lazyloadSelector);
        getImageArray.apply(null, arg).forEach(function (img) {
          if (!hasClass(img, imgCompleteClass)) {
            // stop propagation transitionend event to container
            var eve = {};

            eve[TRANSITIONEND] = function (e) {
              e.stopPropagation();
            };

            addEvents(img, eve);
            addEvents(img, imgEvents); // update src

            img.src = getAttr(img, 'data-src'); // update srcset

            var srcset = getAttr(img, 'data-srcset');

            if (srcset) {
              img.srcset = srcset;
            }

            addClass(img, 'loading');
          }
        });
      }
    }

    function onImgLoaded(e) {
      imgLoaded(getTarget(e));
    }

    function onImgFailed(e) {
      imgFailed(getTarget(e));
    }

    function imgLoaded(img) {
      addClass(img, 'loaded');
      imgCompleted(img);
    }

    function imgFailed(img) {
      addClass(img, 'failed');
      imgCompleted(img);
    }

    function imgCompleted(img) {
      addClass(img, imgCompleteClass);
      removeClass(img, 'loading');
      removeEvents(img, imgEvents);
    }

    function getImageArray(start, end, imgSelector) {
      var imgs = [];

      if (!imgSelector) {
        imgSelector = 'img';
      }

      while (start <= end) {
        forEach(slideItems[start].querySelectorAll(imgSelector), function (img) {
          imgs.push(img);
        });
        start++;
      }

      return imgs;
    } // check if all visible images are loaded
    // and update container height if it's done


    function doAutoHeight() {
      var imgs = getImageArray.apply(null, getVisibleSlideRange());
      raf(function () {
        imgsLoadedCheck(imgs, updateInnerWrapperHeight);
      });
    }

    function imgsLoadedCheck(imgs, cb) {
      // execute callback function if all images are complete
      if (imgsComplete) {
        return cb();
      } // check image classes


      imgs.forEach(function (img, index) {
        if (!lazyload && img.complete) {
          imgCompleted(img);
        } // Check image.complete


        if (hasClass(img, imgCompleteClass)) {
          imgs.splice(index, 1);
        }
      }); // execute callback function if selected images are all complete

      if (!imgs.length) {
        return cb();
      } // otherwise execute this functiona again


      raf(function () {
        imgsLoadedCheck(imgs, cb);
      });
    }

    function additionalUpdates() {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
      updateControlsStatus();
      updateNavStatus();
    }

    function update_carousel_transition_duration() {
      if (carousel && autoHeight) {
        middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
      }
    }

    function getMaxSlideHeight(slideStart, slideRange) {
      var heights = [];

      for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
        heights.push(slideItems[i].offsetHeight);
      }

      return Math.max.apply(null, heights);
    } // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done


    function updateInnerWrapperHeight() {
      var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
          wp = middleWrapper ? middleWrapper : innerWrapper;

      if (wp.style.height !== maxHeight) {
        wp.style.height = maxHeight + 'px';
      }
    } // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions


    function setSlidePositions() {
      slidePositions = [0];
      var attr = horizontal ? 'left' : 'top',
          attr2 = horizontal ? 'right' : 'bottom',
          base = slideItems[0].getBoundingClientRect()[attr];
      forEach(slideItems, function (item, i) {
        // skip the first slide
        if (i) {
          slidePositions.push(item.getBoundingClientRect()[attr] - base);
        } // add the end edge


        if (i === slideCountNew - 1) {
          slidePositions.push(item.getBoundingClientRect()[attr2] - base);
        }
      });
    } // update slide


    function updateSlideStatus() {
      var range = getVisibleSlideRange(),
          start = range[0],
          end = range[1];
      forEach(slideItems, function (item, i) {
        // show slides
        if (i >= start && i <= end) {
          if (hasAttr(item, 'aria-hidden')) {
            removeAttrs(item, ['aria-hidden', 'tabindex']);
            addClass(item, slideActiveClass);
          } // hide slides

        } else {
          if (!hasAttr(item, 'aria-hidden')) {
            setAttrs(item, {
              'aria-hidden': 'true',
              tabindex: '-1'
            });
            removeClass(item, slideActiveClass);
          }
        }
      });
    } // gallery: update slide position


    function updateGallerySlidePositions() {
      var l = index + Math.min(slideCount, items);

      for (var i = slideCountNew; i--;) {
        var item = slideItems[i];

        if (i >= index && i < l) {
          // add transitions to visible slides when adjusting their positions
          addClass(item, 'tns-moving');
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, animateIn);
          removeClass(item, animateNormal);
        } else if (item.style.left) {
          item.style.left = '';
          addClass(item, animateNormal);
          removeClass(item, animateIn);
        } // remove outlet animation


        removeClass(item, animateOut);
      } // removing '.tns-moving'


      setTimeout(function () {
        forEach(slideItems, function (el) {
          removeClass(el, 'tns-moving');
        });
      }, 300);
    } // set tabindex on Nav


    function updateNavStatus() {
      // get current nav
      if (nav) {
        navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
        navClicked = -1;

        if (navCurrentIndex !== navCurrentIndexCached) {
          var navPrev = navItems[navCurrentIndexCached],
              navCurrent = navItems[navCurrentIndex];
          setAttrs(navPrev, {
            tabindex: '-1',
            'aria-label': navStr + (navCurrentIndexCached + 1)
          });
          removeClass(navPrev, navActiveClass);
          setAttrs(navCurrent, {
            'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
          });
          removeAttrs(navCurrent, 'tabindex');
          addClass(navCurrent, navActiveClass);
          navCurrentIndexCached = navCurrentIndex;
        }
      }
    }

    function getLowerCaseNodeName(el) {
      return el.nodeName.toLowerCase();
    }

    function isButton(el) {
      return getLowerCaseNodeName(el) === 'button';
    }

    function isAriaDisabled(el) {
      return el.getAttribute('aria-disabled') === 'true';
    }

    function disEnableElement(isButton, el, val) {
      if (isButton) {
        el.disabled = val;
      } else {
        el.setAttribute('aria-disabled', val.toString());
      }
    } // set 'disabled' to true on controls when reach the edges


    function updateControlsStatus() {
      if (!controls || rewind || loop) {
        return;
      }

      var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
          nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
          disablePrev = index <= indexMin ? true : false,
          disableNext = !rewind && index >= indexMax ? true : false;

      if (disablePrev && !prevDisabled) {
        disEnableElement(prevIsButton, prevButton, true);
      }

      if (!disablePrev && prevDisabled) {
        disEnableElement(prevIsButton, prevButton, false);
      }

      if (disableNext && !nextDisabled) {
        disEnableElement(nextIsButton, nextButton, true);
      }

      if (!disableNext && nextDisabled) {
        disEnableElement(nextIsButton, nextButton, false);
      }
    } // set duration


    function resetDuration(el, str) {
      if (TRANSITIONDURATION) {
        el.style[TRANSITIONDURATION] = str;
      }
    }

    function getSliderWidth() {
      return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
    }

    function getCenterGap(num) {
      if (num == null) {
        num = index;
      }

      var gap = edgePadding ? gutter : 0;
      return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
    }

    function getRightBoundary() {
      var gap = edgePadding ? gutter : 0,
          result = viewport + gap - getSliderWidth();

      if (center && !loop) {
        result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
      }

      if (result > 0) {
        result = 0;
      }

      return result;
    }

    function getContainerTransformValue(num) {
      if (num == null) {
        num = index;
      }

      var val;

      if (horizontal && !autoWidth) {
        if (fixedWidth) {
          val = -(fixedWidth + gutter) * num;

          if (center) {
            val += getCenterGap();
          }
        } else {
          var denominator = TRANSFORM ? slideCountNew : items;

          if (center) {
            num -= getCenterGap();
          }

          val = -num * 100 / denominator;
        }
      } else {
        val = -slidePositions[num];

        if (center && autoWidth) {
          val += getCenterGap();
        }
      }

      if (hasRightDeadZone) {
        val = Math.max(val, rightBoundary);
      }

      val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';
      return val;
    }

    function doContainerTransformSilent(val) {
      resetDuration(container, '0s');
      doContainerTransform(val);
    }

    function doContainerTransform(val) {
      if (val == null) {
        val = getContainerTransformValue();
      }

      container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }

    function animateSlide(number, classOut, classIn, isOut) {
      var l = number + items;

      if (!loop) {
        l = Math.min(l, slideCountNew);
      }

      for (var i = number; i < l; i++) {
        var item = slideItems[i]; // set item positions

        if (!isOut) {
          item.style.left = (i - index) * 100 / items + '%';
        }

        if (animateDelay && TRANSITIONDELAY) {
          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
        }

        removeClass(item, classOut);
        addClass(item, classIn);

        if (isOut) {
          slideItemsOut.push(item);
        }
      }
    } // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers


    var transformCore = function () {
      return carousel ? function () {
        resetDuration(container, '');

        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform(); // run fallback function manually
          // when duration is 0 / container is hidden

          if (!speed || !isVisible(container)) {
            onTransitionEnd();
          }
        } else {
          // for old browser with non-zero duration
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) {
          updateContentWrapperHeight();
        }
      } : function () {
        slideItemsOut = [];
        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);
        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn); // run fallback function manually
        // when transition or animation not supported / duration is 0

        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) {
          onTransitionEnd();
        }
      };
    }();

    function render(e, sliderMoved) {
      if (updateIndexBeforeTransform) {
        updateIndex();
      } // render when slider was moved (touch or drag) even though index may not change


      if (index !== indexCached || sliderMoved) {
        // events
        events.emit('indexChanged', info());
        events.emit('transitionStart', info());

        if (autoHeight) {
          doAutoHeight();
        } // pause autoplay when click or keydown from user


        if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
          stopAutoplay();
        }

        running = true;
        transformCore();
      }
    }
    /*
     * Transfer prefixed properties to the same format
     * CSS: -Webkit-Transform => webkittransform
     * JS: WebkitTransform => webkittransform
     * @param {string} str - property
     *
     */


    function strTrans(str) {
      return str.toLowerCase().replace(/-/g, '');
    } // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height


    function onTransitionEnd(event) {
      // check running on gallery mode
      // make sure trantionend/animationend events run only once
      if (carousel || running) {
        events.emit('transitionEnd', info(event));

        if (!carousel && slideItemsOut.length > 0) {
          for (var i = 0; i < slideItemsOut.length; i++) {
            var item = slideItemsOut[i]; // set item positions

            item.style.left = '';

            if (ANIMATIONDELAY && TRANSITIONDELAY) {
              item.style[ANIMATIONDELAY] = '';
              item.style[TRANSITIONDELAY] = '';
            }

            removeClass(item, animateOut);
            addClass(item, animateNormal);
          }
        }
        /* update slides, nav, controls after checking ...
         * => legacy browsers who don't support 'event'
         *    have to check event first, otherwise event.target will cause an error
         * => or 'gallery' mode:
         *   + event target is slide item
         * => or 'carousel' mode:
         *   + event target is container,
         *   + event.property is the same with transform attribute
         */


        if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
          if (!updateIndexBeforeTransform) {
            var indexTem = index;
            updateIndex();

            if (index !== indexTem) {
              events.emit('indexChanged', info());
              doContainerTransformSilent();
            }
          }

          if (nested === 'inner') {
            events.emit('innerLoaded', info());
          }

          running = false;
          indexCached = index;
        }
      }
    } // # ACTIONS


    function goTo(targetIndex, e) {
      if (freeze) {
        return;
      } // prev slideBy


      if (targetIndex === 'prev') {
        onControlsClick(e, -1); // next slideBy
      } else if (targetIndex === 'next') {
        onControlsClick(e, 1); // go to exact slide
      } else {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }

        var absIndex = getAbsIndex(),
            indexGap = 0;

        if (targetIndex === 'first') {
          indexGap = -absIndex;
        } else if (targetIndex === 'last') {
          indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
        } else {
          if (typeof targetIndex !== 'number') {
            targetIndex = parseInt(targetIndex);
          }

          if (!isNaN(targetIndex)) {
            // from directly called goTo function
            if (!e) {
              targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
            }

            indexGap = targetIndex - absIndex;
          }
        } // gallery: make sure new page won't overlap with current page


        if (!carousel && indexGap && Math.abs(indexGap) < items) {
          var factor = indexGap > 0 ? 1 : -1;
          indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
        }

        index += indexGap; // make sure index is in range

        if (carousel && loop) {
          if (index < indexMin) {
            index += slideCount;
          }

          if (index > indexMax) {
            index -= slideCount;
          }
        } // if index is changed, start rendering


        if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
          render(e);
        }
      }
    } // on controls click


    function onControlsClick(e, dir) {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      var passEventObject;

      if (!dir) {
        e = getEvent(e);
        var target = getTarget(e);

        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
          target = target.parentNode;
        }

        var targetIn = [prevButton, nextButton].indexOf(target);

        if (targetIn >= 0) {
          passEventObject = true;
          dir = targetIn === 0 ? -1 : 1;
        }
      }

      if (rewind) {
        if (index === indexMin && dir === -1) {
          goTo('last', e);
          return;
        } else if (index === indexMax && dir === 1) {
          goTo('first', e);
          return;
        }
      }

      if (dir) {
        index += slideBy * dir;

        if (autoWidth) {
          index = Math.floor(index);
        } // pass e when click control buttons or keydown


        render(passEventObject || e && e.type === 'keydown' ? e : null);
      }
    } // on nav click


    function onNavClick(e) {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      e = getEvent(e);
      var target = getTarget(e),
          navIndex; // find the clicked nav item

      while (target !== navContainer && !hasAttr(target, 'data-nav')) {
        target = target.parentNode;
      }

      if (hasAttr(target, 'data-nav')) {
        var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
            targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
            targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
        goTo(targetIndex, e);

        if (navCurrentIndex === navIndex) {
          if (animating) {
            stopAutoplay();
          }

          navClicked = -1; // reset navClicked
        }
      }
    } // autoplay functions


    function setAutoplayTimer() {
      autoplayTimer = setInterval(function () {
        onControlsClick(null, autoplayDirection);
      }, autoplayTimeout);
      animating = true;
    }

    function stopAutoplayTimer() {
      clearInterval(autoplayTimer);
      animating = false;
    }

    function updateAutoplayButton(action, txt) {
      setAttrs(autoplayButton, {
        'data-action': action
      });
      autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }

    function startAutoplay() {
      setAutoplayTimer();

      if (autoplayButton) {
        updateAutoplayButton('stop', autoplayText[1]);
      }
    }

    function stopAutoplay() {
      stopAutoplayTimer();

      if (autoplayButton) {
        updateAutoplayButton('start', autoplayText[0]);
      }
    } // programaitcally play/pause the slider


    function play() {
      if (autoplay && !animating) {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }

    function pause() {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      }
    }

    function toggleAutoplay() {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      } else {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }

    function onVisibilityChange() {
      if (doc.hidden) {
        if (animating) {
          stopAutoplayTimer();
          autoplayVisibilityPaused = true;
        }
      } else if (autoplayVisibilityPaused) {
        setAutoplayTimer();
        autoplayVisibilityPaused = false;
      }
    }

    function mouseoverPause() {
      if (animating) {
        stopAutoplayTimer();
        autoplayHoverPaused = true;
      }
    }

    function mouseoutRestart() {
      if (autoplayHoverPaused) {
        setAutoplayTimer();
        autoplayHoverPaused = false;
      }
    } // keydown events on document


    function onDocumentKeydown(e) {
      e = getEvent(e);
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

      if (keyIndex >= 0) {
        onControlsClick(e, keyIndex === 0 ? -1 : 1);
      }
    } // on key control


    function onControlsKeydown(e) {
      e = getEvent(e);
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

      if (keyIndex >= 0) {
        if (keyIndex === 0) {
          if (!prevButton.disabled) {
            onControlsClick(e, -1);
          }
        } else if (!nextButton.disabled) {
          onControlsClick(e, 1);
        }
      }
    } // set focus


    function setFocus(el) {
      el.focus();
    } // on key nav


    function onNavKeydown(e) {
      e = getEvent(e);
      var curElement = doc.activeElement;

      if (!hasAttr(curElement, 'data-nav')) {
        return;
      } // var code = e.keyCode,


      var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
          navIndex = Number(getAttr(curElement, 'data-nav'));

      if (keyIndex >= 0) {
        if (keyIndex === 0) {
          if (navIndex > 0) {
            setFocus(navItems[navIndex - 1]);
          }
        } else if (keyIndex === 1) {
          if (navIndex < pages - 1) {
            setFocus(navItems[navIndex + 1]);
          }
        } else {
          navClicked = navIndex;
          goTo(navIndex, e);
        }
      }
    }

    function getEvent(e) {
      e = e || win.event;
      return isTouchEvent(e) ? e.changedTouches[0] : e;
    }

    function getTarget(e) {
      return e.target || win.event.srcElement;
    }

    function isTouchEvent(e) {
      return e.type.indexOf('touch') >= 0;
    }

    function preventDefaultBehavior(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }

    function getMoveDirectionExpected() {
      return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }

    function onPanStart(e) {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      if (autoplay && animating) {
        stopAutoplayTimer();
      }

      panStart = true;

      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }

      var $ = getEvent(e);
      events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

      if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
        preventDefaultBehavior(e);
      }

      lastPosition.x = initPosition.x = $.clientX;
      lastPosition.y = initPosition.y = $.clientY;

      if (carousel) {
        translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
        resetDuration(container, '0s');
      }
    }

    function onPanMove(e) {
      if (panStart) {
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;

        if (carousel) {
          if (!rafIndex) {
            rafIndex = raf(function () {
              panUpdate(e);
            });
          }
        } else {
          if (moveDirectionExpected === '?') {
            moveDirectionExpected = getMoveDirectionExpected();
          }

          if (moveDirectionExpected) {
            preventScroll = true;
          }
        }

        if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
          e.preventDefault();
        }
      }
    }

    function panUpdate(e) {
      if (!moveDirectionExpected) {
        panStart = false;
        return;
      }

      caf(rafIndex);

      if (panStart) {
        rafIndex = raf(function () {
          panUpdate(e);
        });
      }

      if (moveDirectionExpected === '?') {
        moveDirectionExpected = getMoveDirectionExpected();
      }

      if (moveDirectionExpected) {
        if (!preventScroll && isTouchEvent(e)) {
          preventScroll = true;
        }

        try {
          if (e.type) {
            events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
          }
        } catch (err) {}

        var x = translateInit,
            dist = getDist(lastPosition, initPosition);

        if (!horizontal || fixedWidth || autoWidth) {
          x += dist;
          x += 'px';
        } else {
          var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
          x += percentageX;
          x += '%';
        }

        container.style[transformAttr] = transformPrefix + x + transformPostfix;
      }
    }

    function onPanEnd(e) {
      if (panStart) {
        if (rafIndex) {
          caf(rafIndex);
          rafIndex = null;
        }

        if (carousel) {
          resetDuration(container, '');
        }

        panStart = false;
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;
        var dist = getDist(lastPosition, initPosition);

        if (Math.abs(dist)) {
          // drag vs click
          if (!isTouchEvent(e)) {
            // prevent "click"
            var target = getTarget(e);
            addEvents(target, {
              click: function preventClick(e) {
                preventDefaultBehavior(e);
                removeEvents(target, {
                  click: preventClick
                });
              }
            });
          }

          if (carousel) {
            rafIndex = raf(function () {
              if (horizontal && !autoWidth) {
                var indexMoved = -dist * items / (viewport + gutter);
                indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                index += indexMoved;
              } else {
                var moved = -(translateInit + dist);

                if (moved <= 0) {
                  index = indexMin;
                } else if (moved >= slidePositions[slideCountNew - 1]) {
                  index = indexMax;
                } else {
                  var i = 0;

                  while (i < slideCountNew && moved >= slidePositions[i]) {
                    index = i;

                    if (moved > slidePositions[i] && dist < 0) {
                      index += 1;
                    }

                    i++;
                  }
                }
              }

              render(e, dist);
              events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
            });
          } else {
            if (moveDirectionExpected) {
              onControlsClick(e, dist > 0 ? -1 : 1);
            }
          }
        }
      } // reset


      if (options.preventScrollOnTouch === 'auto') {
        preventScroll = false;
      }

      if (swipeAngle) {
        moveDirectionExpected = '?';
      }

      if (autoplay && !animating) {
        setAutoplayTimer();
      }
    } // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height


    function updateContentWrapperHeight() {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
    }

    function getPages() {
      var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
      return Math.min(Math.ceil(rough), slideCount);
    }
    /*
     * 1. update visible nav items list
     * 2. add "hidden" attributes to previous visible nav items
     * 3. remove "hidden" attrubutes to new visible nav items
     */


    function updateNavVisibility() {
      if (!nav || navAsThumbnails) {
        return;
      }

      if (pages !== pagesCached) {
        var min = pagesCached,
            max = pages,
            fn = showElement;

        if (pagesCached > pages) {
          min = pages;
          max = pagesCached;
          fn = hideElement;
        }

        while (min < max) {
          fn(navItems[min]);
          min++;
        } // cache pages


        pagesCached = pages;
      }
    }

    function info(e) {
      return {
        container: container,
        slideItems: slideItems,
        navContainer: navContainer,
        navItems: navItems,
        controlsContainer: controlsContainer,
        hasControls: hasControls,
        prevButton: prevButton,
        nextButton: nextButton,
        items: items,
        slideBy: slideBy,
        cloneCount: cloneCount,
        slideCount: slideCount,
        slideCountNew: slideCountNew,
        index: index,
        indexCached: indexCached,
        displayIndex: getCurrentSlide(),
        navCurrentIndex: navCurrentIndex,
        navCurrentIndexCached: navCurrentIndexCached,
        pages: pages,
        pagesCached: pagesCached,
        sheet: sheet,
        isOn: isOn,
        event: e || {}
      };
    }

    return {
      version: '2.9.3',
      getInfo: info,
      events: events,
      goTo: goTo,
      play: play,
      pause: pause,
      isOn: isOn,
      updateSliderHeight: updateInnerWrapperHeight,
      refresh: initSliderTransform,
      destroy: destroy,
      rebuild: function rebuild() {
        return tns(extend(options, optionsElements));
      }
    };
  };

  return tns;
};
"use strict";

var refs = {
  loaderPartOne: document.querySelectorAll('.bars-common'),
  loaderPartTwo: document.querySelectorAll('.squares-common'),
  errorNotification: document.querySelector('.main__error-notification'),
  main: document.querySelector('.main'),
  detailsSection: document.querySelector('.details-page'),
  libraryFilrt: document.querySelector('.library-filter'),
  paginationWrapper: document.querySelector('.pagination'),
  ulForCards: document.querySelector('.gallery__list'),
  reviewCard: document.querySelector('.review'),
  sliderContainer: document.querySelector('.my-slider'),
  body: document.querySelector('.body'),
  btnTop: document.querySelector('.main__btn-scroll'),
  modalBtn: document.querySelector('.backdrop__modal__btn'),
  backdrop: document.querySelector('.backdrop'),
  player: document.querySelector('#player'),
  form: document.querySelector('.main__search-form'),
  input: document.getElementById('search-form'),
  searchByMovie: document.getElementById('option-movie'),
  searchByActor: document.getElementById('option-actor'),
  selectedOption: document.getElementsByClassName('selected-option'),
  clearInputBtn: document.querySelector('.search-form__clear'),
  btnMyLibrary: document.querySelector('.library'),
  btnHome: document.querySelector('[data-home]'),
  filmsLibrary: document.querySelector('.js-gallery'),
  btnWatched: document.querySelector('.btnWatched'),
  btnQueue: document.querySelector('.btnQueue'),
  thrillerRef: document.querySelector('[data-thriller]'),
  comedyRef: document.querySelector('[data-comedy]'),
  animationRef: document.querySelector('[data-animation]'),
  actionRef: document.querySelector('[data-action]'),
  westernRef: document.querySelector('[data-western]'),
  fantasyRef: document.querySelector('[data-fantasy]'),
  dramaRef: document.querySelector('[data-drama]'),
  logoText: document.querySelector('[data-logoText]'),
  homePage: document.querySelector('[data-home]'),
  libraryPage: document.querySelector('[data-library]'),
  layer: document.querySelector('.layer__bg'),
  title: document.querySelector('.parallax-logo'),
  title2: document.querySelectorAll('.parallax-item'),
  decor1: document.querySelector('.decoration-first'),
  decor2: document.querySelector('.decoration-second'),
  iconButton: document.querySelector('[data-icon]'),
  welcomeTextSignIn: document.querySelector('.auth__title.sign-in'),
  welcomeTextSignUp: document.querySelector('.auth__title.sign-up')
};
var loaderPartOne = refs.loaderPartOne,
    loaderPartTwo = refs.loaderPartTwo,
    errorNotification = refs.errorNotification,
    main = refs.main,
    detailsSection = refs.detailsSection,
    libraryFilrt = refs.libraryFilrt,
    paginationWrapper = refs.paginationWrapper,
    ulForCards = refs.ulForCards,
    btnTop = refs.btnTop,
    modalBtn = refs.modalBtn,
    backdrop = refs.backdrop,
    player = refs.player,
    form = refs.form,
    btnMyLibrary = refs.btnMyLibrary,
    filmsLibrary = refs.filmsLibrary,
    btnWatched = refs.btnWatched,
    btnQueue = refs.btnQueue,
    thrillerRef = refs.thrillerRef,
    comedyRef = refs.comedyRef,
    actionRef = refs.actionRef,
    animationRef = refs.animationRef,
    westernRef = refs.westernRef,
    fantasyRef = refs.fantasyRef,
    dramaRef = refs.dramaRef,
    logoText = refs.logoText,
    homePage = refs.homePage,
    libraryPage = refs.libraryPage,
    layer = refs.layer,
    title = refs.title,
    title2 = refs.title2,
    decor1 = refs.decor1,
    decor2 = refs.decor2,
    iconButton = refs.iconButton,
    reviews = refs.reviews,
    searchByMovie = refs.searchByMovie,
    searchByActor = refs.searchByActor,
    selectedOption = refs.selectedOption,
    input = refs.input,
    clearInputBtn = refs.clearInputBtn,
    reviewCard = refs.reviewCard,
    sliderContainer = refs.sliderContainer,
    welcomeTextSignIn = refs.welcomeTextSignIn,
    welcomeTextSignUp = refs.welcomeTextSignUp,
    btnHome = refs.btnHome,
    body = refs.body;
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovieApi =
/*#__PURE__*/
function () {
  function MovieApi(key, paginationWrapper, cardWrapper, sliderWrapper) {
    _classCallCheck(this, MovieApi);

    this.API_KEY = key;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
    this.DEFAULT_IMAGE = './images/default_backdrop2.jpg';
    this.DEFAULT_POSTER = './images/default_poster.jpg';
    this.VIDEO_BASE_URL = 'https://api.themoviedb.org/3/movie/';
    this.movieID = 0;
    this.searchMode = 'popular';
    this.popularFilmItem = [];
    this.watchedList = [];
    this.queueList = [];
    this.genres = [];
    this.actors = [];
    this.actorsId = [];
    this.dailyBestArr = [];
    this.currentPage = 1;
    this.params = {
      generalSearchUrl: 'search/movie?',
      searchActorUrl: 'search/person?',
      popularSearchUrl: 'movie/popular?',
      genreSearchUrl: 'genre/movie/list?',
      byGenreSearchUrl: 'discover/movie?',
      query: '',
      _page: 1,
      lastPage: ''
    };
    this.pagination = {
      window: 5,
      cardContainer: cardWrapper,
      paginationContainer: paginationWrapper,
      sliderContainer: sliderWrapper
    };
    this.imgCards = {
      defaultBackdropImg: '',
      defaultPosterImg: '',
      currentSizes: {
        backdropSize: '',
        posterSize: ''
      },
      backdropSizes: {
        mobile: 'w500',
        tablet: 'w500',
        desktop: 'w500'
      },
      posterSizes: {
        mobile: 'w342',
        tablet: 'w500',
        desktop: 'w780'
      }
    };
  }

  _createClass(MovieApi, [{
    key: "activeLoader",
    value: function activeLoader() {
      this.pagination.paginationContainer.classList.add('is-hidden');
      var loaderArr = [].concat(_toConsumableArray(loaderPartOne), _toConsumableArray(loaderPartTwo));
      loaderArr.map(function (part) {
        part.classList.remove('is-hidden');
      });
    }
  }, {
    key: "hideSlider",
    value: function hideSlider() {
      this.pagination.paginationContainer.classList.remove('is-hidden');
      var heroContainer = document.querySelector(['.hero']);
      heroContainer.classList.add('is-hidden');
    }
  }, {
    key: "showSlider",
    value: function showSlider() {
      this.pagination.paginationContainer.classList.remove('is-hidden');
      var heroContainer = document.querySelector(['.hero']);
      heroContainer.classList.remove('is-hidden');
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.pagination.paginationContainer.classList.remove('is-hidden');
      var loaderArr = [].concat(_toConsumableArray(loaderPartOne), _toConsumableArray(loaderPartTwo));
      loaderArr.map(function (part) {
        part.classList.add('is-hidden');
      });
    }
  }, {
    key: "fetchVideoById",
    value: function fetchVideoById() {
      return fetch("".concat(this.VIDEO_BASE_URL).concat(this.movieID, "/videos?api_key=").concat(this.API_KEY)).then(function (response) {
        return response.json();
      }).then(function (resp) {
        return resp;
      }).then(function (_ref) {
        var results = _ref.results;
        if (results.length === 0) onHandleTrailerError();
        return results[0];
      }).then(function (_ref2) {
        var key = _ref2.key;
        return key;
      });
    }
  }, {
    key: "dailyBestMovie",
    value: function dailyBestMovie() {
      var _this = this;

      return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(this.API_KEY)).then(function (response) {
        return response.json();
      }).then(function (_ref3) {
        var results = _ref3.results;
        _this.dailyBestArr = results;
        return results;
      }).then(function (col) {
        return col.map(function (el) {
          return _this.createSliderCard(el, 'daily');
        });
      }).then(function (arr) {
        var _this$pagination$slid;

        (_this$pagination$slid = _this.pagination.sliderContainer).append.apply(_this$pagination$slid, _toConsumableArray(arr));

        var slider = tns({
          container: '.my-slider',
          items: 3,
          slideBy: 'page',
          autoplay: true
        });
        return slider();
      });
    }
  }, {
    key: "fetchPopularFilmsList",
    value: function fetchPopularFilmsList() {
      var _this2 = this;

      this.searchMode = 'popular';
      this.resetGalleryCard();
      return fetch("".concat(this.BASE_URL).concat(this.params.popularSearchUrl, "api_key=").concat(this.API_KEY, "&language=en-US&page=").concat(this.params._page)).then(function (response) {
        return response.json();
      }).then(function (resp) {
        _this2.setRatioButtons(resp);

        return resp;
      }).then(function (_ref4) {
        var results = _ref4.results;
        _this2.popularFilmItem = results;
        return results;
      }).then(function (collection) {
        return collection.map(function (el) {
          return _this2.createCardFunc(el);
        });
      }).then(function (item) {
        var _this2$pagination$car;

        (_this2$pagination$car = _this2.pagination.cardContainer).append.apply(_this2$pagination$car, _toConsumableArray(item));
      }).finally(function () {
        _this2.pagination.cardContainer.classList.remove('is-hidden');

        _this2.hideLoader();
      });
    }
  }, {
    key: "fetchFilmsListByGenre",
    value: function fetchFilmsListByGenre(val) {
      var _this3 = this;

      this.searchMode = 'popular';
      this.resetGalleryCard();
      return fetch("".concat(this.BASE_URL).concat(this.params.byGenreSearchUrl, "api_key=").concat(this.API_KEY, "&language=en-US&page=").concat(this.params._page, "&with_genres=").concat(val)).then(function (response) {
        return response.json();
      }).then(function (resp) {
        _this3.setRatioButtons(resp);

        return resp;
      }).then(function (_ref5) {
        var results = _ref5.results;
        _this3.popularFilmItem = results;
        return results;
      }).then(function (collection) {
        return collection.map(function (el) {
          return _this3.createCardFunc(el);
        });
      }).then(function (item) {
        var _MyApi$pagination$car;

        return (_MyApi$pagination$car = MyApi.pagination.cardContainer).append.apply(_MyApi$pagination$car, _toConsumableArray(item));
      }).finally(function () {
        _this3.pagination.cardContainer.classList.remove('is-hidden');
      });
    }
  }, {
    key: "fetchGenres",
    value: function fetchGenres() {
      var _this4 = this;

      return fetch("".concat(this.BASE_URL).concat(this.params.genreSearchUrl, "api_key=").concat(this.API_KEY)).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);

        _this4.setRatioButtons(data);

        return data;
      }).then(function (_ref6) {
        var genres = _ref6.genres;
        return _this4.genres = genres;
      }).finally(function () {
        _this4.pagination.cardContainer.classList.remove('is-hidden');
      });
    }
  }, {
    key: "fetchReviews",
    value: function fetchReviews() {
      var _this5 = this;

      return fetch("".concat(this.VIDEO_BASE_URL).concat(this.movieID, "/reviews?api_key=").concat(this.API_KEY)).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      }).then(function (_ref7) {
        var results = _ref7.results;
        _this5.reviews = results.map(function (author) {
          return [author.author_details.name, author.content];
        }).slice(0, 5);
        return _this5.reviews;
      });
    }
  }, {
    key: "fetchActors",
    value: function fetchActors() {
      var _this6 = this;

      return fetch("".concat(this.BASE_URL, "movie/").concat(this.movieID, "/credits?api_key=").concat(this.API_KEY)).then(function (response) {
        return response.json();
      }).then(function (resp) {
        return resp;
      }).then(function (_ref8) {
        var cast = _ref8.cast;
        return cast;
      }).then(function (cast) {
        cast.forEach(function (el) {
          _this6.actors.push(el.name);

          return _this6.actors;
        });
      });
    }
  }, {
    key: "movieSearch",
    value: function movieSearch() {
      var _this7 = this;

      this.searchMode = 'default';
      return fetch("".concat(this.BASE_URL).concat(this.params.generalSearchUrl, "api_key=").concat(this.API_KEY, "&language=en-US&query=").concat(this.params.query, "&page=").concat(this.params._page)).then(function (data) {
        return data.json();
      }).then(function (data) {
        _this7.setRatioButtons(data);

        return data;
      }).then(function (resp) {
        if (resp.results.length === 0) {
          _this7.fetchPopularFilmsList();

          throw Error('Sorry we dont watch this kind of movies!');
        }

        _this7.resetGalleryCard();

        _this7.setRatioButtons(resp);

        return resp;
      }).then(function (_ref9) {
        var results = _ref9.results;
        _this7.popularFilmItem = results;
        return results;
      }).then(function (collection) {
        return collection.map(function (el) {
          return _this7.createCardFunc(el);
        });
      }).then(function (item) {
        var _MyApi$pagination$car2;

        return (_MyApi$pagination$car2 = MyApi.pagination.cardContainer).append.apply(_MyApi$pagination$car2, _toConsumableArray(item));
      }).catch(function (error) {
        return _this7.handlErrors(error);
      }).finally(function () {
        _this7.pagination.cardContainer.classList.remove('is-hidden');

        _this7.hideLoader();
      });
    }
  }, {
    key: "fetchActorsId",
    value: function fetchActorsId(name) {
      var _this8 = this;

      return fetch("https://api.themoviedb.org/3/search/person?api_key=".concat(this.API_KEY, "&language=en-US&query=").concat(name)).then(function (response) {
        return response.json();
      }).then(function (resp) {
        return resp;
      }).then(function (resp) {
        if (resp.results.length === 0) {
          _this8.fetchPopularFilmsList();

          throw Error('Sorry we dont know this actor!');
        }

        _this8.resetGalleryCard();

        _this8.setRatioButtons(resp);

        return resp;
      }).then(function (_ref10) {
        var results = _ref10.results;
        return results;
      }).then(function (results) {
        var castList = results.reduce(function (acc, el) {
          acc.push(el.id);
          return acc;
        }, []).slice(0, 1);
        MyApi.movieSearchByActors(castList);
      }).catch(function (error) {
        return _this8.handlErrors(error);
      }).finally(function () {
        _this8.hideLoader();
      });
    }
  }, {
    key: "movieSearchByActors",
    value: function movieSearchByActors(value) {
      var _this9 = this;

      this.searchMode = 'popular';
      return fetch("".concat(this.BASE_URL, "discover/movie?api_key=").concat(this.API_KEY, "&language=en-US&query=").concat(this.params.query, "&page=").concat(this.params._page, "&with_cast=").concat(value)).then(function (data) {
        return data.json();
      }).then(function (data) {
        _this9.setRatioButtons(data);

        return data;
      }).then(function (resp) {
        if (resp.results.length === 0) {
          _this9.fetchPopularFilmsList();

          throw Error('Sorry we dont know this actor!');
        }

        _this9.resetGalleryCard();

        _this9.setRatioButtons(resp);

        return resp;
      }).then(function (_ref11) {
        var results = _ref11.results;
        _this9.popularFilmItem = results;
        return results;
      }).then(function (collection) {
        return collection.map(function (el) {
          return _this9.createCardFunc(el);
        });
      }).then(function (item) {
        var _MyApi$pagination$car3;

        return (_MyApi$pagination$car3 = MyApi.pagination.cardContainer).append.apply(_MyApi$pagination$car3, _toConsumableArray(item));
      }).catch(function (error) {
        return _this9.handlErrors(error);
      }).finally(function () {
        _this9.pagination.cardContainer.classList.remove('is-hidden');

        _this9.hideLoader();
      });
    }
  }, {
    key: "handlErrors",
    value: function handlErrors(text) {
      errorNotification.classList.remove('is-hidden');
      errorNotification.textContent = text.message || text;
      setTimeout(function () {
        errorNotification.classList.add('is-hidden');
      }, 3000);
    }
  }, {
    key: "resetGalleryCard",
    value: function resetGalleryCard() {
      this.pagination.cardContainer.innerHTML = '';
      reviewCard.innerHTML = '';
    }
  }, {
    key: "createSliderCard",
    value: function createSliderCard(data, siteSection) {
      var _this10 = this;

      var id = data.id;
      var sliderDiv = document.createElement('div');
      sliderDiv.classList.add('slider__item');
      sliderDiv.style.backgroundImage = "url('".concat(MyApi.IMAGE_BASE_URL).concat(MyApi.imgCards.currentSizes.backdropSize).concat(data.poster_path, "')");
      sliderDiv.addEventListener('click', function () {
        _this10.movieID = id;

        _this10.pagination.cardContainer.classList.add('is-hidden');

        _this10.hideSlider();

        _this10.activeLoader();

        window.scrollTo(0, document.body.children[7].offsetTop);
        setTimeout(function () {
          main.classList.add('is-hidden');

          _this10.activeDetailsPage(id, siteSection);
        }, 2000);

        _this10.fetchActors(_this10.movieID);
      });
      return sliderDiv;
    }
  }, {
    key: "createCardFunc",
    value: function createCardFunc(itemData, siteSection) {
      var _this11 = this;

      main.classList.remove('is-hidden');
      var backdrop_path = itemData.backdrop_path,
          title = itemData.title,
          id = itemData.id,
          vote_average = itemData.vote_average,
          release_date = itemData.release_date;
      var imgCardSize = backdrop_path ? "".concat(MyApi.IMAGE_BASE_URL).concat(MyApi.imgCards.currentSizes.backdropSize).concat(backdrop_path) : MyApi.imgCards.defaultBackdropImg;
      var yearOfRelease = release_date ? "(".concat(release_date.slice(0, 4), ")") : '';
      var cardImg = document.createElement('img');
      cardImg.setAttribute('src', imgCardSize);
      cardImg.classList.add('gallery__item-image');
      cardImg.setAttribute('alt', title);
      var imgContainer = document.createElement('div');
      imgContainer.classList.add('movie__image');
      imgContainer.append(cardImg);
      var filmTitle = document.createElement('p');
      filmTitle.classList.add('movie__title');
      filmTitle.textContent = "".concat(title, " ").concat(yearOfRelease);
      var spanRating = document.createElement('span');
      spanRating.classList.add('movie__genre');
      spanRating.textContent = "\u2606  " + "".concat(vote_average);
      var cardContainer = document.createElement('div');
      cardContainer.classList.add('gallery__card-movie');
      cardContainer.append(imgContainer, filmTitle, spanRating);
      var item = document.createElement('li');
      item.classList.add('gallery__list-item');
      item.append(cardContainer);
      item.addEventListener('click', function () {
        _this11.movieID = id;
        messageTitle.innerHTML = '';

        _this11.pagination.cardContainer.classList.add('is-hidden');

        _this11.hideSlider();

        _this11.activeLoader(); //Скролит вверх


        window.scrollTo(0, document.body.children[7].offsetTop);
        setTimeout(function () {
          _this11.activeDetailsPage(id, siteSection);
        }, 2000);

        _this11.fetchActors(_this11.movieID);
      });
      return item;
    }
  }, {
    key: "activeDetailsPage",
    value: function activeDetailsPage(id, libraryIndicator) {
      var _this12 = this;

      form.classList.add('is-hidden');
      btnTop.classList.add('is-hidden');
      main.classList.add('is-hidden');
      detailsSection.classList.remove('is-hidden');
      this.movieID = id;
      var collectionItems = [];

      if (libraryIndicator === 'Queue') {
        collectionItems = this.queueList;
      } else if (libraryIndicator === 'Watched') {
        collectionItems = this.watchedList;
      } else if (!libraryIndicator) {
        collectionItems = this.popularFilmItem;
      } else if (libraryIndicator === 'daily') {
        collectionItems = this.dailyBestArr;
      }

      var array = collectionItems.filter(function (item) {
        if (item.id === id) return item;
      });
      var item = array[0];
      var genresArray = [];
      var itemGenres = item.genre_ids;
      itemGenres.filter(function (item) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this12.genres[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;
            if (item === key.id) return genresArray.push(key.name);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      var genresText = genresArray.join(', ');
      var tdGenre = document.createElement('td');
      tdGenre.textContent = 'genre';
      var tdGenreName = document.createElement('td');
      tdGenreName.textContent = genresText;
      var trGenre = document.createElement('tr');
      trGenre.append(tdGenre, tdGenreName);
      trGenre.classList.add('details-page__rows');
      var mainActors = this.actors.slice(0, 5).join(', ');
      var tdActors = document.createElement('td');
      tdActors.textContent = 'actors';
      var tdActorsName = document.createElement('td');
      tdActorsName.textContent = mainActors;
      var trActors = document.createElement('tr');
      trActors.append(tdActors, tdActorsName);
      trActors.classList.add('details-page__rows');
      var tdTitle = document.createElement('td');
      tdTitle.textContent = 'original title';
      var tdTitleName = document.createElement('td');
      tdTitleName.textContent = item.original_title;
      var trTitle = document.createElement('tr');
      trTitle.classList.add('details-page__rows');
      trTitle.append(tdTitle, tdTitleName);
      var tdPopularity = document.createElement('td');
      tdPopularity.textContent = 'popularity';
      var tdPopularityName = document.createElement('td');
      tdPopularityName.textContent = item.popularity;
      var trPopularity = document.createElement('tr');
      trPopularity.classList.add('details-page__rows');
      trPopularity.append(tdPopularity, tdPopularityName);
      var tdVote = document.createElement('td');
      tdVote.textContent = 'vote / votes';
      var spanVote = document.createElement('span');
      spanVote.classList.add('rows__vote');
      spanVote.textContent = item.vote_average;
      var tdVoteName = document.createElement('td');
      tdVoteName.textContent = "/ ".concat(item.vote_count);
      spanVote.appendChild(tdVoteName);
      var trVotes = document.createElement('tr');
      trVotes.classList.add('details-page__rows');
      trVotes.append(tdVote, spanVote);
      var table = document.createElement('table');
      table.classList.add('details-page__table');
      table.append(trVotes, trPopularity, trTitle, trGenre, trActors);
      var title = document.createElement('h2');
      title.classList.add('details-page__title');
      title.textContent = item.title;
      var div = document.createElement('div');
      div.append(title, table);
      var divPage = document.createElement('div');
      divPage.classList.add('details-page__about');
      var titleText = document.createElement('h3');
      titleText.classList.add('details-page__title', 'second');
      titleText.textContent = 'About';
      var spanAbout = document.createElement('span');
      spanAbout.classList.add('material-icons', 'span-about');
      spanAbout.textContent = 'info';
      titleText.append(spanAbout);
      var textAbout = document.createElement('p');
      textAbout.classList.add('details-page__text');
      textAbout.textContent = item.overview;
      var reviewsTitle = document.createElement('h3');
      reviewsTitle.classList.add('details-page__title', 'second', 'reviews-title');
      reviewsTitle.textContent = 'Reviews';
      var spanInput = document.createElement('span');
      spanInput.classList.add('material-icons', 'span-input');
      spanInput.textContent = 'input';
      reviewsTitle.append(spanInput);
      this.fetchReviews();
      reviewsTitle.addEventListener('click', function () {
        if (_this12.reviews.length === 0) {
          reviewsTitle.textContent = 'Sorry, we do not have any review yet!';
          return;
        }

        window.scrollTo({
          top: document.body.children[6].offsetTop,
          behavior: 'smooth'
        });

        if (!userStatus) {
          askingToMakeAuthorization();
          return;
        }

        detailsSection.classList.add('is-hidden');
        var btnClose = document.createElement('button');
        btnClose.classList.add('button__add', 'button-close', 'btn-reviews');
        btnClose.textContent = 'X';
        btnClose.addEventListener('click', function () {
          detailsSection.classList.remove('is-hidden');
          reviewCard.innerHTML = '';
          messageTitle.innerHTML = '';
        });
        reviewCard.append(btnClose);

        _this12.reviews.map(function (el) {
          if (el[0] === '') {
            el[0] = 'anonym';
          }

          var reviewsAutor = document.createElement('h3');
          reviewsAutor.classList.add('reviews-autor');
          var autorFace = document.createElement('span');
          autorFace.classList.add('material-icons', 'icons-face');
          autorFace.textContent = 'face';
          var reviewsText = document.createElement('p');
          reviewsText.classList.add('reviews-text');
          reviewsAutor.textContent = el[0];
          reviewsText.textContent = el[1].split(' ').slice(0, 100).join(' ') + '...';
          reviewCard.append(autorFace, reviewsAutor, reviewsText);
          reviewsText.addEventListener('click', function () {
            reviewsText.textContent = el[1];
          });
        });
      });
      divPage.append(titleText, textAbout, reviewsTitle);
      var buttonFirst = document.createElement('button');
      buttonFirst.classList.add('button__add', 'first');
      buttonFirst.setAttribute('type', 'submite');
      buttonFirst.textContent = 'add to watched';
      buttonFirst.addEventListener('click', function () {
        if (!userStatus) {
          askingToMakeAuthorization();
        } else {
          _this12.onWatchedClick();
        }
      });
      var buttonSecond = document.createElement('button');
      buttonSecond.classList.add('button__add');
      buttonSecond.setAttribute('type', 'submite');
      buttonSecond.textContent = 'add to queue';
      buttonSecond.addEventListener('click', function () {
        if (!userStatus) {
          askingToMakeAuthorization();
        } else {
          _this12.onQueueClick();
        }
      });
      var buttonTrailer = document.createElement('button');
      buttonTrailer.classList.add('button__add');
      buttonTrailer.setAttribute('type', 'submite');
      buttonTrailer.textContent = 'watch the trailer';
      buttonTrailer.addEventListener('click', function () {
        if (!userStatus) {
          askingToMakeAuthorization();
        } else {
          _this12.onTrailerClick();
        }
      });
      var divBtn = document.createElement('div');
      divBtn.classList.add('details-page__button');
      divBtn.append(buttonFirst, buttonSecond, buttonTrailer);
      var detailsPageDecr = document.createElement('div');
      detailsPageDecr.classList.add('details-page__description');
      detailsPageDecr.append(div, divPage, divBtn);
      var img = document.createElement('img');
      var posterImage = item.poster_path ? "".concat(MyApi.IMAGE_BASE_URL).concat(MyApi.imgCards.currentSizes.posterSize).concat(item.poster_path) : MyApi.DEFAULT_POSTER;
      img.setAttribute('src', posterImage);
      img.setAttribute('alt', img.title);
      img.setAttribute('width', '100%');
      img.setAttribute('data', 'poster');
      var aImg = document.createElement('a');
      aImg.setAttribute('href', '#');
      aImg.appendChild(img);
      var btnClose = document.createElement('button');
      btnClose.classList.add('button__add', 'button-close');
      btnClose.textContent = 'X';
      var divImage = document.createElement('div');
      divImage.classList.add('details-page__foto');
      divImage.append(aImg, btnClose);
      var container = document.createElement('div');
      container.classList.add('container', 'details-page__film');
      container.append(divImage, detailsPageDecr);
      detailsSection.appendChild(container);
      this.hideLoader();
      btnAddWatched = buttonFirst;
      btnAddQueue = buttonSecond;
      selectFilm = item;
      monitorButtonStatusText();
      btnClose.addEventListener('click', function () {
        detailsSection.classList.add('is-hidden');
        detailsSection.innerHTML = '';
        reviewCard.innerHTML = '';
        main.classList.remove('is-hidden');

        if (!libraryIndicator || libraryIndicator === 'daily') {
          form.classList.remove('is-hidden');

          _this12.pagination.paginationContainer.classList.remove('is-hidden');

          _this12.pagination.cardContainer.classList.remove('is-hidden');

          btnTop.classList.remove('is-hidden');

          _this12.showSlider();

          _this12.actors = [];
        } else if (libraryIndicator === 'Queue') {
          libraryFilrt.classList.remove('is-hidden');
          drawQueueFilmList();
        } else if (libraryIndicator === 'Watched') {
          libraryFilrt.classList.remove('is-hidden');
          drawWatchedFilmList();
        }
      });
    }
  }, {
    key: "onTrailerClick",
    value: function onTrailerClick() {
      openModal(event);
    }
  }, {
    key: "onWatchedClick",
    value: function onWatchedClick() {
      toggleToLocal(filmsWatchedKey);
    }
  }, {
    key: "onQueueClick",
    value: function onQueueClick() {
      toggleToLocal(filmsQueueKey);
    }
  }, {
    key: "setPrevNextButtons",
    value: function setPrevNextButtons(data) {
      var _this13 = this;

      var prevBtn = document.createElement('button');
      var nextBtn = document.createElement('button');
      var lastBtn = document.createElement('button');
      var firsBtn = document.createElement('button');
      lastBtn.textContent = '>>';
      firsBtn.textContent = '<<';
      lastBtn.classList.add('pagination__turning-btn');
      firsBtn.classList.add('pagination__turning-btn');
      prevBtn.textContent = '<';
      prevBtn.classList.add('pagination__turning-btn');
      nextBtn.textContent = '>';
      nextBtn.classList.add('pagination__turning-btn');

      if (this.page === 1) {
        prevBtn.classList.add('is-hidden');
        firsBtn.classList.add('is-hidden');
        firsBtn.disabled = true;
      }

      if (this.page === data.total_pages) {
        nextBtn.classList.add('is-hidden');
        lastBtn.classList.add('is-hidden');
      }

      if (window.innerWidth < 400) {
        if (this.page < 3) {
          firsBtn.classList.add('is-hidden');
        }
      }

      if (this.page < 4) {
        firsBtn.classList.add('is-hidden');
      }

      if (data.total_pages < 6) {
        firsBtn.classList.add('is-hidden');
        lastBtn.classList.add('is-hidden');
        nextBtn.classList.add('is-hidden');
      }

      prevBtn.addEventListener('click', function () {
        _this13.pagesScroll();

        _this13.decrementPage();
      });
      nextBtn.addEventListener('click', function () {
        _this13.incrementPage();

        _this13.pagesScroll();
      });
      firsBtn.addEventListener('click', function () {
        _this13.resetPage();

        _this13.pagesScroll();
      });
      lastBtn.addEventListener('click', function () {
        _this13.pagesScroll();

        _this13.params._page = _this13.params.lastPage;
      });
      this.pagination.paginationContainer.prepend(firsBtn, prevBtn);
      this.pagination.paginationContainer.append(nextBtn, lastBtn);
    }
  }, {
    key: "pagesScroll",
    value: function pagesScroll() {
      var _this14 = this;

      this.activeLoader();
      this.resetGalleryCard();
      window.scrollTo(0, document.body.children[7].offsetTop);
      this.searchMode === 'popular' ? setTimeout(function () {
        _this14.fetchPopularFilmsList();
      }, 2000) : setTimeout(function () {
        _this14.movieSearch();
      }, 2000);
    }
  }, {
    key: "setRatioButtons",
    value: function setRatioButtons(data) {
      var _this15 = this,
          _this$pagination$pagi;

      if (window.innerWidth < 400) {
        this.pagination.window = 3;
      }

      var maxLeft = this.params._page - Math.floor(this.pagination.window / 2);
      var maxRight = this.params._page + Math.floor(this.pagination.window / 2);
      this.params.lastPage = data.total_pages;
      this.pagination.paginationContainer.innerHTML = '';

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = this.pagination.window;
      }

      if (maxRight > data.total_pages) {
        maxLeft = this.params._page - (this.pagination.window - 1);
        maxRight = data.total_pages;
        if (maxLeft < 1) maxLeft = 1;
      }

      var btnArray = [];

      for (var i = maxLeft; i <= maxRight; i++) {
        var _button = document.createElement('button');

        _button.textContent = i;

        _button.classList.add('pagination__btn'); // добавляет класс для стилей


        if (+_button.textContent === this.params._page) _button.classList.add('active');

        _button.addEventListener('click', function (e) {
          _this15.activeLoader();

          window.scrollTo(0, document.body.children[7].clientHeight);
          _this15.page = +e.target.textContent;
          _this15.currentPage = _this15.page;
          _this15.pagination.cardContainer.innerHTML = '';
          _this15.searchMode === 'popular' ? setTimeout(function () {
            _this15.fetchPopularFilmsList();
          }, 2000) : setTimeout(function () {
            _this15.movieSearch();
          }, 2000);
        });

        btnArray.push(_button);
      }

      (_this$pagination$pagi = this.pagination.paginationContainer).append.apply(_this$pagination$pagi, btnArray);

      if (this.loaderStatus === 'active') {
        button.classList.add('is-hidden');
      }

      this.setPrevNextButtons(data);
    }
  }, {
    key: "incrementPage",
    value: function incrementPage() {
      return this.params._page += 1;
    }
  }, {
    key: "decrementPage",
    value: function decrementPage() {
      return this.params._page -= 1;
    }
  }, {
    key: "resetPage",
    value: function resetPage() {
      return this.params._page = 1;
    }
  }, {
    key: "checkBackdropImgSize",
    value: function checkBackdropImgSize() {
      if (window.innerWidth >= 1024) {
        this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.desktop;
        this.imgCards.defaultBackdropImg = this.DEFAULT_IMAGE;
        return;
      }

      if (window.innerWidth < 1024) {
        this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.tablet;
        this.imgCards.defaultBackdropImg = this.DEFAULT_IMAGE;
        return;
      }
    }
  }, {
    key: "checkPosterImgSize",
    value: function checkPosterImgSize() {
      if (window.innerWidth >= 1200) {
        this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.desktop;
        this.imgCards.defaultPosterImg = '../images/default_poster.jpg';
      }

      if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.tablet;
        this.imgCards.defaultPosterImg = '../images/default_poster.jpg';
      }

      if (window.innerWidth < 768) {
        this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.mobile;
        this.imgCards.defaultPosterImg = '../images/default_poster.jpg';
      }
    }
  }, {
    key: "page",
    get: function get() {
      return this.params._page;
    },
    set: function set(value) {
      return this.params._page = value;
    }
  }]);

  return MovieApi;
}();

var API_KEY = '91085a172e1ffb2047d72641d0a91356';
var MyApi = new MovieApi(API_KEY, paginationWrapper, ulForCards, sliderContainer);
'use strict';

history.scrollRestoration = 'manual'; //kills auto scroll after page reload

MyApi.checkBackdropImgSize();
MyApi.checkPosterImgSize();
MyApi.fetchPopularFilmsList();
MyApi.dailyBestMovie();
MyApi.fetchGenres(); // Button UP Logic

btnTop.addEventListener('click', function () {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.onscroll = function () {
  parallaxCheck();
  handleScroll();
};

function handleScroll() {
  var bodyScrollTop = document.body.scrollTop;
  var elementScrollTop = document.documentElement.scrollTop;

  if (bodyScrollTop > 500 || elementScrollTop > 500) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
} // Modal on Details Page Logic
//modalBtn.addEventListener('click', closeModal);


backdrop.addEventListener('click', onBeckDropCkick); // Close Modal on Backdrop click

function onHandleTrailerError() {
  player.src = "https://www.youtube.com/embed/Zq_zgig9DqQ?autoplay=1";
}

function openModal(event) {
  event.preventDefault();
  body.classList.add('overflow'); // youTubeSizes();

  MyApi.fetchVideoById().then(function (key) {
    player.src = "https://www.youtube.com/embed/".concat(key, "?autoplay=1");
  });
  backdrop.classList.remove('backdrop--hidden');
  window.addEventListener('keydown', onKeybordPress);
}

function closeModal() {
  player.src = '';
  backdrop.classList.add('backdrop--hidden');
  body.classList.remove('overflow');
  window.removeEventListener('keydown', onKeybordPress);
} // Close Modal by cleck on Btn Escape


function onKeybordPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
} // Close Modal by cleck on Backdrop


function onBeckDropCkick(event) {
  if (event.target.nodeName === 'DIV') {
    closeModal();
  }
}
"use strict";

searchByActor.addEventListener('click', function () {
  input.placeholder = 'Which actor you wish?';
  searchByMovie.classList.remove('selected-option');
  searchByActor.classList.add('selected-option');
});
searchByMovie.addEventListener('click', function () {
  input.placeholder = 'What movie you wish?';
  searchByMovie.classList.add('selected-option');
  searchByActor.classList.remove('selected-option');
});
clearInputBtn.addEventListener('click', function () {
  input.value = '';
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var emptyError = 'There is no nameless movies!';
  var inputValue = e.target.elements.query.value;

  if (inputValue.trim() === '') {
    return MyApi.handlErrors(emptyError);
  } else {
    MyApi.resetGalleryCard();
    MyApi.activeLoader();
    MyApi.resetPage();
    MyApi.searchMode = 'default';
    MyApi.params.query = inputValue;
    setTimeout(function () {
      if (searchByActor.classList.contains('selected-option')) {
        MyApi.fetchActorsId(inputValue);
      } else {
        MyApi.movieSearch();
      }
    }, 3000);
  }
});
"use strict";

var btnAddQueue = '';
var btnAddWatched = '';
var selectFilm = '';

function monitorButtonStatusText() {
  var arrFilmsQueue = JSON.parse(localStorage.getItem(filmsQueueKey));

  if (arrFilmsQueue === null) {
    btnAddQueue.textContent = 'Add to queue';
  } else {
    if (arrFilmsQueue.find(function (el) {
      return el.id === selectFilm.id;
    })) {
      btnAddQueue.textContent = 'Delete from queue';
    } else {
      btnAddQueue.textContent = 'Add to queue';
    }
  }

  var arrFilmsWatched = JSON.parse(localStorage.getItem(filmsWatchedKey));

  if (arrFilmsWatched === null) {
    btnAddWatched.textContent = 'Add to watched';
  } else {
    if (arrFilmsWatched.find(function (el) {
      return el.id === selectFilm.id;
    })) {
      btnAddWatched.textContent = 'Delete from watched';
    } else {
      btnAddWatched.textContent = 'Add to watched';
    }
  }
}

function toggleToLocal(key) {
  var films = JSON.parse(localStorage.getItem(key));

  if (films === null) {
    films = [];
    addFilm();
  } else {
    if (films.find(function (el) {
      return el.id === selectFilm.id;
    })) {
      deleteFilm(selectFilm.id);
    } else {
      addFilm();
    }
  }

  function addFilm() {
    films.push(selectFilm);
  }

  function deleteFilm(idFilm) {
    films = films.filter(function (el) {
      return el.id != idFilm;
    });
  }

  if (films.length === 0) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(films));
  }

  monitorButtonStatusText();
}
"use strict";

btnQueue.addEventListener('click', drawQueueFilmList);
btnWatched.addEventListener('click', drawWatchedFilmList);
var queue = "You do not have to queue movies to watch. Add them.";
var watch = "You do not have watched movies. Add them.";
var filmsQueueKey = 'filmsQueue';
var filmsWatchedKey = 'filmsWatched';

function drawQueueFilmList(key) {
  var filmsQueueLocalStorage = localStorage.getItem(filmsQueueKey, key);
  var parsedFilmsQueue = JSON.parse(filmsQueueLocalStorage);
  MyApi.pagination.cardContainer.classList.remove('is-hidden');
  MyApi.queueList = parsedFilmsQueue;
  MyApi.resetGalleryCard();
  btnQueue.classList.add('active');
  btnWatched.classList.remove('active');
  btnWatched.disabled = false;
  btnQueue.disabled = true;
  var INDICATOR_QUEUE = 'Queue';

  if (parsedFilmsQueue === null || parsedFilmsQueue.length === 0) {
    createPlugTitle(queue, filmsLibrary);
  } else {
    messageTitle.innerHTML = '';
    createParseFilms(parsedFilmsQueue, filmsLibrary, INDICATOR_QUEUE);
  }
}

function drawWatchedFilmList(key) {
  var filmsWatchedLocalStorage = localStorage.getItem(filmsWatchedKey, key);
  var parsedFilmsWatched = JSON.parse(filmsWatchedLocalStorage);
  MyApi.pagination.cardContainer.classList.remove('is-hidden');
  MyApi.watchedList = parsedFilmsWatched;
  MyApi.resetGalleryCard();
  btnQueue.classList.remove('active');
  btnWatched.classList.add('active');
  btnWatched.disabled = true;
  btnQueue.disabled = false;
  var INDICATOR_WATCHED = 'Watched';

  if (parsedFilmsWatched === null || parsedFilmsWatched.length === 0) {
    createPlugTitle(watch, filmsLibrary);
  } else {
    messageTitle.innerHTML = '';
    createParseFilms(parsedFilmsWatched, filmsLibrary, INDICATOR_WATCHED);
  }
}

function createParseFilms(film, library, siteSection) {
  film.forEach(function (el) {
    var LibraryCard = MyApi.createCardFunc(el, siteSection);
    library.append(LibraryCard);
    return library;
  });
}

var messageTitle = document.getElementsByClassName('message-title');

function createPlugTitle(title, library) {
  if (messageTitle.length === 0) {
    messageTitle = document.createElement('h2');
    messageTitle.textContent = title;
    messageTitle.classList.add('message-title');
    library.insertAdjacentElement('beforebegin', messageTitle);
  } else {
    messageTitle.textContent = title;
  }

  return library;
}

btnMyLibrary.addEventListener('click', handleUserStatusForLibrary);

function openLibrary() {
  window.scrollTo({
    top: document.body.children[6].offsetTop,
    behavior: 'smooth'
  });
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  btnQueue.disabled = false;
  btnWatched.disabled = false;
  btnWatched.classList.remove('active');
  btnQueue.classList.remove('active');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  form.classList.add('is-hidden');
  form.style.display = 'none';
  libraryFilrt.classList.remove('is-hidden');
  main.classList.remove('is-hidden');
}

btnHome.addEventListener('click', goHome);
iconButton.addEventListener('click', goHome);

function goHome() {
  window.scrollTo({
    top: document.body.children[7].offsetTop,
    behavior: 'smooth'
  });
  MyApi.showSlider();
  MyApi.resetGalleryCard();
  btnQueue.disabled = true;
  btnWatched.disabled = true;
  messageTitle.innerHTML = '';
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  libraryFilrt.classList.add('is-hidden');
  main.classList.remove('is-hidden');
  form.classList.remove('is-hidden');
  form.style.display = 'block';
  MyApi.fetchPopularFilmsList();
}

function askingToMakeAuthorization() {
  welcomeTextSignUp.textContent = DEMAND_TO_REGISTER;
  authModalSignUp.classList.remove('signUp-hidden');
  authModalSignIn.classList.add('signIn-hidden');
  authBackdrop.classList.remove('auth__backdrop--hidden');
}

function handleUserStatusForLibrary() {
  if (!userStatus) {
    askingToMakeAuthorization();
  } else {
    openLibrary();
  }
}
"use strict";

var searchGenre = '';
thrillerRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = thrillerRef.innerHTML.toLowerCase();
  thrillerRef.classList.add('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});
comedyRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = comedyRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.add('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});
actionRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = actionRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.add('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});
animationRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = animationRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.add('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});
westernRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = westernRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.add('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});
fantasyRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = fantasyRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.add('current');
  dramaRef.classList.remove('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});
dramaRef.addEventListener('click', function () {
  MyApi.hideSlider();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  messageTitle.innerHTML = '';
  searchGenre = dramaRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.add('current');
  setTimeout(function () {
    drawFilmListByGenre();
  }, 2000);
});

function drawFilmListByGenre() {
  var genres, result;
  MyApi.fetchGenres().then(function (res) {
    genres = res;
  }).then(function () {
    return genres.forEach(function (element) {
      if (element.name.toLowerCase() === searchGenre) {
        result = element.id;
      }
    });
  }).then(function () {
    MyApi.hideLoader();
    MyApi.fetchFilmsListByGenre(result);
  }).catch(console.log.bind(console));
}
"use strict";

function classToggle() {
  if (document.body.clientWidth <= 320) {
    logoText.classList.add('is-hidden');
  } else {
    logoText.classList.remove('is-hidden');
  }
}

classToggle();
window.addEventListener('resize', function () {
  if (document.body.clientWidth <= 320) {
    logoText.classList.add('is-hidden');
  } else {
    logoText.classList.remove('is-hidden');
  }
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var parallax = function parallax(event) {
  var speed = layer.getAttribute('data-speed');
  var items;
  layer.style.transform = "translateX(".concat(event.clientX * speed / 1300, "px) translateY(").concat(event.clientY * speed / 1000, "px)");
  title.style.transform = "translateX(".concat(event.clientX * 40 / 700, "px) translateY(").concat(event.clientY * 40 / 400, "px)");
  decor2.style.transform = "translateX(".concat(event.clientX * 40 / 500, "px) translateY(").concat(event.clientY * 30 / 600, "px)");
  items = _toConsumableArray(title2).forEach(function (el) {
    el.style.transform = "translateX(".concat(event.clientX * 40 / 600, "px) translateY(").concat(event.clientY * 30 / 500, "px)");
  });
  decor1.style.transform = "translateX(".concat(event.clientX * 40 / 350, "px) translateY(").concat(event.clientY * 40 / 700, "px)");
};

var layer = document.querySelector('.layer__bg');
var title = document.querySelector('.parallax-logo');
var title2 = document.querySelectorAll('.parallax-item');
var decor1 = document.querySelector('.decoration-first');
var decor2 = document.querySelector('.decoration-second');
var elementScrollTop1 = document.documentElement.scrollTop;

function parallaxWidthCheck() {
  if (window.innerWidth >= 1024) {
    document.addEventListener('mousemove', parallax);
    return;
  }

  if (window.innerWidth < 1024) {
    document.removeEventListener('mousemove', parallax);
    return;
  }
}

function parallaxCheck() {
  var elementHeight = document.body.children[1].clientHeight;
  var documentScroll = document.documentElement.scrollTop;

  if (documentScroll > elementHeight) {
    document.removeEventListener('mousemove', parallax);
    return;
  }

  if (documentScroll > 330 && documentScroll < 600 && window.innerWidth >= 1024) {
    document.addEventListener('mousemove', parallax);
    return;
  }
}