const featuresBtn = document.querySelector('.features')
const companyBtn = document.querySelector('.company')
const featuresModal = document.querySelector('.mini-modal.one')
const companyModal = document.querySelector('.mini-modal.two')
const iconMobile = document.querySelector('.icon-mobile')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')
const featuresBtnMobile = document.querySelector('.features-mobile')
const companyBtnMobile = document.querySelector('.company-mobile')
const featuresMobile = document.querySelector('.m-features')
const companyMobile = document.querySelector('.m-company')


featuresBtn.addEventListener('click', () => {
  featuresModal.classList.toggle('visible')
})
companyBtn.addEventListener('click', () => {
  companyModal.classList.toggle('visible')
})
iconMobile.addEventListener('click', () => {
  mobileMenu.classList.add('visible')
})
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('visible')
})
featuresBtnMobile.addEventListener('click', () => {
  featuresMobile.classList.toggle('visible')
})
companyBtnMobile.addEventListener('click', () => {
  companyMobile.classList.toggle('visible')
})
