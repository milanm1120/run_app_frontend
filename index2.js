let userComment = document.getElementById("user-comments-div");
let commentInput = document.getElementById("user-comments-input");
const userSubmit = document.getElementById("user-comments-submit");

        userSubmit.addEventListener('click', handleClick)
        
        function handleClick(e){
            e.target.innerText === "Submit"
            e.preventDefault();
            console.log("submit clicked")
            updateComment();
        }

        function updateComment(){
            userComment.innerHTML = commentInput.value;
            // debugger
        }