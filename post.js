

function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>posteliment(data));
}


function posteliment(posts){

    const  postcontinar = document.getElementById('post-continar');
    
    for(let post of posts){
    const postdiv=document.createElement("div");
    postcontinar.classList.add('post');
    console.log(post);
    postdiv.innerHTML=`
        <h4>user :${post.userId}</h4>
        <h5>post title :  ${post.title}</h5>
        <p> post description :${post.body}</p>
    `;
    postcontinar.appendChild(postdiv);
}



}


post()