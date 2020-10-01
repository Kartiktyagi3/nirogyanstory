//import the data model
import PatientData from "./js/models/PatientData";

//import the view
import patientDetailView from "./js/views/patientDetailView";
import diabetesInfoView from "./js/views/diabetesInfoView";
import patientResultView from "./js/views/patientResultView";
const controler = () => {
    const patient = new PatientData(1);
    console.log(patient);
    //pass any one array object for the patient details
    if (patient) {
        patientDetailView(patient.diabeties[0]);
        diabetesInfoView();
        patientResultView(patient.diabeties);
    }
};
window.addEventListener("load", event => {
    controler();
});
