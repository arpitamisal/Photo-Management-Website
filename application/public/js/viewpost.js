function addNewComment(data){
    let commentList = document.getElementById('comment-list');
    let newComment = document.createElement('template');
    newComment.innerHTML= `<div id="message-${data.commentId}" class="comment">
    <strong class="comment-author">${data.username} </strong>
    <span class="comment-date">${new Date().toLocaleString("en-US",{
        timeStyle:"medium",
        dateStyle:"short"})}</span>
    <div class="comment-text">${data.comment}</div>
</div>`;
    commentList.append(newComment.content);
    document.getElementById(`message-${data.commentId}`).scrollIntoView();
}

document.getElementById('comment-button')
.addEventListener('click', function(ev){
    console.log("inside this")
    let commentTextElement = document.getElementById('comment-text');
    let commentText = commentTextElement.value;
    let postId = ev.currentTarget.dataset.postid;

    if(!commentText) return;


    fetch("/comments/create", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            comment: commentText,
            postId: postId
        })

    })
    .then(response => response.json())
    .then(res_json => {
        addNewComment(res_json.data);
    })
}) ;



// select c.id, c.text, c.createdAt, u.username FROM comments c JOIN users u ON c.fk_authorId=u.id WHERE fk_postId=?;