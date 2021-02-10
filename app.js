const main = document.getElementById('all-container')
const header = document.getElementById('header')
const navButtones = document.getElementById('navButtons')

        // container imagen del meme
        
const buttonsNav = document.getElementById('buttonsNav');
const buttonImage = document.getElementById('buttonImage');
const buttonText = document.getElementById('buttonText');
const buttonDarkMode = document.getElementById('buttonDarkMode')
const buttonWhitemode = document.getElementById('buttonWhitemode')
const navTittle = document.getElementById('navTittle')

const containerSection = document.getElementById('container-section')
const containerButtonsNav = document.getElementById('containerButtonsNav')
const topText = document.getElementById('top-text')
const centerText = document.getElementById('center-text')
const bottomText = document.getElementById('bottom-text')
const aside = document.getElementById('panel')
const sectionPanelImage = document.getElementById('sectionPanelImage')
const controlPanel = document.getElementById('control-panel')
const controlPanelInputUrl = document.getElementById('control-panel-input-url')
const containerFondo = document.getElementById('container-fondo')
const controlPanelFondo = document.getElementById('control-panel.fondo')
const columnsPanel = document.getElementById('columns-panel')
const controlColor = document.getElementById('control-color')
const controlPanelInputColor = document.getElementById('control-panel-input-color')
const columnsPanelBlendmode = document.getElementById('columns-panel-blendmode')
const blendmodeSelect = document.getElementById('blendmode-select')
const controlPanelFilters = document.getElementById('control-panel-filters')
const panelText = document.getElementById('panelText')
const buttonRestore= document.getElementById('buttonRestore')

// cambio de panel

// const buttonsNav = document.getElementById('buttonsNav');
// const buttonImage = document.getElementById('buttonImage');
// const buttonText = document.getElementById('buttonText');
// const buttonDarkMode = document.getElementById('buttonDarkmode')
// const aside = document.getElementById('panel')
// const panelText = document.getElementById('PanelText')
// const sectionPanelImage = document.getElementById('sectionPanelImage')



buttonText.addEventListener('click', () => {
   sectionPanelImage.style.display = 'none'
   panelText.style.display = 'inline' 
})

buttonImage.addEventListener('click', () => {
    panelText.style.display = 'none'
    sectionPanelImage.style.display = 'inline' 
 })

 buttonDarkMode.addEventListener('click', () => {
     if(buttonDarkMode.checked) {
        containerSection.style.backgroundColor = '#EEEEEE'
        navButtons.style.backgroundColor = '#E0E0E0'
        buttonsNav.style.backgroundColor = '#E0E0E0'
        navTittle.style.backgroundColor = '#E0E0E0'
        panelText.style.backgroundColor = '#FAFAFA'
        sectionPanelImage.style.backgroundColor = '#FAFAFA'
        panel.style.backgroundColor = '#FAFAFA'
        buttonRestore.style.backgroundColor = '#BDBDBD'

     }
     else{
        containerSection.style.backgroundColor = '#30343F'
        navButtons.style.backgroundColor = '#191E2B'
        buttonsNav.style.backgroundColor = '#191E2B'
        navTittle.style.backgroundColor = '#191E2B'
        panelText.style.backgroundColor = '#252935'
        sectionPanelImage.style.backgroundColor = '#252935'
        panel.style.backgroundColor = '#252935'
     }
 }) 

 

