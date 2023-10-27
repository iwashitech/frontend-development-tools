const $ = require("jquery");

import {changeCss, changeBorder, changeFontSize} from './include/func';

$(function() {
  changeCss();
  changeFontSize();
  changeBorder();
});