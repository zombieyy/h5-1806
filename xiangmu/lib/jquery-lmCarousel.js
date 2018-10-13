//为了在函数内部完全使用$,使用匿名函数，将jQuery作为实参赋值给$
(function($){
    $.fn.lmCarousel = function(options){
        let defaults = {
            imgs :[],
            width : 1500,
            height : 300,
            type : 'vertical',//vertical垂直     horizontal水平    fade淡入淡出
            duration : 1000,
            idx : 0,
        } 
        this.each(function(idx,item){
            $self = $(item);
            let opt = Object.assign({},defaults,options);
            let len = opt.imgs.length;
            let $ul;
            //1.init初始化，ul>li>img
            let init = ()=>{
                // $self指的是实例对象 $(".box")
                $ul = $("<ul/>");
                for(var i =0;i<len;i++){
                    let $li = $("<li/>");
                    $('<img src="'+opt.imgs[i]+'"/>').width(opt.width).height(opt.height).appendTo($li);

                    $li.appendTo($ul);
                }
                $ul.appendTo($self);
                $self.addClass('lmCarousel');
                $self.width(opt.width).height(opt.height);
                if(opt.type == "horizontal"){
                    $ul.addClass('horizontal');
                    $ul.width(opt.width*len);
                }
                if(opt.type == "fade"){
                    $ul.addClass('fade');
                    $ul.width(opt.width).height(opt.height);
                    $ul.children().css("opacity",0);
                    $ul.children().eq(opt.idx).css("opacity",1);
                }
                $self.on("mouseover",()=>{
                    clearInterval($self.timer);
                }).on("mouseout",()=>{
                    move();
                })
                createPage();
                move();
                // page.on()
            }
            let prevIdx = opt.idx;
            let move = ()=>{
                $self.timer = setInterval(function(){
                    opt.idx++;
                    showPic();
                },opt.duration)
            }

            let showPic = () =>{
                if(opt.idx > len-1){
                    opt.idx = 0;
                }
                if(opt.idx < 0){
                    opt.idx = len-1;
                }
                // $ul.css("top",-opt.height*opt.idx + 'px');
                if(opt.type == "vertical"){
                    $ul.animate({"top":-opt.height*opt.idx + 'px'})
                }else if(opt.type == "horizontal"){
                    $ul.animate({"left":-opt.width*opt.idx + 'px'})
                }
                if(opt.type == "fade"){
                    $ul.children().eq(prevIdx).animate({"opacity":0});
                    $ul.children().eq(opt.idx).animate({"opacity":1});
                    prevIdx = opt.idx;
                }
            }


            let createPage = () =>{
                let page = document.createElement("div");
                page.classList.add("page");
                for(let i=0;i<len;i++){
                    let span = document.createElement("span");
                    span.innerHTML = i+1;
                    page.appendChild(span);
                }
                page.children[0].classList.add("active");
                $self[0].appendChild(page);
                return page;
            }

            init();
        })
        return this;
    }
})(jQuery);

// seamless true

