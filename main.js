var information = [];
var mesInputs = document.getElementsByTagName('input');
var user ={
    "nom" : `${mesInputs[0].value}`,
    "prenom" : `${mesInputs[1].value}`,
    "age": `${mesInputs[2].value}`,
    "sexe": `${mesInputs[3].value}`
};

complete = [];
for(const [key, value] of Object.entries(user)){
    complete.push(`${key} : ${value}`);
}

var confirm = document.getElementById('register');

function stockage(){
    for(let i=0; i<mesInputs.length; i++){
        information.push(mesInputs[i].value);
    }    
    var collecteurid = document.getElementById('collecteur');
    for(var i=0; i< information.length; i++){
        var paragraphe = document.createElement('p'),
        pref = document.createElement('pre');
        pref.textContent = `${complete[i]}`;
        paragraphe.appendChild(pref);
        collecteurid.appendChild(paragraphe);
    }
}
confirm.addEventListener('click', stockage);




