import data from "./data/data";
//Names of test to look for in the searchfield
//defining it here makes it unreachable from other modules
const diabetiesSearchString = ["Blood Sugar Fasting", "Random Blood Glucose", "Glucose in Urine", "HbA1C (Glycosylated haemoglobin)", "Estimated Average Plasma Glucose"];

class PatientData {
    constructor(id) {
        this.parseDiabeties(data[`sample${id}`]);
    }
    //get data for that is diabeties related
    parseDiabeties(dataArray) {
        //creates a diabeties array where the diabetiesSearchString elements
        // are present as object properties TestName or PackageProfileName
        this.diabeties = dataArray.filter(ele => {
            return diabetiesSearchString.includes(ele.TestName) || diabetiesSearchString.includes(ele.PackageProfileName);
        });
    }
}

export default PatientData;
