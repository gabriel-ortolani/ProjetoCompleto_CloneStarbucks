// primeira parte habilitado/Desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links')
    // troca do estado da classe '.toggle para active'
    menuToggle.classList.toggle('active')
    // troca o estado da classe links para ativo
    links.classList.toggle('active')
}