function hello(){
    var player1=Math.floor((Math.random()*6)+1);
    var player2=Math.floor((Math.random()*6)+1);
    
    //DICES
    var dices=document.getElementsByClassName("dice");
    for(var i=0;i<6;i++){
        if(player1===Number(dices[i].classList[1])){
            for(var j=0;j<6;j++){
                dices[j].classList.add("displayNone");
            }
            dices[i].classList.remove("displayNone");
        }
    }
    for(var i=6;i<12;i++){
        if((player2+6)===Number(dices[i].classList[1])){
            for(var j=6;j<12;j++){
                dices[j].classList.add("displayNone");
            }
            dices[i].classList.remove("displayNone");
        }
    }
    //WINNER
    var winnerText=document.getElementsByTagName("h1")[0];
    var flag=document.getElementsByClassName("imgBox")[0];
    if(player1>player2){
        flag.classList.remove("displayNone");
        flag.classList.add("orderLeft");
        flag.classList.remove("orderRight");
        winnerText.classList.add("orderRight");
        winnerText.classList.remove("orderLeft");
        winnerText.textContent="Player 1 Wins";

    }else if(player1===player2){
        flag.classList.add("displayNone");
        winnerText.textContent="Draw";
    }else{
        winnerText.classList.remove("orderright");
        winnerText.classList.add("orderLeft");
        winnerText.textContent="Player 2 Wins";
        flag.classList.remove("displayNone");
        flag.classList.remove("orderLeft");
        flag.classList.add("orderRight");
    }

}