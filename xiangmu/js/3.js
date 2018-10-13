webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(124);


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	var LFControl=__webpack_require__(36);

	module.exports=(function(){



	    return function(id,submited,close){

	        //LFControl.loading.Start();
	        var sessionId;


	        $.ajax({
	            url:'http://shopping.lefeng.com/ajax/checkProductAntiBrushed',
	            data:{gid:id},
	            dataType:'jsonp',
	            type:'get',
	            success:function(data){
	                if(data.code==0 && data.data==1){
	                    $('body').append(
	                        '<div class="addToCartValid-bg"></div>' +
	                        '<div class="addToCartValid">' +
	                        '<div class="addToCartValid-title">璇疯緭鍏ラ獙璇佺爜</div>' +
	                        '<a href="javascript:">&times</a>' +
	                        '<div class="addToCartValid-inputs">' +
	                        '<input type="text" maxlength="10" /> ' +
	                        '<img src="" alt="楠岃瘉鐮佸浘鐗�" title="鐐瑰嚮鍒锋柊楠岃瘉鐮�"/>' +
	                        '<p></p> ' +
	                        '</div>' +
	                        '<button class="addToCartValid-submit">鎻愪氦</button>'+
	                        '</div>');

	                    $('.addToCartValid a').on('click', function(e){
	                        close();
	                        $('.addToCartValid-bg,.addToCartValid').remove();
	                    });

	                    $('.addToCartValid img').on('click', function(e){
	                        var self=this;
	                        $.ajax({
	                            url:'http://shopping.lefeng.com/ajax/getVerificationCode',
	                            data:{_:Math.random()},
	                            dataType:'jsonp',
	                            type:'get',
	                            success:function(data){
	                                if(data.code==0){
	                                    sessionId=data.data.sessionId;
	                                    self.src='data:image/png;base64,'+data.data.captchaPic;
	                                }
	                            }});
	                    });

	                    $('.addToCartValid-submit').click(function(e){
	                        var yzm = $.trim($('.addToCartValid-inputs input').val()||'');
	                        if(!yzm) alert('璇疯緭鍏ラ獙璇佺爜');
	                        else {
	                            $('.addToCartValid-bg,.addToCartValid').remove();
	                            submited(yzm, sessionId);
	                        }
	                    });

	                    $('.addToCartValid img').click();

	                }else {
	                    submited(1);
	                }

	                //LFControl.loading.End();
	            },
	            error:function(e){
	                console.log(e);
	                //LFControl.loading.End();
	            }
	        });



	    };
	})();























/***/ }),

/***/ 74:
/***/ (function(module, exports) {

	var LFControl=window.LFControl;


	module.exports={
	    init: function () {
	        $('#scroll-to-top').click(function(){
	            $('html, body').animate({
	                scrollTop: $('.Chead').position().top
	            }, 300);
	        });

	        $(window).scroll(function () {
	            var sTop = $(window).scrollTop();
	            if (sTop > 300) {
	                $("#scroll-to-top").css('display', 'block');
	            } else {
	                $("#scroll-to-top").css('display', 'none');
	            }
	        });


	    }
	}
























/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	
	__webpack_require__(125);

	__webpack_require__(51);
	__webpack_require__(30);


	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);



/***/ }),

