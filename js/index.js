import { addHeader} from '../components/header/header.js';
import { addSVGsToFooter } from '../components/footer/footer.js';
import { scrollToTop } from './scrollToTop.js';
import { carregarPagina } from './getPage.js';

window.addEventListener('DOMContentLoaded', function() {  
  addHeader();
  addSVGsToFooter();
  const pageAtual = (window.location.hash).split("#");
  if(pageAtual[pageAtual.length-1] != ""){ //Verifica se estou acessando a URL que não seja a Home e puxa o body da respectiva tela
    carregarPagina(pageAtual[pageAtual.length-1])
  }

  //Pausa o video depois de 6 segundos, para que não apareça o fundo verde do fim do video
  setTimeout(function() {
    document.getElementById('video-bg').pause();
  }, 6000);
});

document.getElementById("btnTopo").addEventListener("click", scrollToTop);

window.addEventListener("scroll", function() {
  var btnTopo = document.getElementById("btnTopo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});
