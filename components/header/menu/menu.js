// Lista de opcoes menu
const opcoesMenu = [
    {title:'Home', link: ""},
    {title:'Call for Contributions',link: "call-for-contributions"},
    {title:'Submit',link: "submit"},
    {title:'Competition',link: "competition"},
    {title:'Register',link: "register"},
    {title:'Program',link: "program"},
    {title:'Venue & Travel',link: "venue-e-travel"},
    {title:'Organization',link: "organization"},
    {title:'Sponsor',link: "sponsor"},
    ];
      // Função para adicionar as opcoes ao menu
     export function addOptionsToNavMenu() {
        const pageAtual = window.location.pathname.substring(1);
        const menuContainer = document.getElementById('ul-menu-container');
        opcoesMenu.forEach(element => {
          let opcao = document.createElement('li');
          let button = document.createElement('a');
          button.href= element.link
          button.innerHTML = element.title;
          if(element.link == pageAtual){
              button.classList.add('active');
          }
          opcao.appendChild(button);
          menuContainer.appendChild(opcao);
        });
      }