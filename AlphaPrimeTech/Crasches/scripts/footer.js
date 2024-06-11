let icon = document.getElementById('bootstrap');
let ClassList = [
    'bi-bootstrap',
    'bi-bootstrap-fill',
];
let i = 0;
console.log(ClassList[i]);
var img = function iconChange(){
    
        if(ClassList[i] == 'bi-bootstrap'){
            icon.classList.remove('bi-bootstrap');
            icon.classList.add('bi-bootstrap-fill');
            i++;
            console.log("if");
            setTimeout(iconChange,2000);
            }
            else{
            console.log("else");
            setTimeout(iconChange,2000);
            icon.classList.remove('bi-bootstrap-fill');
            icon.classList.add('bi-bootstrap');
            i--;
            }
    
    
    
    
}
console.log('1');
img();