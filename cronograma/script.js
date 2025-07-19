function mostrarSemana() {
  const semanaSelecionada = document.getElementById("semanaSelect").value;
  const tabela = dados[semanaSelecionada];
  const container = document.getElementById("tabelaContainer");

  if (!tabela) {
    container.innerHTML = "<p>Nenhuma informação disponível.</p>";
    return;
  }

  let html = `
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Tempo (min)</th>
          <th>Dia 1</th>
          <th>Dia 2</th>
          <th>Dia 3</th>
          <th>Dia 4</th>
          <th>Dia 5</th>
        </tr>
      </thead>
      <tbody>
  `;

  tabela.forEach(row => {
    html += "<tr>" + row.map(cell => `<td>${cell}</td>`).join('') + "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;

  // Atualiza o h5 com a semana selecionada
  const titulo = document.getElementById("semanaTitulo");
  titulo.textContent = semanaSelecionada;
}

window.onload = mostrarSemana;
