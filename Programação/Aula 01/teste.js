class Aluno {
    nome;
    idade;
    frequencia;

    constructor(nome, idade,frequencia) {
        this.nome = nome;
        this.idade = idade;
        this.frequencia = frequencia;
    }
    }

    let alunos = [
        new Aluno("Pedro",  18, 6  ),
        new Aluno("Carlos",  19, 20  ),
        new Aluno("Juan",  22, 10  ),
        new Aluno("Malcolm",  17, 19  ),
        new Aluno("Ian",  20,  21 ),
        new Aluno("Bruno",  20, 20  ),
        new Aluno("Gabriel",  20,  8 ),
        new Aluno("João",  19, 5  ),
        new Aluno("Gustavo",  18, 12  ),
        new Aluno("Felipe",  19, 4  ),

    ];

    function classificarAluno(aluno) {
        if (aluno.frequencia >=12){
            return "Frequente"
        
    }else {
        return"baixa frequencia"

        
            

            }
        }
    let frequencia = 0;
    let baixafrequencia = 0;


    for (let i = 0; i < alunos.length; i++) {
console.log(alunos[i] . nome + '-'  + classificarAluno(alunos[i]));
if ( alunos [i].frequencia >= 12) {
    frequencia ++;

    } else {
        baixafrequencia++;
    }
}
let i = 0;
let maioresDeIdade = 0;

while (i < alunos.length) {
    if (alunos[i].idade >= 18) {
        maioresDeIdade++;
    }
    i++;
}
console.log(+)



        


