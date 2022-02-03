var descript = document.getElementsByClassName('descript');
var proj = document.getElementsByClassName('project');
var att = document.createAttribute('max-width');
att.value = '100%'

for(let i=0; i<proj.length;i++){
proj[i].addEventListener('mouseover', function(r){
    descript[i].innerHTML = 'Coming Soon';
    proj[(i+1)%5].style.display = 'none';
    proj[(i+2)%5].style.display = 'none';
    proj[(i+3)%5].style.display = 'none';
    proj[(i+4)%5].style.display = 'none';
    proj[i].style.width = '100%';
    proj[i].style.height = '100%';
})
proj[i].addEventListener('mouseout', function(j){
    descript[i].innerHTML = '';
    proj[(i+1)%5].style.display = 'inline';
    proj[(i+2)%5].style.display = 'inline'; 
    proj[(i+3)%5].style.display = 'inline';
    proj[(i+4)%5].style.display = 'inline';
    proj[i].style.width = '20%';
    proj[i].style.height = '50%';
})
}