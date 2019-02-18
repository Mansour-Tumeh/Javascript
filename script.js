// alert('Welcome to DCI');

// function showhide(){
//     if (document.getElementById('img').style.display =='block'){
//         document.getElementById('img').style.display ='none';
//         document.getElementById('showhide').innerHTML='Show';
//     }
//     else {
//         document.getElementById('img').style.display ='block';
//         document.getElementById('showhide').innerHTML='Hide';
//     }
// }
function changestyle(){
           
           newborder='50px';
           document.body.style.background='lightgray';
           document.getElementById('first').style.background='lightblue';
           document.getElementById('first').style.borderRadius=newborder;
           document.getElementById('first').style.color='red';            
           document.getElementById('j').style.background='red';            
           var welcome='Welcome to DCI';           
           document.getElementById('first').innerHTML=welcome;      
           

}
function changelanguage(){
    var wilkommen='Wilkommen bei DCI';    
        
    document.getElementById('first').innerHTML=wilkommen;    
}
function welcome(fname,lname){
    var wilkommen='Wilkommen bei DCI'; 
    document.getElementById('first').innerHTML=wilkommen +' '+fname+' '+lname;

  
}