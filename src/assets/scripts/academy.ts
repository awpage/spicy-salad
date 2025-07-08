const dialogs = document.querySelectorAll('dialog');
const dialogTrigger = document.querySelectorAll('.dialog-trigger')


dialogTrigger.forEach((btn) => {
  const parent = btn.parentElement
  const dialog = parent?.querySelector('dialog')
  
  btn.addEventListener('click', () => {
    dialog?.showModal()
  })
})

dialogs.forEach((dialog) => {
  const closeBtn = dialog.querySelector('button')

  closeBtn?.addEventListener('click', () => {
    dialog.close()
  })
})