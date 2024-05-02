// Lista com o path das imagens

  const imagensNames = [
    'assets/apoios/ISIF.svg',
    'assets/apoios/AESS.svg',
    'assets/apoios/IEEE.svg',
    ];

  // Função para adicionar os SVGs ao footer
  export function addSVGsToFooter() {
    const divFooter = document.getElementById("footer");
    
    const svgContainer = document.createElement('div');
    svgContainer.id = "svg-container";

    imagensNames.forEach(element => {
      let svg = document.createElement('object');
      svg.data = element;
      svg.classList.add('footer-svg');
      svgContainer.appendChild(svg);
    });

    divFooter.appendChild(svgContainer);
  }
  