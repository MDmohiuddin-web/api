// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response))
//     //   .then(json => console.log(json))



    //   document.getElementById('text').style.color = 'red';



    function fetchteste(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> {return res.json()})
        .then (data => loopiest(data));
    }


    function loopiest(data){
       const ul= document.getElementById('user-list');
        for(let user  of data){
            // console.log(user.email);
            console.log(user.name);
            
            const  li = document.createElement("li");
            // li.innerText=user.email;
            li.innerText=user.name;
            ul.appendChild(li);
            
           
        }





       
    }
