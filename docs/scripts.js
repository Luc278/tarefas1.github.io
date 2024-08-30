const task = document.getElementById("addTask");
const ista = document.getElementById("lista");
const icone = document.getElementById("icone")

function adicionar() {
    if(task.value.trim() === ""){
        alert("Preencha o campo adequadamente!")
    } else{
    var lis = document.createElement('li');
   lis.innerHTML = task.value +

   '<div id="container-btn"><button class="botao" onclick="editar(this)">Editar</button>                                                                      <button class="botao"   onclick="remover(this)">Remover</button>                                                                                           <button class="botao" onclick="concluir(this)">tarefa concluida</button></div> '

   lis.setAttribute('data-task', task.value);
   lista.appendChild(lis);
   task.value = "";
}}


function concluir(button){
    
var li = button.parentNode.parentNode;
li.style.border = "1px solid #B5F4AF" 
li.style.color = "#B5F4AF"
var taskText = li.getAttribute('data-task');
li.innerHTML = `<i class="bi bi-check-lg"></i> ${taskText} `
li.innerHTML += `
        <div id="container-btn">
            <button class="botao" onclick="editar(this)">Editar</button>
            <button class="botao" onclick="remover(this)">Remover</button>
        </div>
    `;
}

function editar(button){ 
    var li = button.parentNode.parentNode; // Pega o <li> pai do botão clicado
    var textoAtual = li.getAttribute('data-task').trim();
    var editado = window.prompt("Digite sua edição", textoAtual)

    if (editado !== null && editado.trim() !=="") { // Verifica se o usuário clicou "OK" no prompt 
        li.setAttribute('data-task', editado); // Atualiza o texto da tarefa 
        li.firstChild.textContent = editado
    } 

}

 function remover(button){
     var remove = prompt("Quer mesmo remover essa tarefa ?(Digite 's' para confirmar)");
     if(remove && remove.trim().toLowerCase()  ==='s' )
     var li = button.parentNode.parentNode;
     lista.removeChild(li)

 }
