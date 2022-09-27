document.querySelector('form').addEventListener('submit', ()=>{
    let valueTask = document.querySelector('.addTask').value
    let alert = document.querySelector('h5')
    let ul = document.querySelector('.list ul')

    if(valueTask == ''){
        alert.style.display = "block"        
    }else{
        alert.style.display = "none"

        let li = document.createElement('li')
        ul.append(li)   
        li.innerHTML = `<p>${valueTask}</p>             
                        <button class="delete">x</button>`
        document.querySelector('.addTask').value = ""

        // delete every task on click
        let btnDelete = document.querySelectorAll('.delete')
        for(let i = 0; i<btnDelete.length; i++){
            btnDelete[i].addEventListener('click', function(){
                alert.style.display = "none"
                this.parentNode.remove()
                let checkli = document.querySelectorAll('.check li')
                let titleCheck = document.querySelector('h3')
                console.log(checkli)

                // if check list is null => delete title "termine"
                if(checkli.length === 0){
                    titleCheck.style.display = 'none'
                }
            })
        }
        
        
        // move checked task and delete task from the list
        let listTask = document.querySelectorAll('li p')
        for(let j = 0; j<listTask.length; j++){
            listTask[j].addEventListener('click', function(){
                alert.style.display = "none"

                let titleCheck = document.querySelector('h6')
                titleCheck.style.display = 'block'
                this.style.textDecoration = 'line-through'
                this.parentNode.remove()
                let check = document.querySelector('.check ul')
                check.append(this.parentNode)
             
            })
        }
    }
})








