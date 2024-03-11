window.onload = function(){


    let addSubjectBtn = document.getElementById('add-subjects');
    addSubjectBtn.onclick = function(){
       
        
        // Create Div

        let div = document.createElement('div');
        div.id = 'horizontal';

        // Create Subject

        let subject = document.createElement('input');
        subject.name='subject';
        subject.type= 'text';
        subject.placeholder = 'Subject';

        //  Create FullMarks

        let fullMarks = document.createElement('input');
        fullMarks.name= 'fullMarks';
        fullMarks.type = 'number';
        fullMarks.placeholder = 'Full Marks';
        
       

        //  Create Obtained Marks

        let obtainedMarks = document.createElement('input');
        obtainedMarks.name= 'obtainedMarks';
        obtainedMarks.type='number';
        obtainedMarks.placeholder = 'Obtained Marks';
        obtainedMarks.className = 'obtained-marks';



        // Create Delete
let deleteButton = document.createElement('Button');
deleteButton.innerHTML = 'delete';
deleteButton.type = 'button';

        // Create add inside div

        div.append(subject);
        div.append(fullMarks);
         div.append(obtainedMarks);
        div.append(deleteButton);





        // create div in form

        let form = document.getElementById('dynamic-area');
        form.append(div);


        // Create Subject

 let subjectTr = document.createElement('tr');
   subjectTr.style.textAlign = 'center';

// Subject Td
let subjectTd = document.createElement('td');
subjectTd.setAttribute('colspan','2')

// Fullmarks td

let fullMarksTd = document.createElement('td');
fullMarksTd.innerHTML = '100';
 fullMarksTd.className = 'full-mmarkss';


let obtainedMarksTd = document.createElement('td');
obtainedMarksTd.setAttribute('colspan','2')


// Subject Inside 
subjectTr.append(subjectTd);
subjectTr.append(fullMarksTd);
subjectTr.append(obtainedMarksTd );



let tBody = document.getElementById('tBody');
tBody.append(subjectTr);




// live preview subject
subject.oninput = function(){
  subjectTd.innerHTML = subject.value;
}

fullMarks.oninput = function(){
  
  fullMarksTd.innerHTML = this.value;
  
  
}




obtainedMarks.oninput= function(){
  let totalMarks = 0;
obtainedMarksTd.innerHTML = this.value;
let obm = document.getElementsByClassName('obtained-marks');
for(i=0; i<obm.length;i++){

  let num = Number(obm[i].value);

  totalMarks = totalMarks+num;
}
let totalMarksTd = document.getElementById('total-marks');
totalMarksTd.innerHTML = totalMarks;

let noOfSubject = obm.length;
let percentage = parseInt(totalMarks/noOfSubject);
let percentageTd = document.getElementById('percentage-marks');
percentageTd.innerHTML = percentage+'%';

let grade = '';
if(percentage > 90) grade = 'A+';
else if(percentage > 80) grade = 'A';
else if(percentage > 70) grade = 'B';
else if(percentage > 60) grade = 'C';
else if(percentage > 50) grade = 'D';
else grade = 'fail';

let gradeTd = document.getElementById('grade-marks');
gradeTd.innerHTML = grade;
 
}

        // Delete Button
        deleteButton.onclick = function(){
          div.remove();
          subjectTr.remove();
        }





    }


    // Preview Student

  
  let studentPicInfo = document.getElementById('student-pic-info');
    studentPicInfo.onchange = function(){
      let file = this.files[0];
       let url = URL.createObjectURL(file);
       let studentPic = document.getElementById('student-pic');
       studentPic.src = url;
      
    }

    // Preview School

    let schoolLogoInput = document.getElementById('school-pic-info');

    schoolLogoInput.onchange = function(){
      let schoolInput = this.files[0];
      let school = URL.createObjectURL(schoolInput);
      let schoolPic = document.getElementById('school-pic');
      schoolPic.src = school;

    }


    let schoolName = document.getElementById('school-name-input');
    schoolName.oninput = function(){
      let schoolNameInput = document.getElementById('school-name');
      schoolNameInput.innerHTML = schoolName.value;
    }

    
    let schoolNameText = document.getElementById('school-name-text');
    schoolNameText.oninput = function(){
      let schoolNameTe = document.getElementById('school-text');
      schoolNameTe.innerHTML = schoolNameText.value;
    }

    let studentNameText = document.getElementById('student-name-text');
    studentNameText.oninput = function(){
      let studentName = document.getElementById('student-name');
      studentName.innerHTML = studentNameText.value;
    }


    let fatherNameText = document.getElementById('father-name-text');
    fatherNameText.oninput = function(){
      let fatherName=document.getElementById('father-name');
      fatherName.innerHTML=fatherNameText.value;
    }

// dob live preview
    let date = document.getElementById('dob-input');
    date.onchange = function(){
      let dob = document.getElementById('dob');
      dob.innerHTML = this.value;
    }

    // gender preview

    let genderInput = document.getElementById('choose-gender');
    genderInput.onchange = function(){
      let gender = document.getElementById('gender');
      gender.innerHTML = this.value;
    }

    // CLASS LEVE PREVIEW

    let classInput = document.getElementById('class-input');
    classInput.oninput = function(){
      let classI = document.getElementById('class');
      classI.innerHTML = this.value;
    }

//  ROLL LIVE PREVIEW
    
let rollInput = document.getElementById('roll-input');
rollInput.oninput = function(){
  let roll = document.getElementById('roll');
  roll.innerHTML = this.value;
} 




}







