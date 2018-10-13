
        document.addEventListener('DOMContentLoaded',()=>{
            let focus = document.querySelector(".focus");
            let imgList = focus.children[0];
            let firstImg = imgList.children[0].children[0];
            let cloneLi = firstImg.parentElement.cloneNode(true);
            imgList.appendChild(cloneLi);
            let len = imgList.children.length;
            let idx = 0;
            let imgWidth;
            let page = createPage();
            //1.设置ul的宽度，由图片的总数*图片的宽度决定。设置focus的宽度，由图片宽度决定
            // 备注：当第一张图片加载完毕后，才获取图片宽度
            firstImg.onload = ()=>{
                imgWidth = firstImg.offsetWidth;
                focus.style.width = imgWidth + 'px';
                imgList.style.width = imgWidth * len + 'px';
            }
            //2.设置定时器，让ul每隔1秒换一张(无缝滚动)
            // 问题:发现最后一张到第一张图的动画是往回走的
            // 解决办法：复制第一张图片放到最后一张图片的后面.应该写在获取li数量len的前面
            let timer = setInterval(()=>{
                idx++;
                // 问题：传参idx，里面的形参值改变了，实参依旧在++。
                showPic();
            },3000)
            // 0 1 2 3(0)      len= 4
            // 3.生成页码,封装.当图片切换时，高亮的页码也会对应着改变，所以封装完记得将整个page返回出来，外面才能用到它。
            // 4.当idx改变时，给前索引对应的页码添加高亮
            // 5.当点击对应的page的页码时，获取页码的内容-1==>索引，移到对应的图片
            page.onmouseover = function(e){
                idx= e.target.innerHTML-1;
                showPic();
            }
            // 6.点击左右按钮，切换图片
            // prev.onclick = function(e){idx--;showPic();}
            // next.onclick = function(e){idx++;showPic();}

            function createPage(){
                let page = document.createElement("div");
                page.classList.add("page");
                for(let i=1;i<len;i++){
                    let span = document.createElement("span");
                    span.innerHTML = i;
                    page.appendChild(span);
                }
                page.children[0].classList.add("active");
                focus.appendChild(page);
                return page;
            }

            function showPic(){
                if(idx>=len){
                    imgList.style.left = 0;
                    idx = 1;
                }
                // ==========给当前索引对应的页码添加高亮
                for(var i=0;i<len-1;i++){
                    page.children[i].classList.remove("active");
                }
                if(idx == len-1){
                    page.children[0].classList.add("active");
                }else{
                    page.children[idx].classList.add("active");
                }
                //===============================
                // imgList.style.left = -imgWidth*idx + 'px';
                animate(imgList,{left:-imgWidth*idx},30)
            }
            
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
                
                var tu =document.getElementById("love");
                tu.onmouseover=function(){
                	animate(love,{opacity:1},30);
                }
                
                tu.onmouseout = function(){
                animate(love,{opacity:0.5},30);}
                
                
        })
            // 1  2  3
            
