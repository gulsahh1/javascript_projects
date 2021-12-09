let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ul = document.getElementsByTagName("li"); 

// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ul.length;i++){ 
    let close = document.createElement("span"); 
    close.textContent = "\u00D7"; 
    close.classList.add("close"); 
    close.onclick = removeButton; 
    ul[i].append(close); 
    ul[i].onclick = check; 
}


// Butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', elemanEkle)  


//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();  
}


//ELEMAN EKLEMEK İÇİN GEREKENLER
function elemanEkle() {
 
    if (taskDOM.value == "")  {  
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = task.value; 
    taskDOM.value = "";
  
   
   //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
         liDOM.onclick = check;
        
    let close = document.createElement("span");
        close.textContent = "\u00D7";
        close.classList.add("close");
        close.onclick = removeButton;
        
        liDOM.append(close);
        listDOM.append(liDOM);
        inputElement.value = ("");
        
}
}    
