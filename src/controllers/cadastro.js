const sala = require('../model/sala');
const aluno = require('../model/aluno');

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
    },

    async aluno(req, res){
        res.render('../view/cadastroAluno');
    },

    async aluno(req, res){
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
        raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
        attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../view/cadastroAluno', {salas});
    },
        
    async alunoInsert(req, res){
        
        // Nome padrão da foto
        let foto = 'account.png';

        // Verificando se foi enviada alguma foto
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }

        // Recebendo as informações pelo Body
        const dados = req.body;

        // Criando aluno no banco de dados
        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala,
            Foto: foto
        });
        // Redirecionar para a página
        res.redirect('/');
    }
}