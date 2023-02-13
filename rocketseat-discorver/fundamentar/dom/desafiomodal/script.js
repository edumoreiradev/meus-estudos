const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.queruSelector('modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})