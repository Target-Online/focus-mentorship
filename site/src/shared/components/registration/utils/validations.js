import { toast } from "react-toastify";

export const applicationDetailsValidation = (
    applicationDetails,
    submitApplication
) => {
    if(!studentDetailsValidation(applicationDetails.studentDetails)){
        return false;
    }
    else if(applicationDetails.marketing.marketingMediaId == '') {
        toast.error("Marketing: Marketing media not selected.");
        return false;
    }
    else if(applicationDetails.course.Id == '') {
        toast.error("Couse: Course not selected.");
        return false;
    }
    else if (!parentOrGuardianDetailsValidation(applicationDetails.parentOrGuardianDetails)){
        return false;
    }
    else if(!declarationDetailsValidation(applicationDetails.declaration)) {
        return false;
    }
    
    submitApplication.execute(applicationDetails);

    return true
    
}

const studentDetailsValidation = (
    studentDetails
) => {
    if(studentDetails.idNumber == '') {
        toast.error("Student details: Please enter ID number.");
        return false;
    }
    else if(studentDetails.cell == '') {
        toast.error("Student details: Please enter Cell number.");
        return false;
    }
    else if(studentDetails.title == '') {
        toast.error("Student details: Please enter title.");
        return false;
    }
    else if(studentDetails.race == '') {
        toast.error("Student details: Please select race.");
        return false;
    }
    else if(studentDetails.gender == '') {
        toast.error("Student details: Please select gender.");
        return false;
    }
    else if(studentDetails.disabilitiesOrMedicalConditionAffectStudies == '') {
        toast.error("Student details: Please provide info on disabilities.");
        return false;
    }
    return true
    
}

const parentOrGuardianDetailsValidation = (
    parentOrGuardianDetails
) => {
    if(parentOrGuardianDetails.relationship == '') {
        toast.error("Parent/Guardian: Please select relationship.");
        return false;
    }
    else if(parentOrGuardianDetails.idNumber == '') {
        toast.error("Parent/Guardian: Please provide ID number.");
        return false;
    }
    else if(parentOrGuardianDetails.cell == '') {
        toast.error("Parent/Guardian: Please provide cell number.");
        return false;
    }
    
    return true
    
}

const declarationDetailsValidation = (
    declarationDetails
) => {
    if(declarationDetails.applicantDeclaration.fullName == '') {
        toast.error("Declaration: Please enter applicant full name.");
        return false;
    }
    else if(declarationDetails.applicantDeclaration.IdorPassportNumber == '') {
        toast.error("Declaration: Please enter applicant ID/passport number.");
        return false;
    }
    else if(declarationDetails.applicantDeclaration.applicantSignature.signatureInitials == '') {
        toast.error("Declaration: Please enter applicant signature initials.");
        return false;
    }
    else if(declarationDetails.applicantDeclaration.witnessSignature.signatureInitials == '') {
        toast.error("Declaration: Please enter applicant witness signature initials.");
        return false;
    }
    else if(declarationDetails.applicantDeclaration.parentOrGuardianDetailsSignature.signatureInitials == '') {
        toast.error("Declaration: Please enter applicant parent/guardian signature initials.");
        return false;
    }
    else if(declarationDetails.benifactorDeclaration.fullName == '') {
        toast.error("Declaration: Please benifactor enter full name.");
        return false;
    }
    else if(declarationDetails.benifactorDeclaration.idNumber == '') {
        toast.error("Declaration: Please enter benifactor ID/passport number.");
        return false;
    }
    else if(declarationDetails.benifactorDeclaration.signature.signatureInitials == '') {
        toast.error("Declaration: Please enter benifactor signature initials.");
        return false;
    }
    return true
    
}

export default applicationDetailsValidation;
