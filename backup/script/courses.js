/*
|---------------------------------------------------------------------------|
|                                                                           |
|            Institute Co-Director : Samuel Soren & Susanna Hansda          |
|        ____  __  __ _____ ___       ____                                  | 
|       / ___||  \/  |_   _|_ _|     / ___|___  _   _ _ __ ___  ___  ___    | 
|       \___ \| |\/| | | |  | |_____| |   / _ \| | | | '__/ __|/ _ \/ __|   |  
|        ___) | |  | | | |  | |_____| |__| (_) | |_| | |  \__ \  __/\__ \   |    
|       |____/|_|  |_| |_| |___|     \____\___/ \__,_|_|  |___/\___||___/   |  
|                                                                           |    
|                    Script Author & Maintainer                             |
|                ( https://github.com/sanjeevstephan )                      |
|                           Date : 29th-July-2023                           |
|---------------------------------------------------------------------------|
*/
/* Important Variables Across different web-page on the website get Populated from this Script!
   Note : Any Changes Made here,wil get affected across all the pages which have included below script

   |------------------------------------------------------------------|
   |                                                                  |                                                      |
   |         <script src="js-mydata/courses.js"></script>                  |
   |                                                                  |
   |------------------------------------------------------------------|
*/
/*
    Course Code : 100
    Course Topics : Computer
    Total Courses : 4
    Tab Position : First
*/
const course_101 = {
    element_id : "id_computer_course",                         //dont-change
    course_title :  "Computer Basics",
    course_sub_title : "Duration: 6 Months",
    badge_class : "badge bg-advertising rounded-pill ms-auto ", //dont-change
    course_code : "101",
    source_page : "basic-computer-course.html",
    image_path : "images/topics/",                             //dont-change
    course_img_cover : "undraw_online_ad_re_ol62.png"
    
};
const course_102 = {
    element_id : "id_computer_course",                         //dont-change
    course_title :  "Computer Intermediate",
    course_sub_title : "Duration: 9 Months",
    badge_class : "badge bg-advertising rounded-pill ms-auto ", //dont-change
    course_code : "102",
    source_page : "dca-course.html",
    image_path : "images/topics/",                             //dont-change
    course_img_cover : "undraw_Group_video_re_btu7.png"
    
};
const course_103 = {
    element_id : "id_computer_course",                         //dont-change
    course_title :  "Computer Advanced",
    course_sub_title : "Duration: 12 Months",
    badge_class : "badge bg-advertising rounded-pill ms-auto", //dont-change
    course_code : "103",
    source_page : "basic-computer-course.html",
    image_path : "images/topics/",                             //dont-change
    course_img_cover : "undraw_viral_tweet_gndb.png"
    
};


addNewComputerCourse(course_101);
addNewComputerCourse(course_102);
addNewComputerCourse(course_103);


/*
    Course Topics : Coding
    Total Courses : 2
    Tab Position : Second
*/
const course_201 = {
    element_id : "id_coding_course",                          //dont-change
    course_title :  "Teens Coder",
    course_sub_title : "Duration: 3 Months",
    badge_class : "badge bg-education rounded-pill ms-auto", //dont-change
    course_code : "103",
    source_page : "basic-computer-course.html",
    image_path : "images/topics/",                             //dont-change
    course_img_cover : "undraw_Graduation_re_gthn.png"
    
};

addNewComputerCourse(course_201);
// addNewCodingCourse("Teens Coder", "Class 6-9", "101",  "basic-computer-course.html" , "images/topics/undraw_Graduation_re_gthn.png");
// addNewCodingCourse("Advanced Coding", "Duration: 12 Months", "1021","dca-course.html","images/topics/undraw_Educator_re_ju47.png");
/*
    Course Topics : Design
    Total Courses : 2
    Tab Position : Third
*/
const course_301 = {
    element_id : "id_design_course",                          //dont-change
    course_title :  "Computer Pro",
    course_sub_title : "Duration: 12 Months",
    badge_class : "badge bg-design rounded-pill ms-auto", //dont-change
    course_code : "103",
    source_page : "basic-computer-course.html",
    image_path : "images/topics/",                             //dont-change
    course_img_cover : "undraw_Remote_design_team_re_urdx.png"
    
};

addNewComputerCourse(course_301);
// addNewDesignCourse("Web Design", "Class 6-9", "101",  "basic-computer-course.html" , "images/topics/undraw_Remote_design_team_re_urdx.png");
// addNewDesignCourse("Graphic", "Duration: 12 Months", "1021","dca-course.html","images/topics/undraw_Redesign_feedback_re_jvm0.png");
// addNewDesignCourse("Logo Design", "Class 6-9", "101",  "basic-computer-course.html" , "images/topics/colleagues-working-cozy-office-medium-shot.png");

/*
    Course Topics : Music
    Total Courses : 2
    Tab Position : Fourth
*/
const course_401 = {
    element_id : "id_music_course",                           //dont-change
    course_title :  "Learn Guitar",
    course_sub_title : "Duration: 12 Months",
    badge_class : "badge bg-advertising rounded-pill ms-auto", //dont-change
    course_code : "103",
    source_page : "basic-computer-course.html",
    image_path : "images/topics/",                             //dont-change
    course_img_cover : "undraw_Compose_music_re_wpiw.png"
    
};

addNewComputerCourse(course_401);
// addNewMusicCourse("Learn Guitar", "Class 6-9", "101",  "basic-computer-course.html" , "images/topics/undraw_Compose_music_re_wpiw.png");
// addNewMusicCourse("Learn Piano", "Duration: 12 Months", "1021","dca-course.html","images/topics/undraw_happy_music_g6wc.png");
// addNewMusicCourse("Learn Music", "Duration: 12 Months", "1021","dca-course.html","images/topics/undraw_Podcast_audience_re_4i5q.png");

