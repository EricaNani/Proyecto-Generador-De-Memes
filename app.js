const main = document.getElementById('all-container');
const header = document.getElementById('header');
const navButtones = document.getElementById('navButtons')

        // container imagen del meme
        
const buttonsNav = document.getElementById('buttonsNav');
const buttonImage = document.getElementById('buttonImage');
const buttonText = document.getElementById('buttonText');
const buttonDarkMode = document.getElementById('buttonDarkMode');
const buttonWhitemode = document.getElementById('buttonWhitemode');
const navTittle = document.getElementById('navTittle');

const containerSection = document.getElementById('container-section');
//const containerButtonsNav = document.getElementById('containerButtonsNav');
const topText = document.getElementById('topText');
const centerText = document.getElementById('centerText');
const bottomText = document.getElementById('bottomText');
const aside = document.getElementById('panel');
const sectionPanelImage = document.getElementById('sectionPanelImage');
const controlPanel = document.getElementById('control-panel');
const controlPanelInputUrl = document.getElementById('control-panel-input-url');
const containerFondo = document.getElementById('container-fondo');
const controlPanelFondo = document.getElementById('control-panel.fondo');
const columnsPanel = document.getElementById('columns-panel');
const controlColor = document.getElementById('control-color');
const controlPanelInputColor = document.getElementById('control-panel-input-color');
const columnsPanelBlendmode = document.getElementById('columns-panel-blendmode');
const blendmodeSelect = document.getElementById('blendmode-select');
const controlPanelFilters = document.getElementById('control-panel-filters');
const panelText = document.getElementById('panelText');
const buttonRestore= document.getElementById('buttonRestore');
const tittlePanelInferior = document.getElementById('tittlePanelInferior');
const tittlePanelSuperior = document.getElementById('tittlePanelSuperior');
const tittlePanelFuente = document.getElementById('tittlePanelFuente');
const tittlePanelColor = document.getElementById('tittlePanelColor');
const tittlePanelFondo = document.getElementById('tittlePanelFondo');
const tittlePanelContorno = document.getElementById('tittlePanelContorno');
const tittlePanelEspaciado = document.getElementById('tittlePanelEspaciado');
const tittlePanelInterlineado = document.getElementById('tittlePanelInterlineado');
const tittleValueColor = document.getElementById('tittleValueColor');
const tittleValueFondo = document.getElementById('tittleValueFondo');
// const topCheckTransparent = document.getElementById('topCheckTransparent');
const sinTextoSuperior = document.getElementById('sinTextoSuperior');
const sinTextoInferior = document.getElementById('sinTextoInferior');
const tittlePanelImage = document.getElementById('tittlePanelImage');
const panelTittleUrl = document.getElementById('panelTittleUrl');
const panelTittleFondo = document.getElementById('panelTittleFondo');
const panelTittleFiltros = document.getElementById('panelTittleFiltros');
const tittleBrillo = document.getElementById('tittleBrillo');
const tittleOpacidad = document.getElementById('tittleOpacidad');
const tittleContraste = document.getElementById('tittleContraste');
const tittleDesenfoque = document.getElementById('tittleDesenfoque');
const tittleEscalaGrises = document.getElementById('tittleEscalaGrises');
const tittleSepia = document.getElementById('tittleSepia');
const tittleHue = document.getElementById('tittleHue');
const tittleSaturado = document.getElementById('tittleSaturado');
const tittleNegativo = document.getElementById('tittleNegativo');
const topCheck = document.getElementById('topCheck');
const checkInferior = document.getElementById('checkInferior');
const toptextArea = document.getElementById('toptextArea');
const labelTextArea = document.getElementById('labelTextArea');
const textareaInferior = document.getElementById('textareaInferior');
const fontstyleSelect = document.getElementById('fontstyleSelect');
const fontSize = document.getElementById('fontSize');
const buttonAlignLeft = document.getElementById('buttonAlignLeft');
const buttonAlignCenter = document.getElementById('buttonAlignCenter');
const buttonAlignRight = document.getElementById('buttonAlignRight');
const colorTextInput = document.getElementById('colorTextInput');
const colorBackgroundTextInput = document.getElementById('colorBackgroundTextInput');
const topCheckTransparent = document.getElementById('top-check-transparent');
const contrastSlide = document.getElementById('contrast-slide');
const controlPanelInputColorImage = document.getElementById('controlPanelInputColorImage');
const brightSlide = document.getElementById('bright-slide');
const opacitySlide = document.getElementById('opacity-slide');
const blurSlide = document.getElementById('blur-slide');
const sepiaSlide = document.getElementById('sepia-slide');
const hueSlide = document.getElementById('hue-slide');
const saturateSlide = document.getElementById('saturate-slide');
const negativeSlide = document.getElementById('negative-slide');
const spacingInput = document.getElementById('spacing-input');
const noOutlineButton = document.getElementById('no-outline-button');
const lightOutlineButton = document.getElementById('light-outline-button');
const darkOutlineButton = document.getElementById('dark-outline-button');
// cambio de panel


