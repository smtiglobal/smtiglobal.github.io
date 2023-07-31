// function addNewComputerCourse(course_title, course_sub_title, course_code, source_page, course_img_cover) {
/*
|-------------------------------------------------------------------------------|
|                                                                               |
|            Institute Co-Director : Samuel Soren & Susanna Hansda              |
|       _       _     _   _   _                  ____                           |
|      / \   __| | __| | | \ | | _____      __  / ___|___  _   _ _ __ ___  ___  |
|     / _ \ / _` |/ _` | |  \| |/ _ \ \ /\ / / | |   / _ \| | | | '__/ __|/ _ \ |
|    / ___ \ (_| | (_| | | |\  |  __/\ V  V /  | |__| (_) | |_| | |  \__ \  __/ |
|   /_/   \_\__,_|\__,_| |_| \_|\___| \_/\_/    \____\___/ \__,_|_|  |___/\___| |
|                                                                               |
|                                                                               |    
|                    Script Author & Maintainer                                 |
|                ( https://github.com/sanjeevstephan )                          |
|                           Date : 29th-July-2023                               |
|-------------------------------------------------------------------------------|
*/
/* Important Variables Across different web-page on the website get Populated from this Script!
   Note : Any Changes Made here,wil get affected across all the pages which have included below script

   |------------------------------------------------------------------|
   |                                                                  |
   |         <script src="js-myscript/func_addNewCourse.js"></script>    |                                                         |
   |                                                                  |
   |------------------------------------------------------------------|
*/    
    
function addNewComputerCourse(obj) {
    
    var element_id = obj.element_id;
    var course_title = obj.course_title ;
    var course_sub_title = obj.course_sub_title ;
    var badge_class = obj.badge_class;
    var course_code = obj.course_code ;
    var source_page = obj.source_page ;
    var course_img_cover = obj.course_img_cover ;

    var existing_courses = document.getElementById(element_id).innerHTML;
    var image_path = obj.image_path ;
    var single_course = "<div class='col-lg-4 col-md-6 col-12 mb-4 mb-lg-3'> " +
        "<div class='custom-block bg-white shadow-lg'> " +
        "<a href='courses/" + source_page + "'> " +
        "<div class='d-flex'> " +
        "<div> " +
        "<h5 class='mb-2'>" + course_title + "</h5>  " +
        "<p class='mb-0'>" + course_sub_title + "</p> " +
        "</div> " +
        "<span class='" + badge_class + "'>" + course_code + " </span> " +
        "</div> " +
        "<img src='" + image_path + course_img_cover + "' class='custom-block-image img-fluid' alt=''> " +
        "</a> " +
        "</div> " +
        "</div> ";

    existing_courses += single_course;
    document.getElementById(element_id).innerHTML = existing_courses;
}

