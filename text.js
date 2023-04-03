var input = document.querySelector('input'); // input 

var btn = document.querySelector(".addTask > button");
btn.addEventListener('click', addList);

function addList(e) {

    var notCompleted = document.querySelector(".notCompleted");
    var Completed = document.querySelector(".Completed");
    var newLi = document.createElement("li");

    // two check and delete btn  
    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !== ''){
        newLi.textContent = input.value; // any value
        input.value = '';
        notCompleted.appendChild(newLi); // input.value === alaa
        newLi.appendChild(checkBtn); // button 
        newLi.appendChild(delBtn); // button 

        checkBtn.addEventListener('click', function() {
            var parent = this.parentNode;
            parent.remove();
            Completed.appendChild(parent);
            checkBtn.style.display = "none";

        }); 

        delBtn.addEventListener('click', function() {
            var parent = this.parentNode;
            parent.remove();
        }); 
    } 
}


