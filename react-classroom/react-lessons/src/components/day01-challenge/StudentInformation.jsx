function StudentInformation(props){
    const {studentName, grade, subject} = props
    return (
        <div>
            <p>Student's Name: {studentName} </p>
            <p>Current Grade: {grade} </p>
            <p>Subject: {subject} </p>
        </div>
    );
}

/*function StudentInformation(props){
    const {studentName, grade, subject} = props
    return (
        <div>
            <p>Student's Name: {props.studentName} </p>
            <p>Current Grade: {props.grade} </p>
            <p>Subject: {props.subject} </p>
        </div>
    );
}*/

export default StudentInformation;