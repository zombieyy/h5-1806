/* 
* @Author: Marte
* @Date:   2018-08-23 19:06:31
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-03 12:01:14
*/
window.onload=function(){
      var Ydata = [{
                    id:'001',
                    name:'面膜',
                    nickname:'曼秀雷敦',
                    imgurl:'../images/q1.png',
                      imgurl1:'../images/q2.png',
                    imgurl2:'../images/q3.png',
                    imgurl3:'../images/q4.png',
                    price:5899.00,
                    sale:5888.00,
                    time: "2012/10/1 22:10:00",
                },{
                    id:'002',
                    name:'指甲油',
                    nickname:'曼秀雷敦',
                    imgurl:'../images/q2.png',
                      imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:3899.00,
                    sale:1670.00,
                    time: "2013/10/1 22:10:00",
                },{
                    id:'洁面',
                    name:'欧莱雅',
                    nickname:'牛x7',
                    imgurl:'../images/q3.png',
                    imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:1599.00,
                    time: "2015/10/1 22:10:00",
                },{
                    id:'004',
                    name:'保湿',
                    nickname:'自然堂',
                    imgurl:'../images/q4.png',
                   imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:1899.00,
                    time: "2016/10/1 22:10:00",
                },{
                    id:'005',
                    name:'美甲',
                    nickname:'百雀羚7',
                    imgurl:'../images/q5.png',
                      imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:1399.00,
                    time: "2018/10/1 22:10:00",
                },{
                    id:'006',
                    name:'美肤',
                    nickname:'玉兰油',
                    imgurl:'../images/q6.png',
                     imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:899.00,
                    time: "2018/1/1 22:10:00",
                },{
                    id:'007',
                    name:'眼妆',
                    nickname:'卡姿兰',
                    imgurl:'../images/q6.png',
                     imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:899.00,
                    time: "2018/1/1 22:10:00",
                },{
                    id:'008',
                    name:'面妆',
                    nickname:'珀莱雅',
                    imgurl:'../images/q7.png',
                     imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:899.00,
                    time: "2018/1/1 22:10:00",
                },{
                    id:'009',
                    name:'女士',
                    nickname:'水密码',
                    imgurl:'../images/q3.png',
                     imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:899.00,
                    time: "2018/1/1 22:10:00",
                },{
                    id:'010',
                    name:'男士',
                    nickname:'高夫',
                    imgurl:'../images/q8.png',
                     imgurl1:'../images/jp4.png',
                    imgurl2:'../images/jp2.png',
                    imgurl3:'../images/jp3.png',
                    price:1999.00,
                    sale:899.00,
                    time: "2018/1/1 22:10:00",
                } ];
                
                var box = document.getElementById("Y-liebiao1");
                var Y_sort=document.getElementsByClassName("Y_sort")[0];
                var Y_i=Y_sort.getElementsByTagName("i")[0];
                var Yprice = document.getElementById("Yprice");
                var Ybest = document.getElementsByClassName("Ybest")[0];
                var Yshijian = document.getElementById("Yshijian");
                // 商品录入列表
                function chushi(all){
                         var str = "<ul>";
                        str+= all.map(function(item){
                            return '<li data-myid="'+item.id+'">'
                                        +'<img src="'+item.imgurl+'">'
                                        +'<label for="check'+item.id+'"><input type="checkbox" id="check'+item.id+'">'+item.name+'</label>'
                                        +'<del>'+item.price+'</del>'+'<span>现价：'+item.sale+'</span>'
                                        +'<p>'+item.nickname+'</p>'+'<a href="goods.html" class="chuandi">查看商品</a>'
                                        +'<p>发布时间:'+item.time+'</p>'
                                    +'</li>';
                        }).join("");
                     
                    str +="</ul>" ;

                    return str;
                }
                box.innerHTML= chushi(Ydata);
                var Ysj = true;
                Yshijian.onclick=function(){
                    if(Ysj==true){
                        Ysj = false;
                         Yprice.style.color ="#40406B";
                        Yshijian.style.color ="#FF4500";
                         var shij = Ydata.sort(function(a,b){
                        return  Date.parse(b.time) - Date.parse(a.time);
                    });
                    box.innerHTML= chushi(shij);
                    chuna();
                    }else if(Ysj==false){
                        Ysj = true;
                         Yprice.style.color ="#40406B";
                        Yshijian.style.color ="#FF4500";
                         var shij = Ydata.sort(function(a,b){
                        return  Date.parse(a.time) - Date.parse(b.time);
                    });box.innerHTML= chushi(shij);
                    chuna();
                   
                }};
              
                // 点击降序
               var Ytrue = true;
               Yprice.onclick = function(){                
                    Yprice.style.color ="#FF4500";
                    Yshijian.style.color ="#40406B";
                    Y_i.style.transform="rotate(180deg)";
                    if(Ytrue==false){
                                 Ytrue=true;
                                 var nnn = Ydata.sort(function(item1,item2){
                                 return item2.sale-item1.sale;
                                });
                                 box.innerHTML= chushi(nnn);
                                 chuna();
                            }  else   if(Ytrue==true){
                                 Y_i.style.transform="rotate(0deg)";
                                 Ytrue=false;
                                 var bbb = Ydata.sort(function(item1,item2){
                                    return item1.sale-item2.sale;
                                });
                                 box.innerHTML= chushi(bbb);
                                 chuna();}                                                                        
                }
         
//            chuna();//先执行一次
////            // 点击其中一个商品传递到详情页
//            function chuna(){
//                var chuandi = document.getElementsByClassName("chuandi");
//                 var params = "";
//                  for(var n=0;n<chuandi.length;n++){
//                          chuandi[n].index = n; 
//                          chuandi[n].onclick = function(){
//                              n = this.index ;
//                              for(var key in Ydata[n]){
//                                  params += key + "=" + Ydata[n][key] + "&";
//                              }
//                              params = params.slice(0,-1);
//                              location.href = "goods.html" + encodeURI(params);
//                      }
//                  }
//            }
                    // 点击返回顶部
                var totop = document.getElementById("totop");
                totop.onclick = function(){
                    var timer = setInterval(function(){
                    var y = window.scrollY;
                             y -= 100;
                             if(y <= 0){
                                 clearInterval(timer);
                             }
                                
                     window.scrollTo(0,y);
                     },30)
                }
                // 菜单吸顶
               var search = document.getElementById("lmg-search");
               var search_c1=document.getElementsByClassName("lmg-search-c")[0].getElementsByTagName("span")[0];
               var search_c2= search.getElementsByTagName("h1")[0];
                var search_c3= search.getElementsByClassName("lmg-search-r fr")[0];
                window.onscroll = function(){
                    if(window.scrollY >= 20){
                        search.className = "fixed";
                        search_c1.className="hide";
                        search_c2.style.height = "45px";
                          search_c3.className="hide";
                    }else if(window.scrollY < 20){
                        search.className = "";
                        search_c1.className="";
                        search_c2.style.height = "66px";
                          search_c3.className="lmg-search-r fr";
                    }
                }

                //头部购物车函数
                render();
                function render(){
                    var div = document.querySelector('#mdfk');
                    var nowmoney = div.previousElementSibling.previousElementSibling;
                    var em = div.previousElementSibling.previousElementSibling.previousElementSibling;
                    var goodslist;
                    goodslist = Cookie.getCookie('goodslist');
                    if(goodslist === ''){
                        goodslist = [];
                    }else{
                        goodslist = JSON.parse(goodslist);
                    }
                    // 创建用于保存价格
                    var total = 0;//总价
                      var Yem = 0;//件数
                        // 创建ul
                        var ul = document.createElement('ul');
                        ul.className = 'Y-top_ul2';
                        ul.innerHTML = goodslist.map(function(goods){
                            // 计算总价
                            total += goods.price * goods.qty*1;
                            Yem +=parseInt(goods.qty) ;
                            return `<li  data-guid="${goods.guid}">
                                        <img src="${goods.imgurl}" />
                                        <a href="#"><span>${goods.name}</span>  <br /><span>$${goods.price}x${goods.qty}</span></a>
                                    </li>
                            `;
                        }).join('')+'<button>跳转购物车</button>';
                        div.innerHTML = '';
                        div.appendChild(ul);
                        // 写入总价
                        em.innerHTML = Yem;
                        nowmoney.innerText = total.toFixed(2);
                          var button = document.getElementsByTagName("button")[0];
                            button.onclick=function(){
                                   location.href = "car.html?";
                                };
                };
}