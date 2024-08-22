const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    
    async pagInicialGet(req, res){

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        res.render('../view/index', {salas, alunos: '', ID: ''});
    },
    
    async pagInicialPost(req, res){

        const ID = req.body.nome;
        console.log(ID)
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: { IDSala: ID }   
        });

        const salas = await sala.findAll({ 
            raw: true, 
            attributes: ['IDSala', 'Nome'] 
        });
        
        res.render('../view/index', {salas, alunos, ID});
    }
}