function testaFormulario(e){
    e.preventDefault();
    
    var peopleRaw = localStorage.getItem('people')
    if(peopleRaw != null){
        var people = JSON.parse(peopleRaw)
    }else{
        var people = [];
    }

    console.log(people);

    people.push({
        name: e.target.elements['nome'].value,
        tel: e.target.elements['telefone'].value,
        xp: (e.target.elements['experiencia'].value == 'true')
    });

    localStorage.setItem('people', JSON.stringify(people));

    document.getElementById('goHome').click();
    

}