// Menu Gallery Filter
        let list = document.querySelectorAll('.list');
        let itemBox = document.querySelectorAll('.itemBox');
    
        for(let i = 0; i < list.length; i++){
            list[i].addEventListener('click', function(){
                for(let j = 0; j<list.length; j++){
                    list[j].classList.remove('active');
                }
                this.classList.add('active');
    
                let dataFilter = this.getAttribute('data-filter');
    
                for(let k = 0; k < itemBox.length; k++){
                    itemBox[k].classList.remove('active');
                    itemBox[k].classList.add('hide');
    
                    if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                        itemBox[k].classList.remove('hide');
                        itemBox[k].classList.add('active');
                    }
    
                }
            })
        }


// Navbar header
        window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
        })

        $(document).ready(function(){
            $('.menu-toggle').click(function(){
                $('nav').toggleClass('active')
            })
            $('ul li').click(function(){
                $(this).siblings().toggleClass('active');
                $(this).toggleClass('active');
            })
        })
