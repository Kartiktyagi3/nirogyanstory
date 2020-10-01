//to select the correct element to insert data
export const elements = {
    patientDetails: document.querySelector('.head'),
    diseaseOverview: document.querySelector('.general-info'),
    testResults: document.querySelector('.test-result'),
    factsSection: document.querySelector('.facts')
};
export const profile = {
    green:'bg-green',
    red:'bg-red',
    orange:'bg-orange'
};
export const scaleLine = {
    max:78,
    min:21,
    slope:3.54
};

export const elementStrings ={
    loader:'loader'
}


export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}">
        <svg>
            <use href='img/icons.svg#icon-cw'></use>
        </svg>
    </div>
    `
    parent.insertAdjacentHTML('afterbegin',loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}