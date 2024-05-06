import {carregarPagina} from '../../../js/getPage.js';
// Lista de opcoes menu
const opcoesMenu = [
    {title:'Home', link: "home"},
    {title:'Call for Contributions',link: "call-for-contributions"},
    {title:'Submit',link: "submit"},
    {title:'Competition',link: "competition"},
    {title:'Register',link: "register"},
    {title:'Program',link: "program"},
    {title:'Venue & Travel',link: "venue-e-travel"},
    {title:'Organization',link: "organization"},
    {title:'Sponsors',link: "sponsors"},
    ];
      // Função para adicionar as opcoes ao menu
     export function addOptionsToNavMenu() {
        const page = window.location;
        const menuContainer = document.getElementById('ul-menu-container');
        let pageAtual = "";
        opcoesMenu.forEach(element => {
          let opcao = document.createElement('li');
          let button = document.createElement('a');
          button.href= `${element.link == 'home' ? '' : `#${element.link}`}`;
          button.innerHTML = element.title;
          if(page.hash == ''){
            pageAtual = page.pathname.split('/')
            if(pageAtual[pageAtual.length - 1] == element.link){
              button.classList.add('active');
            }
          } else{
            pageAtual = page.hash.split('#');
            if(pageAtual[pageAtual.length - 1] == element.link){
              button.classList.add('active');
            }
          }
          
          button.addEventListener('click', function() {
            carregarPagina(element.link, element.title)
            Array.from(document.getElementsByClassName('active')).forEach(options => {
              options.classList.remove('active');
            });
            button.classList.add('active');
          });

          opcao.appendChild(button);
          menuContainer.appendChild(opcao);
        });
      }