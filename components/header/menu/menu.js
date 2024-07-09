import {carregarPagina} from '../../../js/getPage.js';
// Lista de opcoes menu
const opcoesMenu = [
    {title:'Home', link: "home"},
    {title:'Call for Contributions', subOptions:[{title:'Call for Paper', link:'call-for-paper'}, {title:'Call for Special Sessions', link:'call-for-special-sessions'},{title:'Call for Tutorials', link:'call-for-tutorials'}, {title:'Call for Competitions', link:'call-for-competitions'}]},
    /* {title:'Call for Contributions', link:'call-for-paper'}, */
    {title:'Submit',link: "submit"},
    // {title:'Competition',link: "competition"},
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
        console.log(id)
        opcoesMenu.forEach(element => {
          let opcao = document.createElement('li');
          let button = document.createElement('a');
          if(element.subOptions == undefined){
            opcao.classList.add('buttonClickable');
            button.href= `${element.link == 'home' ? '' : `#${element.link}`}`;
          }else{
            if(id != 'menu-hamburguer-elements'){
            let subMenu = document.createElement('ul');
            subMenu.classList.add('subMenu')
            element.subOptions.forEach(el => {
                let subOpcao = document.createElement('li');
                let subButton = document.createElement('a');
                subButton.href = `#${el.link}`;
                subButton.innerHTML = el.title;

                if(page.hash == ''){
                  pageAtual = page.pathname.split('/')
                  if(pageAtual[pageAtual.length - 1].includes(el.link)){ //pageAtual[pageAtual.length - 1] == element.link
                    subButton.classList.add('active');
                    button.classList.add('active');
                  }
                } else{
                  pageAtual = page.hash.split('#');
                  if(pageAtual[pageAtual.length - 1] == el.link){
                    subButton.classList.add('active');
                    button.classList.add('active');
                  }
                }

                subButton.addEventListener('click', function(){
                  if(id == 'menu-hamburguer-elements'){ //verifica se o clique veio de uma opcao do menu mobile e fecha o menu mobile
                    document.getElementById('menu-hamburguer').click();
                  }
                  carregarPagina(el.link)
                  Array.from(document.getElementsByClassName('active')).forEach(options => {
                    options.classList.remove('active');
                  });
                  subButton.classList.add('active');
                  button.classList.add('active');
                })

                subOpcao.appendChild(subButton);
                subMenu.appendChild(subOpcao);
            });
            opcao.classList.add('buttonSubMenu');
            opcao.appendChild(subMenu);
            } else {
              element.subOptions.forEach(el => {
                opcao = document.createElement('li');
                button = document.createElement('a');
                opcao.classList.add('buttonClickable');
                button.href = `#${el.link}`;
                button.innerHTML = el.title;
                if(page.hash == ''){
                  pageAtual = page.pathname.split('/')
                  if(pageAtual[pageAtual.length - 1].includes(el.link)){ //pageAtual[pageAtual.length - 1] == element.link
                    button.classList.add('active');
                  }
                } else{
                  pageAtual = page.hash.split('#');
                  if(pageAtual[pageAtual.length - 1] == el.link){
                    button.classList.add('active');
                  }
                }

                
                  button.addEventListener('click', function() {
                    if(id == 'menu-hamburguer-elements'){ //verifica se o clique veio de uma opcao do menu mobile e fecha o menu mobile
                      document.getElementById('menu-hamburguer').click();
                    }
                    carregarPagina(el.link)
                    Array.from(document.getElementsByClassName('active')).forEach(options => {
                      console.log(options)
                      options.classList.remove('active');
                    });
                    button.classList.add('active');
                  });
                opcao.appendChild(button);
                console.log(opcao.innerHTML)
                menuContainer.appendChild(opcao);
              })
              
            }
          }




          button.innerHTML = element.title;
          if(page.hash == ''){
            pageAtual = page.pathname.split('/')
            if(pageAtual[pageAtual.length - 1].includes(element.link)){ //pageAtual[pageAtual.length - 1] == element.link
              button.classList.add('active');
            }
          } else{
            pageAtual = page.hash.split('#');
            if(pageAtual[pageAtual.length - 1] == element.link){
              button.classList.add('active');
            }
          }
          if(element.title != 'Call for Contributions'){ //Essa opcao possui subopcoes, logo nao pode ser ter o evento de click
            button.addEventListener('click', function() {
              if(id == 'menu-hamburguer-elements'){ //verifica se o clique veio de uma opcao do menu mobile e fecha o menu mobile
                document.getElementById('menu-hamburguer').click();
              }
              carregarPagina(element.link)
              Array.from(document.getElementsByClassName('active')).forEach(options => {
                options.classList.remove('active');
              });
              button.classList.add('active');
            });
          }
          opcao.appendChild(button);
          menuContainer.appendChild(opcao);
        });
      }