window.imports=function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=345)}({264:function(e,t,o){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=o(344),r=function(e){return e&&e.__esModule?e:{default:e}}(l),a=window.$,s=function(){function e(){var t=this;i(this,e),new r.default,a(".js-from-files-history-btn").on("click",function(){return t.showFilesHistoryHandler()}),a(".js-close-files-history-block-btn").on("click",function(){return t.closeFilesHistoryHandler()}),a("#fileHistoryTable").on("click",".js-use-file-btn",function(e){return t.useFileFromFilesHistory(e)}),a(".js-change-import-file-btn").on("click",function(){return t.changeImportFileHandler()}),a(".js-import-file").on("change",function(){return t.uploadFile()}),this.toggleSelectedFile(),this.handleSubmit()}return n(e,[{key:"handleSubmit",value:function(){a(".js-import-form").on("submit",function(){var e=a(this);if("1"===e.find('input[name="truncate"]:checked').val())return confirm(e.data("delete-confirm-message")+" "+a.trim(a("#entity > option:selected").text().toLowerCase())+"?")})}},{key:"toggleSelectedFile",value:function(){var e=a("#csv").val();e.length>0&&(this.showImportFileAlert(e),this.hideFileUploadBlock())}},{key:"changeImportFileHandler",value:function(){this.hideImportFileAlert(),this.showFileUploadBlock()}},{key:"showFilesHistoryHandler",value:function(){this.showFilesHistory(),this.hideFileUploadBlock()}},{key:"closeFilesHistoryHandler",value:function(){this.closeFilesHistory(),this.showFileUploadBlock()}},{key:"showFilesHistory",value:function(){a(".js-files-history-block").removeClass("d-none")}},{key:"closeFilesHistory",value:function(){a(".js-files-history-block").addClass("d-none")}},{key:"useFileFromFilesHistory",value:function(e){var t=a(e.target).closest(".btn-group").data("file");a(".js-import-file-input").val(t),this.showImportFileAlert(t),this.closeFilesHistory()}},{key:"showImportFileAlert",value:function(e){a(".js-import-file-alert").removeClass("d-none"),a(".js-import-file").text(e)}},{key:"hideImportFileAlert",value:function(){a(".js-import-file-alert").addClass("d-none")}},{key:"hideFileUploadBlock",value:function(){a(".js-file-upload-form-group").addClass("d-none")}},{key:"showFileUploadBlock",value:function(){a(".js-file-upload-form-group").removeClass("d-none")}},{key:"enableFilesHistoryBtn",value:function(){a(".js-from-files-history-btn").removeAttr("disabled")}},{key:"showImportFileError",value:function(e,t,o){var i=a(".js-import-file-error"),n=e+" ("+this.humanizeSize(t)+")";i.find(".js-file-data").html(n),i.find(".js-error-message").html(o),i.removeClass("d-none")}},{key:"hideImportFileError",value:function(){a(".js-import-file-error").addClass("d-none")}},{key:"humanizeSize",value:function(e){return"number"!=typeof e?"":e>=1e9?(e/1e9).toFixed(2)+" GB":e>=1e6?(e/1e6).toFixed(2)+" MB":(e/1e3).toFixed(2)+" KB"}},{key:"uploadFile",value:function(){var e=this;this.hideImportFileError();var t=a("#file"),o=t.prop("files")[0];if(t.data("max-file-upload-size")<o.size)return void this.showImportFileError(o.name,o.size,"File is too large");var i=new FormData;i.append("file",o),a.ajax({type:"POST",url:a(".js-import-form").data("file-upload-url"),data:i,cache:!1,contentType:!1,processData:!1}).then(function(t){if(t.error)return void e.showImportFileError(o.name,o.size,t.error);var i=t.file.name;a(".js-import-file-input").val(i),e.showImportFileAlert(i),e.hideFileUploadBlock(),e.addFileToHistoryTable(i),e.enableFilesHistoryBtn()})}},{key:"addFileToHistoryTable",value:function(e){var t=a("#fileHistoryTable"),o=t.data("delete-file-url"),i=o+"&filename="+encodeURIComponent(e),n=t.data("download-file-url"),l=n+"&filename="+encodeURIComponent(e),r=t.find("tr:first").clone();r.removeClass("d-none"),r.find("td:first").text(e),r.find(".btn-group").attr("data-file",e),r.find(".js-delete-file-btn").attr("href",i),r.find(".js-download-file-btn").attr("href",l),t.find("tbody").append(r);var s=t.find("tr").length-1;a(".js-files-history-number").text(s)}}]),e}();t.default=s},344:function(e,t,o){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=window.$,r=function(){function e(){var t=this;i(this,e),l(".js-entity-select").on("change",function(){return t.toggleForm()}),this.toggleForm()}return n(e,[{key:"toggleForm",value:function(){var e=l("#entity").find("option:selected"),t=parseInt(e.val()),o=e.text().toLowerCase();this.toggleEntityAlert(t),this.toggleFields(t,o),this.loadAvailableFields(t)}},{key:"toggleEntityAlert",value:function(e){var t=l(".js-entity-alert");[0,1].includes(e)?t.show():t.hide()}},{key:"toggleFields",value:function(e,t){var o=l(".js-truncate-form-group"),i=l(".js-match-ref-form-group"),n=l(".js-regenerate-form-group"),r=l(".js-force-ids-form-group"),a=l(".js-entity-name");8===e?o.hide():o.show(),[1,2].includes(e)?i.show():i.hide(),[0,1,5,6,8].includes(e)?n.show():n.hide(),[0,1,3,4,5,6,8,7].includes(e)?r.show():r.hide(),a.html(t)}},{key:"loadAvailableFields",value:function(e){var t=this,o=l(".js-available-fields");l.ajax({url:o.data("url"),data:{entity:e},dataType:"json"}).then(function(e){t._removeAvailableFields(o);for(var i=0;i<e.length;i++)t._appendAvailableField(o,e[i].label+(e[i].required?"*":""),e[i].description);o.find('[data-toggle="popover"]').popover()})}},{key:"_removeAvailableFields",value:function(e){e.find('[data-toggle="popover"]').popover("hide"),e.empty()}},{key:"_appendHelpBox",value:function(e,t){var o=l(".js-available-field-popover-template").clone();o.attr("data-content",t),o.removeClass("js-available-field-popover-template d-none"),e.append(o)}},{key:"_appendAvailableField",value:function(e,t,o){var i=l(".js-available-field-template").clone();i.text(t),o&&this._appendHelpBox(i,o),i.removeClass("js-available-field-template d-none"),i.appendTo(e)}}]),e}();t.default=r},345:function(e,t,o){"use strict";var i=o(264),n=function(e){return e&&e.__esModule?e:{default:e}}(i);/**
                   * 2007-2019 PrestaShop SA and Contributors
                   *
                   * NOTICE OF LICENSE
                   *
                   * This source file is subject to the Open Software License (OSL 3.0)
                   * that is bundled with this package in the file LICENSE.txt.
                   * It is also available through the world-wide-web at this URL:
                   * https://opensource.org/licenses/OSL-3.0
                   * If you did not receive a copy of the license and are unable to
                   * obtain it through the world-wide-web, please send an email
                   * to license@prestashop.com so we can send you a copy immediately.
                   *
                   * DISCLAIMER
                   *
                   * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                   * versions in the future. If you wish to customize PrestaShop for your
                   * needs please refer to https://www.prestashop.com for more information.
                   *
                   * @author    PrestaShop SA <contact@prestashop.com>
                   * @copyright 2007-2019 PrestaShop SA and Contributors
                   * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                   * International Registered Trademark & Property of PrestaShop SA
                   */
(0,window.$)(function(){new n.default})}});