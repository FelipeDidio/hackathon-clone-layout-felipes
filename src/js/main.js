function mostrarErro(mensagem) {
    const erroDiv = document.getElementById('form-error');
    erroDiv.textContent = mensagem; // Define a mensagem de erro
    erroDiv.style.display = 'block'; // Exibe a div de erro
    
    // Oculta a div de erro após 3 segundos
    setTimeout(() => {
        erroDiv.style.display = 'none';
    }, 3000);
}

function mostrarSucesso(mensagem) {
    const sucessoDiv = document.getElementById('form-success');
    sucessoDiv.textContent = mensagem; // Define a mensagem de sucesso
    sucessoDiv.style.display = 'block'; // Exibe a div de sucesso
    
    // Oculta a div de sucesso após 3 segundos
    setTimeout(() => {
        sucessoDiv.style.display = 'none';
    }, 3000);
}

function mostrarRedirect(mensagem) {
    const redirectDiv = document.getElementById('form-redirect');
    redirectDiv.textContent = mensagem; // Define a mensagem de redirecionamento
    redirectDiv.style.display = 'block'; // Exibe a div de redirecionamento
    
    // Oculta a div de redirecionamento após 3 segundos
    setTimeout(() => {
        redirectDiv.style.display = 'none';
    }, 3000);
}

const btn = document.querySelector('#button');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    const crm = document.getElementById('crm').value;
    const uf = document.getElementById('uf').value;

    // Verifica se o CRM está preenchido e contém apenas números
    if (!crm) {
        mostrarErro('É obrigatório preencher o CRM, digite apenas números.');
        return;
    } else if (!/^\d+$/.test(crm)) {
        mostrarErro('O campo CRM deve conter apenas números.');
        return;
    }

    // Verifica se o estado foi selecionado
    if (!uf) {
        mostrarErro('Você deve selecionar um estado no campo UF.');
        return;
    }

    // Exibe a mensagem de sucesso
    mostrarSucesso('Sucesso!');

    // Após 3 segundos, exibe a mensagem de redirecionamento
    setTimeout(() => {
        mostrarRedirect('Você está sendo redirecionado...');
        window.location.href = 'https://www.senacrs.com.br/escola/0c66d3f4-b207-49b9-85a7-b870952834b6';
    }, 3000);
})
/*function continuar() {
    const crm = document.getElementById('crm').value;
    const uf = document.getElementById('uf').value;

    // Verifica se o CRM está preenchido e contém apenas números
    if (!crm) {
        mostrarErro('É obrigatório preencher o CRM, digite apenas números.');
        return;
    } else if (!/^\d+$/.test(crm)) {
        mostrarErro('O campo CRM deve conter apenas números.');
        return;
    }

    // Verifica se o estado foi selecionado
    if (!uf) {
        mostrarErro('Você deve selecionar um estado no campo UF.');
        return;
    }

    // Exibe a mensagem de sucesso
    mostrarSucesso('Sucesso!');

    // Após 3 segundos, exibe a mensagem de redirecionamento
    setTimeout(() => {
        mostrarRedirect('Você está sendo redirecionado...');

    }, 3000);
}*/
