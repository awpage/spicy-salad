const dialogs = document.querySelectorAll('dialog');
const dialogTrigger = document.querySelectorAll('.dialog-trigger')


dialogTrigger.forEach((btn) => {
  const parent = btn.parentElement
  const dialog = parent?.querySelector('dialog')
  
  btn.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden')
    dialog?.showModal()
  })
})

dialogs.forEach((dialog) => {
  const closeBtn = dialog.querySelector('button')

  closeBtn?.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden')
    dialog.close()
  })
})