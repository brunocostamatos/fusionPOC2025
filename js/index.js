import { addHeader} from '../components/header/header.js';
import { addSVGsToFooter } from '../components/footer/footer.js';
import { scrollToTop } from './scrollToTop.js';

window.addEventListener('DOMContentLoaded', function() {  
  addHeader();
  addSVGsToFooter();
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
