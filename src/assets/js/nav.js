


// window.addEventListener('load', function() {
    
    
// });
const customInitFunctions = () => {

    let foto_perfil = document.getElementById("foto-nav");
    let menu = document.getElementById('profile-menu')
    let open_menuProfile = false
    window.addEventListener('click', (e) => {
        if(open_menuProfile){
            let img = document.querySelector('img')
            if(e.target !== img){
                
                menu.style.transition = 'none'
                menu.style.top = '-90px'
                open_menuProfile = false
            }
        }
    })
    
    
    
    foto_perfil.addEventListener('click', (e) => { 
        e.preventDefault()
        if (!open_menuProfile){
            // menu.classList.remove('hide')   
            menu.style.transition = '0.3s'
            menu.style.top = '85px'
            open_menuProfile = true
        }else{
            menu.style.transition = 'none'
            menu.style.top = '-90px'
            open_menuProfile = false
        }
    })
}

    
