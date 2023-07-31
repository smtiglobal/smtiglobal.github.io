

/*
  ____                  __  __           _ _  __
 / ___|__ _ _ __       |  \/  | ___   __| (_)/ _|_   _
| |   / _` | '_ \ _____| |\/| |/ _ \ / _` | | |_| | | |
| |__| (_| | | | |_____| |  | | (_) | (_| | |  _| |_| |
 \____\__,_|_| |_|     |_|  |_|\___/ \__,_|_|_|  \__, |
                                                 |___/
    Note : Below const variable's value is allowed for modification and not key-property & structure.

*/
const nav_title = "Basic Computer Course";
const course_details = { 
    Title                : "(BCC) Computer Basics Course Syllabus",
    Duration             : "6 Month",
    Maximum_Marks        : "100",
    Teaching_Method      : "Godda",
    Teacher_Assessments  : "5 Marks",
    Semester_Examination : "50 Marks",
    Lecture            : "3 contact hour/week",
    Project_Available  : "Yes",
    Project_Work       : "20 Marks",
    Practical          : "1 Hour",
    Final_Semester_Examination     : "20",
    Theory             : "Computer Fundamentals & MS office"
};
/*
    Note : Below Variables List 
    1. contentTopicList
    2. contentSubTopicList
        should have equal number of items. or else the array will not be able to display 
        all the list-items properly.
*/
var contentTopicList = [
    "Fundamental of Computer and Basic Control:",
    "Microsoft Word, Excel, PowerPoint :",
    "Internet:",
    "Making of Project works and Final Exam:"
    ]

var contentSubTopicList = [
" Introduction, Notepad, Paints, Typing, File Management ",
" Menus, Functions, Text Formatting, Letters, Bio-data, Reports, Forms, Presentations, PDF, Making Sheets, ",
" Fundamentals of Internet, email, Website, Working Online, Social Media, ",
" Project Making, Printout and File Making, Final Exam "
]


/*
 ____                _        ___        _
|  _ \ ___  __ _  __| |      / _ \ _ __ | |_   _
| |_) / _ \/ _` |/ _` |_____| | | | '_ \| | | | |
|  _ <  __/ (_| | (_| |_____| |_| | | | | | |_| |
|_| \_\___|\__,_|\__,_|      \___/|_| |_|_|\__, |
                                           |___/
    Note : Below Variables & Functions are to be edited by the script-author & maintainer..

*/

var course_description = "This is a short course details ";

var course_title_id = "id_course_title";
var course_content_id= "id_course_contents";
var nav_title_id = "id_nav_title";
var course_dec_id = "id_course_dec";

var content =  "";

document.getElementById(nav_title_id).innerHTML = nav_title;
document.getElementById(course_dec_id).innerHTML = course_description;


function addCourseDetails(dictionary) {

    document.getElementById(course_title_id).innerHTML = dictionary.Title;

    for (let property in dictionary) {
        console.log(`${property}: ${dictionary[property]}`);
      //  console.log(proper)
        content += "<tr><td>" + property + "</td><td>" + dictionary[property] + "</td></tr>";

    }
    document.getElementById("instituteTable").innerHTML = content;
}



function addCourseContents(contentLists){
   content = "";

   let size = Object.keys(contentTopicList).length;
//    let size = Object.keys(petDictionary["Pidgey"]).length;
    
    for(var i = 0 ;i < size ; i++ )
    {
        var sno = i + 1;
        console.log("Course Length : "  + sno);
        content += "<tr>" + 
        "<td><center>" + sno + "</center></td> " + 
        "<td><b> " + contentTopicList[i] + "</b> <br/><small>( " + contentSubTopicList[i] +" )</small></td> " +
        "</tr>";
        // console.log(content);
    }

    document.getElementById("id_course_contents").innerHTML = content;

}

//console.log("Course Lenght : "  + course_details.length);


addCourseDetails(course_details);
addCourseContents(contentTopicList);
