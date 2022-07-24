function fun1(){
    let x =1;
    let y =1;
    let z =1;
    document.getElementById("cam").innerHTML = 
    '<a-scene embedded arjs> <a-marker preset="hiro"> <a-box id="new" position="0 0.5 0" rotation="0 45 0" color="#4CC3D9" scale="1 1 1"> </a-box> </a-marker> <a-entity camera> </a-entity> </a-scene> ';
};

function fun2(){
    document.getElementById("cam").innerHTML = 
    '<a-scene embedded arjs> <a-marker preset="hiro"> <a-sphere id="new" position="0 0.5 0" rotation="0 45 0" color="#4CC3D9" scale="1 1 1"> </a-sphere> </a-marker> <a-entity camera> </a-entity> </a-scene> ';
};

function fun3(){
    document.getElementById("cam").innerHTML = 
    '<a-scene embedded arjs> <a-marker preset="hiro"> <a-cylinder id="new" position="0 0.5 0" rotation="0 45 0" color="#4CC3D9" scale="1 1 1"> </a-cylinder> </a-marker> <a-entity camera> </a-entity> </a-scene> ';
};

function fun4(){
    document.getElementById("new").scale = '1.5 1.5 1.5';
};