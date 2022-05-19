export function codeError (response){
    //let errorMessage = "";
    switch (response.status){
        case 400:
            alert("preencha todos os campos ou senha e email incorretos");
            break;
        case 401:
            alert("Usuário não autenticado");
            break;
        case 403:
            alert("Email ja cadastrado ou dados não preenchidos");
          break;
        case 404:
            alert("usuario não encontrado");
            break;
        default:
          alert("ocorreu um erro");
    }
}
