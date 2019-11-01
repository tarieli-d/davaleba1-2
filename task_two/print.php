
<?php  
//get all audios from upload folder
$sPath = 'uploads/*';
if($_SERVER['QUERY_STRING']=="hidden")
{$hide="";
 $ahref=".";
$atext="Hide";
}

echo '<div style="max-width:28%; margin-left: auto;
    margin-right: auto;   background-color:white;padding:10px; "><h1>Audio records</h1>';
echo "<input type='search' id='myInput' onkeyup='myFunction()' placeholder='search by name' 
style='background-color:#162552;
  border: none;
  color: white;
  padding: 12px 22px;
  text-decoration: none;
  margin: 10px 12px;
'><p>
";
foreach (glob($sPath) AS $mp3) {
    //get name of audio from path
	$m=substr($mp3,8);
	echo "<span class='span' style='font-size:20px;color:black;'>".$m."</span>";
    echo '<audio class="id" src="'.$mp3.'" name="'.$m.'" value="'.$m.'"   type="audio/mpeg"   controls="controls" preload="auto"  style="background-color:black;padding:15px;display:block"
    >';
     
   echo "</audio></br>";
	  }

	  echo "<script>
	  //function which filters audio records
function myFunction() {
    var input, filter, i, txtValue;
    input = document.getElementById('myInput');//console.log(input.value);
    filter = input.value.toUpperCase();
   
     li = document.getElementsByClassName('id');
     sp = document.getElementsByClassName('span');
     
     for (i = 0; i < li.length; i++) {
        txtValue = li[i].src;
       if(txtValue.toUpperCase().slice(34)!==filter){
       	//hide other audios
          li[i].style.height='0px';
          li[i].style.padding='0px';
          sp[i].innerHTML=' ';
       }else {
       	li[i].style.height='50px';
        li[i].style.padding='15px';
        sp[i].innerHTML=txtValue.toUpperCase().slice(34); }
     
    }
}
</script>";
echo '</div>';
echo'<style>body{background-color:grey;}
	</style';
?>







