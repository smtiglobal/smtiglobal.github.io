function addNewCodingCourse(obj) {
// function addNewCodingCourse(course_title, course_sub_title, course_code, source_page, course_img_cover) {
 
    
    var course_title2 = obj.course_title ;
    var course_sub_title = obj.course_sub_title ;
    var course_code = obj.course_code ;
    var source_page = obj.source_page ;
    var course_img_cover = obj.course_img_cover ;

    var id_coding_course = "id_coding_course";
    var existing_courses = document.getElementById(id_coding_course).innerHTML;
    var image_path = "images/topics/" ;
    var single_course = "<div class='col-lg-6 col-md-6 col-12 mb-4 mb-lg-3'> " +
        "<div class='custom-block bg-white shadow-lg'> " +
        "<a href='courses/" + source_page + "'> " +
        "<div class='d-flex'> " +
        "<div> " +
        "<h5 class='mb-2'>" + course_title2 + "</h5>  " +
        "<p class='mb-0'>" + course_sub_title + "</p> " +
        "</div> " +
        "<span class='badge bg-education rounded-pill ms-auto'>" + course_code + " </span> " +
        "</div> " +
        "<img src='" + image_path + course_img_cover +  "' class='custom-block-image img-fluid' alt=''> " +
        "</a> " +
        "</div> " +
        "</div> ";

    existing_courses += single_course;
    document.getElementById(id_coding_course).innerHTML = existing_courses;
}

