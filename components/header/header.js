import { addOptionsToNavMenu } from "./menu/menu.js";
  
  // Função para adicionar as opcoes ao menu
  export function addHeader() {
    const header = document.getElementById("header");

    const imgIconFusion = document.createElement('img');
    imgIconFusion.src="/assets/others/favicon.svg";
    imgIconFusion.id="imgFusionHeader";
    header.appendChild(imgIconFusion);

    const imgTraco = document.createElement('img');
    imgTraco.src="/assets/others/layer_cabecalho.svg";
    imgTraco.id = "traco_cabecalho";
    header.appendChild(imgTraco);


    const nav = document.createElement('nav');
    const ulNav = document.createElement('ul');
    ulNav.id = "ul-menu-container";
    nav.appendChild(ulNav);
    header.appendChild(nav);

    addOptionsToNavMenu();
}