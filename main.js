var information = [];
var mesInputs = document.getElementsByTagName('input');
var user ={
    nom: `${mesInputs[0].value} ${mesInputs[1].value}`,
    age: `${mesInputs[2].value}`,
    sexe: `${mesInputs[3].value}`
};
var complete = [user.nom, user.age, user.sexe];
var confirm = document.getElementById('register');


for(let i=0; i<mesInputs.length; i++){
    mesInputs[i].addEventListener('blur', function(){
        information.push(this.value);
    });
}


function stockage(){
    var collecteurid = document.getElementById('collecteur');
    for(var i=0; i< information.length; i++){
        var paragraphe = document.createElement('p'),
        pref = document.createElement('pre');
        pref.textContent = `${complete[i]}:${information[i]}`;
        paragraphe.appendChild(pref);
        collecteurid.appendChild(paragraphe);
    }
}
confirm.addEventListener('click', stockage);




