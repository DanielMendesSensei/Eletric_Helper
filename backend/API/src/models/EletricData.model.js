import { readFileSync, writeFileSync, existsSync } from 'fs';

const dadosFilePath = "src/database/dados.json";

const carregarDados= ()=>{
    if (!existsSync(dadosFilePath)) {
        salvarDados({ eletricData: [] });
    }
    return JSON.parse(readFileSync(dadosFilePath));
}

const salvarDados = (dados)=>{
    writeFileSync(dadosFilePath, JSON.stringify(dados, null, 4));
}

const calcularEletricData = (newEletricData)=>{
    const dados = carregarDados();
    dados.eletricData.push(newEletricData);
    salvarDados(dados);
}

const obterEletricData = ()=>{
    const dados = carregarDados();
    return dados.eletricData;
}

export { calcularEletricData, obterEletricData };