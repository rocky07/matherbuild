<?php
ob_start();
include("autoload.php");
$id=$_REQUEST["id"];
$util = new Utils();
$records=$util->listProjectDetails($id);
$imageArray=$util->listGalleryImages($id);
$floorType=$util->listFloorTypeImages($id);
$records["gallery"]=$imageArray;
$records["floortypes"]=$floorType;
$result=json_encode($records);
//echo str_replace("\/", "/", $records);
echo $result;
?>