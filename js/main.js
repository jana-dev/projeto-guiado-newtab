var peopleRaw = localStorage.getItem('people') //obtem o valor do item no armazenamento
if(peopleRaw != null){ //null em js representa um valor nulo ou vazio (se o item é diferente de vazio, então:)
    var people = JSON.parse(peopleRaw) // ao receber dados do servidor web os dados são string, com o JSON.parse() os dados se tornam objeto JS
}else{ //senão:
    var people = [];
}

function desenhaTabela(){

    currentLines = [...document.querySelectorAll('table.tabela tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove();
    })

    for(person in people){
        document.querySelector('table.tabela tbody').innerHTML +=
        `<tr class="dinamic-content" style="background-color: ${((person % 2 == 0) ? '#fff' : '#F5F6FF')}">
            <td>
                ${people[person].name}
            </td>
            <td>
                ${people[person].tel}
            </td>
            <td>
                ${(people[person].xp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>')}
            </td>
            <td>
                <button onclick="deleteUser(${person})">Excluir</button>
                <a class="btEditar" href="./form.html?person=${person}">Editar</a>
            </td>
        </tr>`
    }

}

function deleteUser(p){
    people.splice(p, 1); 
    desenhaTabela();
    localStorage.setItem('people', JSON.stringify(people));
}

desenhaTabela()