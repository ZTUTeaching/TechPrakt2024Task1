document.addEventListener("click", function (event) {
    if(event.target.className === "post"){
        let Post = document.querySelector(".selected");
        if(Post!== null){
            Post.className = "post";
        }
        event.target.className = "selected";
    }
    else if(event.target.className === "selected"){
        event.target.className = "post";
    }
    else {
        let Post = document.querySelector(".selected");
        if(Post!== null){
            Post.className = "post";
        }
    }
})