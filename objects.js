// write an literal object who name player 1, has the
 //fields below and a function that is called shoot ()



let player1 = {
    firstName : "Cristiano",
    lastName : " Roaldo",
    age : 38,
    hasKids : true,

    shoot :function () {
        console.log (this.lastName + "shot the ball")
    }
}

console.log(player1.shoot();

