/*!
 * @mekwall's .vangogh() for Syntax Highlighting
 *
 * All code is open source and dual licensed under GPL and MIT. 
 * Check the individual licenses for more information.
 * https://github.com/mekwall/jquery-vangogh/blob/master/GPL-LICENSE.txt
 * https://github.com/mekwall/jquery-vangogh/blob/master/MIT-LICENSE.txt
 */
(function($,a,b){var c=1,d=!1,e=!1,f={get:function(b){var c=a.location.hash;if(c.length>0){var d=c.match(new RegExp(b+":{([a-zA-Z0-9,-]*)}"));if(d)return d[1].split(",")}return[]},set:function(b,c){var d=a.location.hash,e,f=b+":{"+c.join(",")+"}",g=d.indexOf(b+":{");if(c.length===0)return this.remove(b);g!==-1?e=d.replace(new RegExp("("+b+":{[a-zA-Z0-9,-]*})"),f):e=d.length>0?d+","+f:f,a.location.hash=e},remove:function(b){a.location.hash=a.location.hash.replace(new RegExp("([,]?"+b+":{[a-zA-Z0-9,-]*}[,]?)"),"")}},g={numberRange:/^([0-9]+)-([0-9]+)$/,pageNumber:/-([0-9]+)$/,multilineBegin:/<span class="([\w-_][^"]+)">(?:.[^<]*(?!<\/span>)|)$/ig,multilineEnd:/(<span class="([\w-_][^"]+)">)?(?:.[^<]*)?(<\/span>)/ig};$.fn.vanGogh=function(h){function n(){if(d||e)setTimeout(n,100);else{k++;if(k>=10)return;if(h.source&&!l){e=!0,$.ajax({url:h.source,crossDomain:!0,dataType:"text",success:function(a){l=a},error:function(a,b){l="ERROR: "+b},complete:function(){e=!1,n()}});return}b=b||a.hljs;if(!b){d=!0,$.getScript(h.autoload,function(){d=!1,n()});return}j.filter("pre,code").each(function(){function r(b,c,e){var h=!1,i=a.find(".vg-line");c&&(a.find(".vg-highlight").removeClass("vg-highlight"),f.remove(d),k=[]),b=$.type(b)==="array"?b:[b],$.each(b,function(b,c){if(k.indexOf(c)<=-1){!isNaN(parseFloat(c,10))&&isFinite(c)&&(c=parseInt(c,10));if($.type(c)==="string"){var e=g.numberRange.exec(c);if(e){var f=e[1],h=e[2],j="";for(var b=f;b<=h;b++)j+=",#"+d+"-"+b,k.push(b);i.filter(j.substring(1)).addClass("vg-highlight")}else a.find(".vg-line:contains("+c+")").each(function(){var a=$(this).addClass("vg-highlight");a.html(a.html().replace(c,'<span class="vg-highlight">'+c+"</span>"))}),k.push(c)}else{var l=d+"-"+this,m=i.filter("#"+l);m.length&&(m.addClass("vg-highlight"),k.push(c))}}}),!e&&f.set(d,k)}var a=$(this).addClass("vg-container").attr("id",this.id||"vg-"+c++),d=this.id,e=a.find("code"),i=!1,j=!1,k=[];e.length||(e=a,i=!0),h.source&&l&&e.text(l);var n=e.text();b.highlightBlock(e[0],h.tab);var o=e.html().split("\n"),p="",q="";if(!i){var s={},t=0;$.each(o,function(a,b){var c=a+h.firstLine,e=d+"-"+c,f=b;h.numbers&&(p+='<a class="vg-number" rel="#'+e+'">'+c+"</a>");if(s[t]){var i=g.multilineEnd.exec(b);i&&!i[1]?(f='<span class="'+s[t]+'">'+f,delete s[t],t--):f='<span class="'+s[t]+'">'+f+"</span>"}var j=g.multilineBegin.exec(b);j&&(t++,s[t]=j[1]),q+='<div class="vg-line" id="'+e+'">'+f+"</div>"}),q='<code class="vg-code">'+q+"</code>",h.numbers&&(q='<div class="vg-gutter">'+p+"</div>"+q),a.html(q),e=a.find("code"),a.find(".vg-number").click(function(b){var c=$(this),e=c.attr("rel"),h=a.find(e);if(h.hasClass("vg-highlight")){h.removeClass("vg-highlight"),k.splice(k.indexOf(c.text()),1),f.set(d,k),j=!1;return!1}var i=j;j=parseInt(g.pageNumber.exec(e)[1],10),b.shiftKey&&j?r(i<j?i+"-"+j:j+"-"+i,!0):r(j,b.ctrlKey?!1:!0);return!1});var u=a.find(".vg-gutter"),v=u.outerWidth(),w=0,x=!1;h.animateGutter&&a.scroll(function(a){if(this.scrollLeft!==w)if(this.scrollLeft>v){if(this.scrollLeft<w)w=this.scrollLeft,u.hide();else if(this.scrollLeft!==w){if(x)return;var b=this;w=this.scrollLeft,x=setTimeout(function(){x=!1;var a=b.scrollLeft;e.css("marginLeft",v),u.css({"float":"none",position:"absolute",left:a-v}).show().stop().animate({left:a})},500)}}else w=this.scrollLeft,clearTimeout(x),x=!1,u.css({"float":"",position:"",left:""}).show()})}else i&&a.addClass("vg-code");e.dblclick(function(){m(e[0]);return!1});if(h.maxLines>0){var y=a.find(".vg-line").height(),z=parseInt(e.css("paddingTop")),A=y*(h.maxLines+1)+z;a.css({minHeight:y+z,maxHeight:A})}h.highlight&&r(h.highlight,!0,!0);var B=f.get(d);B.length&&r(B,!1,!0)})}}function m(b){var c=a,d=a.document;if(d.body.createTextRange){var e=d.body.createTextRange();e.moveToElementText(b),e.select()}else if(d.createRange){var f=c.getSelection(),e=d.createRange();e.selectNodeContents(b),f.removeAllRanges(),f.addRange(e)}}var i={language:"auto",firstLine:1,maxLines:0,numbers:!0,highlight:null,animateGutter:!0,autoload:"http://softwaremaniacs.org/media/soft/highlight/highlight.pack.js",tab:"    "};h=$.extend({},i,h);var j=this,k=0,l;n();return j}})(jQuery,this,typeof this.hljs!="undefined"?this.hljs:!1);