buttonText.addEventListener('click', () => {
   sectionPanelImage.style.display = 'none';
   panelText.style.display = 'inline' ;
})

buttonImage.addEventListener('click', () => {
    panelText.style.display = 'none';
    sectionPanelImage.style.display = 'inline' ;
 })

 buttonDarkMode.addEventListener('click', () => {
     if(buttonDarkMode.checked) {
        containerSection.style.backgroundColor = '#EEEEEE';
        navButtons.style.backgroundColor = '#E0E0E0';
        buttonsNav.style.backgroundColor = '#E0E0E0';
        navTittle.style.backgroundColor = '#E0E0E0';
        panelText.style.backgroundColor = '#FAFAFA';
        sectionPanelImage.style.backgroundColor = '#FAFAFA';
        panel.style.backgroundColor = '#FAFAFA';
        buttonRestore.style.backgroundColor = '#BDBDBD';
        tittlePanel.style.color = 'black';
        tittlePanelInferior.style.color = 'black';
        tittlePanelSuperior.style.color = 'black';
        tittlePanelFuente.style.color = 'black';
        tittlePanelColor.style.color = 'black';
        tittlePanelFondo.style.color = 'black';
        tittlePanelContorno.style.color = 'black';
        tittlePanelEspaciado.style.color = 'black';
        tittlePanelInterlineado.style.color = 'black';
        navTittle.style.color = 'black';
        tittleValueColor.style.color = 'black';
        tittleValueFondo.style.color = 'black';
        topCheckTransparent.style.color = 'black';
        sinTextoInferior.style.color = 'black';
        sinTextoSuperior.style.color = 'black';
        buttonImage.style.backgroundColor = '#E0E0E0';
        buttonImage.style.color = 'black';
        buttonText.style.backgroundColor = '#E0E0E0';
        buttonText.style.color = 'black';
        buttonDarkMode.style.backgroundColor = '#E0E0E0';
        buttonDarkMode.style.color = 'black';
        tittlePanelImage.style.color = 'black';
        panelTittleUrl.style.color = 'black';
        panelTittleFondo.style.color = 'black';
        panelTittleFiltros.style.color = 'black';
        tittleBrillo.style.color = 'black';
        tittleOpacidad.style.color = 'black';
        tittleContraste.style.color = 'black';
        tittleDesenfoque.style.color = 'black';
        tittleEscalaGrises.style.color = 'black';
        tittleSepia.style.color = 'black';
        tittleHue.style.color = 'black';
        tittleSaturado.style.color = 'black';
        tittleNegativo.style.color = 'black';
        buttonRestore.style.backgroundColor = '#BDBDBD';
        buttonRestore.style.color = 'black';
        topCheckTransparent.style.color = 'white';
       
     }
     else{
        containerSection.style.backgroundColor = '#30343F'
        navButtons.style.backgroundColor = '#191E2B'
        buttonsNav.style.backgroundColor = '#191E2B'
        navTittle.style.backgroundColor = '#191E2B'
        panelText.style.backgroundColor = '#252935'
        sectionPanelImage.style.backgroundColor = '#252935'
        panel.style.backgroundColor = '#252935'
        tittlePanel.style.color = 'white'
        tittlePanelInferior.style.color = 'white'
        tittlePanelSuperior.style.color = 'white'
        tittlePanelFuente.style.color = 'white'
        tittlePanelColor.style.color = 'white'
        tittlePanelFondo.style.color = 'white'
        tittlePanelContorno.style.color = 'white'
        tittlePanelEspaciado.style.color = 'white'
        tittlePanelInterlineado.style.color = 'white'
        navTittle.style.color = 'white'
        tittleValueColor.style.color = 'white'
        tittleValueFondo.style.color = 'white'
        topCheckTransparent.style.color = 'white'
        sinTextoInferior.style.color = 'white'
        sinTextoSuperior.style.color = 'white'
        buttonImage.style.backgroundColor = '#191E2B'
        buttonText.style.backgroundColor = '#191E2B'
        buttonDarkMode.style.backgroundColor = '#191E2B'
        buttonDarkMode.style.color = 'white'
        buttonImage.style.color = 'white'
        buttonText.style.color = 'white'
        tittlePanelImage.style.color = 'white'
        panelTittleUrl.style.color = 'white'
        panelTittleFondo.style.color = 'white'
        panelTittleFiltros.style.color = 'white'
        tittleBrillo.style.color = 'white'
        tittleOpacidad.style.color = 'white'
        tittleContraste.style.color = 'white'
        tittleDesenfoque.style.color = 'white'
        tittleEscalaGrises.style.color = 'white'
        tittleSepia.style.color = 'white'
        tittleHue.style.color = 'white'
        tittleSaturado.style.color = 'white'
        tittleNegativo.style.color = 'white'
        buttonRestore.style.backgroundColor = '#BDBDBD'
        buttonRestore.style.color = 'black'
        topCheckTransparent.style.color = 'black'
     }
 }) ;


 topCheck.addEventListener('click', () => {
    if(topCheck.checked){
       topText.style.display = 'none';
    }else {topText.style.display = 'flex';
           topText.style.justifyContent = 'center';
    }
 });

 checkInferior.addEventListener('click', () => {
    if(checkInferior.checked){
       bottomText.style.display = 'none';
    }else {bottomText.style.display = 'flex';
           bottomText.style.justifyContent = 'center';
         }
 });

 toptextArea.addEventListener ('keyup', () => {
   topText.innerHTML = toptextArea.value;
})

