/*
|---------------------------------------------------------------------------|
|                                                                           |
|            Institute Co-Director : Samuel Soren & Susanna Hansda           |
|                                                                           |       
|          ____  __  __ _____ ___       ____                   _            |   
|         / ___||  \/  |_   _|_ _|     / ___| ___   ___   __ _| | ___       | 
|         \___ \| |\/| | | |  | |_____| |  _ / _ \ / _ \ / _` | |/ _ \      | 
|          ___) | |  | | | |  | |_____| |_| | (_) | (_) | (_| | |  __/      |  
|         |____/|_|  |_| |_| |___|     \____|\___/ \___/ \__, |_|\___|      | 
|                                                        |___/              |
|                     _                    _   _                            |          
|                    | |    ___   ___ __ _| |_(_) ___  _ __                 |        
|                    | |   / _ \ / __/ _` | __| |/ _ \| '_ \                |        
|                    | |__| (_) | (_| (_| | |_| | (_) | | | |               |       
|                    |_____\___/ \___\__,_|\__|_|\___/|_| |_|               |      
|                                                                           |
|                    Script Author & Maintainer                             |
|                ( https://github.com/sanjeevstephan )                      |
|                           Date : 26th-July-2023                           |
|---------------------------------------------------------------------------|
*/
/* Important Variables Across different web-page on the website get Populated from this Script!
   Note : Any Changes Made here,wil get affected across all the pages which have included below script

   |--------------------------------------------------------|
   |                                                        |
   |    <script src="js-mydata/googlelocation.js"></script>"     |
   |                                                        |
   |--------------------------------------------------------|
*/


const google_location_source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.339840529845!2d87.2032807!3d24.8180492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0f5a48b7d00f7%3A0x5f0dd168e9d4b844!2sSamsusan%20Multimedia%20%26%20Technology%20Institute!5e0!3m2!1sen!2sin!4v1690222206972!5m2!1sen!2sin";
var id_institute_location = "id_institute_google_location";
document.getElementById(id_institute_location).innerHTML =  "<iframe class='google-map' src='" + google_location_source + "' width='140%' height='300' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>  ";



/*
    <!-- <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <!-- <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.339840529845!2d87.2032807!3d24.8180492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0f5a48b7d00f7%3A0x5f0dd168e9d4b844!2sSamsusan%20Multimedia%20%26%20Technology%20Institute!5e0!3m2!1sen!2sin!4v1690222206972!5m2!1sen!2sin" width="140%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <!-- <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->


*/