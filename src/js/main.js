document.addEventListener('DOMContentLoaded', function(){

    const heroSection = document.querySelector('.header');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = this.window.scrollY;
        if(posicaoAtual< alturaHero){
            ocultarElementoHeader();
        }else{
            exibeElementoHeader();
        }
    })
})

function ocultarElementoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}
function exibeElementoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}