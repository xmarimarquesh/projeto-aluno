const sala = require('../model/sala');

module.exports = {
    async sala(req, res){
        res.render('../view/cadastroSala');
    },

    async salaInsert(req, res){
        //Receve as informações do front-end
        const dados = req.body;

        //Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        });

        //Redirecionar para a página principal
        res.redirect('/');
    }
}