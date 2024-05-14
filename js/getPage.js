// Função para carregar uma página dentro do elemento de conteúdo
export function carregarPagina(url) {
    fetch(url) // Carrega o conteúdo da URL usando Fetch API
      .then(response => response.text()
    )
      .then(html => {
        if(html != '' || html == null || html == undefined){
          const parser = new DOMParser();
          // Converte o HTML em um documento DOM
          const newHTML = parser.parseFromString(html, 'text/html');
          document.getElementById('conteudo').innerHTML = html;// Define o HTML da página dentro do elemento de conteúdo
          document.getElementById('tituloSite').innerText = newHTML.getElementsByTagName('title')[0].innerText;// Define o title da aba do navegador para ser o title da página que está sendo acessada
        }else{
            document.getElementById('conteudo').innerHTML = '<h2 id="titulo">Page not found</h2>'
        }
      })
      .catch(error =>{
          document.getElementById('conteudo').innerHTML = `<h2 id="titulo">Error loading page: ${error}</h2>`;
          console.error('Error loading page:', error);
        })
  }