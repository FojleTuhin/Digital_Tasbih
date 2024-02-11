
let SubhanAllahCount = document.getElementById('subhanAllahCount');
let SubhanAllahIncrement = document.getElementById('subhanAllahIncrement');
let SubhanAllahDecrement = document.getElementById('subhanAllahDecrement');


let AlhamdulillahCount = document.getElementById('alhamdulillahCount');
let AlhamdulillahIncrement =document. getElementById('alhamdulillahIncrement');
let AlhamdulillahDecrement = document.getElementById('alhamdulillahDecrement');

let AstagfirullahCount = document.getElementById('astagfirullahCount');
let AstagfirullahIncrement = document.getElementById('astagfirullahIncrement');
let AstagfirullahDecrement = document.getElementById('astagfirullahDecrement');

let resetBtn= document.getElementById('reset-btn')

let SubhanAllahCountInitial = 0;
let AlhamdulillahCountInitial = 0;
let AstagfirullahCountInitial = 0;

SubhanAllahIncrement.addEventListener('click', function(){

    if(SubhanAllahCountInitial===33){
       return alert("Subhan Allah complete. You can Fill up another one")
    }
    SubhanAllahCountInitial= SubhanAllahCountInitial+1;
    SubhanAllahCount.innerText=SubhanAllahCountInitial;
})


SubhanAllahDecrement.addEventListener('click', function(){

    if(SubhanAllahCountInitial===0){
       return alert("Negative mark not allow")
    }
    SubhanAllahCountInitial= SubhanAllahCountInitial-1;
    SubhanAllahCount.innerText=SubhanAllahCountInitial;
})

AlhamdulillahIncrement.addEventListener('click', function(){

    if(AlhamdulillahCountInitial===33){
       return alert("Alhamdulillah complete. You can Fill up another one")
    }
    AlhamdulillahCountInitial= AlhamdulillahCountInitial+1;
    AlhamdulillahCount.innerText=AlhamdulillahCountInitial;
})


AlhamdulillahDecrement.addEventListener('click', function(){

    if(AlhamdulillahCountInitial===0){
       return alert("Negative mark not allow")
    }
    AlhamdulillahCountInitial= AlhamdulillahCountInitial-1;
    AlhamdulillahCount.innerText=AlhamdulillahCountInitial;
})




AstagfirullahIncrement.addEventListener('click', function(){

    if(AstagfirullahCountInitial===33){
       return alert("Alhamdulillah complete. You can Fill up another one")
    }
    AstagfirullahCountInitial= AstagfirullahCountInitial+1;
    AstagfirullahCount.innerText=AstagfirullahCountInitial;
})


AstagfirullahDecrement.addEventListener('click', function(){

    if(AstagfirullahCountInitial===0){
       return alert("Negative mark not allow")
    }
    AstagfirullahCountInitial= AstagfirullahCountInitial-1;
    AstagfirullahCount.innerText=AstagfirullahCountInitial;
})


resetBtn.addEventListener('click', function(){
    SubhanAllahCountInitial = 0;
    AlhamdulillahCountInitial = 0;
    AstagfirullahCountInitial = 0;

    SubhanAllahCount.innerText=SubhanAllahCountInitial;
    AlhamdulillahCount.innerText=AlhamdulillahCountInitial;
    AstagfirullahCount.innerText=AstagfirullahCountInitial;

})