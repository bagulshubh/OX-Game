
let buttons = document.querySelectorAll('button');
let turn  =1;
let arr = new Array(3);

for(let i = 0;i<3;i++){
    arr[i]=[];
}


function display(r,c,i){

    let content = buttons[i].textContent;
    if(turn % 2 === 0 && content === ""){
        buttons[i].innerHTML = `

        <img src="./assets/o-removebg-preview.png" alt="">

        ` 
        arr[r][c]=0;
        let w = winner();
        if(w===0){
            console.log("o is winner");
        }
        else if(w===1){
            console.log("X is winner");
        }
        
    }
    else if(turn%2!=0 && content===""){
        buttons[i].innerHTML = `
        
        <img src="./assets/x-removebg-preview.png" alt="">

        `
        arr[r][c]=1;
        let w = winner();
        if(w===0){
            console.log("o is winner");
        }
        else if(w===1){
            console.log("X is winner");
        }
    }
    else{
        let flag = 0;
        for(let i = 0;i<buttons.length;i++){
            let temp = buttons[i].textContent;
            if(temp===""){
                flag = 1;
                break;
            }
        }
        if(flag===0){
            let w = winner();
            if(w===0){
                console.log("o is winner");
            }
            else if(w===1){
                console.log("X is winner");
            }
            else{
                console.log("Tie");
            }
        }
        
    }
    turn++;
}

console.log(arr);

function winner(){

    if(arr[0][0]===0 && arr[0][1]===0 && arr[0][2]===0){
        return 0;
    }
    if(arr[0][0]===0 && arr[1][0]===0 && arr[2][0]===0){
        return 0;
    }
    if(arr[2][0]===0 && arr[2][1]===0 && arr[2][2]===0){
        return 0;
    }
    if(arr[0][2]===0 && arr[1][2]===0 && arr[2][2]===0){
        return 0;
    }
    if(arr[0][0]===0 && arr[1][1]===0 && arr[2][2]===0){
        return 0;
    }
    if(arr[0][2]===0 && arr[1][1]===0 && arr[2][0]===0){
        return 0;
    }


    if(arr[0][0]===1 && arr[0][1]===1 && arr[0][2]===1){
        return 1;
    }
    if(arr[0][0]===1 && arr[1][0]===1 && arr[2][0]===1){
        return 1;
    }
    if(arr[2][0]===1 && arr[2][1]===1 && arr[2][2]===1){
        return 1;
    }
    if(arr[0][2]===1 && arr[1][2]===1 && arr[2][2]===1){
        return 1;
    }
    if(arr[0][0]===1 && arr[1][1]===1 && arr[2][2]===1){
        return 1;
    }
    if(arr[0][2]===1 && arr[1][1]===1 && arr[2][0]===1){
        return 1;
    }
    else{
        return -1;
    }
}