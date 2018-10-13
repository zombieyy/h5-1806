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
	                        '<div class="addToCartValid-title">请输入验证码</div>' +
	                        '<a href="javascript:">&times</a>' +
	                        '<div class="addToCartValid-inputs">' +
	                        '<input type="text" maxlength="10" /> ' +
	                        '<img src="" alt="验证码图片" title="点击刷新验证码"/>' +
	                        '<p></p> ' +
	                        '</div>' +
	                        '<button class="addToCartValid-submit">提交</button>'+
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
	                        if(!yzm) alert('请输入验证码');
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
			saleIndexHeadAndTaul.bind.AddFavorite( $('#Chead-save'), '乐蜂网', 'http://www.lefeng.com' );
	//        LFControl.search.WordFun();
			saleIndexHeadAndTaul.bind.getShopCar();
	        saleIndexHeadAndTaul.bind.setBrandLink();
			 saleIndexHeadAndTaul.bind.addBgBlack();


	        $('.Cfooter-cr>span').eq(1).text('天津品简电子商务有限公司');
	        $('.Cfooter-cr').html('<div class="Cfooter-cr-a"><a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/76.html">关于乐蜂</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/77.html">免责声明</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/78.html">隐私声明</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/79.html">版权声明</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/help/zhaopin.html">招聘信息</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/help/73.html">联系我们</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/help/helpCenter.html">帮助中心</a> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/80.html">友情链接</a> </div> <span>Copyright <b>©</b> 2008-2016 Lefeng.com All Rights Reserved.</span> <span>天津品简电子商务有限公司</span> <a target="_blank" href="http://www.miibeian.gov.cn/?biid=7520">津ICP备15005555号-1</a>&nbsp;&nbsp;<img style="display: inline-block;width:15px;height:15px;padding-right:2px" src="http://h5rsc.vipstatic.com/lefeng_pc/images/beian.png" /><span>京公网安备11010502034938号</span> <a rel="nofollow" target="_blank" href="http://www.lefeng.com/notice/242.html">营业执照</a><div class="Cfooter-cr-info"> <span>公司全称：天津品简电子商务有限公司  </span> &nbsp; &nbsp; <span>  公司固话：400 000 1818   </span> &nbsp; &nbsp; <span>   公司地址：天津市武清区京津电子商务产业园宏瑞道18号</span> </div><div class="Cfooter-cr-img"> <a id="___szfw_logo___" class="cxwz" rel="nofollow" target="_blank" href="https://search.szfw.org/cert/l/CX20120918001688001713"></a> <a class="kxwz" rel="nofollow" target="_blank" href="https://ss.knet.cn/verifyseal.dll?sn=e15011931011457422bp2j000000&amp;ct=df&amp;a=1&amp;pa=0.1418370669707656"></a> <a class="pjzxlm" rel="nofollow" target="_blank" href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1074823632"></a> <a class="itrust" rel="nofollow" target="_blank" href="http://www.315online.com.cn/member/315130044.html">中国互联网信用评价中心</a> <a href="http://www.lefeng.com/notice/84.html" target="_blank" rel="nofollow" class="xfwq"></a> </div>');
		}
	};

	saleIndexHeadAndTaul.bind = {
	    fixWarehouse: function () {
	        // 已选择安徽的会把分仓存在cookie中，需要强行改为华中
	        if (LFControl.cookie.Get('country_id') == '103104' && LFControl.cookie.Get('warehouse') == 'VIP_SH') {
	            LFControl.cookie.Set('warehouse', 'VIP_HZ', 3600 * 24 * 30, '/', '.lefeng.com');
	        }
	    },
		addBgBlack:function(){
				$(".voucher").css("height",$(document.body).height());
				$(".regionalTipsBk").css("height",$(document.body).height());
		},
	    setHeadSearchText:function(searchDefaultText){
	        if ($("#search").val() === '' || $("#search").val() === searchDefaultText || $("#search").val() === '搜商品') {
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
	            $('.search-input').append('<p>热门：' + htmlStr + "</p>");
	            saleIndexHeadAndTaul.bind.setHeadSearchText(defaultText);
	        });
	    },
		DeliveryAddress:function(){
	        //送货地址
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
	            // 陕西省切华中仓
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
	    CheadInfo:function(){     // 快速导航 手机乐蜂 我的订单 购物车 收藏订单
	        $('#Chead_fastnav, .Chead-app, .Chead_myh,.shopping-btn').mouseenter(function(){
	            $(this).next().show();
	        }).mouseleave(function() {
	            //$(this).next().slideUp(100);
	        });
	        $('#Chead_fastnav, .Chead-app, .Chead_myh,.shopping-btn').next().mouseleave(function(){
	            $(this).hide();
	        });
	    },
	    BeautyMall:function(){  //美妆商城
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
			var date=mydate.getDate();//日期
			var m=month<10?("0"+month):month;
			var d=date<10?("0"+date):date;
			var newDate=year+"-"+m+"-"+d;
			if(LFControl.cookie.Get("isFirstVisit")==undefined || LFControl.cookie.Get("ad_ids")==undefined){//如果第一次访问 默认是北京地址 先展示广告关闭广告  选择地区
				var areaid = LFControl.cookie.Get("country_id")?LFControl.cookie.Get("country_id"):101101;
				saleIndexHeadAndTaul.bind.getPicId(areaid,0);//101101表示北京 新老客保存时长为一天
				LFControl.cookie.Set("isFirstVisit", newDate, 39528000, '/', 'lefeng.com');//存访问日期
			}
	        if (LFControl.cookie.Get("isFirstVisit") != undefined && LFControl.cookie.Get("isFirstVisit") != newDate) {//表示老客
	            var country_id = LFControl.cookie.Get("country_id");
	            saleIndexHeadAndTaul.bind.getPicId(country_id, 1);
	        }
		},**/
		ReDeliveryAddress: function(){
			if(LFControl.cookie.Get("isFirstVisit")==undefined || LFControl.cookie.Get("ad_ids")==undefined){//如果第一次访问 默认是北京地址 先展示广告关闭广告  选择地区
				var areaid = LFControl.cookie.Get("country_id")?LFControl.cookie.Get("country_id"):101101;
				saleIndexHeadAndTaul.bind.getPicId(areaid,1);//101101表示北京
				saleIndexHeadAndTaul.bind.getOldFriend();//通过接口判断新老客
			}
	        if (LFControl.cookie.Get("isFirstVisit") != undefined&&LFControl.cookie.Get("isFirstVisit")==2) {//表示老客
	            var country_id = LFControl.cookie.Get("country_id");
	            saleIndexHeadAndTaul.bind.getPicId(country_id, LFControl.cookie.Get("isFirstVisit"));
	        }
			if (LFControl.cookie.Get("isFirstVisit") != undefined&&LFControl.cookie.Get("isFirstVisit")==1) {//表示新客
				saleIndexHeadAndTaul.bind.getOldFriend();////通过接口判断新老客
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
	                           //1新客 2老客
								LFControl.cookie.Set("isFirstVisit", data.data.isNewVisitor, 39528000, '/', 'lefeng.com');//存访问日期
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
	            // 陕西省切华中仓
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
		getPicId:function(country_id,isFirstVisit){//获取展示的图片
			var url = 'http://www.lefeng.com/ajax/getPopAd?isFirstVisit='+isFirstVisit+'&areaId='+country_id+'&callback=?';
	            $.getJSON( url, function(data) {
					if(data.code==0){
						var picArray=LFControl.cookie.Get("ad_ids");//所有展示过的图片id
						var pid = data.data.id;//图片的id
	                    var pUrl = data.data.pic_url;
	                    var pLink = data.data.pic_link;
	                     if (picArray != undefined) {//表示有图片id
							if(picArray.indexOf(pid)==-1){//表示没有该 图片
								picArray+=pid+",";
								LFControl.cookie.Set("ad_ids", picArray, 86400, '/', 'lefeng.com');//保存浏览图片的id
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
	                        LFControl.cookie.Set("ad_ids", picArray, 86400, '/', 'lefeng.com');//保存浏览图片的id
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
	            // 购物车为空时弹出浮层
				var cartCount = + LFControl.cookie.Get("cart_count");
			    if(!cartCount) {
	                cartCount = 0;
					$('.shopping-list').find('.noshop').show();
					$('.shopping-list').find('.haveshop').hide();
					$( ".shopping-list-title strong, .shopping-btn strong").html( cartCount );
				    $('.shopping-list').find('.noshop').html('');
					$('.shopping-list').find('.noshop').css("height","30px");
	                LFControl.boxLoading.Start('.noshop');//添加loading样式
					$('.shopping-list').show();
	            }
				var url = 'http://passport.lefeng.com/ajax/validUserLogin?callback=?';
	            $.ajax({
	                type:"GET",
	                url:url,
	                dataType:"jsonp",
	                statusCode: {
	                    404: function () {
							LFControl.boxLoading.End('.noshop');//加载完毕后去除loading
	                        saleIndexHeadAndTaul.bind.shopCartError();
	                    }
	                },
	                success:function(data){
	                    if( data.code == 0 ){
	                        if( data.data.isLogin != 1 ){
								LFControl.boxLoading.End('.noshop');//加载完毕后去除loading
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
	                                        LFControl.boxLoading.End('.noshop');//加载完毕后去除loading
	                                        publicHeadAndTaul.bind.shopCartError();
	                                    }
	                                },
	                                success:function(res){
										if ( data.code == 0 ){
											LFControl.boxLoading.End('.noshop');//加载完毕后去除loading
	                                        var cartInfo = res.data.cartInfo,
	                                            supplierList = res.data.supplierList;

	                                        if (cartInfo && +cartInfo.skuCount !== 0) {
	                                            var str = '';
	                                            $(".shopping-list-title strong, .shopping-btn strong").html(cartInfo.skuCount);
	                                            $("#totalProduct").html(cartInfo.skuCount);
	                                            $("#totalMoney").html('<em>￥</em>' + cartInfo.amounts.payTotal);

	                                            // 如果购物车非空，则添加点击事件
	                                            $('.shopping-list-title').click(function () {
	                                                location.href = "http://shopping.lefeng.com/showCart";
	                                            });

	                                            // 购物车分供货商，每个供货商可能有若干个档期，每个档期下可能有多个商品(注：档期指真实档期)
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
	                                                            '<dd class="shopping-price"><em>￥' + productInfo.vipshopPrice + '</em>×' + sizeInfo.num + '</dd></dl>';
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
											LFControl.boxLoading.End('.noshop');//加载完毕后去除loading
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
			$( '.shopping-list' ).find( '.noshop' ).html('您的购物车还没有商品，<br>赶紧去选购吧！');
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
	                if( data.data.isLogin == 1 ){  //登录
	                    saleIndexHeadAndTaul.islogin=true;
	                    $( ".Chead-welcome").html( '嗡，欢迎来乐蜂，<a mars_sead="lpc_top_name" href="http://order.lefeng.com">'+data.data.userNick+'</a>&nbsp; | &nbsp;<a mars_sead="lpc_top_el" href="javascript:;" id="exit">退出登录</a>' );
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
	            return document.all ? window.external.AddFavorite(n, t) : alert("请使用Ctrl+D加入收藏"),!1
	        })
	    },
		exit:function(){//用户退出
			$("#exit").click(function(){
				 $.ajax({
					url: "http://passport.lefeng.com/ajax/logout",
					dataType: "jsonp",
					jsonp:'callback',
					async : false,
					success: function(data){
						if(data.code==0){
							if(data.data.isLogout==1){
								$(".Chead-welcome").html('欢迎来到乐蜂，请&nbsp;<a href="http://passport.lefeng.com/toLogin">登录</a>&nbsp; | &nbsp;<a href="http://passport.lefeng.com/toRegister">免费注册</a>');
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
		MiniCart:function(){//获取迷你购物车的内容
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
	                    Bd:{Out:"#ccc",Hover:"#ccc"},//设置滚动滚轴边框颜色：鼠标离开(默认)，经过
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
	            if (saleIndexHeadAndTaul.islogin) {  //登录
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
	                                $('#addsuccess .sum p:eq(0)').html('购物车共 <b>' + skuCount + '</b> 件商品&nbsp;&nbsp;合计：<b>' + goodsTotal + '</b> 元');
	                                $('#addsuccess').show();
	                                $('.succ-close, #addsuccess .sum p:eq(1) a:eq(1)').click(function () {
	                                    $('#addsuccess').hide();
	                                })
	                                LFControl.cookie.Set("cart_count", skuCount, 1200, '/', 'lefeng.com');
	                                $('.shopping-btn').html('<strong>' + skuCount + '</strong>');
	                            } else if (data.code == '11026') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>超过最大可购买款式数');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11007') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>超过购物车最大数量限制');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11024') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>很遗憾，你所在的地区没有售卖该商品');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11025') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>抱歉！该专场限量购买，无法添加更多商品');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11027') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>低于最小可购买款式数');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '90005') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>系统异常，请稍后重试');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '11020') {
	                                $('.failure .sum h3').html('<span class="succ-ico"></span>商品未上架');
	                                $('.failure').show();
	                                $('.succ-close').click(function () {
	                                    $('.failure').hide();
	                                })
	                            } else if (data.code == '90008' || data.code == '3022' ) {
	                                location.href = 'http://passport.lefeng.com/toLogin?returnUrl=' + window.location.href;
	                            } else if (data.code == '11028') {  //已抢光
	                                obj.find(noproduct).html('<b class="end"></b>');
	                                obj.find('.joinCar').remove();
	                            } else {                             //默认失败
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
	                            //alert('加入购物车失败！');
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
	        $(option.tag).each(function(i, n) {//数组，全部data-pid，下面执行去重
	            var _this = $(this).attr('data-pid');
	            proID.push(_this);
	        });
	        var outArry = function(arr) {//数组去重
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
	        //读取库存
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
	                        var _thisGid = list[i].gid; //json返回的的当前id
	                        $(option.tag).each(function (j, n) {
	                            var _thisPro = $(this).attr('data-pid'); //html的当前id
	                            var _thisHaitao = $(this).attr('data-haitao'); //是否海淘
	                            var _skuid = $(this).attr('data-sid'); //skuId

	                            if (_thisGid == _thisPro) {
	                                if (list[i].type == 1) {//无库存
	                                    //LFControl.stock.NoStock(option.tag, option.wrap, option.cont, j)
	                                    if (option.stockType_1 == 'true') {
	                                        $(option.tag).eq(j).find(option.wrap).html('').append(option.cont1);
	                                    };
	                                    if (option.btnNullType == 'true') {//修改按钮状态
	                                        $(option.tag).eq(j).find(option.btn).addClass(option.btnNull).attr('href', 'javascript:void(0)').unbind();
	                                    } else {
	                                        //$(option.tag).eq(j).find(option.btn).addClass(option.btnNull).attr('href', 'javascript:void(0)').unbind().hide();
	                                        $(option.tag).eq(j).find(option.btn).remove();
	                                    }
	                                    if (option.btnText) {//修改按钮文字
	                                        $(option.tag).eq(j).find(option.btn).html(option.btnText);
	                                    };

	                                    /*------------------------------------------ 暂时为单品页添加此设置 ---------------------------------------------*/
	                                    if (_thisHaitao == 0) {//不是海淘
	                                        $(option.btn2).addClass(option.btnNull2).attr('href', 'javascript:void(0)').unbind();
	                                        $(option.btn4).addClass(option.btnNull4).attr('href', 'javascript:void(0)').unbind();
	                                        _tag.dcsMultiTrack('wt.pid', _skuid, 'wt.s_cart', 'quehuo');
	                                    } else if (_thisHaitao == 1) {//是海淘
	                                        $(option.btn3).addClass(option.btnNull3).attr('href', 'javascript:void(0)').unbind();
	                                        $(option.btn5).addClass(option.btnNull5).attr('href', 'javascript:void(0)').unbind();
	                                        _tag.dcsMultiTrack('wt.pid', _skuid, 'wt.s_cart', 'quehuo');
	                                        $('.targetDeliveryDate').hide();
	                                    }
	                                } else if (list[i].type == 2) {//即将无库存
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
	        ["103105", "104104", "104105", "104106"],//华南
	        ["103101", "103102", "103103", "103104", "103107"],//华东
	        ["105100", "105101", "105102", "105103", "105104", "106102", "106103", "106104", "106105"],//西南
	        ["101101", "101102", "101103", "101104", "101105", "102101", "102102", "102103"],//华北
	        ["103106", "104101", "104102", "104103", "106101"]//华中
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
	    setBrandLink:function(){//疯购全球链接，分仓设置
	        var houseId = LFControl.cookie.Get("country_id");
	        var index = this.getHouse(houseId);

	        var houseArr = [
						'http://brand.lefeng.com/showGoodsList/800074387.html',//华南
						'http://brand.lefeng.com/showGoodsList/800074388.html',//华东
						'http://brand.lefeng.com/showGoodsList/800074389.html',//西南
						'http://brand.lefeng.com/showGoodsList/800074390.html',//华北
						'http://brand.lefeng.com/showGoodsList/800074391.html'];//华中
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
			// 20161226政策要求，暂时关闭食品保健模块，待政策允许再开放
			// 20170302暂时关闭面部护肤、彩妆香水、身体洗护和第二个爆款尝鲜
			// 注：tit-8是由tit-7复制而来，这可能是个坑。。
			setTimeout(function() {
				$('.tit-3, .content-3').hide(); // 面部护肤
				$('.tit-4, .content-4').hide(); // 彩妆香水
				$('.tit-5, .content-5').hide(); // 身体洗护
				$('.tit-6, .content-6').hide(); // 食品保健
				$('.tit-7, .content-7').hide(); // 第二个爆款尝鲜
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
	        //document.title= '乐蜂网 - 11.18 感恩蜂友日！';

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
	    idCycle: { //通栏轮转广告
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
	            btnText: '已抢光',
	            btnNull: 'disabled'
	        }
	        saleIndexHeadAndTaul.bind.GetStock(param);
	    },

	    ProductLazy: function () { //商品和品牌的图片懒加载
	        $("#mall-indexcon img").not($('#star img')).lflazyload();
	        $("#webf0 img").css("display", "block");
	    },


	    Addproduct: function () { //添加购物车
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

	    html: '<div class="pro-list pro-list-" data-sid="$sizes$" data-pid="$gid$" data-haitao="$hiTao$" data-min="$buyNumMin$" data-growing-title="$gid$"> <dl> <dt class="pro-pic"> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank"title="$name$"> <img alt="" title="$name$" src="$verticalImage$"> </a> </dt> <dd class="pro-nam"> <b> $agio$/ </b> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank" title="$name$">$name$</a> <i></i> </dd> <dd class="pro-pri"> <span>¥$vipshopPrice$</span> <b> ¥$marketPrice$</b> <a class="joinCar add-to-cart hide" href="javascript:;"> $hiTaoBtn$ </a> </dd> <div class="wrap"></div> </dl> </div>',

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
	//                                console.log('数据长度大于0')
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
	                                        return "一口价";
	                                    }
	                                }
	                                if (b == "hiTaoBtn") {
	                                    if (dom['hiTao'] == 1) {
	                                        return "立即购买";
	                                    } else if (dom['hiTao'] == 0) {
	                                        return "加入购物车";
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
	                            btnText: '已抢光',
	                            btnNull: 'disabled'
	                        }
	                        saleIndexHeadAndTaul.bind.GetStock(param);
	                        mallIndex_tmp.scrollFlag = true;
	                        mallIndex_tmp.page++;

	                        //前面如果有数据，请求完后一秒再自动请求
	                        setTimeout(function(){
	                            mallIndex_tmp.load();
	                        },0);

	                    } else {
	                        // 没有数据了
	                        //$('.tit-3,.content-3,.tit-4,.content-4,.tit-5,.content-5,.tit-6,.content-6').show();
	                        mallIndex_tmp.scrollFlag = false;
	                    }
	                } else {
	//                            console.log('code不为0')
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
	    Scroll: function (obj_pos) { //点击谁 滚动到对应的地方去
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

	    html: '<div class="pro-list pro-list-" data-sid="$sizes$" data-pid="$gid$" data-haitao="$hiTao$" data-min="$buyNumMin$"> <dl> <dt class="pro-pic"> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank"title="$name$"> <img alt="" title="$name$" src="$verticalImage$"> </a> </dt> <dd class="pro-nam"> <b> $agio$/ </b> <a href="http://product.lefeng.com/product/$gid$.html?brandId=$brandId$" target="_blank" title="$name$">$name$</a> <i></i> </dd> <dd class="pro-pri"> <span>¥$vipshopPrice$</span> <b> ¥$marketPrice$</b> <a class="joinCar add-to-cart hide" href="javascript:;"> $hiTaoBtn$ </a> </dd> <div class="wrap"></div> </dl> </div>',

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
	//                                console.log('数据长度大于0')
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
	                                        return "一口价";
	                                    }
	                                }
	                                if (b == "hiTaoBtn") {
	                                    if (dom['hiTao'] == 1) {
	                                        return "立即购买";
	                                    } else if (dom['hiTao'] == 0) {
	                                        return "加入购物车";
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
	                            btnText: '已抢光',
	                            btnNull: 'disabled'
	                        }
	                        saleIndexHeadAndTaul.bind.GetStock(param);
	                        mallIndex.func.scrollFlag = true;
	                        mallIndex.func.page++;
	                    } else {
	//                                console.log('没有数据')
	                        mallIndex.func.scrollFlag = false;
	                    }
	                } else {
	//                            console.log('code不为0')
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