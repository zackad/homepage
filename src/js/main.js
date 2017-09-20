'use strict';

import '../index.html';
import '../sass/main.scss';

/**
 * Main javascript file
 */
var container = document.querySelector('.vertical-align');
translateY('.vertical-align');

/**
 * Check if an element is overflowed vertically or horizontally
 * @param  {element}  element   Node element
 * @return {Boolean}            true if overflowed, false if not
 */
function isOverflowed(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

/**
 * Add transformartion class for centering content into viewport if the content
 * is not overflowed.
 *
 * @param  {string} selector    css selector string
 * @return {void}               return nothing
 */
function translateY(selector) {
    var element = document.querySelector(selector);
    if (isOverflowed(element.parentNode)) {
        element.classList.remove('translate-y');
        element.parentNode.classList.add('overflow-y');
    } else {
        element.classList.add('translate-y');
    }
}
