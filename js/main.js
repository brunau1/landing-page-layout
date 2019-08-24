var itensFirst = [...document.querySelectorAll('.hide-info-first')]
var itensSecond = [...document.querySelectorAll('.hide-info-second')]

function showMoreFirst() {
    itensFirst.forEach(item => {
        item.style.display = 'list-item'
    })
    document.querySelector('#first-link').style.display = 'none'
}

function showMoreSecond() {
    itensSecond.forEach(item => {
        item.style.display = 'list-item'
    })
    document.querySelector('#second-link').style.display = 'none'
}


var sideDiv = document.querySelector('#side-section')
var sideContent = document.querySelector('#side-content')
var arrow = document.querySelector('#arrow')

sideDiv.addEventListener('mouseover', ()=>{
    sideDiv.style.width = '200px';
    sideDiv.style.transition = 'width 0.3s'
    sideContent.style.display = 'flex'
    sideContent.style.justifyContent = 'center'
    sideContent.style.flexWrap = 'wrap'
    arrow.hidden = true
})

sideDiv.addEventListener('mouseout', ()=>{
    sideDiv.style.width = '50px';
    sideDiv.style.transition = 'width 0.3s'
    sideContent.style.display = 'none'
    arrow.hidden = false
})


