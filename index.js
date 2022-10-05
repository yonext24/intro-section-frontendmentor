const featuresBtn = document.querySelector('.features')
const featuresSvg = document.querySelector('.link-svg-features')
const companyBtn = document.querySelector('.company')
const companySvg = document.querySelector('.link-svg-company')
const featuresModal = document.querySelector('.mini-modal.one')
const companyModal = document.querySelector('.mini-modal.two')
const iconMobile = document.querySelector('.icon-mobile')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')
const featuresBtnMobile = document.querySelector('.features-mobile')
const companyBtnMobile = document.querySelector('.company-mobile')
const featuresMobile = document.querySelector('.m-features')
const companyMobile = document.querySelector('.m-company')
const modalContent = document.querySelector('.container')

featuresBtn.addEventListener('click', () => {
  featuresModal.classList.toggle('visible')
  featuresSvg.classList.toggle('open')
  if (companyModal.classList.contains('visible')) {
    companyModal.classList.remove('visible')
    companySvg.classList.remove('open')
  }
})
companyBtn.addEventListener('click', () => {
  companyModal.classList.toggle('visible')
  companySvg.classList.toggle('open')
  if (featuresModal.classList.contains('visible')) {
    featuresModal.classList.remove('visible')
    featuresSvg.classList.remove('open')
  }
})
iconMobile.addEventListener('click', () => {
  mobileMenu.classList.add('visible')
  modalContent.classList.add('menu-visible')
})
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('visible')
  modalContent.classList.remove('menu-visible')
})
featuresBtnMobile.addEventListener('click', () => {
  featuresMobile.classList.toggle('visible')
})
companyBtnMobile.addEventListener('click', () => {
  companyMobile.classList.toggle('visible')
})
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('visible')
  modalContent.classList.remove('menu-visible')
})
modalContent.addEventListener('click', e => {
  e.stopPropagation()
})