// 菜单吸顶
window.onload = function(){
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
    };

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
       
        Yrender();
        //购物车主函数加载加入购物车的商品
        function Yrender(){
                goodslist = Cookie.getCookie("goodslist") || [];//提取cookie
                if(typeof goodslist == "string"){
                    goodslist = JSON.parse(goodslist);//goodslist用JOSN转换数组
                }
                //中间的购物车列表
               var tbody = document.getElementsByTagName("tbody")[0];
               var tFoot = document.getElementsByTagName("tfoot")[0];
               var subPrice =tFoot.getElementsByTagName("b")[0];
               var Yjiesheng =tFoot.getElementsByTagName("b")[1];
               //头部的购物车
                var div = document.querySelector('#mdfk');
                var nowmoney = div.previousElementSibling.previousElementSibling;
                var em = div.previousElementSibling.previousElementSibling.previousElementSibling;
                //这是底部商品列表
                var goodslist;//这是cookie
                var str = "";
                var total = 0;//总价
                var jiesheng=0;
                for(var i=0;i<goodslist.length;i++){
                    var good = goodslist[i];
                     jiesheng = (good.price-good.sale)*good.qty;
                    str += '<tr data-guid="'+good.guid+'" >'+
                    '<td>'+
                        '<img src="'+good.imgurl+'" alt="" />'+
                        '<li>'+
                        '<h5>'+good.name+'</h5>'+
                        '<span>ID:'+'<em>'+good.guid+'</em>'+'</span>'+
                        '<span>Size:'+'<em>Default</em></span></li></td>'+
                    '<td><div class="Yjian">-</div><input type="text" value="'+good.qty+'" min="1"/><div class="Yjia">+</div></td>'+
                    '<td><del>'+good.price*good.qty+'</del><b>'+good.price*good.qty+'</b></td>'+
                    '<td><b>'+good.price*good.qty+'</b><p>你节省了'+jiesheng+'</p></td>'+
                    '<td><div class="btn-close">×</div></td></tr>';                             
                    total += good.sale*good.qty//总价格
                    jiesheng+=jiesheng*good.qty;
                }
                    tbody.innerHTML = str;
                    Yjiesheng.innerHTML = jiesheng;
                    subPrice.innerHTML = total.toFixed(2);//节省的钱
                    //顶部购物车
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
           var tbody = document.getElementsByTagName("tbody")[0];
           //tbody 三个按钮 btn-close 删除商品   Yjian减少商品数量 Yjia增加商品数量
           var Remove= document.getElementById("remove");
           console.log(Remove);
            tbody.onclick = function(e){ 
                var Yvalue =e.target.parentElement.children[1];
                if(e.target.className == "btn-close"){//删除
                    var currentGuid = e.target.parentElement.parentElement.getAttribute("data-guid");
                    for(var i=0;i<goodslist.length;i++){
                        if(goodslist[i].guid == currentGuid){
                            goodslist.splice(i,1);
                            break;
                        }
                    }
                    Cookie.setCookie("goodslist",JSON.stringify(goodslist));
                    Yrender();
                }else if(e.target.className =="Yjian"){//减少
                    if(Yvalue.value<=1){
                            Yvalue.value=1;
                        }else{
                            var currentGuid = e.target.parentElement.parentElement.getAttribute("data-guid");
                            for(var i=0;i<goodslist.length;i++){
                                if(goodslist[i].guid == currentGuid){
                                    goodslist[i].qty--;
                                    break;
                                }
                            }
                            Cookie.setCookie("goodslist",JSON.stringify(goodslist));
                            Yrender();
                    }
                }else if(e.target.className =="Yjia"){//增加
                       var currentGuid = e.target.parentElement.parentElement.getAttribute("data-guid");
                        for(var i=0;i<goodslist.length;i++){
                            if(goodslist[i].guid == currentGuid){
                                goodslist[i].qty++;
                                break;
                            }
                    }
                    Cookie.setCookie("goodslist",JSON.stringify(goodslist));
                    Yrender();
                }

                      
            }
            Remove.onclick = function(){
                    Cookie.removeCookie("goodslist");
                        Yrender();
            }
           var tFoot = document.getElementsByTagName("tfoot")[0];
           var Ya =tFoot.getElementsByTagName("a");
           console.log(Ya);
            tFoot.onclick = function(e){
                if(e.target==Ya[0]){
                    location.href = "shangpin.html?"
                }else if(e.target==Ya[1]){
                    location.href = "jiesuan.html?"
                }

            }


            // 底层商品
                   var commodity = document.querySelector('.commodity');
                    goodslist = Cookie.getCookie('goodslist');
                    if(goodslist === ''){
                        goodslist = [];
                    }else{
                        goodslist = JSON.parse(goodslist);
                    }
                    // 点击商品添加购物车按钮，将商品存入cookie同时刷新购物车
                    commodity.onclick = e=>{
                        console.log(goodslist);
                        e = e || window.event;
                        var target = e.target || e.srcElement;//兼容
                        if(target.parentElement.className === 'btn'){
                            var li = target.parentElement.parentElement;
                            var guid = li.getAttribute('data-guid');
                            for(var i = 0; i<goodslist.length; i++){
                                    if(goodslist[i].guid === guid){
                                        goodslist.qty++;
                                        break;
                                    }  
                                };
                                    if(i === goodslist.length){
                                        var mygoods = {
                                            guid:guid,//guid商品唯一标识
                                            imgurl:li.children[0].src,
                                            name:li.children[1].innerText,
                                            price:li.children[2].innerText,
                                            sale:li.children[2].innerText,
                                            qty:1
                                        };
                                        goodslist.push(mygoods);
                                Cookie.setCookie('goodslist',JSON.stringify(goodslist));
                            };
                        };
                        Yrender();
                    };
}
   