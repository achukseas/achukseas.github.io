forms=$('form, .form');isIE7=$('html').hasClass('ie7');isIE8=$('html').hasClass('ie8');touchEnabled=Modernizr.touch;formPlaceholders=Modernizr.input.placeholder;boxShadows=Modernizr.boxshadow;function initForms(){forms.each(function(){var $this=$(this),allInputs=$this.find('input'),allSelects=$this.find('select'),placeholderInputs=$this.find('[placeholder]'),checkboxInputs=$this.find('input[type="checkbox"]'),radioInputs=$this.find('input[type="radio"]'),coupledCheckboxes=$this.find('.coupled-checks');checkboxInputs.iCheck({'checkboxClass':'styled-checkbox','checkedClass':'styled-checkbox-checked','insert':'<div class="check"></div>'});radioInputs.iCheck({'radioClass':'styled-radio','checkedClass':'styled-radio-checked','insert':'<div class="check"></div>'});if(this.hasClass="form"){}
else{this.reset()}
allInputs.each(function(){var $this=$(this),type=$this.attr('type');if(!boxShadows){$this.addClass(type+'-input')}});allSelects.each(function(){if(!isIE7){var $this=$(this),wrap=$('<div />',{'class':'styled-select'});$this.wrap(wrap);$this.selectpicker({'showIcon':!0,'dropupAuto':!1,'showSubtext':!0,'showContent':!0});if(window.PIE){$('.form-group .styled-select .btn-group .btn').each(function(){PIE.attach(this)})}}});if(!formPlaceholders){placeholderInputs.each(function(){var $this=$(this),placeholderClass='placeholder',thisText=$this.val(),placeholderText=$this.attr('placeholder');if(thisText!==placeholderText){if(!$this.hasClass('password-input')){$this.addClass(placeholderClass).val(placeholderText)}
else{$this.wrap("<div></div>");$this.addClass('real-pass').val('').parent().addClass('ie8-pass-div').append('<input type="text" class="dummy-pass" value="'+placeholderText+'"/>')}}
$this.not(".real-pass, .dummy-pass").focus(function(){if($this.val()==$this.attr('placeholder')){if(!$this.hasClass('password-input')){$this.removeClass(placeholderClass).val('')}}});$this.not(".real-pass, .dummy-pass").blur(function(){if($this.val()===''||$this.val()==$this.attr('placeholder')){if(!$this.hasClass('password-input')){$this.addClass(placeholderClass).val(placeholderText)}}}).blur()})}
if(coupledCheckboxes.length){coupledCheckboxes.each(function(){var checkboxes=$(this).find('input[type=checkbox]');checkboxes.each(function(){var otherChecks=checkboxes.not($(this));$(this).on('ifChanged',function(){if($(this).attr('checked')=='checked'){otherChecks.iCheck('uncheck')}})})})}});$('.specific-time').on('ifChanged',function(){$('#contactDateDiv').slideToggle()});$('.rooming-same-select').on('ifChanged',function(){$('.rooming-same').toggleClass('select')});$('.room-select').on('ifChanged',function(){$(this).parent().parent().parent().toggleClass('selected')});$('.radio-inline input').on('ifChanged',function(){$(this).parent().parent().toggleClass('selected')});$('.online').on('ifChecked',function(){$('.payment-mode').show();$('.btn-offline').hide();$('.btn-online').show();$('#offline').fadeOut(function(){$('#online').fadeIn()});$('.book-ext-sect li:first-child').removeClass('last')});$('.offline').on('ifChecked',function(){$('.payment-mode').show();$('.btn-online').hide();$('.btn-offline').show();$('#online').fadeOut(function(){$('#offline').fadeIn()});$('.book-ext-sect li:first-child').removeClass('last')});$('.PrintAll').on('ifChecked',function(){$(".Print").iCheck('check').iCheck('disable');$(".print-check-row").addClass('disabled')});$('.EmailAll').on('ifChecked',function(){$(".Email").iCheck('check').iCheck('disable');$(".email-check-row").addClass('disabled')});$('.PrintAll').on('ifUnchecked',function(){$(".Print").iCheck('uncheck').iCheck('enable');$(".print-check-row").removeClass('disabled')});$('.EmailAll').on('ifUnchecked',function(){$(".Email").iCheck('uncheck').iCheck('enable');$(".email-check-row").removeClass('disabled')});$('.CheckAll').on('ifChecked',function(){$(this).closest('.pax-tbl').find(".Check").iCheck('check').iCheck('disable');$(this).closest('.pax-tbl').find(".check-row").addClass('disabled')});$('.CheckAll').on('ifUnchecked',function(){$(this).closest('.pax-tbl').find(".Check").iCheck('uncheck').iCheck('enable');$(this).closest('.pax-tbl').find(".check-row").removeClass('disabled')})}
initForms();$(document).ready(function(){$('.datepicker-days').hide();$('ul#nav_menu li:has(ul)').addClass('has-submenu')});AjaxForm=$('.ajaxform');function initAjaxForms(){AjaxForm.each(function(){var $this=$(this),allInputs=$this.find('input'),allSelects=$this.find('select'),placeholderInputs=$this.find('[placeholder]'),checkboxInputs=$this.find('input[type="checkbox"]'),radioInputs=$this.find('input[type="radio"]'),coupledCheckboxes=$this.find('.coupled-checks');checkboxInputs.iCheck({'checkboxClass':'styled-checkbox','checkedClass':'styled-checkbox-checked','insert':'<div class="check"></div>'});radioInputs.iCheck({'radioClass':'styled-radio','checkedClass':'styled-radio-checked','insert':'<div class="check"></div>'});if(this.hasClass="form"){}
else{this.reset()}
allInputs.each(function(){var $this=$(this),type=$this.attr('type');if(!boxShadows){$this.addClass(type+'-input')}});allSelects.each(function(){if(!isIE7){var $this=$(this),wrap=$('<div />',{'class':'styled-select'});$this.wrap(wrap);$this.selectpicker({'showIcon':!0,'dropupAuto':!1,'showSubtext':!0,'showContent':!0});if(window.PIE){$('.form-group .styled-select .btn-group .btn').each(function(){PIE.attach(this)})}}});if(!formPlaceholders){placeholderInputs.each(function(){var $this=$(this),placeholderClass='placeholder',thisText=$this.val(),placeholderText=$this.attr('placeholder');if(thisText!==placeholderText){if(!$this.hasClass('password-input')){$this.addClass(placeholderClass).val(placeholderText)}
else{$this.wrap("<div></div>");$this.addClass('real-pass').val('').parent().addClass('ie8-pass-div').append('<input type="text" class="dummy-pass" value="'+placeholderText+'"/>')}}
$this.not('.real-pass, .dummy-pass').focus(function(){if($this.val()==$this.attr('placeholder')){if(!$this.hasClass('password-input')){$this.removeClass(placeholderClass).val('')}}});$this.not('.real-pass, .dummy-pass').blur(function(){if($this.val()===''||$this.val()==$this.attr('placeholder')){if(!$this.hasClass('password-input')){$this.addClass(placeholderClass).val(placeholderText)}}}).blur()})}
if(coupledCheckboxes.length){coupledCheckboxes.each(function(){var checkboxes=$(this).find('input[type=checkbox]');checkboxes.each(function(){var otherChecks=checkboxes.not($(this));$(this).on('ifChanged',function(){if($(this).attr('checked')=='checked'){otherChecks.iCheck('uncheck')}})})})}})}
$('.real-pass').hide();$('.dummy-pass').show();$('.dummy-pass').focus(function(){$(this).hide();$(this).parent().find('.real-pass').show().focus()});$('.real-pass').on('blur',function(){if($(this).val()==''){$(this).hide();$(this).parent().find('.dummy-pass').show()}}).blur();$('.input-append.date').find('input.span2').datepicker({changeMonth:!0,changeYear:!0,firstDay:1,dayNamesMin:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dateFormat:"dd-mm-yy"});$(document).on('ajaxComplete',function(event,xhr,settings){var ajaxUrl=settings.url;var matchStringPattern="(.*)\/workflow\/index\/ibeToken\/(.*)\/ajax\/true\/?";if(ajaxUrl.match(matchStringPattern))
{radioInputs=$(document).find('input[type="radio"]');radioInputs.iCheck({'radioClass':'styled-radio','checkedClass':'styled-radio-checked','insert':'<div class="check"></div>'});radioInputs.iCheck('refresh');$('.online').on('ifChecked',function(event){$('.offline-details').hide()});$('.offline').on('ifChecked',function(event){$('.offline-details').show()});$('.popup').magnificPopup({type:'iframe',fixedContentPos:!1,fixedBgPos:!0,overflowY:'auto',closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:'my-mfp-slide-bottom',zoom:{enabled:!0,duration:300}});$('.input-append.date').find('input').datepicker({changeMonth:!0,changeYear:!0,showOn:"both",firstDay:1,dayNamesMin:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dateFormat:"dd/mm/yy"});if(typeof initFormsCustom!=='undefined')
initFormsCustom();if(typeof initializeDatepicker!=='undefined')
initializeDatepicker();if(typeof initPayback!=='undefined')
initPayback();$('[id$="nationality"]').trigger('change')}})