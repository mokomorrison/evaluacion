<?php
  require_once("connection.php");
  require_once("accessControl.php");
  $conn=connectdb();
  if($_SERVER['REQUEST_METHOD']=='GET'){
    $query='SELECT * FROM view_pro_veh';
      $list =pg_query($query);
      //$row = pg_fetch_all($list);
      $res=array();
      while($row= pg_fetch_assoc($list)){
        $res[]=$row;
      }
      //print_r($res);
      //die();

      pg_close($conn);
      $result=array(
        'status'=>'200',
        'data'=>$res
      );
      echo json_encode($result);
      exit();
  }




 ?>
