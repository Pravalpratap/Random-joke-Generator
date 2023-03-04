console.log("hello1")
const jokes = document.querySelector('#joke');

const jokeBtn = document.getElementById("jokebtn")
console.log(jokeBtn)


const generateJokes = () => {

    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/',setHeader)
        .then((res) => res.json() )
        .then((data)=>{
            jokes.innerHTML=data.joke;
        }).catch((error) => {
            (error);
        });


}

// const generateJokes = async () => {

//     try {
//         const setHeader = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//         const res = await fetch('https://icanhazdadjoke.com/', setHeader)
//         console.log(res);
//         const data = await res.json();
//         jokes.innerHTML = data.joke;


//     }
//     catch(err){
//         console.log(`the error is ${err}`);
//     }
    
// }



jokeBtn.addEventListener('click', generateJokes);
generateJokes();