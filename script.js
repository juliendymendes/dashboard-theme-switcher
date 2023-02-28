/*
If there's a need to insert new css variables, it's necessary to add them in cssVariables, add their values ​​in lightModeValues ​​and darkModeValues ​​and then define the value of this new variable according to the toggle selection in applyLightMode and applyLightMode.
*/

const rootElement = document.querySelector(':root')

const cssVariables = {
	backgroundColor: '--background',
	topBackgroundColor: "--top-background",
	textColor: "--text",
	cardBackgroundColor: "--card-background",
	overviewTextColor: "--overview-text",
	instagramCardBg: "--instagram-card-bg",
	cardHoverBg: "--card-hover-bg",
	instagramCardHoverBg: "--instagram-card-hover-bg"
}

const lightModeValues = {
	backgroundColor: 'hsl(0, 0%, 100%)',
	topBackgroundColor: 'hsl(225, 100%, 98%)',
	textColor: 'hsl(230, 17%, 14%)',
	cardBackgroundColor: 'hsl(227, 47%, 96%)',
	overviewTextColor: 'hsl(228, 12%, 44%)',
	instagramCardBg: 'linear-gradient(hsl(227, 47%, 96%), hsl(227, 47%, 96%)) padding-box',
	cardHoverBg: "hsl(227, 20%, 91%)",
	instagramCardHoverBg: "linear-gradient(hsl(227, 20%, 91%), hsl(227, 20%, 91%)) padding-box"
}

const darkModeValues = {
	backgroundColor: 'hsl(230, 17%, 14%)',
	topBackgroundColor: 'hsl(232, 19%, 15%)',
	textColor: 'hsl(0, 0%, 100%)',
	cardBackgroundColor: 'hsl(228, 28%, 20%)',
	overviewTextColor: 'hsl(0, 0%, 100%)',
	instagramCardBg: 'linear-gradient(hsl(228, 28%, 20%), hsl(228, 28%, 20%)) padding-box',
	cardHoverBg: "hsl(228, 26%, 23%)",
	instagramCardHoverBg: "linear-gradient(hsl(228, 26%, 23%), hsl(228, 26%, 23%)) padding-box",
}

const switchElement = document.querySelector('#flexSwitchCheckDefault')

function applyLayout(){
	if(switchElement.checked){
		applyDarkMode()
	}else{
		applyLightMode()
	}
}

function applyLightMode(){
	rootElement.style.setProperty(cssVariables.backgroundColor, lightModeValues.backgroundColor)
	rootElement.style.setProperty(cssVariables.topBackgroundColor, lightModeValues.topBackgroundColor)
	rootElement.style.setProperty(cssVariables.textColor, lightModeValues.textColor)
	rootElement.style.setProperty(cssVariables.cardBackgroundColor, lightModeValues.cardBackgroundColor)
	rootElement.style.setProperty(cssVariables.overviewTextColor, lightModeValues.overviewTextColor)
	rootElement.style.setProperty(cssVariables.instagramCardBg, lightModeValues.instagramCardBg)
	rootElement.style.setProperty(cssVariables.cardHoverBg, lightModeValues.cardHoverBg)
	rootElement.style.setProperty(cssVariables.instagramCardHoverBg, lightModeValues.instagramCardHoverBg)

}

function applyDarkMode(){
	rootElement.style.setProperty(cssVariables.backgroundColor, darkModeValues.backgroundColor)
	rootElement.style.setProperty(cssVariables.topBackgroundColor, darkModeValues.topBackgroundColor)
	rootElement.style.setProperty(cssVariables.textColor, darkModeValues.textColor)
	rootElement.style.setProperty(cssVariables.cardBackgroundColor, darkModeValues.cardBackgroundColor)
	rootElement.style.setProperty(cssVariables.overviewTextColor, darkModeValues.overviewTextColor)
	rootElement.style.setProperty(cssVariables.instagramCardBg, darkModeValues.instagramCardBg)
	rootElement.style.setProperty(cssVariables.cardHoverBg, darkModeValues.cardHoverBg)
	rootElement.style.setProperty(cssVariables.instagramCardHoverBg, darkModeValues.instagramCardHoverBg)
}