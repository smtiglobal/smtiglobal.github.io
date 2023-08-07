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
   |         <script src="js-mydata/courses.js"></script>             |
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
    course_title :  "DCA ",
    course_sub_title : "Duration: 12 Months",
    badge_class : computer_badge_class_bg,                   //dont-change
    course_code : "102",
    source_page : "102-Course.html",
    image_path : default_image_location,                    //dont-change
    course_img_cover : "undraw_Group_video_re_btu7.png"
    
};
const course_103 = {
    element_id : computer_element_id,                        //dont-change
    course_title :  "Advance DCA",
    course_sub_title : "Duration: 12 Months",
    badge_class : computer_badge_class_bg ,                  //dont-change
    course_code : "103",
    source_page : "103-Course.html",
    image_path : default_image_location,                     //dont-change
    course_img_cover : "undraw_viral_tweet_gndb.png"
    
};

// const course_104 = {
//     element_id : computer_element_id,                        //dont-change
//     course_title :  "Computer Pro",
//     course_sub_title : "Duration: 12 Months",
//     badge_class : computer_badge_class_bg ,                  //dont-change
//     course_code : "104",
//     source_page : "104-Course.html",
//     image_path : default_image_location,                     //dont-change
//     course_img_cover : "undraw_viral_tweet_gndb.png"
    
// };

addNewCourse(course_101);
addNewCourse(course_102);
addNewCourse(course_103);
// addNewCourse(course_104);

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
    source_page : "201-Course.html",
    image_path : default_image_location,                      //dont-change
    course_img_cover : "undraw_Graduation_re_gthn.png"
    
};
const course_202 = {
    element_id   : coding_element_id,                         //dont-change
    course_title :  "Web Development",
    course_sub_title : "Duration: 6 Months <br/><small style='color:lightgrey'>Coming Soon</small>",
    badge_class : coding_badge_class_bg, //dont-change
    course_code : "202",
    source_page : "202-Course.html",
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
    course_title       :  "DTP (Desktop Publishing  ",
    course_sub_title   : "Duration: 12 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "301",
    source_page : "301-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "colleagues-working-cozy-office-medium-shot.png"
    
};
const course_302 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Web Design",
    course_sub_title   :  "Duration: 3 Months <br> Available",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "302 ",
    source_page : "302-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Remote_design_team_re_urdx.png"
    
};
const course_303 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Graphic Design",
    course_sub_title   : "Duration: 6 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "303",
    source_page : "303-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Redesign_feedback_re_jvm0.png"
    
};
const course_304 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Logo Design",
    course_sub_title   : "Duration: 3 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "304",
    source_page : "304-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "colleagues-working-cozy-office-medium-shot.png"
    
};

const course_305 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Corel Draw",
    course_sub_title   : "Duration: 3 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "305",
    source_page : "305-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "colleagues-working-cozy-office-medium-shot.png"
    
};
const course_306 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Photoshop",
    course_sub_title   : "Duration: 3 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "306",
    source_page : "306-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "colleagues-working-cozy-office-medium-shot.png"
    
};
const course_307 = {
    element_id         :  design_element_id,               //dont-change
    course_title       :  "Wordpress",
    course_sub_title   : "Duration: 3 Months",
    badge_class : design_badge_class_bg, //dont-change
    course_code : "307",
    source_page : "305-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "colleagues-working-cozy-office-medium-shot.png"
    
};

addNewCourse(course_301);
addNewCourse(course_302);
addNewCourse(course_303);
addNewCourse(course_304);
addNewCourse(course_305);
addNewCourse(course_306);
// addNewCourse(course_307);

/*
------------------------------------------{ MUSIC }----------------------------------------------------
    Course Code : 400
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
    source_page : "401-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Compose_music_re_wpiw.png"
    
};
const course_402 = {
    element_id : music_element_id,                           //dont-change
    course_title :  "Learn Piano",
    course_sub_title : "Duration: 12 Months",
    badge_class : music_badge_class_bg, //dont-change
    course_code : "402",
    source_page : "402-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_happy_music_g6wc.png"
    
};
const course_403 = {
    element_id : music_element_id,                           //dont-change
    course_title :  "Learn Music",
    course_sub_title : "Duration: 12 Months",
    badge_class : music_badge_class_bg, //dont-change
    course_code : "403",
    source_page : "403-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Podcast_audience_re_4i5q.png"
    
};

addNewCourse(course_401);
addNewCourse(course_402);
addNewCourse(course_403);
/*
------------------------------------------{ MUSIC }----------------------------------------------------
    Course Code   : 500
    Course Topics : Music
    Total Courses : 2
    Tab Position : Fourth
*/
const multimedia_element_id =  "id_multimedia_course";                              //dont-change
const multimedia_badge_class_bg = "badge bg-advertising rounded-pill ms-auto";      //dont-change

const course_501 = {
    element_id : multimedia_element_id,                           //dont-change
    course_title :  "Multimedia & Animation Basic",
    course_sub_title : "Duration: 3 Months",
    badge_class : multimedia_badge_class_bg, //dont-change
    course_code : "501",
    source_page : "501-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Remote_design_team_re_urdx.png"
    
};
const course_502 = {
    element_id : multimedia_element_id,                           //dont-change
    course_title :  "Broadcast",
    course_sub_title : "Duration: 3 Months",
    badge_class : multimedia_badge_class_bg, //dont-change
    course_code : "502",
    source_page : "502-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Redesign_feedback_re_jvm0.png"
    
};
const course_503 = {
    element_id : multimedia_element_id,                           //dont-change
    course_title :  "Videography & Photography",
    course_sub_title : "Duration: 3 Months",
    badge_class : multimedia_badge_class_bg, //dont-change
    course_code : "503",
    source_page : "503-Course.html",
    image_path : default_image_location,                             //dont-change
    course_img_cover : "undraw_Redesign_feedback_re_jvm0.png"
    
};


addNewCourse(course_501);
addNewCourse(course_502);
addNewCourse(course_503);
