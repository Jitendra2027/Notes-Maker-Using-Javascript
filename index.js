function saveNote(){
    // console.log("function called")
    var size = document.getElementById('fontSize').value
    var note = document.getElementById('notes').value
    document.getElementById('errorMsg').innerText=""
   if(note=='')
   {
    document.getElementById('errorMsg').innerText="Please Enter a Note..."
   }
   else
   {
    if(isNaN(size) || size=='')
    {
        document.getElementById('errorMsg').innerText="Please Enter a Valid Font Size..."
    }
    else
    {
        let color = document.getElementById('color').value
        // target the unordered list to add child list elements in it
        let ul = document.getElementById('noteList')
        let li = document.createElement('li')
       
        li.textContent = note
        li.style.color = color
        li.style.fontSize = size+"px";

        let a = document.createElement('a')
        a.href = "javacript:void(0)"
        a.textContent = "X"
        li.appendChild(a)
        ul.appendChild(li)

        document.getElementById('fontSize').value="";
        document.getElementById('notes').value="";
    }
   }
   let btn=document.querySelector('a');
   btn.addEventListener('click',function(e){
    // let ul = document.getElementById('noteList');
    let li=e.target.parentNode;
    li.remove();
   });
}
