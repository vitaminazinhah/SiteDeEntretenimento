function validacao(){
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    if (nome.length == 0 || data.length == 0){
        window.alert("Erro! Os campos nome e data são obrigatórios!!");
        event.preventDefault();
        if (nome.length == 0){
            document.getElementById('nome').focus();
        }
        else if (data.length == 0){
            document.getElementById('data').focus();
        }
    }
}