textareaInferior.addEventListener ('keyup', () => {
   bottomText.innerHTML = textareaInferior.value;
});

fontstyleSelect.addEventListener('change', () => {
   topText.style.fontFamily = `${fontstyleSelect.value}`;
   bottomText.style.fontFamily = `${fontstyleSelect.value}`;
})

fontSize.addEventListener('change', () => {
   topText.style.fontSize = `${fontSize.value}px`;
   bottomText.style.fontSize = `${fontSize.value}px`;
})

spacingInput.addEventListener('change', () => {
   topText.style.letterSpacing = `${spacingInput.value}px`;
   bottomText.style.letterSpacing = `${spacingInput.value}px`;
})

buttonAlignLeft.addEventListener('click', () => {
   console.log('buttonAlignLeft')
   topText.style.justifyContent = 'start';
   bottomText.style.justifyContent = 'start';
})

buttonAlignCenter.addEventListener('click', () => {
   topText.style.justifyContent = 'center';
   bottomText.style.justifyContent = 'center';
})

buttonAlignRight.addEventListener('click', () => {
   topText.style.justifyContent = 'flex-end';
   bottomText.style.justifyContent = 'flex-end';
})

colorTextInput.addEventListener('input', () => {
   topText.style.color = `${colorTextInput.value}`;
   bottomText.style.color = `${colorTextInput.value}`
})

colorBackgroundTextInput.addEventListener('input', () => {
   topText.style.backgroundColor = `${colorBackgroundTextInput.value}`;
   bottomText.style.backgroundColor = `${colorBackgroundTextInput.value}`
})

topCheckTransparent.addEventListener('change', () => {
   if(topCheckTransparent.checked){
      topText.style.backgroundColor = 'transparent';
      bottomText.style.backgroundColor = 'transparent';
   } else{
      topText.style.backgroundColor = `${colorBackgroundTextInput.value}`;
      bottomText.style.backgroundColor = `${colorBackgroundTextInput.value}`
   }
})


controlPanelInputUrl.addEventListener('keyup', () => {
   centerText.style.backgroundImage = `url(${controlPanelInputUrl.value})`;
   centerText.style.backgroundSize = 'cover';
})

contrastSlide.addEventListener('change', () => {
   console.log(contrastSlide.value);
   centerText.style.filter = `grayscale(${contrastSlide.value}%)`;
})

brightSlide.addEventListener('change', () => {
   centerText.style.filter = `brightness(${contrastSlide.value}%)`;
})

blurSlide.addEventListener('change', () => {
   centerText.style.filter = `blur(${blurSlide.value}px)`
})

opacitySlide.addEventListener('change', () => {
   centerText.style.filter = `opacity(${opacitySlide.value})`
})

sepiaSlide.addEventListener('change', () => {
   centerText.style.filter = `sepia(${sepiaSlide.value}%)`
})

hueSlide.addEventListener('change', () => {
   centerText.style.filter = `hue-rotation(${hueSlide.value}deg)`
})

saturateSlide.addEventListener('change', () => {
   centerText.style.filter = `saturate(${saturateSlide.value}%)`
})

negativeSlide.addEventListener('change', () => {
   centerText.style.filter = `invert(${negativeSlide.value})`
})


controlPanelInputColorImage.addEventListener('input', () => {
   centerText.style.backgroundColor = `${controlPanelInputColorImage.value}`;
})

buttonRestore.addEventListener('click', (e) => {
   e.preventDefault()
   centerText.style.filter = 'invert(0)';
   centerText.style.filter = 'saturate(0)';
   centerText.style.filter = 'sepia(0)';
   centerText.style.filter = 'blur(0)'
})

const buttonDownload = document.getElementById('buttonDownload');
    const containerButton = document.getElementById('container-button');

    buttonDownload.addEventListener('click', () => {
        descargarImagen();
    })

    const descargarImagen = () => {
        domtoimage.toBlob(containerButton)
        .then(function (blob) {
            saveAs(blob, 'meme.png');
        });
    }

noOutlineButton.addEventListener('click', (e) =>{
   e.preventDefault();
   topText.classList.remove('light-contour');
   topText.classList.remove('dark-contour');
   bottomText.remove('light-contour');
   bottomText.remove('dark-contour');
})

lightOutlineButton.addEventListener('click', (e) =>{
   e.preventDefault();
   topText.classList.add('light-contour');
   topText.classList.add('dark-contour');
   bottomText.remove('light-contour');
   bottomText.remove('dark-contour');
})

darkOutlineButton.addEventListener('click', (e) =>{
   e.preventDefault();
   topText.classList.add('light-contour');
   topText.classList.add('dark-contour');
   bottomText.remove('light-contour');
   bottomText.remove('dark-contour');
})