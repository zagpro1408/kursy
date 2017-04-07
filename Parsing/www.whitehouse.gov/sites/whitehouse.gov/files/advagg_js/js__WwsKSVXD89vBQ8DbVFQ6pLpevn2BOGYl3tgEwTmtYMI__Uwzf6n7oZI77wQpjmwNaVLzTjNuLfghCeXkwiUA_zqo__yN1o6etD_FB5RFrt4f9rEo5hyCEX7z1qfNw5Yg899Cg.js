/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/navbar/js/navbar-tableheader.js. */
(function($,Drupal,displace){"use strict";Drupal.navbar=Drupal.navbar||{};$.extend(Drupal.navbar,{height:function(){return displace().top}})}(jQuery,Drupal,Drupal.displace));;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/navbar/js/navbar-tableheader.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/custom/fb_instant_articles/modules/fb_instant_articles_display/js/admin.js. */
(function($){'use strict';Drupal.fieldUIDisplayOverview=Drupal.fieldUIDisplayOverview||{};Drupal.fieldUIDisplayOverview.facebookInstantArticlesDisplay=function(row,data){this.row=row;this.name=data.name;this.region=data.region;this.tableDrag=data.tableDrag;this.$regionSelect=$('select.ds-field-region',row);this.$regionSelect.change(Drupal.fieldUIOverview.onChange);this.$formatSelect=$('select.field-formatter-type',row);this.$formatSelect.change(Drupal.fieldUIOverview.onChange);return this};Drupal.fieldUIDisplayOverview.facebookInstantArticlesDisplay.prototype={getRegion:function(){return this.$regionSelect.val()},regionChange:function(region){region=region.replace(/-/g,'_');this.$regionSelect.val(region);var refreshRows={};refreshRows[this.name]=this.$regionSelect.get(0);if($(this.row).hasClass('field-group')&&$.isFunction(Drupal.fieldUIDisplayOverview.group.prototype.regionChangeFields))Drupal.fieldUIDisplayOverview.group.prototype.regionChangeFields(region,this,refreshRows);return refreshRows}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/custom/fb_instant_articles/modules/fb_instant_articles_display/js/admin.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/profiles/forall/modules/custom/keyboard_navigation/js/keyboard_navigation.js. */
(function($,Drupal,window,document,undefined){Drupal.behaviors.keyboard_navigation={attach:function(context,settings){var breakpoint=850,viewingSize=widthCheck(),linkPosition=0;$(window).resize(function(){viewingSize=widthCheck()});$('#block-menu-block-sixteenhundrednav-main').keydown(function(e){if([27,37,38,39,40,13].indexOf(e.keyCode)==-1)return;if($(document.activeElement).attr('id')=='main-menu-toggle'){$(document.activeElement).click();$('a#ui-accordion-1-header-1').trigger('mouseenter').focus()};var focused=$(document.activeElement).closest('li');switch(e.keyCode){case 27:$(document.activeElement).blur();if(viewingSize=='mobile')$('#main-menu-toggle').click().focus();break;case 37:if(viewingSize=='desktop'){if(focused.hasClass('depth-1')){prevListItem(focused)}else{linkPosition=focused.attr('data-position');if(focused.parents('li.depth-2').prev().length)if(focused.parents('li.depth-2').prev().find("ul:first li[data-position="+linkPosition+"] a").first().length){focused.parents('li.depth-2').prev().find("ul:first li[data-position="+linkPosition+"] a").first().trigger('mouseenter').focus()}else focused.parents('li.depth-2').prev().find("ul:first li:last > a").trigger('mouseenter').focus()}}else{$('#block-menu-block-sixteenhundrednav-main').find('.menu-block-wrapper > ul.menu').accordion("option","active",false);topParent(focused)};e.preventDefault();e.stopPropagation();break;case 38:if(!focused.prev().length&&focused.parents('ul.menu-featured__column').length)if(focused.parent('ul.menu-featured__column').first().prev().length)focused.parent('ul.menu-featured__column').first().prev().find('li:last a').first().trigger('mouseenter').focus();if(viewingSize=='desktop'){if(focused.hasClass('depth-1')){return}else if(focused.hasClass('first')){topParent(focused)}else prevListItem(focused)}else if(focused.hasClass('depth-1')){prevListItem(focused)}else if(focused.hasClass('first')){if(focused.parents('li.depth-2').prev().length!=0){focused.parents('li.depth-2').prev().find('li.depth-3.last a').first().trigger('mouseenter').focus()}else topParent(focused)}else prevListItem(focused);e.preventDefault();e.stopPropagation();break;case 39:if(viewingSize=='desktop'){if(focused.hasClass('depth-1')||focused.hasClass('depth-2')){nextListItem(focused)}else{linkPosition=focused.attr('data-position');if(focused.parents('li.depth-2').next().length)if(focused.parents('li.depth-2').next().find("ul:first li[data-position="+linkPosition+"] > a").length){focused.parents('li.depth-2').next().find("ul:first li[data-position="+linkPosition+"] > a").trigger('mouseenter').focus()}else focused.parents('li.depth-2').next().find("ul:first li:last > a").trigger('mouseenter').focus()}}else{if(focused.hasClass('depth-1')){var position=(focused.attr('data-position'))-1;$('#block-menu-block-sixteenhundrednav-main').find('.menu-block-wrapper > ul.menu').accordion("option","active",position)};focused.find('li.depth-2.first li.depth-3.first a').trigger('mouseenter').focus()};e.preventDefault();e.stopPropagation();break;case 40:if(!focused.next().length&&focused.parents('ul.menu-featured__column').length)if(focused.parent('ul.menu-featured__column').first().next().length)focused.parent('ul.menu-featured__column').first().next().find('li:first a').first().trigger('mouseenter').focus();if(viewingSize=='desktop'){if(focused.hasClass('depth-1')||focused.hasClass('depth-2')){listDescend(focused)}else nextListItem(focused)}else if(focused.hasClass('depth-1')){nextListItem(focused)}else if(focused.hasClass('last')){if(focused.parents('li.depth-2').next().length!=0)focused.parents('li.depth-2').next().find('li.depth-3.first > a').trigger('mouseenter').focus()}else nextListItem(focused);e.preventDefault();e.stopPropagation();break}})
function prevListItem(focused){focused.prev().find('a').first().trigger('mouseenter').focus()}
function nextListItem(focused){focused.next().find('a').first().trigger('mouseenter').focus()}
function listDescend(focused){if(focused.children('ul').length)focused.find('ul:first li:first a:first').trigger('mouseenter').focus()}
function listAscend(focused){if(focused.parent('ul').length)focused.parent('ul').siblings('a').trigger('mouseenter').focus()}
function topParent(focused){focused.parents('li.depth-1').children('a').trigger('mouseenter').focus()}
function widthCheck(){if(document.documentElement.clientWidth>=breakpoint){return'desktop'}else return'mobile'}}}})(jQuery,Drupal,this,this.document);;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/profiles/forall/modules/custom/keyboard_navigation/js/keyboard_navigation.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/media_preview_slider/js/slider.js. */
(function($){Drupal.behaviors.media_preview_sizer={attach:function(context,settings){$(".media-browser-wrapper .views-exposed-form .views-exposed-widgets").once('media_preview_sizer').append("<div class='views-exposed-widget slide-widget'><label>Image Size</label><div class='slide-image'></div></div>");var valued=(!localStorage.getItem("slideWidth"))?200:localStorage.getItem("slideWidth");$('#media-browser-library-list li').css('width',localStorage.getItem('slideWidth')+'px');$('.slide-image').once('media_preview_sizer').slider({value:valued,min:100,max:300,step:2,slide:function(event,ui){localStorage.setItem('slideWidth',ui.value);$('#media-browser-library-list li').css('width',localStorage.getItem('slideWidth')+'px')}})}}}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/media_preview_slider/js/slider.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/panopoly_magic/panopoly-magic.js. */
(function($){Drupal.behaviors.panopolyMagic={attach:function(context,settings){if($.trim($('.pane-node-title .pane-content').html())==$.trim($('h1.title').html())){$('.pane-node-title .pane-content').html('');$('h1.title').hide().clone().prependTo('.pane-node-title .pane-content');$('.pane-node-title h1.title').show()}}}})(jQuery);(function($){var timer,wrappedWysiwygAttach=false
function triggerSubmit(form,timeout){var $form=$(form),preview_widget=$('#panopoly-form-widget-preview'),submit;if(!preview_widget.hasClass('panopoly-magic-loading')){preview_widget.addClass('panopoly-magic-loading');submit=function(){$form.find('.ctools-auto-submit-click').click()};if(typeof timeout==='number'){return setTimeout(submit,timeout)}else submit()}}
function cancelSubmit(form,timer){var $form=$(form),preview_widget=$('#panopoly-form-widget-preview');preview_widget.removeClass('panopoly-magic-loading');clearTimeout(timer)}
function onWysiwygChangeFactory(editorId){return function(){var textarea=$('#'+editorId),form=textarea.get(0).form;if(textarea.hasClass('panopoly-textarea-autosubmit')){cancelSubmit(form,timer);timer=triggerSubmit(form,1e3)}}}
function beforeWysiwygAttach(context,params){var editorId=params.field,editorType=params.editor,format=params.format;if(Drupal.settings.wysiwyg.configs[editorType]&&Drupal.settings.wysiwyg.configs[editorType][format])wysiwygConfigAlter(params,Drupal.settings.wysiwyg.configs[editorType][format])}
function wysiwygConfigAlter(params,config){var editorId=params.field,editorType=params.editor,onWysiwygChange=onWysiwygChangeFactory(editorId);switch(editorType){case'markitup':$.each(['afterInsert','onEnter'],function(index,funcName){config[funcName]=onWysiwygChange});break;case'tinymce':config.setup=function(editor){editor.onChange.add(onWysiwygChange);editor.onKeyUp.add(onWysiwygChange)};break}}
function wrapFunctionBefore(parent,name,beforeFunc){var originalFunc=parent[name];parent[name]=function(){beforeFunc.apply(this,arguments);return originalFunc.apply(this,arguments)}};Drupal.behaviors.panopolyMagicAutosubmit={attach:function(context,settings){$('.ctools-auto-submit-click',context).filter(function(){return $(this).closest('form').attr('id').indexOf('panels-edit-style-type-form')!==0}).click(function(event){if($(this).hasClass('ajax-processed')){event.stopImmediatePropagation();$(this).trigger('mousedown');return false}});var discardKeyCode=[16,17,18,20,33,34,35,36,37,38,39,40,9,13,27];$('.field-widget-link-field input:text',context).addClass('panopoly-textfield-autosubmit').addClass('ctools-auto-submit-exclude');$('.panopoly-textfield-autosubmit, .panopoly-textarea-autosubmit',context).once('ctools-auto-submit').bind('keyup blur',function(e){var $element;$element=$('.widget-preview .pane-title',context);cancelSubmit(e.target.form,timer);if(e.type!=='blur'&&$.inArray(e.keyCode,discardKeyCode)>0)return;timer=triggerSubmit(e.target.form,1e3)});if(!wrappedWysiwygAttach&&typeof Drupal.wysiwygAttach=='function'){wrapFunctionBefore(Drupal,'wysiwygAttach',beforeWysiwygAttach);wrappedWysiwygAttach=true;$('.panopoly-textarea-autosubmit',context).once('panopoly-magic-wysiwyg').each(function(){var editorId=this.id,instance=Drupal.wysiwyg.instances[editorId],format=instance?instance.format:null,trigger=instance?instance.trigger:null;if(instance&&instance.editor!='none'){params=Drupal.settings.wysiwyg.triggers[trigger];if(params){Drupal.wysiwygDetach(context,params[format]);Drupal.wysiwygAttach(context,params[format])}}})};$('.panopoly-autocomplete-autosubmit',context).once('ctools-auto-submit').bind('keyup blur',function(e){if(e.type==='blur'||e.keyCode===13)triggerSubmit(e.target.form,0)});$(':input.filter-list').addClass('ctools-auto-submit-exclude')}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/panopoly_magic/panopoly-magic.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/panopoly_theme/js/panopoly-accordion.js. */
(function($){Drupal.behaviors.PanelsAccordionStyle={attach:function(context,settings){for(region_id in Drupal.settings.accordion){var accordion=Drupal.settings.accordion[region_id];jQuery('#'+region_id).accordion(accordion.options)}}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/panopoly_theme/js/panopoly-accordion.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/linkit/js/linkit.js. */
(function($){Drupal.linkit=Drupal.linkit||{};Drupal.linkit.currentInstance=Drupal.linkit.currentInstance||{};Drupal.linkit.dialogHelper=Drupal.linkit.dialogHelper||{};Drupal.linkit.insertPlugins=Drupal.linkit.insertPlugins||{};Drupal.linkit.createModal=function(){Drupal.linkit.createModalElement().dialog(Drupal.linkit.modalOptions()).siblings(".ui-dialog-titlebar").hide();$(window).bind("scroll resize",function(){$('#linkit-modal').dialog('option','position',['center',50])});Drupal.linkit.getDashboard()};Drupal.linkit.createModalElement=function(){var linkitModal=$('<div id="linkit-modal"></div>');$('body').append(linkitModal);return linkitModal};Drupal.linkit.modalOptions=function(){return{dialogClass:'linkit-wrapper',modal:true,draggable:false,resizable:false,width:520,position:['center',50],minHeight:0,zIndex:21e4,close:Drupal.linkit.modalClose,open:function(event,ui){$('.ui-widget-overlay').css({opacity:0.5,filter:'Alpha(Opacity=50)',backgroundColor:'#FFFFFF'})},title:'Linkit'}};Drupal.linkit.modalClose=function(e){$('#linkit-modal').dialog('destroy').remove();Drupal.settings.linkit.currentInstance={};if(e&&e.preventDefault){e.preventDefault()}else return false};Drupal.linkit.getDashboard=function(){var ajax_settings={};ajax_settings.event='LinkitDashboard';ajax_settings.url=Drupal.settings.linkit.dashboardPath+Drupal.settings.linkit.currentInstance.profile;ajax_settings.progress={type:'throbber',message:Drupal.t('Loading Linkit dashboard...')};Drupal.ajax['linkit-modal']=new Drupal.ajax('linkit-modal',$('#linkit-modal')[0],ajax_settings);Drupal.ajax['linkit-modal'].options.success=function(response,status){if(typeof response=='string')response=$.parseJSON(response);Drupal.ajax['linkit-modal'].success(response,status);var helper=Drupal.settings.linkit.currentInstance.helper;Drupal.linkit.getDialogHelper(helper).afterInit();$('#linkit-modal .linkit-search-element').focus()};Drupal.settings.linkit.currentInstance.autocompletePathParsed=Drupal.settings.linkit.autocompletePath.replace('___profile___',Drupal.settings.linkit.currentInstance.profile);$('#linkit-modal').trigger('LinkitDashboard')};Drupal.linkit.registerDialogHelper=function(name,helper){Drupal.linkit.dialogHelper[name]=helper};Drupal.linkit.getDialogHelper=function(name){return Drupal.linkit.dialogHelper[name]};Drupal.linkit.registerInsertPlugin=function(name,plugin){Drupal.linkit.insertPlugins[name]=plugin};Drupal.linkit.getInsertPlugin=function(name){return Drupal.linkit.insertPlugins[name]}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/modules/contrib/linkit/js/linkit.js. */
/* Source and licensing information for the line(s) below can be found at https://www.whitehouse.gov/sites/whitehouse.gov/libraries/superfish/src/js/superfish.js. */
(function($){"use strict";var methods=(function(){var c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},ios=(function(){var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(ios)$(window).load(function(){$('body').children().on('click',$.noop)});return ios})(),wp7=(function(){var style=document.documentElement.style;return('behavior'in style&&'fill'in style&&/iemobile/i.test(navigator.userAgent))})(),toggleMenuClasses=function($menu,o){var classes=c.menuClass;if(o.cssArrows)classes+=' '+c.menuArrowClass;$menu.toggleClass(classes)},setPathToCurrent=function($menu,o){return $menu.find('li.'+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+' '+c.bcClass).filter(function(){return($(this).children(o.popUpSelector).hide().show().length)}).removeClass(o.pathClass)},toggleAnchorClass=function($li){$li.children('a').toggleClass(c.anchorClass)},toggleTouchAction=function($menu){var touchAction=$menu.css('ms-touch-action');touchAction=(touchAction==='pan-y')?'auto':'pan-y';$menu.css('ms-touch-action',touchAction)},applyHandlers=function($menu,o){var targets='li:has('+o.popUpSelector+')';if($.fn.hoverIntent&&!o.disableHI){$menu.hoverIntent(over,out,targets)}else $menu.on('mouseenter.superfish',targets,over).on('mouseleave.superfish',targets,out);var touchevent='MSPointerDown.superfish';if(!ios)touchevent+=' touchend.superfish';if(wp7)touchevent+=' mousedown.superfish';$menu.on('focusin.superfish','li',over).on('focusout.superfish','li',out).on(touchevent,'a',o,touchHandler)},touchHandler=function(e){var $this=$(this),$ul=$this.siblings(e.data.popUpSelector);if($ul.length>0&&$ul.is(':hidden')){$this.one('click.superfish',false);if(e.type==='MSPointerDown'){$this.trigger('focus')}else $.proxy(over,$this.parent('li'))()}},over=function(){var $this=$(this),o=getOptions($this);clearTimeout(o.sfTimer);$this.siblings().superfish('hide').end().superfish('show')},out=function(){var $this=$(this),o=getOptions($this);if(ios){$.proxy(close,$this,o)()}else{clearTimeout(o.sfTimer);o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay)}},close=function(o){o.retainPath=($.inArray(this[0],o.$path)>-1);this.superfish('hide');if(!this.parents('.'+o.hoverClass).length){o.onIdle.call(getMenu(this));if(o.$path.length)$.proxy(over,o.$path)()}},getMenu=function($el){return $el.closest('.'+c.menuClass)},getOptions=function($el){return getMenu($el).data('sf-options')};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o)return this;var not=(o.retainPath===true)?o.$path:'',$ul=$this.find('li.'+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;if(instant){$ul.show();speed=0};o.retainPath=false;o.onBeforeHide.call($ul);$ul.stop(true,true).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this)})};return this},show:function(){var o=getOptions(this);if(!o)return this;var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);o.onBeforeShow.call($ul);$ul.stop(true,true).animate(o.animation,o.speed,function(){o.onShow.call($ul)});return this},destroy:function(){return this.each(function(){var $this=$(this),o=$this.data('sf-options'),$hasPopUp;if(!o)return false;$hasPopUp=$this.find(o.popUpSelector).parent('li');clearTimeout(o.sfTimer);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);$this.off('.superfish').off('.hoverIntent');$hasPopUp.children(o.popUpSelector).attr('style',function(i,style){return style.replace(/display[^;]+;?/g,'')});o.$path.removeClass(o.hoverClass+' '+c.bcClass).addClass(o.pathClass);$this.find('.'+o.hoverClass).removeClass(o.hoverClass);o.onDestroy.call($this);$this.removeData('sf-options')})},init:function(op){return this.each(function(){var $this=$(this);if($this.data('sf-options'))return false;var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent('li');o.$path=setPathToCurrent($this,o);$this.data('sf-options',o);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);applyHandlers($this,o);$hasPopUp.not('.'+c.bcClass).superfish('hide',true);o.onInit.call(this)})}}})();$.fn.superfish=function(method,args){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else return $.error('Method '+method+' does not exist on jQuery.fn.superfish')};$.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:true,disableHI:false,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop};$.fn.extend({hideSuperfishUl:methods.hide,showSuperfishUl:methods.show})})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.whitehouse.gov/sites/whitehouse.gov/libraries/superfish/src/js/superfish.js. */
/**
 * sixteenhundrednav.js
 * utility scripts for sixteenhundrednav
 */
