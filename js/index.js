 document.addEventListener("DOMContentLoaded",()=>{
    /* 따라다니는 마우스 커서 */
    const cursor = document.querySelector("#cursor");
    document.addEventListener("mousemove",e=>{
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
    });

    /* 인트로 타자 효과*/
    const keyboard = document.querySelector("#mind_key strong")
    const text = "It starts with a dream.";
    let i = 0;

    const typing = ()=>{
        if(i<text.length){
            keyboard.append(text[i++]);
        }else{
            clearInterval(timer_1);

            const mindKey = document.querySelector("#mind_key");
            mindKey.style.overflow = "hidden";

            window.scrollTo({
                top : mindKey.offsetHeight,
                behavior : "smooth"
            });/* 브라우저 창의 스크롤 위치를 지정한 좌표로 이동하는 메서드 */
        }
    };;
    const timer_1 = setInterval(typing,200);

  /*   슬라이드 메뉴 */
    const slide = document.querySelector("#slide")
    console.log(slide);
    const rightMove_callback =()=>{
        slide.style.transition = "none";
        slide.style.left = "-170px";
        slide.prepend(slide.lastElementChild);
    }
    const rightMove =()=>{
        slide.style.transition = "left 1s";
        slide.style.left = "0px"; 
        setTimeout(rightMove_callback,1000);
    }
    setInterval(rightMove,2500); 

    /* 슬라이드에 마우스를 대면 이미지가 커진다 */
    const slideImg = [...document.querySelectorAll("#slide img")]
   
    slideImg.forEach((i)=>{
        i.addEventListener("mouseenter",()=>{
            if(!i.classList.contains("act")){
                i.classList.add("act");
            }
        });
        i.addEventListener("mouseleave",()=>{
            i.classList.remove("act");
        })
    })
    

/* 메인 배경화면 fade 기능 */
    const main_img = [...document.querySelectorAll("#main_img img")];
    let fade = 0;
    const fadeSlide = ()=>{
        main_img.forEach(i=>{
            i.style.opacity = 0;
            i.style.transition = "opacity 5s"
        });
        fade ++;
        main_img[fade = (fade > 2 ? 0 : fade)].style.opacity =1;
    }
    setInterval(fadeSlide,6000);


/* 텍스트를 클릭하면 해당 영상이 보인다. */
    const mouseover_text = document.querySelectorAll(".mouseover_text a")
    const preview = document.querySelector("#touch_video video");

    const videoMap = {
        challenge:"images/global.mp4",
        unity :"images/board.mp4",
        speed : "images/basketball.mp4",
        victory : "images/basketball.mp4",
        global : "images/hight.mp4",
        dream : "images/p.mp4",
        endurance : "images/s.mp4",
        respect : "images/tennis.mp4",
        passion : "images/basketball.mp4",
        courage : "images/basketball.mp4",
        focus : "images/basketball.mp4",
    }

    mouseover_text.forEach((link,j)=>{
        link.addEventListener("click",e=>{
            e.preventDefault();
            const content = link.textContent.toLowerCase().trim();

            if(videoMap[content]){
                preview.src = videoMap[content];
                preview.load();
                preview.play();
            }
        });
    });
    
    /*메뉴바 토글*/
    const menu_btn = document.querySelector(".material-symbols-outlined");
    const menu_contents = document.querySelector("#mainbar_menu");
    
    const toggleMenu = ()=>{
        const isOpen = menu_contents.classList.contains("act");
        if(isOpen){
            menu_contents.classList.remove("act");
            menu_btn.textContent = "sports_baseball";
            /* document.body.style.overflow = "auto"; */
        }else{
             menu_contents.classList.add("act");
            menu_btn.textContent = "close";
            /* document.body.style.overflow = "hidden"; */
        }
    }
    menu_btn.addEventListener("click",toggleMenu);


   /* 서브 메뉴 항목을 클릭하면 해당 썸네일이 보인다. */
    const subMenu_links = [...document.querySelectorAll(".subMenu a")];
    const click_subMenus = document.querySelector("#click_subMenu");
    const click_img = document.querySelector("#click_subMenu img");
    
    subMenu_links.forEach((i,j)=>{
        i.addEventListener("mouseenter",()=>{
            click_img.src = `images/ba_${j+1}.jpg`;
            click_subMenus.style.display = "block";

            document.addEventListener("mousemove",moveImage);
        });
        i.addEventListener("mouseleave",()=>{
            click_subMenus.style.display = "none";
            document.removeEventListener("mousemove",moveImage);
        });

    });
    function moveImage (e){
        const x = e.pageX+20;
        const y = e.pageY+20;
        click_subMenus.style.left = `${x}px`;
        click_subMenus.style.top = `${y}px`;

    }











    

}); //js end