

new Promise(resolve=>{
    setTimeout(()=>{
        console.log("im am 2nd");
    },3000)
    resolve("i am 1st")
}).then(res=>console.log(res));


