const btn = document.getElementById('btn')
console.log(btn)

btn.addEventListener('click', submit);

async function submit(event) {
    try{
        
    event.preventDefault();
    const blog_title = document.getElementById('title').value;
    const blog_author = document.getElementById('author').value;
    const blog_content = document.getElementById('content').value;

    const blog = {
         blog_title,
         blog_author,
         blog_content
    }
    console.log(blog)

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('content').value = "";

   let response = await axios.post('://localhost:5000/blogs/post-blog/dathttpa', blog)
   
    console.log(response)
    showDetails(response.data.blogDetails)

}
catch(err) {
    console.log(err)
}
}


window.addEventListener('DOMContentLoaded', async () => {
    try{
    let response = await axios.get('http://localhost:5000/blogs/get-blogs/data')
   
    console.log(response.data)
    for(let i=0; i<response.data.allData.length; i++){
        showDetails(response.data.allData[i])
    }
}
catch(err){ console.log(err) }

})  



function showDetails(Details){
    const blogInfo = document.getElementById('show')
    const newDiv = document.createElement('div')

    newDiv.innerHTML = `
    
    <ul class="card text-success"  id="target_${Details.id}">
    <li>Title: ${Details.blog_title} </li>
    <li class="text-success">Author: ${Details.blog_author} </li>
    <li class="text-success">Author: ${Details.blog_content} </li>
    <div class="gap-2 mt-2 mb-2 d-flex flex-column">
    <button  class="btn" onclick="deletee('${Details.id}')">Delete Blog</button>
    <li><button class="btn btn-hidden" onclick="showComments('${Details.id}')"></button></li>
    <li>   <div  style="
    display: grid";>
 
    
    <textarea name="post" type="text" class="form-control" id="post_${Details.id}"></textarea>
    <button type="button" class="btn btn-success btn-green" id="btnPost" onclick="postComments('${Details.id}')">Comments Now</button>
 </div><li>
 
    <div id="comment_${Details.id}">
 
    </div>
    </ul>
    `

    blogInfo.appendChild(newDiv)
} 


//comments section code

async function postComments(id) {
    try{
        
    let comment = document.getElementById('post_' +id).value;

    let coment = {
        comments : comment,
        blogId : id
    }
    console.log('line no 9')
    let response = await axios.post('http://localhost:5000/blogs/post-comments',coment)
    
        console.log(response.data.commentsSection)
        //showComments(response.data.commentsSection.id)
        document.getElementById('post_' +id).value = '';
    }
    catch(err)  {
        console.log(err)
    }
}

async function deleteComment(id){
    try{
    let response = await axios.delete(`http://localhost:5000/blogs/delete-comments/${id}`)
   
        console.log(response)
        refresh(id)
    }
    catch(err)  {
        console.log(err)
    }
}       


async function showComments(id) {
    try{
    let response = await axios.get(`http://localhost:5000/blogs/get-comments/${id}`)
    
        console.log('show comment', response)

        const commentId = document.getElementById("comment_" + id)

        let commentUi = `<ul class="text-success comment-ul">`
        for(const item of response.data){

            commentUi = commentUi + `<div class="showComments" id="target_${item.id}">
                        <div> <li class="text-success">
                        ${item.Comments}
                        </li>
                        
                        <div>
                        ${itm.blogComment ? '<li><button class="btn btn-success" onclick="deleteComment(\'' + itm.id + '\')">Delete Comment</button></li>' : '<li class="btn-hidden"><button>Delete Comment</button></li>'}
                       </div> 
                    </div> `

                }
                commentId.innerHTML = commentUi + `</ul>`

    }
    catch(err){ console.log(err)  }
}


