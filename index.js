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
        console.log("else block 1")
        li.textContent = note
        console.log(li.textContent)
        li.style.color = color
        li.style.fontSize = size+"px";
        ul.appendChild(li)
        console.log("else block 2")
        document.getElementById('fontSize').value="";
        document.getElementById('notes').value="";
    }
   }
}