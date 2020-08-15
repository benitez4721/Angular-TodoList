

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
})

