let dark_mode = true
let tabIsRevealed = false
let mouseInHeader = false

let light_mode_button = document.getElementById('light_mode_button')
let header = document.getElementById('header')
let headerDiv = document.getElementById("header_div")
let headerSeparator = document.getElementById('header_separator')

let cardsButton = document.getElementById('cards_button')
let tradeButton = document.getElementById('trade_button')
let storeButton = document.getElementById('store_button')
let contactsButton = document.getElementById('contacts_button')
let tabsContainer = document.getElementById('tabs')
let cardTab = document.getElementById('card_tab')
let tradeTab = document.getElementById('trade_tab')
let storeTab = document.getElementById('store_tab')
let contactsTab = document.getElementById('contacts_tab')

let headline = document.getElementById('headline')
let headlineGradient = document.getElementById('headline_intro')
let headlineText = document.getElementById('headline_text')
let getStartedButton = document.getElementById('get_started_button')

let cardsDiv = document.getElementById('character_cards_div')
let cardsHeadline = document.getElementById('character_cards_headline')
let frodoCard = document.getElementById('frodo_card')
let frodoButton = document.getElementById('frodo_button')
let gandalfCard = document.getElementById('gandalf_card')
let gandalfButton = document.getElementById('gandalf_button')
let aragornCard = document.getElementById('aragorn_card')
let aragornButton = document.getElementById('aragorn_button')
let gollumCard = document.getElementById('gollum_card')
let gollumButton = document.getElementById('gollum_button')
let witchKingCard = document.getElementById('witch_king_card')
let witchKingButton = document.getElementById('witch_king_button')
let gothmogCard = document.getElementById('gothmog_card')
let gothmogButton = document.getElementById('gothmog_button')

let footerDiv = document.getElementById("footer_div")
let newsletterInput = document.getElementById('newsletter_input')
let xIcon = document.getElementById('x_icon')

let blackAndWhiteDivs = [headerDiv, footerDiv]
let tabButtons = [cardsButton, tradeButton, storeButton, contactsButton]
let tabList = [cardTab, tradeTab, storeTab, contactsTab]
let yellowText = [headerSeparator, headlineText, cardsHeadline]
let heroCards = [frodoCard, gandalfCard, aragornCard]
let heroButtons = [frodoButton, gandalfButton, aragornButton]
let villainCards = [gollumCard, witchKingCard, gothmogCard]
let villainButtons = [gollumButton, witchKingButton, gothmogButton]

light_mode_button.addEventListener('click', function(){
    if (dark_mode) {
        this.src = "Light_mode_button.png"
        dark_mode = false
    } else {
        this.src = "dark_mode_button.png"
        dark_mode = true
    }

    blackAndWhiteDivs.forEach(function (div) {
        div.classList.toggle('light_mode_for_black_and_white')
    })

    tabButtons.forEach(function (button) {
        button.classList.toggle('light_mode_for_black_and_white_buttons')
    })

    tabList.forEach(function (tab){
        tab.classList.toggle('light_mode_tabs')
    })

    yellowText.forEach(function(text){
        text.classList.toggle('light_mode_yellow_text')
    })

    heroCards.forEach(function(card) {
        card.classList.toggle('light_mode_hero_card')
    })

    heroButtons.forEach(function(button) {
        button.classList.toggle('light_mode_hero_button')
    })

    villainCards.forEach(function(card) {
        card.classList.toggle('light_mode_villain_card')
    })

    villainButtons.forEach(function(button){
        button.classList.toggle('light_mode_villain_button')
    })

    headline.classList.toggle('light_mode_headline')

    headlineGradient.classList.toggle('light_mode_gradient_headline')

    getStartedButton.classList.toggle('light_mode_get_started')
    
    cardsDiv.classList.toggle('light_mode_cards_gradient')

    newsletterInput.classList.toggle('light_mode_newsletter')
    
    xIcon.classList.toggle('light_mode_x_icon')
})

function tabReveal(index) {

    if (!tabIsRevealed) {
        tabIsRevealed = true
        tabList.forEach(function (tab){
        if (tabList.indexOf(tab) == index) {
            tab.classList.add('tab_reveal')
        }
    })
    } else {
       tabList.forEach(function (tab){
        tab.classList.remove('tab_reveal')
       }) 
       tabList.forEach(function(tab) {
        if (tabList.indexOf(tab) == index) {
            tab.classList.add('tab_reveal')
        }
       })
    }
}

function closeAllTabs() {
    tabIsRevealed = false
    tabList.forEach(function(tab) {
        tab.classList.remove('tab_reveal')
    })
}

header.addEventListener('mouseleave', function(){
    console.log('mouseleave')
    closeAllTabs()
})






