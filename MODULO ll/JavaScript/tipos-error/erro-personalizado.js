// Personalizar o Object Error

    // Basicamente o sintaxe o error é:
    new Error(message, fileName, lineNumber);

    const MeuErro = new Error('Mensagem Inválida');
    throw MeuErro;

    // É possivel atribuir um name ao erro
    const MeuErro2 = new Error('Mensagem Inválida');
    MeuErro2.name = 'InvalidMessage';
    throw MeuErro2;

    // E tambem aplicar o stack, para motrar onde no codigo aconteceu o erro
    const MeuErro3 = new Error('Mensagem Inválida');
    MeuErro3.name = 'InvalidMessage';
    MeuErro3.stack; //Apenas aplicando isso, meuerro ja retorna com o stack 
    throw MeuErro2;