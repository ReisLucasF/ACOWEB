document.addEventListener('DOMContentLoaded', (event) => {
  const redirecionamentoForm = document.getElementById('redirecionamentoForm');
  const redirecionamentosTable = document.getElementById('redirecionamentosTable');

  function fetchRedirecionamentos() {
    fetch('/api/redirecionamentos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
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
          deleteButton.addEventListener('click', () => deleteRedirecionamento(redirecionamento._id));  
          row.insertCell(3).appendChild(deleteButton);
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}


  function deleteRedirecionamento(id) {
    console.log("ID para deletar:", id);  // Log do ID no console
    fetch(`/api/redirecionamentos/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }
      return response.json();
    })
    .then(data => {
      console.log(data.message);
      fetchRedirecionamentos();
    })
    .catch(error => {
      console.error('Error deleting redirection:', error);
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

