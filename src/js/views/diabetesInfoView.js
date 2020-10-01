import {elements} from './base'

const diabetesInfoView = (props) => {
    const markup = `
        <h3 class="heading">About Diabetes Panel</h3>
        <p class="para-text">This panel is used to check how much glucose/sugar there is in your blood. Too much blood glucose might indicate diabetes.</p>
    `
    elements.diseaseOverview.insertAdjacentHTML('afterbegin',markup)
}
export default diabetesInfoView