import{useEffect,useState}from'react';
importNavbarfrom'./components/Navbar';
importHomePagefrom'./pages/HomePage';
importStudentsPagefrom'./pages/StudentsPage';
importStudentFormPagefrom'./pages/StudentFormPage';
import './App.css';
//Thisisthenameusedtosaveourstudent list inthebrowser.
constSTORAGE_KEY='student-management-students';
functionApp(){
//Readsavedstudentswhentheappstarts. If therearenone,useanemptylist.
const [students,setStudents]=useState(()=>{
constsavedStudents=localStorage.getItem(STORAGE_KEY);
returnsavedStudents?JSON.parse(savedStudents): [];
});
//Keepthebrowser'ssavedcopyinsyncwheneverthelistchanges.
useEffect(()=>{
localStorage.setItem(STORAGE_KEY,JSON.stringify(students));
}, [students]);
//TheURLpathtellsuswhichsimplepagetodisplay.
constpath=window.location.pathname;
consteditMatch=path.match(/^\/edit\/([^/]+)$/);
conststudentToEdit=editMatch
?students.find((student)=>student.id===editMatch[1])
:null;
//Addauniqueid,savethenewlist, thenshowthestudentspage.
functionaddStudent(studentDetails){
constupdatedStudents=[
...students,
{...studentDetails, id:Date.now().toString()},
];
localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedStudents));
setStudents(updatedStudents);
window.location.href='/students';
}
//Replacethematchingstudentwhilekeepingtherestof thelist.
functionupdateStudent(updatedStudent){
constupdatedStudents=students.map((student)=>
student.id===updatedStudent.id?updatedStudent :student,
);
localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedStudents));
setStudents(updatedStudents);
window.location.href='/students';
}
//Askforconfirmation, thenmakeanewlistwithout thedeletedstudent.
functiondeleteStudent(id){
if(window.confirm('Deletethisstudent?')){
setStudents(students.filter((student)=>student.id!==id));
}
}
//ChooseapagebasedonthecurrentURL.
letpage;
if(path==='/students'){
page=<StudentsPagestudents={students}onDelete={deleteStudent}/>;
}elseif(path==='/add-student'){
page=<StudentFormPageonSave={addStudent}/>;
}elseif(editMatch&&studentToEdit){
page=<StudentFormPagestudent={studentToEdit}onSave={updateStudent}/>;
}else{
page=<HomePagestudentCount={students.length}/>;
}
//Thenavbar issharedbyeverypage; theselectedpageappearsbelowit.
return(
<>
<Navbar/>
{page}
</>
);
}
exportdefaultApp;