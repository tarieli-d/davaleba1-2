<?php
echo '<h1>Audio records</h1>';
?>

<?php  

$sPath = 'uploads/*.mp3';
if($_SERVER['QUERY_STRING']=="hidden")
{$hide="";
 $ahref=".";
// $atext="Hide";
}
foreach (glob($sPath) AS $mp3) {
    echo '<audio  src="'.$mp3.'" type="audio/mpeg"   controls="controls" preload="auto"  style="margin:6px;background-color:black;padding:5px">';
       
    echo '</audio>';
}


?>







