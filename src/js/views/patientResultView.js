import {elements,profile,scaleLine} from './base'

//render the heading for the results
const renderResultHeader = () =>{
    const markup = `<h3 class="heading">Your Results</h3>`
    elements.testResults.insertAdjacentHTML('afterbegin',markup)
}

//-1 below normal , 0 safe , 1 above normal
const checkResult = (patientData) =>{
    if (parseInt(patientData.TestResultValue)<parseInt(patientData.TestParameterMinRangeValue)){
        return -1
    } else if (parseInt(patientData.TestResultValue)>parseInt(patientData.TestParameterMaxRangeValue)){
        return 1
    }
    return 0
}

//display the current condition string based on checkresult value
const stringStatus =(resultValue) =>{
    if (resultValue === 0) {
        return 'Normal'
    }
    else if (resultValue > 0){
        return 'High'
    }else {
        return 'Low'
    }
}

//returns the corrent assignment for status color
const visualStatus = (resultValue) =>{
    if (resultValue===0){
        return assignBackgroundColor('green')
    } 
    return assignBackgroundColor('red')
}
//returns css class with the desired bg-color
const assignBackgroundColor = ele => {
    return profile[ele]
}

//map the current result value to the status of the test
const showStatus = resultValue => {
    const string = stringStatus(resultValue)
    const bg_color = visualStatus(resultValue)
    return `
    <span class="item-indicator"><span class="circle ${bg_color}"></span>${string}</span>
    `
}

//positions the pointer based on the data value of person
const resultScale = patientData =>{
    const resValue = parseInt(patientData.TestResultValue)
    const minVal = parseInt(parseInt(patientData.TestParameterMinRangeValue)*0.5)
    const maxVal = parseInt(parseInt(patientData.TestParameterMaxRangeValue)*1.5)
    let scaleValue = (resValue-minVal)/(maxVal-minVal)
    console.log(scaleValue)
    scaleValue = scaleLine.min+(scaleLine.max-scaleLine.min)*scaleValue
    console.log(scaleValue)
    if (scaleValue < scaleLine.min){
        return scaleLine.min
    }
    if (scaleValue > scaleLine.max){
        return scaleLine.max
    }
    console.log(scaleValue)
    return parseInt(scaleValue)
}

//render each of the results
//passed as the callback function over the elements
const renderResults = (patientData) =>{
    const resultValue = checkResult(patientData)
    const markup =`
        <div class="result-items">
        <div class="result-item">
            <div class="result-item-header">
                <div class="main-heading">
                    <span>${patientData.TestName} : ${patientData.TestResultValue}</span>
                    ${showStatus(resultValue)}
                </div>
                <span>subheading</span>
            </div>
            <p class="para-text">The most common test in this panel is HbA1c - "Hb" stands for haemoglobin and "A1c" is one of the different forms of haemoglobin. This test tells you how much glucose there was in your blood in the last 2-3 months.</p>
            <div class="visual-indicator">
                <span class="indicator indicator-left bg-red">${patientData.TestParameterMinRangeValue} &lt</span>
                <span class="indicator indicator-mid bg-green">Healthy</span>
                <span class="indicator indicator-right bg-red">&gt${patientData.TestParameterMaxRangeValue}</span>
                <div class="person-reading" style="left:${resultScale(patientData)}%">
                    <span class="person-reading-text">You-${patientData.TestResultValue}</span>
                </div>
            </div>
            <p class="para-text">One of the ways to control and reduce your HbA1c level - is to change your diet. Generally, foods that are high in carbs increase your blood sugar signicantly. Also, foods that are high in ber keep your glucose level in check. Additionally, keeping your portion sizes small could prevent sharp rises in your blood sugar.</p>
        </div>
    `
    elements.testResults.insertAdjacentHTML('beforeend',markup)
}
//function to display all items
const patientResultView = (patientDataArray) => {
    renderResultHeader()
    patientDataArray.forEach(element => {
        renderResults(element)
    });
}

export default patientResultView