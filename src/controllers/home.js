const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    
    async pagInicialGet(req, res){

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        res.render('../view/index', {salas, alunos: '', id: ''});
    },
    
    async pagInicialPost(req, res){

        const id = req.body.nome;

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: { IDSala: id }   
        });

        const salas = await sala.findAll({ 
            raw: true, 
            attributes: ['IDSala', 'Nome'] 
        });

        res.render('../view/index', {salas, alunos, id});
    }
}