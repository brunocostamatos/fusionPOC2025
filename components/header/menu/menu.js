import {carregarPagina} from '../../../js/getPage.js';
//Lista de opcoes menu
const opcoesMenu = [
    {title:'Home', link: "home"},
    {title:'Call for Contributions', subOptions:[{title:'Call for Paper', link:'call-for-paper'}, {title:'Call for Special Sessions', link:'call-for-special-sessions'},{title:'Call for Tutorials', link:'call-for-tutorials'}, {title:'Call for Competitions', link:'call-for-competitions'}]},
    {title:'Submit',link: "submit"},
    //{title:'Competition',link: "competition"},
    {title:'Register',link: "register"},
    {title:'Program',link: "program"},
    {title:'Venue & Travel',link: "venue-e-travel"},
    {title:'Organization',link: "organization"},
    {title:'Sponsors',link: "sponsors"},
    ];
    // Função para adicionar as opcoes ao menu
     export function addOptionsToNavMenu(id) {
        const page = window.location;
        const menuContainer = document.getElementById(id);
        let pageAtual = "";

        opcoesMenu.forEach(element =>{
          let opcao = document.createElement('li');
          let button = document.createElement('a');
          if(element.subOptions){ //Opcao com submenu
            opcao.classList.add('buttonSubMenu');  
            button.innerHTML = element.title;
              
            let subMenu = document.createElement('ul');              
            subMenu.classList.add('subMenu');

            element.subOptions.forEach(el => {
                
              let subOpcao = document.createElement('li');                                  
              let subButton = document.createElement('a');

              subButton.href = `#${el.link}`;                  
              subButton.innerHTML = el.title;
                  
              addVerificacaoPaginaAtual(page, pageAtual, el, button, subButton);                
              addFuncaoClick(id, el, button, subButton);

              
              if(id == 'menu-hamburguer-elements'){ //Se for no menu mobile cria direto no menu as opcoes que seriam do submenu
                subOpcao.appendChild(subButton);
                menuContainer.appendChild(subOpcao);
              } else { //Se for no menu desktop atrela as subopcoes no submenu
                subOpcao.appendChild(subButton);
                subMenu.appendChild(subOpcao);
              }
            });

            if(id == 'ul-menu-container'){ //Se for no menu desktop atrela o submenu na sua opcao pai 
              addVerificacaoPaginaAtual(page, pageAtual, element, button);
              
              opcao.appendChild(subMenu);
              opcao.appendChild(button);
              menuContainer.appendChild(opcao);
            }

          } else{ //Opcao sem submenu
            opcao.classList.add('buttonClickable');
              
            button.href= `${element.link == 'home' ? '' : `#${element.link}`}`;
            button.innerHTML = element.title;
              
            addVerificacaoPaginaAtual(page, pageAtual, element, button);              
            addFuncaoClick(id, element, button);

            opcao.appendChild(button);  
            menuContainer.appendChild(opcao);
          }
        })

      }

      
      function addVerificacaoPaginaAtual(page, pageAtual, element, button, subButton = undefined){
        if(page.hash == ''){
          pageAtual = page.pathname.split('/')
          if(pageAtual[pageAtual.length - 1].includes(element.link)){ pageAtual[pageAtual.length - 1] == element.link
            if(subButton){
              subButton.classList.add('active');
            }
            button.classList.add('active');
          }
        } else{
          pageAtual = page.hash.split('#');
          if(pageAtual[pageAtual.length - 1] == element.link){
            if(subButton){
              subButton.classList.add('active');
            }
            button.classList.add('active');
          }
        }
      }

      function addFuncaoClick(id, element, button, subButton=undefined){
        let botao = subButton != undefined ? subButton : button;
        botao.addEventListener('click', function() {
          if(id == 'menu-hamburguer-elements'){ //verifica se o clique veio de uma opcao do menu mobile e fecha o menu mobile
            document.getElementById('menu-hamburguer').click();
          }
          if(element.link){
            carregarPagina(element.link)
          }
          Array.from(document.getElementsByClassName('active')).forEach(options => {
            options.classList.remove('active');
          });
          
          if(subButton){
            subButton.classList.add('active');
          }
          if(element.link){
            button.classList.add('active');
          }
        });
      }