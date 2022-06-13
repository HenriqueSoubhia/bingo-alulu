document.addEventListener("DOMContentLoaded", () => {
    let array = ["sor", "require", "MORRA", "ann", "deploy", "sobe no git", "tept", "erro no codigo", "ohhh", "ta certo", "cone", "CRUD", "boostrap", "vitor", "*abraço coletivo*", "senhoras e senhores  e (insira nome aqui)", "ihhhh", "atalhos", "volta no codigo","*olhar medonho*"]

    embaralhar(array)

    criarBox(array[0],0)
    criarBox(array[1],1)
    criarBox(array[2],2)
    criarBox(array[3],3)
    criarBox(array[4],4)
    criarBox(array[5],5)
    criarBox(array[6],6)
    criarBox(array[7],7)
    criarBox(array[8],8)
    criarBox(array[9],9)
    criarBox(array[10],10)
    criarBox(array[11],11)
    criarBox(array[12],12)
    criarBox(array[13],13)
    criarBox(array[14],14)
    criarBox(array[15],15)

    let arrBox = document.querySelectorAll(".box")
    let arrChb = document.querySelectorAll("input")


    for (let i = 0; i < arrBox.length; i++) {
        arrBox[i].addEventListener("click",()=>{
            arrBox[i].classList.toggle("check")
            checkBingo(arrChb)
            console.log(i)
        })
    }


})

function criarBox(content,id) {
    const ficha = document.querySelector("#ficha")

    let box = document.createElement("div")
    let p = document.createElement("p")
    let chb = document.createElement("input")

    box.classList.add("box")
    chb.setAttribute("type","checkbox")
    p.innerHTML = content

    box.appendChild(p)
    box.appendChild(chb)
    ficha.appendChild(box)

    
}

function embaralhar(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkBingo(arr){
    if(arr[0].checked && arr[1].checked && arr[2].checked && arr[3].checked){
        bingo()
    }else if(arr[4].checked && arr[5].checked && arr[6].checked && arr[7].checked){
        bingo()
    }else if(arr[8].checked && arr[9].checked && arr[10].checked && arr[11].checked){
        bingo()
    }else if(arr[12].checked && arr[13].checked && arr[14].checked && arr[15].checked){
        bingo()    
    }else if(arr[0].checked && arr[4].checked && arr[8].checked && arr[12].checked){
        bingo()    
    }else if(arr[1].checked && arr[5].checked && arr[9].checked && arr[13].checked){
        bingo()    
    }else if(arr[2].checked && arr[6].checked && arr[10].checked && arr[14].checked){
        bingo()    
    }else if(arr[3].checked && arr[7].checked && arr[11].checked && arr[15].checked){
        bingo()    
    }else if(arr[0].checked && arr[5].checked && arr[10].checked && arr[15].checked){
        bingo()    
    }else if(arr[3].checked && arr[6].checked && arr[9].checked && arr[12].checked){
        bingo()    
    }
}

function bingo(){
    document.querySelector(".bingo").style.display = "flex"
}