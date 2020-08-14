

window.addEventListener('load', function(){

    let tasks = document.getElementById('tasks')
    let teams = document.getElementById('teams')
    let input_container = document.getElementById('input-container')
    let line_input_container = document.getElementById('line')
    let input_task = document.getElementById('input-task')
    let input_task_selected = false
    let scroll_container = document.getElementById('second-container')
    
    tasks.addEventListener('click', (e) => {
        e.preventDefault()
        teams.style.borderBottom = '2px solid transparent'
        tasks.style.borderBottom = '2px solid #4169E1'
    });
    
    teams.addEventListener('click', (e) => {
        e.preventDefault()
        tasks.style.borderBottom = '2px solid transparent'
        teams.style.borderBottom = '2px solid #4169E1'
    });

    input_container.addEventListener('mouseover', ()=>{
        if(!input_task_selected){
            line_input_container.style.background = 'rgb(133, 132, 132)'
        }
    });

    input_container.addEventListener('mouseleave', ()=>{
        if(!input_task_selected){
            line_input_container.style.background = 'rgb(179, 178, 178)'
        }
    });

    input_task.addEventListener('focusin', ()=>{
        input_task_selected = true
        line_input_container.style.background = '#4169E1'
        console.log("aqui");
    })

    input_task.addEventListener('focusout', ()=>{
        input_task_selected = false
        line_input_container.style.background = 'rgb(179, 178, 178)'
    })

    
})

