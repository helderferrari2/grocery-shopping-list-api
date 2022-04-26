module.exports = {

  async up(queryInterface) {
    const items = [
      { name: 'Açúcar', category: 'mercearia' },
      { name: 'Achocolatado', category: 'mercearia' },
      { name: 'Arroz', category: 'mercearia' },
      { name: 'Azeite', category: 'mercearia' },
      { name: 'Biscoito', category: 'mercearia' },
      { name: 'Bolacha', category: 'mercearia' },
      { name: 'Café', category: 'mercearia' },
      { name: 'Chá', category: 'mercearia' },
      { name: 'Farinha de milho', category: 'mercearia' },
      { name: 'Farinha de mandioca', category: 'mercearia' },
      { name: 'Farinha de trigo', category: 'mercearia' },
      { name: 'Farofa', category: 'mercearia' },
      { name: 'Feijão', category: 'mercearia' },
      { name: 'Fermento', category: 'mercearia' },
      { name: 'Fubá', category: 'mercearia' },
      { name: 'Maionese', category: 'mercearia' },
      { name: 'Leite em pó', category: 'mercearia' },
      { name: 'Creme de leite', category: 'mercearia' },
      { name: 'Leite condensado', category: 'mercearia' },
      { name: 'Ervilha', category: 'mercearia' },
      { name: 'Milho verde', category: 'mercearia' },
      { name: 'Macarrão', category: 'mercearia' },
      { name: 'Manteiga', category: 'mercearia' },
      { name: 'Molho de tomate', category: 'mercearia' },
      { name: 'Sardinha', category: 'mercearia' },
      { name: 'Pão de forma', category: 'mercearia' },
      { name: 'Pão frances', category: 'mercearia' },
      { name: 'Farinha de rosca', category: 'mercearia' },
      { name: 'Pipoca', category: 'mercearia' },
      { name: 'Óleo', category: 'mercearia' },
      { name: 'Queijo ralado', category: 'mercearia' },
      { name: 'Sal', category: 'mercearia' },
      { name: 'Temperos', category: 'mercearia' },
      { name: 'Água sanitária', category: 'limpeza' },
      { name: 'Álcool', category: 'limpeza' },
      { name: 'Amaciante', category: 'limpeza' },
      { name: 'Desinfetante', category: 'limpeza' },
      { name: 'Detergente', category: 'limpeza' },
      { name: 'Esponja de aço', category: 'limpeza' },
      { name: 'Esponja de pia', category: 'limpeza' },
      { name: 'Lustra móveis', category: 'limpeza' },
      { name: 'Tira manchas', category: 'limpeza' },
      { name: 'Sabão em pó', category: 'limpeza' },
      { name: 'Sabão liquido', category: 'limpeza' },
      { name: 'Saco de lixo', category: 'limpeza' },
      { name: 'Absorventes', category: 'higiene pessoal' },
      { name: 'Água oxigenada', category: 'higiene pessoal' },
      { name: 'Algodão', category: 'higiene pessoal' },
      { name: 'Barbeador', category: 'higiene pessoal' },
      { name: 'Condicionador', category: 'higiene pessoal' },
      { name: 'Creme de barbear', category: 'higiene pessoal' },
      { name: 'Creme dental', category: 'higiene pessoal' },
      { name: 'Desodorante', category: 'higiene pessoal' },
      { name: 'Escova de dente', category: 'higiene pessoal' },
      { name: 'Fio dental', category: 'higiene pessoal' },
      { name: 'Cotonete', category: 'higiene pessoal' },
      { name: 'Papel higiênico', category: 'higiene pessoal' },
      { name: 'Sabonete', category: 'higiene pessoal' },
      { name: 'Shampoo', category: 'higiene pessoal' },
      { name: 'Água', category: 'bebidas' },
      { name: 'Cerveja', category: 'bebidas' },
      { name: 'Refrigerante', category: 'bebidas' },
      { name: 'Suco', category: 'bebidas' },
      { name: 'Vinho', category: 'bebidas' },
      { name: 'Peixe', category: 'carnes' },
      { name: 'Frango', category: 'carnes' },
      { name: 'Carne', category: 'carnes' },
      { name: 'Porco', category: 'carnes' },
      { name: 'Salsicha', category: 'carnes' },
      { name: 'Calabresa', category: 'carnes' },
      { name: 'Bacon', category: 'carnes' },
      { name: 'Linguiça', category: 'carnes' },
      { name: 'Hambúrguer', category: 'carnes' },
      { name: 'Alface', category: 'hortifruti' },
      { name: 'Couve', category: 'hortifruti' },
      { name: 'Batata', category: 'hortifruti' },
      { name: 'Tomate', category: 'hortifruti' },
      { name: 'Cenoura', category: 'hortifruti' },
      { name: 'Beterraba', category: 'hortifruti' },
      { name: 'Mandioca', category: 'hortifruti' },
      { name: 'Chuchu', category: 'hortifruti' },
      { name: 'Espinafre', category: 'hortifruti' },
      { name: 'Banana', category: 'hortifruti' },
      { name: 'Uva', category: 'hortifruti' },
      { name: 'Abacate', category: 'hortifruti' },
      { name: 'Mamão', category: 'hortifruti' },
      { name: 'Melancia', category: 'hortifruti' },
      { name: 'Melão', category: 'hortifruti' },
      { name: 'Salsa', category: 'hortifruti' },
      { name: 'Cheiro verde', category: 'hortifruti' },
      { name: 'Cebola', category: 'hortifruti' },
      { name: 'Queijo', category: 'laticínios' },
      { name: 'Mussarela', category: 'laticínios' },
      { name: 'Manteiga', category: 'laticínios' },
      { name: 'Presunto', category: 'laticínios' },
      { name: 'Iogurte', category: 'laticínios' },
      { name: 'Leite', category: 'laticínios' },
      { name: 'Ovos', category: 'laticínios' },
      { name: 'Requeijão', category: 'laticínios' },
      { name: 'Danonão grosso', category: 'laticínios' },
      { name: 'Ração', category: 'diversos' },
      { name: 'Petiscos', category: 'diversos' },
      { name: 'Tapete higiênico', category: 'diversos' },
      { name: 'Papel toalha', category: 'diversos' },
      { name: 'Guardanapo', category: 'diversos' },
    ];

    await queryInterface.bulkInsert('items', items, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('items', null, {});
  },
};