export function codeErrorLogin (response){
    switch (response.status){
        case 400:
            return "Campos obrigatórios ausentes ou dados incorretos";
        case 401:
            return "Usuário não autenticado";
        case 404:
            return "usuario não encontrado";
        default:
          return "ocorreu um erro";
    }
}

export function codeErrorRegister (response){
    switch (response.status){
        case 400:
            return "Campos obrigatórios ausentes";
        case 403:
            return "E-mail ja cadastrado";
        case 404:
            return "usuario não encontrado";
        default:
          return "ocorreu um erro";
    }
}

export function codeErrorMenu (response){
    switch (response.status){
        case 400:
            return "Necessário informar nome e mesa do cliente";
        default:
          return "ocorreu um erro";
    }
}