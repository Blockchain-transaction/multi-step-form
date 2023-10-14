const stageOne = document.querySelector('.WrapperOne')
const stageTwo = document.querySelector(".WrapperTwo")
const stageThree = document.querySelector(".WrapperThree")
const stageFour = document.querySelector(".WrapperFour")

const numOne = document.querySelector('.numOne')
const numTwo = document.querySelector('.numTwo')
const numThree = document.querySelector('.numThree')
const numFour = document.querySelector('.numFour')
const btn = document.querySelector('.btn')
const nameDOM = document.querySelector('.name')

const errorMessageOne = document.querySelector('.errorMessageOne')
const errorMessageTwo = document.querySelector('.errorMessageTwo')
const errorMessageThree = document.querySelector('.errorMessageThree')
const nameBorderline = document.querySelector('.nameInput')
const emailBorderline = document.querySelector('.emailInput')
const phoneBorderline = document.querySelector('.phoneInput')

const PageTopic = document.querySelector('PageTopic')
const PageSubTopic = document.querySelector('PageSubTopic')

const form = document.querySelector('.Form')
const secondForm = document.querySelector('.SecondForm')
const Section = document.querySelector('.Section')
const personalInfo = document.querySelector('.personalInfo')

const FirstPlanType = document.querySelector('.FirstPlanType')
const SecondPlanType = document.querySelector('.SecondPlanType')
const ThirdPlanType = document.querySelector('.ThirdPlanType')
const SecondFormBTN = document.querySelector('.SecondFormBTN')

const monthlyToggle = document.querySelector('.monthlyToggle')
const yearlyToggle = document.querySelector('.yearlyToggle')

const AdvancedAmmount = document.querySelector('.Advanced-Ammount')
const ArcadeAmmount = document.querySelector('.Arcade-Ammount')
const ProAmmount = document.querySelector('.Pro-Ammount')

const ThirdForm = document.querySelector('.ThirdForm')
const firstAddOn = document.querySelector('.First-addOn')
const secondAddOn = document.querySelector('.Second-addOn')
const thirdAddOn = document.querySelector('.Third-addOn')
const ammountOnlineService = document.querySelector('.Ammount-OnlineService')
const ammountLargerStorge = document.querySelector('.Ammount-LargerStorge')
const ammountCustomizableProfile = document.querySelector('.Ammount-CustomizableProfile')
const ThirdBtn = document.querySelector('.ThirdBtn-Nxt')
const test = document.querySelector('.test')

const FourthForm = document.querySelector('.FourthForm')
const sumplan = document.querySelector('.sumplan')
const sumAddon = document.querySelector('.sumAddon')
const sumAddonAmmount = document.querySelector('.sumAddonAmmount')
console.log(FourthForm)


let increment = 0
let inFoArray = []
let planSelection = 1
let Plan = []
let ToggleState = true

let length;
let Price = 0;
let Toggle = true

let arcadeID = { planName: "Arcade", id: 1, ammount: 90, duratn: "2 months free" }
let advancedID = { planName: "Advanced", id: 2, ammount: 120, duratn: "2 months free" }
let proID = { planName: "Pro", id: 4, ammount: 150, duratn: "2 months free" }

let preAddOnsArray = []
let AddOnsArray = []
let FirstcheckBox = false
let SecondcheckBox = false
let ThirdcheckBox = false

let firstAddOnArr = { desc: "Online Service", id: 1, Monthlyammount: "$1/mo" }
let secondAddOnArr = { desc: "Larger Storage", id: 2, Monthlyammount: "$2/mo" }
let thirdAddOnArr = { desc: "Customizable Profile", id: 3, Monthlyammount: "$2/mo" }


