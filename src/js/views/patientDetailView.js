import { elements } from "./base";

const dateFormat = date => date.slice(0, 10);
//will render the details of the patient pass in

//returns gender string if present else removes it from the view
const patientGenderString = gender => {
    if (gender) {
        return `${gender},`;
    }
    return "";
};

//display the top patient details name etc
const patientDetailView = props => {
    console.log(props);
    const markup = `
                <span class="heading-main">Diabetes Monitoring</span>
                <div class="patient-details">
                    <ul>
                        <li>Patient</li>
                        <li><span class="item">${props.PName}</span></li>
                        <li><span class="item">${patientGenderString(props.Gender)}${parseInt(props.Age)} years old</span></li>
                        <li>DATE:<span class="item">${dateFormat(props.ApprovedDate)}</span></li>
                        <li>ref by:<span class="item">${props.DocterName}</span></li>
                        <li>Package Name:<span class="item">${props.PackageProfileID}</span></li>
                        <li>Others Placeholde</li>
                    </ul>
                </div>
    `;
    elements.patientDetails.insertAdjacentHTML("beforeend", markup);
};

export default patientDetailView;