(function ($, Drupal, window, document, undefined) {
  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.sixteenhundrednav = {
    attach: function (context, settings) {
      $('#main-menu-header', context).once('navigation-behaviors',function(){
        // Use a variable for the breakpoint width to make it easier to change later.
        var menu_header =  $(this);
        var menu_content =  $('#main-menu-content');
        var search = menu_header.parent().siblings('.sitewide-header--search-form');
        var superfishMenu = $('#block-menu-block-sixteenhundrednav-main').find('.menu-block-wrapper > ul.menu');
        var overlay = $('#nav-overlay');

        if (!(overlay.length > 0)) {
          $('#page').prepend('<div id="nav-overlay"></div>');
        }

        superfishMenu.superfish({
          speed: 0,
          delay: 200,
          onBeforeShow: function() {
            _sixteenhundred_nav_megamenu_reposition(this);
          },
          onBeforeHide: function() {
            // Remove other styling so megamenu re-positions properly.
            this.removeAttr('style');
            this.css({'display': 'none'});
          }
        });
        // On load, immediately check to see if we need to initialize or remove
        // Superfish.
        sfSwitch();

        /**
         * On window resize, check the width and adjust Superfish if necessary.
         */
        $(window).resize(function () {
          window.setTimeout(sfSwitch, 0);
        });

        menu_header.click(function () {
          menu_content.toggleClass('is-open');
          search.toggleClass('is-open');
          // If the menu is open, close it and hide the overlay.
          if (menu_header.hasClass('menu-active')) {
            menu_header.removeClass('menu-active');
            $('#nav-overlay').fadeOut(200);
            menu_content.slideUp();
            search.removeClass('is-open');
          }
          // If not, open the menu and show the overlay.
          else {
            $(this).addClass('menu-active');
            $('#nav-overlay').fadeIn(200);
            menu_content.slideDown();
            search.addClass('is-open');
          }
        });

        /**
         * Detects current responsive breakpoint based on positioning of the site logo
         * Detecting the breakpoint in this fashion alleviates inconsistent width check value returns from browser to browser,
         * and allows us to keep our breakpoint values within the CSS.
         * @return {string}
         *   Desktop or mobile width.
         */
        function sfSwitch() {
          // Check to see if the site logo has a CSS property of "position:static;." If so, then the site is currently at the desktop breakpoint.
          if ($('.pane-page-logo').css('position') == 'static' ) {
            // If the menu is currently an accordion, destroy the accordion.
            if (superfishMenu.hasClass('ui-accordion')) {
              menu_header.hide();
              superfishMenu.accordion('destroy');
              superfishMenu.superfish({
                speed: 0,
                delay: 200,
                onBeforeShow: function() {
                  _sixteenhundred_nav_megamenu_reposition(this);
                },
                onBeforeHide: function() {
                  // Remove other styling so megamenu re-positions properly.
                  this.removeAttr('style');
                  this.css({'display': 'none'});
                }
              });
              superfishMenu.superfish();
              menu_header.removeClass('menu-active');
              search.removeClass('is-open');
              menu_content.removeClass('is-open');
              $('#nav-overlay').hide();
              menu_content.show();
            }
          }
          // If the site logo is *not* positioned statically, then the site is currently at the desktop breakpoint.
          else {
            // If the menu is not an accordion, create the accordion.
            if (!superfishMenu.hasClass('ui-accordion')) {
              superfishMenu.superfish('destroy');
              superfishMenu.accordion({
                header: 'li.depth-1 > a',
                collapsible: 'false',
                active: 0,
                heightStyle: 'content'
              });
              delete($.ui.accordion.prototype._keydown);
              menu_header.show();
              menu_content.removeClass('is-open');
            }
          }
        }
      });
    }

  };

/**
 * Utility function to reposition and resize the megamenu to fit within the
 * boundaries of the browser.
 */
function _sixteenhundred_nav_megamenu_reposition(ul) {
  // Temporarily switch the UL style so that the width can be measured.
  ul.css({
    'visibility': 'hidden',
    'display': 'block'
  });
  // Find the width of the browser.
  var client_width = document.documentElement.clientWidth;
  // Find the width of this UL to determine if it needs to be repositioned.
  var menu_level_2_width = ul.outerWidth();
  // Find the left position of this UL.
  var menu_level_2_pos = ul.position();
  // Combined the left position and width to compare against client width.
  var menu_pos_and_width = menu_level_2_pos.left + menu_level_2_width;
  // Store the padding of the UL it will need to be used in calculations.
  var menu_level_2_left_padding = 25;

  // Reset the position if the combined width is larger then the client width.
  if (menu_pos_and_width > client_width) {
    // Find the difference between the combined width and client width.
    var difference = menu_pos_and_width - client_width;

    // Determines if the difference is larger then the left position.
    // If true then set the new left position to 0 so it is not pulled off the
    // left side of the screen.
    if (difference > menu_level_2_pos.left) {
      // Find the number of 2nd level items to find the new width of these LIs.
      var menu_level_2_items = ul.find('li.depth-2');
      // Determine the new width of the 2nd level items.
      var menu_level_2_item_width = Math.floor((client_width - menu_level_2_left_padding) / (menu_level_2_items.length));
      // Set the width on the third level LI items.
      menu_level_2_items.find('li').css({
        'width': menu_level_2_item_width - (menu_level_2_left_padding * 2)
      });
      // Reset the width on the wrapper to fit within the width of the browser.
      ul.find('.depth-2-wrapper').css({
        'width': (client_width - menu_level_2_left_padding)
      })
      // Set the left side of the megamenu UL to 0.
      ul.css({
        'left': '0px'
      });
    }
    else {
      // Reposition the megamenu UL so that it will fit within the browser.
      ul.css({
        'left': (difference * -1) + menu_level_2_pos.left
      });
    }
  }

  ul.css({
    'visibility': 'inherit',
    'display': 'none'
  });
}

})(jQuery, Drupal, this, this.document);
;/**/