function Color() {
    let nameValue = document.querySelector('.nameInput').value
    let emailValue = document.querySelector('.emailInput').value
    let phoneValue = document.querySelector('.phoneInput').value

    const nameEmailPhone = nameValue && emailValue && phoneValue

    nameEmailPhone ? increment += 1 : increment = 0

    increment > 3 ? increment = 3 : " "


    if (increment == 0) {
        numOne.style.backgroundColor = '#a3e7fd'
    }
    else {
        numOne.style.backgroundColor = '#a3e6fd00'
    }

    if (increment == 1) {
        numTwo.style.backgroundColor = '#a3e7fd'
    }
    else {
        numTwo.style.backgroundColor = '#a3e6fd00'
    }

    if (increment == 2) {
        numThree.style.backgroundColor = '#a3e7fd'

    }
    else {
        numThree.style.backgroundColor = '#a3e6fd00'
    }

    if (increment == 3) {
        numFour.style.backgroundColor = '#a3e7fd'
    }
    else {
        numFour.style.backgroundColor = '#a3e6fd00'
    }


    inFoArray.push(nameValue, emailValue, phoneValue)

    if (!nameValue) {
        errorMessageOne.style.visibility = 'visible'
        nameBorderline.style.borderColor = '#f1b443'
        increment = 0
    }

    else {
        errorMessageOne.style.visibility = 'hidden'
        nameBorderline.style.borderColor = ''
    }


    if (!emailValue) {
        errorMessageTwo.style.visibility = 'visible'
        emailBorderline.style.borderColor = '#f1b443'
        increment = 0
    }

    else {
        errorMessageTwo.style.visibility = 'hidden'
        emailBorderline.style.borderColor = ''
    }


    if (!phoneValue) {
        errorMessageThree.style.visibility = 'visible'
        phoneBorderline.style.borderColor = '#f1b443'
        increment = 0

    }
    else {
        errorMessageThree.style.visibility = 'hidden'
        phoneBorderline.style.borderColor = ''
    }

    if (nameValue && emailValue && phoneValue) {
        form.style.display = 'none'
        secondForm.style.display = 'flex'
    }

    else {
        form.style.display = 'flex'
        secondForm.style.display = 'none'
    }
}

function ArcadeplanSelection(id) {
    planSelection = id
    Toggle ? Price = 9 : Price = 90
    if (planSelection == arcadeID.id) {
        Plan.push(arcadeID)
        if (Plan.length > 1) {
            Plan.shift(Plan[0])
        }
        FirstPlanType.style.backgroundColor = '#a3e7fd'
        SecondPlanType.style.backgroundColor = ""
        ThirdPlanType.style.backgroundColor = ""
    }
}
function AdvancedplanSelection(id) {
    planSelection = id
    Toggle ? Price = 12 : Price = 120
    if (planSelection == advancedID.id) {
        Plan.push(advancedID)
        if (Plan.length > 1) {
            Plan.shift(Plan[0])
        }
        SecondPlanType.style.backgroundColor = '#a3e7fd'
        FirstPlanType.style.backgroundColor = ""
        ThirdPlanType.style.backgroundColor = ""
    }
}

function ProplanSelection(id) {
    planSelection = id
    Toggle ? Price = 15 : Price = 150
    if (planSelection == proID.id) {
        Plan.push(proID)
        if (Plan.length > 1) {
            Plan.shift(Plan[0])
        }
        ThirdPlanType.style.backgroundColor = '#a3e7fd'
        FirstPlanType.style.backgroundColor = ""
        SecondPlanType.style.backgroundColor = ""
    }
}

function ToggleOne() {
    Toggle = true
    preAddOnsArray = []
    if (Toggle) {
        monthlyToggle.style.backgroundColor = "#fdfdfd"
        monthlyToggle.style.borderColor = "#fdfdfd"
        yearlyToggle.style.backgroundColor = "#373753"
        yearlyToggle.style.borderColor = "#373753"

        ArcadeAmmount.textContent = "$9/mo"
        AdvancedAmmount.textContent = "$12/mo"
        ProAmmount.textContent = "$15/mo"

        ammountOnlineService.textContent = "$1/mo"
        ammountLargerStorge.textContent = "$2/mo"
        ammountCustomizableProfile.textContent = "$2/mo"
    }
}

function ToggleTwo() {
    Toggle = false
    if (!Toggle) {
        monthlyToggle.style.borderColor = "#373753"
        yearlyToggle.style.borderColor = "#fdfdfd"
        monthlyToggle.style.backgroundColor = "#373753"
        yearlyToggle.style.backgroundColor = "#fdfdfd"

        ArcadeAmmount.textContent = "$90/yr"
        AdvancedAmmount.textContent = "$120/yr"
        ProAmmount.textContent = "$150/yr"

        ammountOnlineService.textContent = "$10/yr"
        ammountLargerStorge.textContent = "$20/yr"
        ammountCustomizableProfile.textContent = "$20/yr"

        !Toggle ? firstammount = 10 : ""
        !Toggle ? secondammount = 20 : ""
        !Toggle ? thirdammount = 20 : ""

        firstAddOnArr = { ...firstAddOnArr, ammount: `$${firstammount}/yr` }
        secondAddOnArr = { ...secondAddOnArr, ammount: `$${secondammount}/yr` }
        thirdAddOnArr = { ...thirdAddOnArr, ammount: `$${thirdammount}/yr` }

        if (preAddOnsArray.length < 3) {
            preAddOnsArray.push(firstAddOnArr)
            preAddOnsArray.push(secondAddOnArr)
            preAddOnsArray.push(thirdAddOnArr)
        }
    }
}


