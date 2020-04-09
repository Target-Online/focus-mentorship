import React, { useState } from "react";
import { Wizard } from "@patternfly/react-core";

import Steps from "./utils/registration-steps";
import applicationDetailsValidation from "./utils/validations";

const Registration = ({
  userSession,
  setUserSession,
  submitApplication
}) => {
  const [studentDetails, setStudentDetails] = useState({
    surname: userSession.user.LastName,
    firstNames: userSession.user.FirstName,
    idNumber: '',
    residentialAddress: {
      line1: '',
      line2: '',
      line3: '',
      postalCode: ''
    },
    postalAddress: {
      line1: '',
      line2: '',
      line3: '',
      postalCode: ''
    },
    telWork: '',
    telHome: '',
    cell: '',
    fax: '',
    email: userSession.user.Email,
    title: '',
    race: '',
    otherRace: '',
    gender: '',
    disabilitiesOrMedicalConditionAffectStudies: '',
    natureOfDisabilityOrMedicalCondition: '',
  })

  const [marketingDetails, setMarketingDetails] = useState({
    marketingMediaId: '',
    marketingMedia: '',
    marketingMediaGuidanceConsellor: {
      name: '',
      Contact: ''
    }
  })

  const [course, setCourse] = useState({
    Id: '',
    Name: ''
  })

  const [parentOrGuardianDetails, setParentOrGuardianDetails] = useState({
    relationship: '',
    idNumber: '',
    telWork: '',
    telHome: '',
    cell: '',
    email: '',
    residentialAddress: {
      line1: '',
      line2: '',
      line3: '',
      postalCode: '',
    },
    postalAddress: {},
  })

  const [academicHistory, setAcademicHistory] = useState({
    highSchoolRecord: {
      lastHighSchoolAttended: '',
      year: '',
      country: '',
      aggregate: '',
      highSchoolSeniorCertificateId: '',
      highSchoolSeniorCertificate: '',
    },
    tertiaryStudyRecord: {
      tertiaryYear1Record: {
        qualificationDescription: '',
        institution: '',
        totalCredits: '',
        yearsOfStudy: '',
        completedId: '',
        completed: '',
      },
      tertiaryYear2Record: {
        tertiaryYear1Record: {
          qualificationDescription: '',
          institution: '',
          totalCredits: '',
          yearsOfStudy: '',
          completedId: '',
          completed: ''
        },
      },
      tertiaryYear3Record: {
        tertiaryYear1Record: {
          qualificationDescription: '',
          institution: '',
          totalCredits: '',
          yearsOfStudy: '',
          completedId: '',
          completed: ''
        },
      }
    },
  })

  const [declarationDetails, setDeclarationDetails] = useState({
    applicantDeclaration: {
      fullName: '',
      IdorPassportNumber: '',
      applicantSignature: {
        signatureInitials: '',
        date: new Date().toDateString()
      },
      witnessSignature: {
        signatureInitials: '',
        date: new Date().toDateString()
      },
      parentOrGuardianDetailsSignature: {
        signatureInitials: '',
        date: new Date().toDateString()
      }
    },
    benifactorDeclaration: {
      fullName: '',
      idNumber: '',
      signature: {
        signatureInitials: '',
        date: new Date().toDateString()
      }
    }
  })

  const closeWizard = () => setUserSession({
    ...userSession,
    state: {
      ...userSession.state,
      registration: false
    }
  })

  return (
    <React.Fragment>
      <Wizard
        isOpen={userSession.state.registration}
        onSave={() => {
          var validationResults = applicationDetailsValidation(
            {
              studentDetails: studentDetails,
              marketing: marketingDetails,
              course: course,
              parentOrGuardianDetails: parentOrGuardianDetails,
              academicHistory: academicHistory,
              declaration: declarationDetails
            },
            submitApplication
          );
          if (validationResults) {
              setUserSession({
                ...userSession,
                state: {
                  ...userSession.state,
                  registration: false
                },
                inProgress: {
                  ...userSession.inProgress,
                  submitApplication: true
                }
              })
          }
        }}
        onClose={() => closeWizard()}
        title={"Online Registration"}
        description={"Application For Admission"}
        steps={Steps({
          studentDetails: studentDetails,
          setStudentDetails: setStudentDetails,
          marketingDetails: marketingDetails,
          setMarketingDetails: setMarketingDetails,
          course: course,
          setCourse: setCourse,
          parentOrGuardianDetails: parentOrGuardianDetails,
          setParentOrGuardianDetails: setParentOrGuardianDetails,
          academicHistory: academicHistory,
          setAcademicHistory: setAcademicHistory,
          declarationDetails: declarationDetails,
          setDeclarationDetails: setDeclarationDetails
        })}
      />
    </React.Fragment>
  );
};

export default Registration;
