
const nomePokemon = prompt("Digite o nome do seu Pokemão:");


    const seuPokemão = {
      vida == Math.floor(Math.random() * 21) +
      ataque == Math.floor(Math.random() * 3) +
      level == 1 
      vitorias == 0
      derrotas == 0 

    }
  
   // Método para batalhar
   batalhar() {
    // Gerando o inimigo aleatório com HP entre 5 e 10 e ataque entre 0 e 4
    const hpInimigo = Math.floor(Math.random() * 6) + 5; // HP entre 5 e 10
    const ataqueInimigo = Math.floor(Math.random() * 5); // Ataque entre 0 e 4

    console.log(`\nIniciando batalha contra um inimigo!\n`);
    console.log(`Pokemão: ${this.nome} (HP: ${this.hp}, Ataque: ${this.ataque})`);
    console.log(`Inimigo: (HP: ${hpInimigo}, Ataque: ${ataqueInimigo})`);

    let turno = 1;
    let hpPokemaoAtual = this.hp;
    let hpInimigoAtual = hpInimigo;

    // Loop de batalhas, alternando ataques
    while (hpPokemaoAtual > 0 && hpInimigoAtual > 0) {
      if (turno % 2 !== 0) {
        // Ataque do Pokemão
        hpInimigoAtual -= this.ataque;
        console.log(`${this.nome} atacou! Dano: ${this.ataque}, HP do Inimigo agora: ${hpInimigoAtual}`);
      } else {
        // Ataque do inimigo
        hpPokemaoAtual -= ataqueInimigo;
        console.log(`Inimigo atacou! Dano: ${ataqueInimigo}, HP do ${this.nome} agora: ${hpPokemaoAtual}`);
      }
      turno++;
    }

    // Verificando quem venceu
    if (hpPokemaoAtual > 0) {
      console.log(`\n${this.nome} venceu a batalha!`);
      this.vitorias++;
      this.subirAtributos();
    } else {
      console.log(`\n${this.nome} perdeu a batalha.`);
      this.derrotas++;
    }
  }

  // Método para subir um atributo após a vitória
  subirAtributos() {
    const atributo = Math.random() < 0.5 ? 'hp' : 'ataque';
    if (atributo === 'hp') {
      this.hp += 5; // Aumenta o HP
      console.log(`${this.nome} ganhou 5 HP!`);
    } else {
      this.ataque += 1; // Aumenta o Ataque
      console.log(`${this.nome} ganhou 1 de Ataque!`);
    }
  }

  // Método para mostrar as vitórias e derrotas
  mostrarVitoriasDerrotas() {
    console.log(`V vitórias: ${this.vitorias} | Derrotas: ${this.derrotas}`);
  }

  // Método para listar os dados atuais e iniciais
  listarPokemon() {
    console.log(`\nDados Iniciais de ${this.nome}:`);
    console.log(`HP Inicial: ${this.hpInicial}`);
    console.log(`Ataque Inicial: ${this.ataqueInicial}`);
    console.log(`Level Inicial: 1`);
    console.log(`\nDados Atuais de ${this.nome}:`);
    console.log(`HP Atual: ${this.hp}`);
    console.log(`Ataque Atual: ${this.ataque}`);
    console.log(`Vitórias: ${this.vitorias}`);
    console.log(`Derrotas: ${this.derrotas}`);
  }
}

// Função para exibir o menu e interagir com o usuário
function exibirMenu() {
  const opcao = prompt(
    "Escolha uma opção:\n" +
    "1) Batalhar\n" +
    "2) Vitórias vs Derrotas\n" +
    "3) Listar Objeto\n" +
    "4) Sair"
  );

  switch (opcao) {
    case '1':
      pokemao.batalhar();
      exibirMenu();
      break;
    case '2':
      pokemao.mostrarVitoriasDerrotas();
      exibirMenu();
      break;
    case '3':
      pokemao.listarPokemon();
      exibirMenu();
      break;
    case '4':
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      exibirMenu();
  }

}
