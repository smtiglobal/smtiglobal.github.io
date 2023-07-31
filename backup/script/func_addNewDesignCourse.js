function addNewDesignCourse(obj) {
    
    course_title = obj.course_title ;
    course_sub_title = obj.course_sub_title ;
    course_code = obj.course_code ;
    source_page = obj.source_page ;
    course_img_cover = obj.course_img_cover ;

    var id_design_course = "id_design_course";
    var existing_courses = document.getElementById(id_design_course).innerHTML;
    var image_path = "images/topics/";
    var single_course = "<div class='col-lg-4 col-md-6 col-12 mb-4 mb-lg-3'> " +
        "<div class='custom-block bg-white shadow-lg'> " +
        "<a href='courses/" + source_page + "'> " +
        "<div class='d-flex'> " +
        "<div> " +
        "<h5 class='mb-2'>" + course_title + "</h5>  " +
        "<p class='mb-0'>" + course_sub_title + "</p> " +
        "</div> " + 
        "<span class='badge bg-design rounded-pill ms-auto'>" + course_code + " </span> " +
        "</div> " +
        "<img src='" + image_path + course_img_cover + "' class='custom-block-image img-fluid' alt=''> " +
        "</a> " +
        "</div> " +
        "</div> ";

    existing_courses += single_course;
    document.getElementById(id_design_course).innerHTML = existing_courses;
}

