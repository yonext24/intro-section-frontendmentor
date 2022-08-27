const featuresBtn = document.querySelector('.features')
const companyBtn = document.querySelector('.company')
const featuresModal = document.querySelector('.mini-modal.one')
const companyModal = document.querySelector('.mini-modal.two')
const iconMobile = document.querySelector('.icon-mobile')
const mobileMenu = document.querySelector('.mobile-menu')


featuresBtn.addEventListener('click', () => {
  featuresModal.classList.toggle('visible')
})
companyBtn.addEventListener('click', () => {
  companyModal.classList.toggle('visible')
})
iconMobile.addEventListener('click', () => {
  mobileMenu.classList.add('visible')
})
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('visible')
})