/*!
 * Repo.js
 * @author Darcy Clarke
 *
 * Copyright (c) 2012 Darcy Clarke
 * Dual licensed under the MIT and GPL licenses.
 * http://darcyclarke.me/
 */
 (function($){
    
	// Github repo
	$.fn.repo = function( options ){

		// Context and Base64 methods
		var _this       = this,
			keyStr64    = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=",
			encode64    = function(a){a=escape(a);var b="";var c,d,e="";var f,g,h,i="";var j=0;do{c=a.charCodeAt(j++);d=a.charCodeAt(j++);e=a.charCodeAt(j++);f=c>>2;g=(c&3)<<4|d>>4;h=(d&15)<<2|e>>6;i=e&63;if(isNaN(d)){h=i=64}else if(isNaN(e)){i=64}b=b+keyStr64.charAt(f)+keyStr64.charAt(g)+keyStr64.charAt(h)+keyStr64.charAt(i);c=d=e="";f=g=h=i=""}while(j<a.length);return b},
			decode64    = function(a){var b="";var c,d,e="";var f,g,h,i="";var j=0;var k=/[^A-Za-z0-9\+\/\=]/g;if(k.exec(a)){}a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{f=keyStr64.indexOf(a.charAt(j++));g=keyStr64.indexOf(a.charAt(j++));h=keyStr64.indexOf(a.charAt(j++));i=keyStr64.indexOf(a.charAt(j++));c=f<<2|g>>4;d=(g&15)<<4|h>>2;e=(h&3)<<6|i;b=b+String.fromCharCode(c);if(h!=64){b=b+String.fromCharCode(d)}if(i!=64){b=b+String.fromCharCode(e)}c=d=e="";f=g=h=i=""}while(j<a.length);return unescape(b)},
			transition  = function(el, direction, init){
				var opposite    = (direction === 'left') ? '' : 'left';
					height      = el.outerHeight(true) + 
						_this.container.find('h1').outerHeight(true) + 
							parseInt(_this.container.css('padding-top')) + 
							parseInt(_this.container.css('padding-bottom'));
				if(init){
					el.addClass('active');
					_this.container.css({'height' : height + 'px'});
				} else {
					_this.container
						.find('.page.active')
						.css('position','absolute')
						.addClass(direction)
						.removeClass('active')
						.end()
						.css({'height' : height + 'px'});
					el.addClass('active')
						.removeClass(opposite)
						.delay(250)
						.queue(function(){
							$(this).css('position','relative').dequeue();
						});
				}
			};

		// Settings
        _this.settings = $.extend({
			user    : '',
			name    : '',
			branch  : 'master',
			css     : ''
		}, options);
        
		// Extension Hashes
        _this.extensions = {
			as          : 'actionscript',
			coffee      : 'coffeescript',
			css         : 'css',
			html        : 'html',
			js          : 'javascript',
			md          : 'markdown',
			php         : 'php',
			py          : 'python',
			rb          : 'ruby',
		};

		// Repo
		_this.repo = {
			name        : 'default',
			folders     : [],
			files       : []
		};

		// Namespace
		_this.namespace = _this.settings.name.toLowerCase();
        
		// Insert CSS
		if(typeof _this.settings.css != 'undefined' && _this.settings.css !== '' && $('#repojs_css').length <= 0)
			$('body').prepend($('<style id="repojs_css">').html(_this.settings.css));

		// Query Github Tree API
		$.ajax({
			url: 'https://api.github.com/repos/' + _this.settings.user + '/' + _this.settings.name + '/git/trees/' + _this.settings.branch + '?recursive=1',
			type: 'GET',
			data: {},
			dataType: 'jsonp',
			success: function(response){

				var treeLength = response.data.tree.length;
				$.each(response.data.tree, function(i){

					// Setup if last element
					if(!--treeLength){
						_this.container.addClass('loaded');
						transition(_this.container.find('.page').first(), 'left', true);
					}

                    // Return if data is not a file
                    if(this.type != 'blob')
                        return;

                    // Setup defaults
                    var first       = _this.container.find('.page').first()
                        ctx         = _this.repo,
                        output      = first,
                        path        = this.path,
                        arr         = path.split('/'),
                        file        = arr[(arr.length - 1)],
                        id          = '';

                    // Remove file from array
                    arr = arr.slice(0,-1);
                    id = _this.namespace;
                    
                    // Loop through folders
                    $.each(arr, function(i){

                        var name    = String(this),
                            index   = 0,
                            exists  = false;

                        id = id + '_split_' + name.replace('.','_dot_');

                        // Loop through folders and check names
                        $.each(ctx.folders, function(i){
                            if(this.name == name){
                                index = i;
                                exists = true;
                            }
                        });

                        // Create folder if it doesn't exist
                        if(!exists){
                            
                            // Append folder to DOM
                            if(output !== first){
                                output.find('ul li.back').after($('<li class="dir"><a href="#" data-id="' + id + '">' + name +'</a></li>'));
                            } else {
                                output.find('ul li').first().after($('<li class="dir"><a href="#" data-id="' + id + '">' + name +'</a></li>'));    
                            }

                            // Add folder to repo object
                            ctx.folders.push({
                                name        : name,
                                folders     : [],
                                files       : [],
                                element     : $('<div class="page" id="' + id + '"><ul><li class="titles"><span>name</span></li><li class="back"><a href="#">..</a></li></ul></page>').appendTo(_this.container)[0]
                            });
                            index = ctx.folders.length-1;

                        }

                        // Change context & output to the proper folder
                        output = $(ctx.folders[index].element);
                        ctx = ctx.folders[index];

                    });
                    
                    // Append file to DOM
                    output.find('ul').append($('<li class="file"><a href="#" data-path="' + path + '" data-id="' + id + '">' + file +'</a></li>'));
                    
                    // Add file to the repo object
                    ctx.files.push(file);
                
                });
                
                // Bind to page links
                _this.container.on('click', 'a', function(e){
                    
                    e.preventDefault();

                    var link        = $(this),
                        parent      = link.parents('li'),
                        page        = link.parents('.page'),
                        repo        = link.parents('.repo'),
                        el          = $('#' + link.data('id'));
                    
                    // Is link a file
                    if(parent.hasClass('file')){
                        
                        el = $('#' + link.data('id'));
                        
                        if(el.legnth > 0){
                            el.addClass('active');
                        } else {
                            $.ajax({
                                url: 'https://api.github.com/repos/' + _this.settings.user + '/' + _this.settings.name + '/contents/' + link.data('path') + '?ref=' + _this.settings.branch,
                                type: 'GET',
                                data: {},
                                dataType: 'jsonp',
                                success: function(response){
                                    
                                    el = $('<div class="file page" id="' + link.data('id') + '"><pre><code></code></pre></div>').appendTo(repo);
                                    var ext = el.text().split('.').pop();
                                    if(typeof _this.extensions[ext] != 'undefined')
                                        file.find('code').addClass(_this.extensions[ext]);
                                    el.find('code').html(String(decode64(response.data.content)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'));
                                    el.find('pre').vanGogh();
                                    transition(el, 'left');
                                }, 
                                error: function(response){
                                    if(console && console.log)
                                        console.log('Request Error:', e);
                                }
                            });
                        }

                    // Is link a folder
                    } else if(parent.hasClass('dir')) {

                        _this.container
                            .find('h1')
                            .find('.active')
                            .removeClass('active')
                            .end()
                            .append('<a href="#" data-id="' + link.data('id') + '" class="active">' + link.text() + '</a>');
                        transition(el, 'left');

                    // Is link a back link 
                    } else if(parent.hasClass('back')){

                        _this.container.find('h1 a').last().remove();
                        el = page[0].id.split('_split_').slice(0,-1).join('_split_');
                        el = (el == _this.namespace) ? _this.container.find('.page').first() : $('#' + el);
                        transition(el, 'right');

                    // Is nav link
                    } else {

                        if(link[0] !== _this.container.find('h1 a')[0])
                            link.addClass('active');
                        _this.container.find('h1 a').slice((link.index()+1),_this.container.find('h1 a').length).remove();
                        transition(el, 'right');

                    }
                });
            },
            error : function(response){
                if(console && console.log)
                    console.log('Request Error:', response);
            }
        });
    
        // Setup repo container
        return this.each(function(){
            _this.container = $('<div class="repo"><h1><a href="#" data-id="' + _this.namespace + '_split_default">' + _this.settings.name + '</a></h1><div class="loader"></div><div class="page" id="' + _this.namespace + '_split_default"><ul><li class="titles"><span>name</span></li></ul></div></div>').appendTo($(this));
        });
    };

})(jQuery);