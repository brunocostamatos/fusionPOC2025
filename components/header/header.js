import { addOptionsToNavMenu } from "./menu/menu.js";
  
  // Função para adicionar as opcoes ao menu
  export function addHeader() {
    const header = document.getElementById("header");

    const imgIconFusion = document.createElement('img');
    imgIconFusion.src="assets/others/favicon.svg";
    imgIconFusion.id="imgFusionHeader";
    header.appendChild(imgIconFusion);

    const imgTraco = document.createElement('img');
    imgTraco.src="assets/others/layer_cabecalho.svg";
    imgTraco.id = "traco_cabecalho";
    header.appendChild(imgTraco);

    const imgSomenteTraco = document.createElement('img');
    imgSomenteTraco.src = "assets/others/layer_traco.svg";
    imgSomenteTraco.id = "traco_cabecalho_solo";
    header.appendChild(imgSomenteTraco);

    //nav Desktop
    const nav = document.createElement('nav');
    const ulNav = document.createElement('ul');
    ulNav.id = "ul-menu-container";
    nav.appendChild(ulNav);
    header.appendChild(nav);

    addOptionsToNavMenu(ulNav.id);

    //nav Mobile
    const navMobile = document.createElement('nav'); 
    navMobile.classList.add('menu-hamburger');
    const input = document.createElement('input');
    input.id = 'menu-hamburguer';
    input.type= 'checkbox';

    navMobile.appendChild(input);

    const labelMobile = document.createElement('label');
    labelMobile.setAttribute('for', 'menu-hamburguer');
    const divButtonHamburguer = document.createElement('div');
    divButtonHamburguer.classList.add('menu');
    const buttonHamburuger = document.createElement('span');
    buttonHamburuger.classList.add('hamburguer');
    divButtonHamburguer.appendChild(buttonHamburuger);
    labelMobile.appendChild(divButtonHamburguer);
    
    navMobile.appendChild(labelMobile);
 
    const ulNavMobile = document.createElement('ul');
    ulNavMobile.id = 'menu-hamburguer-elements';
    navMobile.appendChild(ulNavMobile);
    header.appendChild(navMobile);

    addOptionsToNavMenu(ulNavMobile.id);

}