/***/ 125:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	var LFControl= __webpack_require__(36);
	var addToCartValid= __webpack_require__(38);

	var saleIndexHeadAndTaul = {
	    islogin:false,
	    loginDef:false,
		Init: function(){
	        saleIndexHeadAndTaul.bind.fixWarehouse();
			saleIndexHeadAndTaul.bind.DeliveryAddress();
			saleIndexHeadAndTaul.bind.CheadInfo();
			saleIndexHeadAndTaul.bind.ReDeliveryAddress();
	        saleIndexHeadAndTaul.bind.GetHotKeys();
			saleIndexHeadAndTaul.bind.ShopCart();
			$.when(saleIndexHeadAndTaul.bind.CheckLogin()).done(function(){saleIndexHeadAndTaul.loginDef = true;}).fail(function(){saleIndexHeadAndTaul.loginDef = false;});
			saleIndexHeadAndTaul.bind.AddFavorite( $('#Chead-save'), '涔愯渹缃�', 'http://www.lefeng.com' );
	//        LFControl.search.WordFun();
			saleIndexHeadAndTaul.bind.getShopCar();
	        saleIndexHeadAndTaul.bind.setBrandLink();
			 saleIndexHeadAndTaul.bind.addBgBlack();


	        $('.Cfooter-cr>span').eq(1).text('澶╂触鍝佺畝鐢靛瓙鍟嗗姟鏈夐檺鍏徃');
	        $('.Cfooter-cr').html('<div class="Cfooter-cr-a"><a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/76.html">鍏充簬涔愯渹</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/77.html">鍏嶈矗澹版槑</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/78.html">闅愮澹版槑</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/79.html">鐗堟潈澹版槑</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/help/zhaopin.html">鎷涜仒淇℃伅</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/help/73.html">鑱旂郴鎴戜滑</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/help/helpCenter.html">甯姪涓績</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/80.html">鍙嬫儏閾炬帴</a> </div> <span>Copyright <b>漏</b> 2008-2016 Lefeng.com All Rights Reserved.</span> <span>澶╂触鍝佺畝鐢靛瓙鍟嗗姟鏈夐檺鍏徃</span> <a target="_blank" href="http://www.miibeian.gov.cn/?biid=7520">娲CP澶�15005555鍙�-1</a>&nbsp;&nbsp;<img style="display: inline-block;width:15px;height:15px;padding-right:2px" src="http://h5rsc.vipstatic.com/lefeng_pc/images/beian.png" /><span>浜叕缃戝畨澶�11010502034938鍙�</span> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/242.html">钀ヤ笟鎵х収</a><div class="Cfooter-cr-info"> <span>鍏徃鍏ㄧО锛氬ぉ娲ュ搧绠€鐢靛瓙鍟嗗姟鏈夐檺鍏徃  </span> &nbsp; &nbsp; <span>  鍏徃鍥鸿瘽锛�400 000 1818   </span> &nbsp; &nbsp; <span>   鍏徃鍦板潃锛氬ぉ娲ュ競姝︽竻鍖轰含娲ョ數瀛愬晢鍔′骇涓氬洯瀹忕憺閬�18鍙�</span> </div><div class="Cfooter-cr-img"> <a id="___szfw_logo___" class="cxwz" rel="nofollow" target="_blank" href="https://search.szfw.org/cert/l/CX20120918001688001713"></a> <a class="kxwz" rel="nofollow" target="_blank" href="https://ss.knet.cn/verifyseal.dll?sn=e15011931011457422bp2j000000&amp;ct=df&amp;a=1&amp;pa=0.1418370669707656"></a> <a class="pjzxlm" rel="nofollow" target="_blank" href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1074823632"></a> <a class="itrust" rel="nofollow" target="_blank" href="http://www.315online.com.cn/member/315130044.html">涓浗浜掕仈缃戜俊鐢ㄨ瘎浠蜂腑蹇�</a> <a href="http://www.lefeng.com/notice/84.html" target="_blank" rel="nofollow" class="xfwq"></a> </div>');
		}
	};

	saleIndexHeadAndTaul.bind = {
	    fixWarehouse: function () {
	        // 宸查€夋嫨瀹夊窘鐨勪細鎶婂垎浠撳瓨鍦╟ookie涓紝闇€瑕佸己琛屾敼涓哄崕涓�
	        if (LFControl.cookie.Get('country_id') == '103104' && LFControl.cookie.Get('warehouse') == 'VIP_SH') {
	            LFControl.cookie.Set('warehouse', 'VIP_HZ', 3600 * 24 * 30, '/', '.lefeng.com');
	        }
	    },
		addBgBlack:function(){
				$(".voucher").css("height",$(document.body).height());
				$(".regionalTipsBk").css("height",$(document.body).height());
		},
	    setHeadSearchText:function(searchDefaultText){
	        if ($("#search").val() === '' || $("#search").val() === searchDefaultText || $("#search").val() === '鎼滃晢鍝�') {
	            $("#search-tm,#search").val(searchDefaultText);
	        }
	        else {
	            searchDefaultText = $("#search").val();
	        }
	        $("#search-tm,#search").val(searchDefaultText);
	        LFControl.search.WordFun({input:"search",btn:"search-submit",auto:"auto",defaultText: searchDefaultText});
	        $('#search').focus(function(e){
	            $(this).parent().addClass('active');
	        });
	        $('#search').blur(function(e){
	            $(this).parent().removeClass('active');
	        });
	    },
	    GetHotKeys: function() {
	        LFControl.search.GetHotKeys(function(htmlStr, defaultText) {
	            $('.search-input').append('<p>鐑棬锛�' + htmlStr + "</p>");
	            saleIndexHeadAndTaul.bind.setHeadSearchText(defaultText);
	        });
	    },
		DeliveryAddress:function(){
	        //閫佽揣鍦板潃
	        $( '.areaSellBtn' ).mouseenter( function(){
	            $( '.areaSell' ).show();
	        })
	        var coutnry_id = LFControl.cookie.Get("country_id");
	        if(typeof coutnry_id!="undefined") {
	            for (var i = 0; i < $('.areaSell a').length; i++) {
	                if ($('.areaSell a').eq(i).attr('pid') == coutnry_id) {
	                    $(".areaSellBtn").html('<i class="up"></i>' + $('.areaSell a').eq(i).text());
	                }
	            }
	        }
	        $( '.areaSell' ).delegate('', 'mouseleave',function() {
	                $(this).hide();
	        }).delegate('ul li a', 'click', function() {
	            var msg = $(this).attr('pid');
	            var warehouse = $(this).attr('warehouse');
	            // 闄曡タ鐪佸垏鍗庝腑浠�
	            if (msg == '106101' && warehouse == 'VIP_CD') {
	                warehouse = 'VIP_HZ'
	            }
	            $(".areaSellBtn").html('<i class="up"></i>'+$(this).text());
	            $(".areaSell").hide();
	            LFControl.cookie.Set("country_id",msg,39528000,'/','lefeng.com');
	            LFControl.cookie.Set("warehouse",warehouse,39528000,'/','lefeng.com');
	            window.location.reload();
	        });
	    },
	    CheadInfo:function(){     // 蹇€熷鑸� 鎵嬫満涔愯渹 鎴戠殑璁㈠崟 璐墿杞� 鏀惰棌璁㈠崟
	        $('#Chead_fastnav, .Chead-app, .Chead_myh,.shopping-btn').mouseenter(function(){
	            $(this).next().show();
	        }).mouseleave(function() {
	            //$(this).next().slideUp(100);
	        });
	        $('#Chead_fastnav, .Chead-app, .Chead_myh,.shopping-btn').next().mouseleave(function(){
	            $(this).hide();
	        });
	    },
	    BeautyMall:function(){  //缇庡鍟嗗煄
	        var menuUpTime;
	        $('.Cnav-one a:eq(1)').hover(function() {
	            $(".top-list").stop(true, true).slideDown(100);
	        }, function() {
	            menuUpTime = setTimeout(function() {
	                $(".top-list").slideUp(100)
	            }, 400)
	        });
	        $('.top-list').hover(function() {
	            clearTimeout(menuUpTime);
	        }, function() {
	            $(this).stop(true, true).slideUp(100);
	        })
	    },
	    /**ReDeliveryAddress: function(){
			var mydate=new Date();
			var year=mydate.getFullYear();
			var month=mydate.getMonth()+1;
			var date=mydate.getDate();//鏃ユ湡
			var m=month<10?("0"+month):month;
			var d=date<10?("0"+date):date;
			var newDate=year+"-"+m+"-"+d;
			if(LFControl.cookie.Get("isFirstVisit")==undefined || LFControl.cookie.Get("ad_ids")==undefined){//濡傛灉绗竴娆¤闂� 榛樿鏄寳浜湴鍧€ 鍏堝睍绀哄箍鍛婂叧闂箍鍛�  閫夋嫨鍦板尯
				var areaid = LFControl.cookie.Get("country_id")?LFControl.cookie.Get("country_id"):101101;
				saleIndexHeadAndTaul.bind.getPicId(areaid,0);//101101琛ㄧず鍖椾含 鏂拌€佸淇濆瓨鏃堕暱涓轰竴澶�
				LFControl.cookie.Set("isFirstVisit", newDate, 39528000, '/', 'lefeng.com');//瀛樿闂棩鏈�
			}
	        if (LFControl.cookie.Get("isFirstVisit") != undefined && LFControl.cookie.Get("isFirstVisit") != newDate) {//琛ㄧず鑰佸
	            var country_id = LFControl.cookie.Get("country_id");
	            saleIndexHeadAndTaul.bind.getPicId(country_id, 1);
	        }
		},**/
		ReDeliveryAddress: function(){
			if(LFControl.cookie.Get("isFirstVisit")==undefined || LFControl.cookie.Get("ad_ids")==undefined){//濡傛灉绗竴娆¤闂� 榛樿鏄寳浜湴鍧€ 鍏堝睍绀哄箍鍛婂叧闂箍鍛�  閫夋嫨鍦板尯
				var areaid = LFControl.cookie.Get("country_id")?LFControl.cookie.Get("country_id"):101101;
				saleIndexHeadAndTaul.bind.getPicId(areaid,1);//101101琛ㄧず鍖椾含
				saleIndexHeadAndTaul.bind.getOldFriend();//閫氳繃鎺ュ彛鍒ゆ柇鏂拌€佸
			}
	        if (LFControl.cookie.Get("isFirstVisit") != undefined&&LFControl.cookie.Get("isFirstVisit")==2) {//琛ㄧず鑰佸
	            var country_id = LFControl.cookie.Get("country_id");
	            saleIndexHeadAndTaul.bind.getPicId(country_id, LFControl.cookie.Get("isFirstVisit"));
	        }
			if (LFControl.cookie.Get("isFirstVisit") != undefined&&LFControl.cookie.Get("isFirstVisit")==1) {//琛ㄧず鏂板
				saleIndexHeadAndTaul.bind.getOldFriend();////閫氳繃鎺ュ彛鍒ゆ柇鏂拌€佸
	            var country_id = LFControl.cookie.Get("country_id");
	            saleIndexHeadAndTaul.bind.getPicId(country_id, LFControl.cookie.Get("isFirstVisit"));
	        }
		},
		getOldFriend:function(){
			var url = 'http://passport.lefeng.com/ajax/checkIsNewVisitor?callback=?';
				 $.ajax({
						type:"GET",
						url:url,
						dataType:"jsonp",
					    success:function(data){
							if(data.code==0){
	                           //1鏂板 2鑰佸
								LFControl.cookie.Set("isFirstVisit", data.data.isNewVisitor, 39528000, '/', 'lefeng.com');//瀛樿闂棩鏈�
							}

						}
				 })
		},
	    showRegionalTip:function(){
	        $( '.regionalTipsBk' ).show();
	        $( '.regionalTipsBk' ).css( "opacity","0.7" );
	        $( '.regionalTipBox' ).show();
	        $(".regionalTipBox").delegate('dl a', 'click', function() {
	            var msg = $(this).attr('pid');
	            var warehouse = $(this).attr('warehouse');
	            // 闄曡タ鐪佸垏鍗庝腑浠�
	            if (msg == '106101' && warehouse == 'VIP_CD') {
	                warehouse = 'VIP_HZ'
	            }
	            $(".areaSellBtn").html('<i class="up"></i>'+$(this).text());
	            $(".regionalTipBox").hide(100);
	            $( '.regionalTipsBk' ).hide();
	            LFControl.cookie.Set("country_id",msg,39528000,'/','lefeng.com');
	            LFControl.cookie.Set("warehouse",warehouse,39528000,'/','lefeng.com');
	            window.location.reload();
	        });
	    },
		getPicId:function(country_id,isFirstVisit){//鑾峰彇灞曠ず鐨勫浘鐗�
			var url = 'http://www.lefeng.com/ajax/getPopAd?isFirstVisit='+isFirstVisit+'&areaId='+country_id+'&callback=?';
	            $.getJSON( url, function(data) {
					if(data.code==0){
						var picArray=LFControl.cookie.Get("ad_ids");//鎵€鏈夊睍绀鸿繃鐨勫浘鐗噄d
						var pid = data.data.id;//鍥剧墖鐨刬d
	                    var pUrl = data.data.pic_url;
	                    var pLink = data.data.pic_link;
	                     if (picArray != undefined) {//琛ㄧず鏈夊浘鐗噄d
							if(picArray.indexOf(pid)==-1){//琛ㄧず娌℃湁璇� 鍥剧墖
								picArray+=pid+",";
								LFControl.cookie.Set("ad_ids", picArray, 86400, '/', 'lefeng.com');//淇濆瓨娴忚鍥剧墖鐨刬d
								$(".voucherLink a").eq(0).attr("href", pLink);
								$(".voucherLink a img").attr("src", pUrl);
								$('.voucher').show();
								$('.voucher').css("opacity", "0.7");
								$('.voucherLink').show();
								$(".voucherLink a.close,.voucher").click(function () {
									$('.voucherLink').hide(100);
									$('.voucher').hide();
									if (LFControl.cookie.Get("country_id") == undefined) {
										saleIndexHeadAndTaul.bind.showRegionalTip();
									}
								})
							}
						} else {
							picArray=pid+",";
	                        LFControl.cookie.Set("ad_ids", picArray, 86400, '/', 'lefeng.com');//淇濆瓨娴忚鍥剧墖鐨刬d
							$(".voucherLink a").eq(0).attr("href", pLink);
							$(".voucherLink a img").attr("src", pUrl);
							$('.voucher').show();
							$('.voucher').css("opacity", "0.7");
							$('.voucherLink').show();
							$(".voucherLink a.close,.voucher").click(function () {
								$('.voucherLink').hide(100);
								$('.voucher').hide();
								if (LFControl.cookie.Get("country_id") == undefined) {
									saleIndexHeadAndTaul.bind.showRegionalTip();
								}
							})
	                    }
					}else{
	                    if(LFControl.cookie.Get("country_id")==undefined){
	                        saleIndexHeadAndTaul.bind.showRegionalTip();
	                    }
	                }
				})
		},
	    ShopCart:function(){
	        $( '.shopping-btn' ).mouseenter( function(){
	            // 璐墿杞︿负绌烘椂寮瑰嚭娴眰
				var cartCount = + LFControl.cookie.Get("cart_count");
			    if(!cartCount) {
	                cartCount = 0;
					$('.shopping-list').find('.noshop').show();
					$('.shopping-list').find('.haveshop').hide();
					$( ".shopping-list-title strong, .shopping-btn strong").html( cartCount );
				    $('.shopping-list').find('.noshop').html('');
					$('.shopping-list').find('.noshop').css("height","30px");
	                LFControl.boxLoading.Start('.noshop');//娣诲姞loading鏍峰紡
					$('.shopping-list').show();
	            }
				var url = 'http://passport.lefeng.com/ajax/validUserLogin?callback=?';
	            $.ajax({
	                type:"GET",
	                url:url,
	                dataType:"jsonp",
	                statusCode: {
	                    404: function () {
							LFControl.boxLoading.End('.noshop');//鍔犺浇瀹屾瘯鍚庡幓闄oading
	                        saleIndexHeadAndTaul.bind.shopCartError();
	                    }
	                },
	                success:function(data){
	                    if( data.code == 0 ){
	                        if( data.data.isLogin != 1 ){
								LFControl.boxLoading.End('.noshop');//鍔犺浇瀹屾瘯鍚庡幓闄oading
	                           saleIndexHeadAndTaul.bind.shopCartError();
	                        }else{
	                            var cartCount = LFControl.cookie.Get("cart_count");
	                            if('undefined' == cartCount || null == cartCount) {
	                                cartCount = 0;
	                            }
	                            $( '.shopping-btn' ).html( '<strong>'+cartCount+'</strong>' );
	                            var _this = $(this);

	                            var url = LFControl.settings.API_PATH + '/neptune/cart/get/v2';
	                            $.ajax({
	                                type: "GET",
	                                url: url,
	                                data: {
	                                    warehouse: LFControl.cookie.Get("warehouse")
	                                },
	                                dataType: "jsonp",
	                                jsonp: 'jsonp',
	                                statusCode: {
	                                    404: function () {
	                                        LFControl.boxLoading.End('.noshop');//鍔犺浇瀹屾瘯鍚庡幓闄oading
	                                        publicHeadAndTaul.bind.shopCartError();
	                                    }
	                                },
	                                success:function(res){
										if ( data.code == 0 ){
											LFControl.boxLoading.End('.noshop');//鍔犺浇瀹屾瘯鍚庡幓闄oading
	                                        var cartInfo = res.data.cartInfo,
	                                            supplierList = res.data.supplierList;

	                                        if (cartInfo && +cartInfo.skuCount !== 0) {
	                                            var str = '';
	                                            $(".shopping-list-title strong, .shopping-btn strong").html(cartInfo.skuCount);
	                                            $("#totalProduct").html(cartInfo.skuCount);
	                                            $("#totalMoney").html('<em>锟�</em>' + cartInfo.amounts.payTotal);

	                                            // 濡傛灉璐墿杞﹂潪绌猴紝鍒欐坊鍔犵偣鍑讳簨浠�
	                                            $('.shopping-list-title').click(function () {
	                                                location.href = "http://shopping.lefeng.com/showCart";
	                                            });

	                                            // 璐墿杞﹀垎渚涜揣鍟嗭紝姣忎釜渚涜揣鍟嗗彲鑳芥湁鑻ュ共涓。鏈燂紝姣忎釜妗ｆ湡涓嬪彲鑳芥湁澶氫釜鍟嗗搧(娉細妗ｆ湡鎸囩湡瀹炴。鏈�)
	                                            for (var supplierListCount = 0, supplierListLength = supplierList.length; supplierListCount < supplierListLength; supplierListCount++) {
	                                                var supplier = supplierList[supplierListCount],
	                                                    brandList = supplier.brandList;
	                                                for (var brandListCount = 0, brandListLength = brandList.length; brandListCount < brandListLength; brandListCount++) {
	                                                    var sizeList = brandList[brandListCount].sizeList;
	                                                    for (var productCount = 0, sizeListLength = sizeList.length; productCount < sizeListLength; productCount++) {
	                                                        var sizeInfo = sizeList[productCount],
	                                                            productInfo = sizeInfo.productInfo;
	                                                        str += '<dl><dt><a href="http://product.lefeng.com/product/' + productInfo.id + '.html" target="_blank"><img src="' + productInfo.litterImage + '"></a></dt>' +
	                                                            '<dd class="shopping-pro"><a href="http://product.lefeng.com/product/' + productInfo.id + '.html" target="_blank">' + productInfo.name + '</a></dd>' +
	                                                            '<dd class="shopping-price"><em>锟�' + productInfo.vipshopPrice + '</em>脳' + sizeInfo.num + '</dd></dl>';
	                                                    }
	                                                }

	                                            }
	                                            $("#shopping_list_info").html(str);
	                                            saleIndexHeadAndTaul.bind.MiniCart();
	                                            _this.next().show();
	                                            LFControl.cookie.Del("cart_count", "/", "lefeng.com");
	                                            LFControl.cookie.Set("cart_count", cartInfo.skuCount, 1200, '/', 'lefeng.com');
	                                            $('.shopping-list').show();
	                                            $('.shopping-list').find('.haveshop').show();
	                                            $('.shopping-list').find('.noshop').hide();
	                                        }
	                                    }else {
											LFControl.boxLoading.End('.noshop');//鍔犺浇瀹屾瘯鍚庡幓闄oading
	                                        saleIndexHeadAndTaul.bind.shopCartError();
	                                    }
	                                }
	                            });
	                        }
	                    }
	                }
	            });
	        })
	    },
		shopCartError:function(){
			$( '.shopping-list' ).show();
			$( '.shopping-list' ).find( '.noshop' ).show();
			$( '.shopping-list' ).find( '.noshop' ).html('鎮ㄧ殑璐墿杞﹁繕娌℃湁鍟嗗搧锛�<br>璧剁揣鍘婚€夎喘鍚э紒');
			$( '.shopping-list' ).find( '.haveshop' ).hide();
			$( ".shopping-list-title strong, .shopping-btn strong").html( '0' );
		},
		getShopCar:function(){
			var url = 'http://passport.lefeng.com/ajax/validUserLogin?callback=?';
	            $.getJSON( url, function(data) {
				      if( data.code == 0 ){
							if( data.data.isLogin != 1 ){
								$( ".shopping-list-title strong, .shopping-btn strong").html( '0' );
	                        }else{
								var cartCount = LFControl.cookie.Get("cart_count");
								if('undefined' == cartCount || null == cartCount) {
									cartCount = 0;
								}
	                            $( '.shopping-btn' ).html( '<strong>'+cartCount+'</strong>' );
	                         }
	                    }
		        });
		},
	    CheckLogin:function(){
	        var def = $.Deferred();
			var url = 'http://passport.lefeng.com/ajax/validUserLogin?callback=?';
	        $.getJSON( url, function(data) {
	            if( data.code == 0 ){
	                if( data.data.isLogin == 1 ){  //鐧诲綍
	                    saleIndexHeadAndTaul.islogin=true;
	                    $( ".Chead-welcome").html( '鍡★紝娆㈣繋鏉ヤ箰铚傦紝<a mars_sead="lpc_top_name" href="http://order.lefeng.com">'+data.data.userNick+'</a>&nbsp; | &nbsp;<a mars_sead="lpc_top_el" href="javascript:;" id="exit">閫€鍑虹櫥褰�</a>' );
	                }
	                def.resolve();
					saleIndexHeadAndTaul.bind.exit();
	            }
	        });
	        return def.promise();
	    },
	    AddFavorite:function(e, t, n) {
	        var t = t || $("title").text(),n = n || location.href;
	        e.click(function() {
	            return document.all ? window.external.AddFavorite(n, t) : alert("璇蜂娇鐢–trl+D鍔犲叆鏀惰棌"),!1
	        })
	    },
		exit:function(){//鐢ㄦ埛閫€鍑�
			$("#exit").click(function(){
				 $.ajax({
					url: "http://passport.lefeng.com/ajax/logout",
					dataType: "jsonp",
					jsonp:'callback',
					async : false,
					success: function(data){
						if(data.code==0){
							if(data.data.isLogout==1){
								$(".Chead-welcome").html('娆㈣繋鏉ュ埌涔愯渹锛岃&nbsp;<a href="http://passport.lefeng.com/toLogin">鐧诲綍</a>&nbsp; | &nbsp;<a href="http://passport.lefeng.com/toRegister">鍏嶈垂娉ㄥ唽</a>');
								LFControl.cookie.Del("cart_count","/","lefeng.com");
	                            saleIndexHeadAndTaul.islogin = false;
								}else{
							    }
							};
						}
			 	});
			})
		},
	    JsLoaded:true,
		MiniCart:function(){//鑾峰彇杩蜂綘璐墿杞︾殑鍐呭
			if ($("#shopping_list_info dl").size() > 5) {
				if (saleIndexHeadAndTaul.bind.JsLoaded) {
	                saleIndexHeadAndTaul.bind.JsLoaded = false;
					saleIndexHeadAndTaul.bind.loadScript("http://h5rsc.vipstatic.com/lefeng_pc/js/page/jscroll.js", saleIndexHeadAndTaul.bind.cart_refScroll);
				} else {
	                setTimeout(function(){
					    saleIndexHeadAndTaul.bind.cart_refScroll();
	                },500)
				}
	    	}
		},
		cart_refScroll:function(){
			$("#shopping_list_info").addClass('shopping-list-barOn')
			$("#shopping_list_info").jscroll({
	                W:"5px",
	                Btn:{btn:false},
	                Bg:"#fff",
	                Bar:{
	                    Bd:{Out:"#ccc",Hover:"#ccc"},//璁剧疆婊氬姩婊氳酱杈规棰滆壊锛氶紶鏍囩寮€(榛樿)锛岀粡杩�
	                    Bg:{Out:"#ccc",Hover:"#ccc",Focus:"orange"}
	                }
	            });
		},
		loadScript:function(url, callback){
			var script = document.createElement("script")
			script.type = "text/javascript";
			if (script.readyState) { //IE
				script.onreadystatechange = function() {
					if (script.readyState == "loaded" || script.readyState == "complete") {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else { //Others
				script.onload = function() {
					callback();
				};
			}
			script.src = url;
			document.getElementsByTagName("head")[0].appendChild(script);
		},

	    AddToShopCart:function(obj,num,noproduct, yzm, sessionId){

	        var pid = obj.attr( 'data-pid' );

	        if (saleIndexHeadAndTaul.loginDef) {
	            if (saleIndexHeadAndTaul.islogin) {  //鐧诲綍
	                var haiTao = obj.attr('data-haitao');
	                var url = "";
	                var data = "";
	                if(haiTao!=1 && !yzm){
	                    addToCartValid(pid, function(yzm, sessionId){
	                        saleIndexHeadAndTaul.bind.AddToShopCart( obj, num, noproduct, yzm, sessionId );
	                    },function(e){});
	                    return;
	                }


	                if (haiTao == 1||haiTao=='true'||haiTao==true) {
	                    var pid = obj.attr('data-pid');
	                    $.ajax({
	                        url: "http://product.lefeng.com/ajax/getProductStock",
	                        data: {areaId: areaid, gids: pid},
	                        dataType: 'jsonp',
	                        jsonp: 'callback',
	                        success: function (data) {
	                            if (data.data[0] != undefined && data.data[0].type == 1) {  //no stock
	                                if (obj.attr('data-page') == 'detail') {
	                                    $('.joinCar').addClass('db3');
	                                    $('.joinCar2').addClass('end');
	                                } else {
	                                    obj.find(noproduct).html('<b class="end"></b>');
	                                    obj.find('.joinCar').remove();
	                                }
	                            } else {
	                                url = 'http://shopping.lefeng.com/showHaitaoConfirm';
	                                window.location.href = url + "?gid=" + pid;
	                            }
	                        }
	                    });
	                } else {
	                    var areaid = LFControl.cookie.Get("country_id") ? LFControl.cookie.Get("country_id") : 101101;
	                    var sizeId = obj.attr('data-sid');
	                    addurl = "http://shopping.lefeng.com/ajax/addCart";
	                    data = {sizeId: sizeId, areaid: areaid, sizeNum: num };
	                    if(yzm!==1) {
	                        data.captcha = yzm;
	                        data.sessionId = sessionId;
	                    }

	                    $.ajax({
	                        url: addurl,
	                        data: data,
	                        dataType: 'jsonp',
	                        jsonp: 'callback',
	                        success: function (data) {
	                            if (data.code == '0') {
	                                var skuCount = data.skuCount;
	                                var goodsTotal = data.goodsTotal;
	                                $('#addsuccess .sum p:eq(0)').html('璐墿杞﹀叡 <b>' + skuCount + '</b> 浠跺晢鍝�&nbsp;&nbsp;鍚堣锛�<b>' + goodsTotal + '</b> 鍏�');
	                                $('#addsuccess').show();
	                                $('.succ-close, #addsuccess .sum p:eq(1) a:eq(1)').click(function () {
	                                    $('#addsuccess').hide();
	                                })
	                                LFControl.cookie.Set("cart_count", skuCount, 1200, '/', 'lefeng.com');
	                                $('.shopping-btn').html('<strong>' + skuCount + '</strong>');
	                            } else if (data.code == '11026') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>瓒呰繃鏈€澶у彲璐拱娆惧紡鏁�');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11007') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>瓒呰繃璐墿杞︽渶澶ф暟閲忛檺鍒�');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11024') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>寰堥仐鎲撅紝浣犳墍鍦ㄧ殑鍦板尯娌℃湁鍞崠璇ュ晢鍝�');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11025') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>鎶辨瓑锛佽涓撳満闄愰噺璐拱锛屾棤娉曟坊鍔犳洿澶氬晢鍝�');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11027') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>浣庝簬鏈€灏忓彲璐拱娆惧紡鏁�');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '90005') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>绯荤粺寮傚父锛岃绋嶅悗閲嶈瘯');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11020') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>鍟嗗搧鏈笂鏋�');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '90008' || data.code == '3022' ) {
	                                location.href = 'http://passport.lefeng.com/toLogin?returnUrl=' + window.location.href;
	                            } else if (data.code == '11028') {  //宸叉姠鍏�
	                                obj.find(noproduct).html('<b class="end"></b>');
	                                obj.find('.joinCar').remove();
	                            } else {                             //榛樿澶辫触
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            }
	                            setTimeout(function () {
	                                $('#addsuccess,.failure,.stock').fadeOut('fast');
	                            }, 4000);
	                        },
	                        error: function (data) {
	                            //alert('鍔犲叆璐墿杞﹀け璐ワ紒');
	                            $('.failure').show();
	                            $('.succ-close').click(function () {
	                                $('.failure').hide();
	                            });
	                            setTimeout(function () {
	                                $('#addsuccess,.failure,.stock').fadeOut('fast');
	                            }, 4000);
	                        }
	                    });
	                }
	            } else {
	                location.href = 'http://passport.lefeng.com/toLogin?returnUrl=' + window.location.href;
	            }
	        } else {
	            setTimeout(function () {
	                saleIndexHeadAndTaul.bind.AddToShopCart();
	                setTimeout(arguments.callee, 400);
	            }, 400);
	        }
	    },
	    GetStock: function(param) {
	        var option = {
	            tag: param.tag,
	            pageType: param.pageType || 'list',
	            wrap: param.wrap,
	            cont1: param.cont1,
	            cont2: param.cont2,
	            btn: param.btn,
	            btnNullType:param.btnNullType || 'true',
	            btnNull: param.btnNull,
	            btnText:param.btnText || false,
	            stockType_1:param.stockType_1 || 'true',
	            stockType_2:param.stockType_2 || 'true',
	            btn2: param.btn2,
	            btn3: param.btn3,
	            btn4: param.btn4,
	            btn5: param.btn5,
	            btnNull2: param.btnNull2,
	            btnNull3: param.btnNull3,
	            btnNull4: param.btnNull4,
	            btnNull5: param.btnNull5
	        };
	        var proID = [],
	            areaId = LFControl.cookie.Get("areaId");
	        $(option.tag).each(function(i, n) {//鏁扮粍锛屽叏閮╠ata-pid锛屼笅闈㈡墽琛屽幓閲�
	            var _this = $(this).attr('data-pid');
	            proID.push(_this);
	        });
	        var outArry = function(arr) {//鏁扮粍鍘婚噸
	            var result = [],
	                hash = {};
	            for (var i = 0, elem; (elem = arr[i]) != null; i++) {
	                if (!hash[elem]) {
	                    result.push(elem);
	                    hash[elem] = true;
	                }
	            }
	            return result.toString();
	        }
	        var gids = outArry(proID);
	        //璇诲彇搴撳瓨
	        $.ajax({
	            url: 'http://product.lefeng.com/ajax/getProductStock',
	            type: 'get',
	            dataType: 'jsonp',
	            jsonp: 'callback',
	            data: {areaId: areaId,gids: gids},
	            success: function (data) {
	                var list = data.data;
	                if (option.pageType == 'list') {
	                    for (var i = 0; i < list.length; i++) {
	                        var _thisGid = list[i].gid; //json杩斿洖鐨勭殑褰撳墠id
	                        $(option.tag).each(function (j, n) {
	                            var _thisPro = $(this).attr('data-pid'); //html鐨勫綋鍓峣d
	                            var _thisHaitao = $(this).attr('data-haitao'); //鏄惁娴锋窐
	                            var _skuid = $(this).attr('data-sid'); //skuId

	                            if (_thisGid == _thisPro) {
	                                if (list[i].type == 1) {//鏃犲簱瀛�
	                                    //LFControl.stock.NoStock(option.tag, option.wrap, option.cont, j)
	                                    if (option.stockType_1 == 'true') {
	                                        $(option.tag).eq(j).find(option.wrap).html('').append(option.cont1);
	                                    };
	                                    if (option.btnNullType == 'true') {//淇敼鎸夐挳鐘舵€�
	                                        $(option.tag).eq(j).find(option.btn).addClass(option.btnNull).attr('href', 'javascript:void(0)').unbind();
	                                    } else {
	                                        //$(option.tag).eq(j).find(option.btn).addClass(option.btnNull).attr('href', 'javascript:void(0)').unbind().hide();
	                                        $(option.tag).eq(j).find(option.btn).remove();
	                                    }
	                                    if (option.btnText) {//淇敼鎸夐挳鏂囧瓧
	                                        $(option.tag).eq(j).find(option.btn).html(option.btnText);
	                                    };

	                                    /*------------------------------------------ 鏆傛椂涓哄崟鍝侀〉娣诲姞姝よ缃� ---------------------------------------------*/
	                                    if (_thisHaitao == 0) {//涓嶆槸娴锋窐
	                                        $(option.btn2).addClass(option.btnNull2).attr('href', 'javascript:void(0)').unbind();
	                                        $(option.btn4).addClass(option.btnNull4).attr('href', 'javascript:void(0)').unbind();
	                                        _tag.dcsMultiTrack('wt.pid', _skuid, 'wt.s_cart', 'quehuo');
	                                    } else if (_thisHaitao == 1) {//鏄捣娣�
	                                        $(option.btn3).addClass(option.btnNull3).attr('href', 'javascript:void(0)').unbind();
	                                        $(option.btn5).addClass(option.btnNull5).attr('href', 'javascript:void(0)').unbind();
	                                        _tag.dcsMultiTrack('wt.pid', _skuid, 'wt.s_cart', 'quehuo');
	                                        $('.targetDeliveryDate').hide();
	                                    }
	                                } else if (list[i].type == 2) {//鍗冲皢鏃犲簱瀛�
	                                    if (option.stockType_2 == 'true') {
	                                        $(option.tag).eq(j).find(option.wrap).html('').append(option.cont2);
	                                    };
	                                };
	                            }
	                        })
	                    };
	                }
	            }
	        });
	    },
	    warehouse: [
	        ["103105", "104104", "104105", "104106"],//鍗庡崡
	        ["103101", "103102", "103103", "103104", "103107"],//鍗庝笢
	        ["105100", "105101", "105102", "105103", "105104", "106102", "106103", "106104", "106105"],//瑗垮崡
	        ["101101", "101102", "101103", "101104", "101105", "102101", "102102", "102103"],//鍗庡寳
	        ["103106", "104101", "104102", "104103", "106101"]//鍗庝腑
	    ],
	    getHouse: function (id) {
	        var house = this.warehouse, houseIndex;
	        for (var i = 0; i < house.length; i++) {
	            if (!houseIndex) {
	                for (var j = 0; j < house[i].length; j++) {
	                    if (id == house[i][j]) {
	                        houseIndex = i;
	                        break;
	                    }
	                }
	            }
	        }
	        return houseIndex;
	    },
	    setBrandLink:function(){//鐤喘鍏ㄧ悆閾炬帴锛屽垎浠撹缃�
	        var houseId = LFControl.cookie.Get("country_id");
	        var index = this.getHouse(houseId);

	        var houseArr = [
						'http://brand.lefeng.com/showGoodsList/800074387.html',//鍗庡崡
						'http://brand.lefeng.com/showGoodsList/800074388.html',//鍗庝笢
						'http://brand.lefeng.com/showGoodsList/800074389.html',//瑗垮崡
						'http://brand.lefeng.com/showGoodsList/800074390.html',//鍗庡寳
						'http://brand.lefeng.com/showGoodsList/800074391.html'];//鍗庝腑
	        $(".Cnav-one a").last().attr({'href':houseArr[index]+"?f=1","target":"_blank"});
	    }
	}

	$(document).ready(function(){
		saleIndexHeadAndTaul.Init();
	});


	module.exports=saleIndexHeadAndTaul;


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

	var indexlocalclose = {
		Init: function(){
			indexlocalclose.bind.close();
		}
	};
	indexlocalclose.bind = {
		close : function(){
			$("#close").click(function(){
				$("#voucherLink").css('display','none');
				$("#voucher").css('display','none');
			});
			// 20161226鏀跨瓥瑕佹眰锛屾殏鏃跺叧闂鍝佷繚鍋ユā鍧楋紝寰呮斂绛栧厑璁稿啀寮€鏀�
			// 20170302鏆傛椂鍏抽棴闈㈤儴鎶よ偆銆佸僵濡嗛姘淬€佽韩浣撴礂鎶ゅ拰绗簩涓垎娆惧皾椴�
			// 娉細tit-8鏄敱tit-7澶嶅埗鑰屾潵锛岃繖鍙兘鏄釜鍧戙€傘€�
			setTimeout(function() {
				$('.tit-3, .content-3').hide(); // 闈㈤儴鎶よ偆
				$('.tit-4, .content-4').hide(); // 褰╁棣欐按
				$('.tit-5, .content-5').hide(); // 韬綋娲楁姢
				$('.tit-6, .content-6').hide(); // 椋熷搧淇濆仴
				$('.tit-7, .content-7').hide(); // 绗簩涓垎娆惧皾椴�
			}, 0)
		}
	};

	$(document).ready(function(){
		indexlocalclose.Init();
	});

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	var LFControl=window.LFControl;//require('LFControl');
	var saleIndexHeadAndTaul=__webpack_require__(130);
	var scrollToTop = __webpack_require__(74);

	var mallIndex = {
	    Init: function () {

	        mallIndex.bind.idCycle.Run();
	        mallIndex.bind.ProductLazy();
	        mallIndex.bind.scrollMenu();
	        mallIndex.bind.Addproduct();
	        mallIndex.bind.proStock();
	        scrollToTop.init();

	        //$('.tit-1,.content-1').hide();
	        //document.title= '涔愯渹缃� - 11.18 鎰熸仼铚傚弸鏃ワ紒';

	    },
	    ShowStarArea: function () {
	        $('.start-list').appendTo('.Chead-main');
	        $('.start-list').show();
	    },
	    SelectTopNav: function () {
	        $('.Cnav-one a').removeClass('on').eq(1).addClass('on');
	    }
	};
	mallIndex.bind = {
	    scrollMenu: function () {

	        $('.flm-1,.flm-2').click(function(){
	            var target=$(this).attr('target');
	            mallIndex.func.Scroll($(target));
	        });

	        $(".float-left-menu .flm-header i").click(function () {
	            $('.flm-header').css('opacity',0);
	            $(this).remove();
	        });

	        $(window).scroll(function () {
	            var sTop = $(window).scrollTop(),
	                wHeight = $(window).height();
	            var oTop1 = $('#featuredsale').offset().top,
	                height1 = $('.content-2').height() + 100,
	                oTop2 = $('#baokuanchangxian').offset().top,
	                height2 = $('.content-8').height() + 100;

	            if (sTop > 300) {
	                $(".float-left-menu").css('display', 'block');
	            } else {
	                $(".float-left-menu").css('display', 'none');
	            }

	            if (oTop1 < sTop + 500 && oTop1 + height1 > sTop + wHeight - 500) {
	                $('.flm-1').addClass('active');
	            } else {
	                $('.flm-1').removeClass('active');
	            }

	            if (oTop2 <= sTop + 500 && oTop2 + height2 >= sTop + wHeight - 500) {
	                $('.flm-2').addClass('active');
	            } else {
	                $('.flm-2').removeClass('active');
	            }


	            var app_top = $('#app-download-ad').offset().top;


	        });

	        mallIndex_tmp.copyDom();
	        mallIndex_tmp.getData();
	        mallIndex.func.load();
	        mallIndex.func.getData();


	    },
	    starBrand: function () {
	        $(".fr-main").hover(
	            function () {
	                $('#Cnav_starp dt').css("backgroundColor", "#df1738");
	                $(this).find('dd').slideDown(100);
	            },
	            function () {
	                $('#Cnav_starp dd').slideUp(100);
	                $('#Cnav_starp dt').css("backgroundColor", "#f52648");
	            }
	        );
	    },
	    idCycle: { //閫氭爮杞浆骞垮憡
	        Run: function () {
	            var param = {
	                fx: "fade",
	                fit: 1,
	                speed: 500,
	                timeout: 5000,
	                pause: true,
	                pager: "#cycle_pager",
	                pagerEvent: "mouseover",
	                pagerAnchorBuilder: mallIndex.bind.idCycle.MakePager,
	                before: mallIndex.bind.idCycle.OnBefore,
	                width: $("html,body").width()
	            };
	            var s = $("#cycle_id").lfcycle(param);
	            $(window).resize(function () {
	                s.lfcycle($.extend(param, {width: $("html,body").width()}));
	            });
	        },
	        MakePager: function (i, e) {
	            if (0 == $("#cycle_pager b:eq(" + i + ")").length) {
	                $("#cycle_pager").append("<b><i></i></b>");
	            }
	            return $("#cycle_pager b:eq(" + i + ")");
	        },
	        OnBefore: function (c, n, o) {
	            var i = o.nextSlide;
	            // i == n ? 0 : i;
	            i = (c == n) ? 0 : i;
	            var pager_now = $("#cycle_pager b:eq(" + i + ")");
	            pager_now.siblings().removeClass("on");
	            pager_now.addClass("on");
	        }
	    },
	    proStock: function () {
	        var param = {
	            tag: '.pro-list',
	            wrap: '.wrap',
	            cont1: '<b class="end"></b>',
	            cont2: '<b class="tover"></b>',
	            btn: '.joinCar',
	            btnText: '宸叉姠鍏�',
	            btnNull: 'disabled'
	        }
	        saleIndexHeadAndTaul.bind.GetStock(param);
	    },

	    ProductLazy: function () { //鍟嗗搧鍜屽搧鐗岀殑鍥剧墖鎳掑姞杞�
	        $("#mall-indexcon img").not($('#star img')).lflazyload();
	        $("#webf0 img").css("display", "block");
	    },


	    Addproduct: function () { //娣诲姞璐墿杞�
	        $('body').on('click','.joinCar',function () {
	            var $parent = $(this).parents('div.pro-list');
	            var productnummin = $parent.attr('data-min');
	            var productnum = productnummin ? productnummin : 1;
	            saleIndexHeadAndTaul.bind.AddToShopCart($parent, productnum, $('.wrap'));
	        })
	    }
	};

	var mallIndex_tmp = {
	    copyDom:function(){
	        $('.content-2').after($('.content-7').clone().removeClass('content-7').addClass('content-8').attr('data-growing-title','baokuanchangxian'));
	        $('.content-2').after($('.tit-7').removeAttr('id').clone().attr('id','baokuanchangxian').removeClass('tit-7').addClass('tit-8'));
	    },
	    page:1,
	    scrollFlag: true,
	    getData: function () {
	        //$(window).bind('scroll', delayToCall(function (e) {
	        //    var e = document,
	        //        t = navigator.userAgent.toLowerCase().match(/iPad/i) == "ipad" ? window.pageYOffset : Math.max(e.documentElement.scrollTop, e.body.scrollTop),
	        //        h = $(window).height();
	        //
	        //    if (t + h > $(".tit-3").offset().top) {
	        //        mallIndex_tmp.load();
	        //    }
	        //}, 50));
	        mallIndex_tmp.load();
	    },

	    html: '<div class="pro-list pro-list-" data-sid="$sizes$" data-pid="$gid$" data-haitao="$hiTao$" data-min="$buyNumMin$" data-growing-title="$gid$"> <dl> <dt class="pro-pic"> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank"title="$name$"> <img alt="" title="$name$" src="$verticalImage$"> </a> </dt> <dd class="pro-nam"> <b> $agio$/ </b> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank" title="$name$">$name$</a> <i></i> </dd> <dd class="pro-pri"> <span>楼$vipshopPrice$</span> <b> 楼$marketPrice$</b> <a class="joinCar add-to-cart hide" href="javascript:;"> $hiTaoBtn$ </a> </dd> <div class="wrap"></div> </dl> </div>',

	    load:function(){
	        if (mallIndex_tmp.scrollFlag) {
	            LFControl.boxLoading.Start('.content-8', true);
	            mallIndex_tmp.scrollFlag = false;
	            var url = "http://www.lefeng.com/ajax/handPickList?page="+mallIndex_tmp.page;
	            $.ajax({
	                type: "GET",
	                url: url,
	                dataType:'json'
	            }).then(function (data) {
	                if (data.code == "0") {
	                    var json = data.data, htmls = [];
	                    if (json.length > 0) {
	//                                console.log('鏁版嵁闀垮害澶т簬0')
	                        for (var i = 0; i < json.length; i++) {
	                            var dom = $.extend({},json[i]);
	                            htmls.push(mallIndex_tmp.html.replace(/\$([^\$]\w+)\$/ig, function (a, b) {
	                                if (b == "sizes") {
	                                    if (dom[b].length > 0) {
	                                        return dom[b][0]['sizeId'];
	                                    }
	                                }
	                                if (b == "agio") {
	                                    if (!dom[b] && typeof(dom[b]) != "undefined" && dom[b] != 0) {
	                                        return "涓€鍙ｄ环";
	                                    }
	                                }
	                                if (b == "hiTaoBtn") {
	                                    if (dom['hiTao'] == 1) {
	                                        return "绔嬪嵆璐拱";
	                                    } else if (dom['hiTao'] == 0) {
	                                        return "鍔犲叆璐墿杞�";
	                                    }
	                                }
	                                if (b == 'tags') {
	                                    if (dom['channelFeatureList'] && dom['channelFeatureList'].length) {
	                                        var tags = dom['channelFeatureList'].join('</li> <li>');
	                                        return '<ul class="pro-tags"> <li>' + tags + '</li> </ul>';
	                                    } else {
	                                        return '';
	                                    }
	                                }
	                                return dom[b];
	                            }));
	                        }
	                        $(".content-8").append(htmls.join(''));
	                        //$("#pageHidden").val(parseInt($("#pageHidden").val()) + 1);
	                        var param = {
	                            tag: '.pruwrap',
	                            wrap: '.wraptr',
	                            cont1: '<b class="product_no"></b>',
	                            btn: '.joinCar',
	                            btnText: '宸叉姠鍏�',
	                            btnNull: 'disabled'
	                        }
	                        saleIndexHeadAndTaul.bind.GetStock(param);
	                        mallIndex_tmp.scrollFlag = true;
	                        mallIndex_tmp.page++;

	                        //鍓嶉潰濡傛灉鏈夋暟鎹紝璇锋眰瀹屽悗涓€绉掑啀鑷姩璇锋眰
	                        setTimeout(function(){
	                            mallIndex_tmp.load();
	                        },0);

	                    } else {
	                        // 娌℃湁鏁版嵁浜�
	                        //$('.tit-3,.content-3,.tit-4,.content-4,.tit-5,.content-5,.tit-6,.content-6').show();
	                        mallIndex_tmp.scrollFlag = false;
	                    }
	                } else {
	//                            console.log('code涓嶄负0')
	                    mallIndex_tmp.scrollFlag = false;
	                }
	                LFControl.boxLoading.End('.content-8', true);
	            }, function () {
	                mallIndex_tmp.scrollFlag = false;
	                LFControl.boxLoading.End('.content-8', true);
	            });
	        }
	    }

	};



	mallIndex.func = {
	    Scroll: function (obj_pos) { //鐐瑰嚮璋� 婊氬姩鍒板搴旂殑鍦版柟鍘�
	        var param = {
	            scrollTop: obj_pos.position().top
	        };
	        $('html, body').animate(param, 300);
	    },
	    page:1,
	    scrollFlag: true,
	    getData: function () {
	        $(window).bind('scroll', delayToCall(function (e) {
	            var e = document,
	                t = navigator.userAgent.toLowerCase().match(/iPad/i) == "ipad" ? window.pageYOffset : Math.max(e.documentElement.scrollTop, e.body.scrollTop),
	                h = $(window).height();

	            if (t + h > $("#app-download-ad").offset().top) {
	                mallIndex.func.load();
	            }
	        }, 50));
	    },

	    html: '<div class="pro-list pro-list-" data-sid="$sizes$" data-pid="$gid$" data-haitao="$hiTao$" data-min="$buyNumMin$"> <dl> <dt class="pro-pic"> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank"title="$name$"> <img alt="" title="$name$" src="$verticalImage$"> </a> </dt> <dd class="pro-nam"> <b> $agio$/ </b> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank" title="$name$">$name$</a> <i></i> </dd> <dd class="pro-pri"> <span>楼$vipshopPrice$</span> <b> 楼$marketPrice$</b> <a class="joinCar add-to-cart hide" href="javascript:;"> $hiTaoBtn$ </a> </dd> <div class="wrap"></div> </dl> </div>',

	    load:function(){
	        if (mallIndex.func.scrollFlag) {
	            LFControl.boxLoading.Start('.content-7', true);
	            mallIndex.func.scrollFlag = false;
	            var url = "http://www.lefeng.com/ajax/handPickList?page="+mallIndex.func.page;
	            $.ajax({
	                type: "GET",
	                url: url,
	                dataType:'json'
	            }).then(function (data) {
	                if (data.code == "0") {
	                    var json = data.data, htmls = [];
	                    if (json.length > 0) {
	//                                console.log('鏁版嵁闀垮害澶т簬0')
	                        for (var i = 0; i < json.length; i++) {
	                            var dom = $.extend({},json[i]);
	                            htmls.push(mallIndex.func.html.replace(/\$([^\$]\w+)\$/ig, function (a, b) {
	                                if (b == "sizes") {
	                                    if (dom[b].length > 0) {
	                                        return dom[b][0]['sizeId'];
	                                    }
	                                }
	                                if (b == "agio") {
	                                    if (!dom[b] && typeof(dom[b]) != "undefined" && dom[b] != 0) {
	                                        return "涓€鍙ｄ环";
	                                    }
	                                }
	                                if (b == "hiTaoBtn") {
	                                    if (dom['hiTao'] == 1) {
	                                        return "绔嬪嵆璐拱";
	                                    } else if (dom['hiTao'] == 0) {
	                                        return "鍔犲叆璐墿杞�";
	                                    }
	                                }
	                                if (b == 'tags') {
	                                    if (dom['channelFeatureList'] && dom['channelFeatureList'].length) {
	                                        var tags = dom['channelFeatureList'].join('</li> <li>');
	                                        return '<ul class="pro-tags"> <li>' + tags + '</li> </ul>';
	                                    } else {
	                                        return '';
	                                    }
	                                }
	                                return dom[b];
	                            }));
	                        }
	                        $(".content-7").append(htmls.join(''));
	                        $("#pageHidden").val(parseInt($("#pageHidden").val()) + 1);
	                        var param = {
	                            tag: '.pruwrap',
	                            wrap: '.wraptr',
	                            cont1: '<b class="product_no"></b>',
	                            btn: '.joinCar',
	                            btnText: '宸叉姠鍏�',
	                            btnNull: 'disabled'
	                        }
	                        saleIndexHeadAndTaul.bind.GetStock(param);
	                        mallIndex.func.scrollFlag = true;
	                        mallIndex.func.page++;
	                    } else {
	//                                console.log('娌℃湁鏁版嵁')
	                        mallIndex.func.scrollFlag = false;
	                    }
	                } else {
	//                            console.log('code涓嶄负0')
	                    mallIndex.func.scrollFlag = false;
	                }
	                LFControl.boxLoading.End('.content-7', true);
	            }, function () {
	                mallIndex.func.scrollFlag = false;
	                LFControl.boxLoading.End('.content-7', true);
	            });
	        }
	    }

	};


	function delayToCall(func, wait, context) {
	    var args, timeout;

	    function thr() {
	        args = arguments;
	        clearTimeout(timeout);
	        timeout = setTimeout(function () {
	            func.apply(context || window, args);
	        }, wait);
	    }

	    thr.stop = function () {
	        clearTimeout(timeout);
	    };
	    return thr;
	}


	$(document).ready(function () {
	    mallIndex.Init();
	});

/***/ })

});