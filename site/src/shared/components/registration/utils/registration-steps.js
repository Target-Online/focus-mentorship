import React from "react";

import StudentDetails from "../sections/student-details/student-details"
import Marketing from "../sections/Marketing";
import Course from "../sections/Course";
import ParentOrGuardianDetails from "../sections/ParentOrGuardianDetails";
import AcademicHistory from "../sections/AcademicHistory";
import DeclarationDetails from "../sections/DeclarationDetails";

const Steps = ({
    studentDetails,
    setStudentDetails,
    marketingDetails,
    setMarketingDetails,
    course,
    setCourse,
    parentOrGuardianDetails,
    setParentOrGuardianDetails,
    academicHistory,
    setAcademicHistory,
    declarationDetails,
    setDeclarationDetails
}) => [
    {
      name: 'Student Details',
      component:
        <StudentDetails
          studentDetails={studentDetails}
          setStudentDetails={setStudentDetails}
        />
    },
    {
      name: 'Marketing',
      component:
        <Marketing
          marketingDetails={marketingDetails}
          setMarketingDetails={setMarketingDetails}
        />
    },
    {
      name: 'Course',
      component:
        <Course
          course={course}
          setCourse={setCourse}
        />
    },
    {
      name: 'Parent / Guardian Details',
      component:
        <ParentOrGuardianDetails
          parentOrGuardianDetails={parentOrGuardianDetails}
          setParentOrGuardianDetails={setParentOrGuardianDetails}
        />
    },
    {
      name: 'Academic History',
      component:
        <AcademicHistory
          academicHistory={academicHistory}
          setAcademicHistory={setAcademicHistory}
        />
    },
    {
      name: 'Declaration (Compulsory)',
      component:
        <DeclarationDetails
          declarationDetails={declarationDetails}
          setDeclarationDetails={setDeclarationDetails}
        />,
      hideCancelButton: true,
      nextButtonText: 'Submit'
    }
  ];

  export default Steps;