function SecondFormNextBtn() {
    if (Plan.length == 1) {
        ThirdForm.style.display = "flex"
        secondForm.style.display = "none"
    }
}


let AdssOne = []
let AdssTwo = []
let AdssThree = []

function PickAddonOne(id) {
    FirstcheckBox = !FirstcheckBox
    if (!AddOnsArray.includes(firstAddOnArr)) {
        AddOnsArray.push(firstAddOnArr)
    }

    if (FirstcheckBox) {
        firstAddOn.style.backgroundColor = "#a3e7fd"
        if (AdssOne.length < 1) {
            AdssOne = [...AdssOne, ...preAddOnsArray]
            AdssOne = AdssOne.filter((arr) => arr.id === id)
        }

    }
    if (!FirstcheckBox) {
        firstAddOn.style.backgroundColor = ""
        AdssOne = AdssOne.filter((arr) => arr.id !== id)
        AddOnsArray = AddOnsArray.filter((arr) => arr.id !== id)
    }
}


function PickAddonTwo(id) {
    SecondcheckBox = !SecondcheckBox
    if (!AddOnsArray.includes(secondAddOnArr)) {
        AddOnsArray.push(secondAddOnArr)
    }

    if (SecondcheckBox) {
        secondAddOn.style.backgroundColor = "#a3e7fd"
        if (AdssTwo.length < 1) {
            AdssTwo = [...AdssTwo, ...preAddOnsArray]
            AdssTwo = AdssTwo.filter((arr) => arr.id === id)
        }
    }

    else {
        secondAddOn.style.backgroundColor = ""
        AdssTwo = AdssTwo.filter((arr) => arr.id !== id)
        AddOnsArray = AddOnsArray.filter((arr) => arr.id !== id)
    }
}


function PickAddonThree(id) {
    ThirdcheckBox = !ThirdcheckBox
    if (!AddOnsArray.includes(thirdAddOnArr)) {
        AddOnsArray.push(thirdAddOnArr)
    }

    if (ThirdcheckBox) {
        thirdAddOn.style.backgroundColor = "#a3e7fd"
        if (AdssThree.length < 1) {
            AdssThree = [...AdssThree, ...preAddOnsArray]
            AdssThree = AdssThree.filter((arr) => arr.id === id)
        }
    }
    else {
        thirdAddOn.style.backgroundColor = ""
        AdssThree = AdssThree.filter((arr) => arr.id !== id)
        AddOnsArray = AddOnsArray.filter((arr) => arr.id !== id)
    }
}



function ThirdBtnNXT() {
    AddOnsArray.ammount = 2
    ThirdForm.style.display = "none"
    FourthForm.style.display = "flex"

    if (preAddOnsArray.length < 1) {
        for (i = 0; i < AddOnsArray.length; i++) {
            let addOnsArr = AddOnsArray[i]
            sumAddon.innerHTML += `<div>${addOnsArr.desc}</div>`
            sumAddonAmmount.innerHTML += `<div>${addOnsArr.Monthlyammount}</div>`
        }
    }

    else {
        for (i = 0; i < AdssOne.length; i++) {
            let Ads = AdssOne[i]
            sumAddon.innerHTML += `<div>${Ads.desc}</div>`
            sumAddonAmmount.innerHTML += `<div>${Ads.ammount}</div>`
        }

        for (i = 0; i < AdssTwo.length; i++) {
            let Ads = AdssTwo[i]
            sumAddon.innerHTML += `<div>${Ads.desc}</div>`
            sumAddonAmmount.innerHTML += `<div>${Ads.ammount}</div>`
        }

        for (i = 0; i < AdssThree.length; i++) {
            let Ads = AdssThree[i]
            sumAddon.innerHTML += `<div>${Ads.desc}</div>`
            sumAddonAmmount.innerHTML += `<div>${Ads.ammount}</div>`
        }
    }


    for (i = 0; i < Plan.length; i++) {
        let Ads = Plan[i]
        sumplan.textContent = `${Ads.planName}${preAddOnsArray.length == 0 ? "(Monthly)" : "(Yearly)"}`
    }
    console.log(AddOnsArray)


}







