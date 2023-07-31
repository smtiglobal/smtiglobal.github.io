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
------------------------------------------{ COMPUTER }----------------------------------------------------
    Course Code : 100
    Course Topics : Computer
    Total Courses : 4
    Tab Position : First
*/
const computer_element_id =  "id_computer_course";                                //dont-change
const computer_badge_class_bg = "badge bg-advertising rounded-pill ms-auto ";    //dont-change
const default_image_location = "images/topics/";                                //dont-change

const course_101 = {
    element_id : computer_element_id ,                         //dont-change
    course_title :  "Computer Basics",
    course_sub_title : "Duration: 6 Months",
    badge_class : computer_badge_class_bg,                     //dont-change
    course_code : "101",
    source_page : "101-Course.html",
    image_path : default_image_location,                      //dont-change
    course_img_cover : "undraw_online_ad_re_ol62.png"
    
};
const course_102 = {
    element_id : computer_element_id,                        //dont-change
    course_title :  "Computer Intermediate",
    course_sub_title : "Duration: 9 Months",
    badge_class : computer_badge_class_bg,                   //dont-change
    course_code : "102",
    source_page : "dca-course.html",
    image_path : default_image_location,                    //dont-change
    course_img_cover : "undraw_Group_video_re_btu7.png"
    
};
const course_103 = {
    element_id : computer_element_id,                        //dont-change
    course_title :  "Computer Advanced",
    course_sub_title : "Duration: 12 Months",
    badge_class : computer_badge_class_bg ,                  //dont-change
    course_code : "103",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                     //dont-change
    course_img_cover : "undraw_viral_tweet_gndb.png"
    
};


addNewCourse(course_101);
addNewCourse(course_102);
addNewCourse(course_103);

/*
------------------------------------------{ CODING }----------------------------------------------------
    Course Code : 200
    Course Topics : Coding
    Total Courses : 2
    Tab Position : Second
*/
const coding_element_id =  "id_coding_course";                              //dont-change
const coding_badge_class_bg = "badge bg-education rounded-pill ms-auto";   //dont-change

const course_201 = {
    element_id   : coding_element_id ,                         //dont-change
    course_title :  "Teens Coder",
    course_sub_title : "Duration: 3 Months",
    badge_class : coding_badge_class_bg,                      //dont-change
    course_code : "201",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                      //dont-change
    course_img_cover : "undraw_Graduation_re_gthn.png"
    
};
const course_202 = {
    element_id   : coding_element_id,                         //dont-change
    course_title :  "Pro Coder",
    course_sub_title : "Duration: 6 Months",
    badge_class : coding_badge_class_bg, //dont-change
    course_code : "202",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                     //dont-change
    course_img_cover : "undraw_Educator_re_ju47.png"
    
};

addNewCourse(course_201);
addNewCourse(course_202);

/*
------------------------------------------{ DESIGN }----------------------------------------------------
    Course Code : 300
    Course Topics : Design
    Total Courses : 2
    Tab Position : Third
*/
const design_element_id =  "id_design_course";                              //dont-change
const design_badge_class_bg = "badge bg-design rounded-pill ms-auto";      //dont-change

const course_301 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Web Design",
    course_sub_title   : "Duration: 12 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "301",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Remote_design_team_re_urdx.png"
    
};
const course_302 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Graphic Design",
    course_sub_title   : "Duration: 12 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "302",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Redesign_feedback_re_jvm0.png"
    
};
const course_303 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Logo Design",
    course_sub_title   : "Duration: 12 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "303",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "colleagues-working-cozy-office-medium-shot.png"
    
};

addNewCourse(course_301);
addNewCourse(course_302);
addNewCourse(course_303);

/*
------------------------------------------{ MUSIC }----------------------------------------------------
    Course Topics : Music
    Total Courses : 2
    Tab Position : Fourth
*/
const music_element_id =  "id_music_course";                              //dont-change
const music_badge_class_bg = "badge bg-advertising rounded-pill ms-auto";      //dont-change

const course_401 = {
    element_id : music_element_id,                           //dont-change
    course_title :  "Learn Guitar",
    course_sub_title : "Duration: 3 Months",
    badge_class : music_badge_class_bg, //dont-change
    course_code : "401",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Compose_music_re_wpiw.png"
    
};
const course_402 = {
    element_id : music_element_id,                           //dont-change
    course_title :  "Learn Piano",
    course_sub_title : "Duration: 12 Months",
    badge_class : music_badge_class_bg, //dont-change
    course_code : "402",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_happy_music_g6wc.png"
    
};
const course_403 = {
    element_id : music_element_id,                           //dont-change
    course_title :  "Learn Music",
    course_sub_title : "Duration: 12 Months",
    badge_class : music_badge_class_bg, //dont-change
    course_code : "403",
    source_page : "basic-computer-course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Podcast_audience_re_4i5q.png"
    
};

addNewCourse(course_401);
addNewCourse(course_402);
addNewCourse(course_403);
