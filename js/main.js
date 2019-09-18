var list = document.querySelectorAll('.sidebar-category>li');
console.log(list);
for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(event){
        
        for(let x=0;x<list.length;x++){
            if(list[x].classList.contains('show-inner') && x!=i){
                list[x].classList.remove('show-inner');
            }
        }
        
        list[i].classList.toggle('show-inner');
    });
}

var newMail = document.getElementById('new-mail');
var mailSec = document.getElementsByClassName('compose-mail')[0];
var closeModal = document.getElementById('close-modal');
newMail.addEventListener('click', function(event){
    event.preventDefault();
    mailSec.classList.add('show-modal')
});
closeModal.addEventListener('click', function(event){
    event.preventDefault();
    mailSec.classList.remove('show-modal');
});

var detailsDrop = document.getElementById('details-drop');
var details = document.getElementById('details');

detailsDrop.addEventListener('click', function(event){
    event.preventDefault();
    details.classList.toggle('show-details');
});

document.addEventListener('click', function(event){
    console.log(details.classList.contains('show-details'));
   if(event.target == mailSec){
       mailSec.classList.remove('show-modal');
   }
});
