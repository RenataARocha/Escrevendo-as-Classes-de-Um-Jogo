// Criando a classe Heroi
class Heroi {
  // O construtor recebe os dados do herói: nome, idade e tipo
  constructor(nome, idade, tipo) {
    this.nome = nome;   // Atribui o nome ao herói
    this.idade = idade; // Atribui a idade ao herói
    this.tipo = tipo;   // Atribui o tipo do herói (ex: mago, guerreiro)
  }

  // Método que representa o ataque do herói
  atacar() {
    let ataque; // Variável que vai guardar o tipo de ataque

    // Verifica qual é o tipo do herói e define o ataque correspondente
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "fez um ataque desconhecido"; // Para tipos não reconhecidos
    }

    // Exibe a mensagem do ataque no console
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando alguns heróis com diferentes tipos
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 80, "mago");
const heroi3 = new Heroi("Sensei Wu", 65, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar(); // O guerreiro atacou usando usou espada
heroi2.atacar(); // O mago atacou usando usou magia
heroi3.atacar(); // O monge atacou usando usou artes marciais
heroi4.atacar(); // O ninja atacou usando usou shuriken
