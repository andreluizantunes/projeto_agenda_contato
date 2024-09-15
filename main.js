document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Para não recarregar a página 
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    
    // Criar uma nova linha e células
    const tabela = document.getElementById('contatos-body');
    const novalinha = document.createElement('tr');
    const nomeCelula = document.createElement('td');
    const telefoneCelula = document.createElement('td');
    
    // Para add os ícones da biblioteca Font Awesome
    const nomeConteudo = `<div class="linha_de_contato"><i class="fas fa-user"></i> ${nome}</div>`;
    const telefoneConteudo  = `<div class="linha_de_contato"><i class="fas fa-phone-alt"></i> ${telefone}</div>`;
    
    // Insere os valores nas células
    nomeCelula.innerHTML = nomeConteudo;
    telefoneCelula.innerHTML = telefoneConteudo;
    
    // Add as células na nova linha
    novalinha.appendChild(nomeCelula);
    novalinha.appendChild(telefoneCelula);
    
    // Add a nova linha na tabela
    tabela.appendChild(novalinha);
    
    // Limpar o formulário ao enviar 
    document.getElementById('formulario-contato').reset();
});