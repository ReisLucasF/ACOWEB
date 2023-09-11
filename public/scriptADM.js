document.addEventListener('DOMContentLoaded', (event) => {
    const redirecionamentoForm = document.getElementById('redirecionamentoForm');
    const redirecionamentosTable = document.getElementById('redirecionamentosTable');
  
    function fetchRedirecionamentos() {
      fetch('/api/redirecionamentos')
        .then(response => response.json())
        .then(data => {
          const tbody = redirecionamentosTable.querySelector('tbody');
          tbody.innerHTML = '';
          data.forEach((redirecionamento, index) => {
            const row = tbody.insertRow();
            row.insertCell(0).textContent = redirecionamento.nome;
            row.insertCell(1).textContent = redirecionamento.link;
            row.insertCell(2).textContent = redirecionamento.codigo;
  
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.addEventListener('click', () => deleteRedirecionamento(redirecionamento.id));
            row.insertCell(3).appendChild(deleteButton);
          });
        });
    }

    function deleteRedirecionamento(codigo) {
      fetch(`/api/redirecionamentos/${codigo}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        fetchRedirecionamentos();
      });
    }
  
    redirecionamentoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const link = document.getElementById('link').value;
      const codigo = document.getElementById('codigo').value;
  
      fetch('/api/redirecionamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, link, codigo }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Redirecionamento criado:', data);
        fetchRedirecionamentos();
      });
    });
  
    fetchRedirecionamentos();
  });
  