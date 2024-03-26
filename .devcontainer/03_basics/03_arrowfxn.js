

const user = {
    username : "Sanju",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this is refering current context
    }

}
