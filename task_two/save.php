
<?php

 
  
  $get = $_FILES['audio_data']['tmp_name']; 
  

  $upload = "uploads/".($_FILES['audio_data']['name']);

  //$upload = "uploads/"."a".($_FILES['audio_data']['size']).'.mp3';
  //.$_FILES['audio_data']['name'].".wav";

  //move files to folder

 
  move_uploaded_file($get, $upload)



?>