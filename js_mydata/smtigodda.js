/*
|---------------------------------------------------------------------------|
|                                                                           |
|            Institute Co-Director : Samuel Soren & Susanna Hansda           |
|        ____  __  __ _____ ___       ____           _     _                |
|       / ___||  \/  |_   _|_ _|     / ___| ___   __| | __| | __ _          |
|       \___ \| |\/| | | |  | |_____| |  _ / _ \ / _` |/ _` |/ _` |         |
|        ___) | |  | | | |  | |_____| |_| | (_) | (_| | (_| | (_| |         |
|       |____/|_|  |_| |_| |___|     \____|\___/ \__,_|\__,_|\__,_|         |
|                                                                           |
|                    Script Author & Maintainer                             |
|                ( https://github.com/sanjeevstephan )                      |
|                           Date : 26th-July-2023                           |
|---------------------------------------------------------------------------|
*/
/* Important Variables Across different web-page on the website get Populated from this Script!
   Note : Any Changes Made here,wil get affected across all the pages which have included below script

   |-------------------------------------------------------------|
   |                                                             |
   |         <script src="js_mydata/smtigodda.js"></script>"     |
   |                                                             |
   |-------------------------------------------------------------|
*/
const privacy = {
    showinstitute : "yes",
    showauthor  : "yes",
    showcontact : "yes"
};
//Ambedkar Nagar, अंबेडकर नगर, गंगटा, Gangta, Godda, Jharkhand 814133 
const institute = { 
    name        : "Samsusan Multimedia & Technology Institute (SMTI)",
    address     : "Gangta Rd, Khurd, Jharkhand 814133",
    district    : "Godda",
    phone       : "9671960792",
    whatsappno  : "9671960792",
    whatsappmsg : "Hi, I contacted you Through your website.",
    email       : "smtigodda@gmail.com"
};
const thescript = {
    author  : "SanjeevStephanMurmu",
    created : "26th July 2023",
    source  : "https://github.com/sanjeevstephan/SMTI/"
};
const assets = {
    logo : "assets/smti-logo.png",
    logosize : "90px"
};

/*
    List of ID in use!
*/
var institute_name_id  = "id_institute_name";
var institute_addr_id  = "id_institute_address";
var institute_phone_id = "id_institute_phone";
var institute_phone_two_id = "id_institute_phone_two";
var institute_whatsapp_id = "id_institute_whatsapp";
var institute_email_id = "id_institute_email";
var institute_email_two_id = "id_institute_email_two";
var institute_district_id = "id_institute_district";
var developed_by_id    = "id_developed_by" ;

/*
    Error Message to Display when primary-value not available
*/
var institute_name_error  = "Unable to display Institute Name!";
var institute_addr_error  = "Unable to display Address";
var institute_phone_error = "Unable to display Contact" ;
var institute_whatsapp_error  = "Unable to display WhatsApp Number" ;
var institute_email_error  = "Unable to display Email" ;

/*
    The Logic of the Script ! NOTE : DONT MAKE ANY CHANGES! THIS WILL BREAK THE WEBSITE!
*/
function display_smti_info(element_id,value_to_display) { document.getElementById(element_id).innerHTML = value_to_display; }

if (privacy.showinstitute == "yes") {
    display_smti_info(institute_name_id,institute.name);
    display_smti_info(institute_addr_id,institute.address);
    display_smti_info(institute_email_id,institute.email);
    display_smti_info(institute_email_two_id,institute.email);
} else {
    display_smti_info(institute_name_id,institute_name_error);
    display_smti_info(institute_addr_id,institute_addr_error);
    display_smti_info(institute_email_id,institute_email_error);
}


if(privacy.showcontact == "yes") {
    // TELEPHONE
    document.getElementById(institute_phone_id).innerHTML     =  "<a href='tel: " + institute.phone + "' class='site-footer-link'>" + institute.phone + " </a>" 
    document.getElementById(institute_phone_two_id).innerHTML =  "<a href='tel: " + institute.phone + "' class='site-footer-link'>" + institute.phone + " </a>" 
    // WHATSAPP
    document.getElementById(institute_whatsapp_id).innerHTML  =  "<a href='https://api.whatsapp.com/send?phone=+91" + institute.whatsappno + "&text="+ institute.whatsappmsg + "' class='site-footer-link'>" + institute.whatsappno + " </a>" 
} else { 
    // ERROR - PHONE & WHATSAPP NOT FOUND
    display_smti_info(institute_phone_id,institute_phone_error); 
    display_smti_info(institute_whatsapp_id,institute_whatsapp_error); 
}

if(privacy.showauthor == "yes") {
    display_smti_info(developed_by_id,thescript.author);
}


display_smti_info(institute_district_id,institute.district);
// LOGO
document.getElementById("id_institute_logo").innerHTML = "<img src='" + assets.logo + "' width='" + assets.logosize+" ' />"
document.getElementById("id_institute_logo_course").innerHTML = "<img src='" + assets.logo + "' width='" + assets.logosize+" ' />"


