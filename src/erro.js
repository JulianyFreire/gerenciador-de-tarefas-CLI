// Erro (esperado) pela causa do uso incorreto do programa, diferencia erros do usuário para bug do programa.

class ErroDeUsabilidade extends Error{
    constructor(mensagem){
        super(mensagem);
        this.name = 'ErroDeUsabilidade';
    }
}

module.exports = {ErroDeUsabilidade}; 