function testaFormulario(e){
    e.preventDefault();
    
    var peopleRaw = localStorage.getItem('people')
    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw)
    }else{
        var people = [];
    }

    console.log(people);

    if(id !== null){
        people[id] = {
            name: e.target.elements['nome'].value,
            tel: e.target.elements['telefone'].value,
            xp: (e.target.elements['experiencia'].value == 'true')
        }
    }else{
        people.push({
            name: e.target.elements['nome'].value,
            tel: e.target.elements['telefone'].value,
            xp: (e.target.elements['experiencia'].value == 'true')
        });
    }

    

    localStorage.setItem('people', JSON.stringify(people));

    document.getElementById('goHome').click();
    
}


var urlPrincipal = new URL(window.location.href)
var id = urlPrincipal.searchParams.get('person')
if(id !== null){
    var peopleRaw = localStorage.getItem('people')
    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw)
    }else{
        var people = [];
    }

    console.log(people[id])

    document.getElementById('nome').value = people[id].name;
    document.getElementById('telefone').value = people[id].tel;
    if(people[id].xp){
        document.getElementById('experiencia-sim').checked = true
    }else{
        document.getElementById('experiencia-nao').checked = true
    }

}