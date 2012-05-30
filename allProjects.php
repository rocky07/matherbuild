<?php
//header('Content-type: application/image');
include("autoload.php");
$util = new Utils();
$records=$util->listAllProjects();
$result=json_encode($records);
//echo "{data:".$result."}";
echo 'Ext.util.JSONP.callback1('. json_encode($records) . ');' ;
//echo str_replace("\/", "/", $result);
//echo '[{record:[{"id":"1","name":"Palm Meadows1","loc":"Alampady","images":"-MhtLV5CvNY_upload.jpg"}]}]';
?>