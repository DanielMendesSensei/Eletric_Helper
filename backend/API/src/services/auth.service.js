// Importar o pacote axios para fazer solicitações HTTP
import axios from "axios";

// Definir o serviço para consumir a API de terceiros
class ThirdPartyAPIService {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async fetchUserData(userId) {
    try {
      // Fazer uma solicitação GET para a API de terceiros para obter os dados do usuário
      const response = await axios.get(`${this.apiBaseUrl}/users/${userId}`);

      // Retornar os dados do usuário obtidos da API de terceiros
      return response.data;
    } catch (error) {
      // Em caso de erro, lançar uma exceção ou lidar com o erro conforme necessário
      throw new Error(`Erro ao obter dados do usuário: ${error.message}`);
    }
  }

  // Outros métodos para consumir diferentes endpoints da API de terceiros podem ser definidos aqui
}

// Exemplo de uso do serviço
(async () => {
  // Criar uma instância do serviço passando a URL base da API de terceiros
  const apiService = new ThirdPartyAPIService("https://api.example.com");

  try {
    // Chamar o método para buscar dados de um usuário específico
    const userData = await apiService.fetchUserData(123);

    // Exibir os dados do usuário obtidos da API de terceiros
    console.log("Dados do usuário:", userData);
  } catch (error) {
    // Lidar com erros de forma adequada
    console.error("Erro:", error.message);
  }
})();
