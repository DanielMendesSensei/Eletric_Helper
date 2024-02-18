import { calcularEletricData, obterEletricData } from '../models/EletricData.model.js';

const homeController = {
    calcular: (req, res)=>{
        // Fazer com que na interação com o front, um laço de cordo com o n de ambientes
        const { voltagem, ambientes } = req.body;
        calcularEletricData({voltagem});
        res.json({ message: `Novo dado adicionado com sucesso! -> ${voltagem}` });
    },

    obter: (req, res)=>{
        const dados = obterEletricData();
        res.json(dados);
    },

    home: (req, res)=>{
        res.render('home')
    }
}

export { homeController };