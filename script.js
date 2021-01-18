function limparDados(){
    email.value = '';
    usuario.value = '';
};

function entrar(){
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;			
    if(email == '' && usuario == ''){
        alert('preencha todos os dados');
        limparDados();	
    }else if(email == ''){
        alert('preencha seu email');
        limparDados();
    }else if(usuario == ''){
        alert('preencha seu usuario');
        limparDados();
    }
    else{
        window.location.href = "http://www.github.com";
    }		
};
