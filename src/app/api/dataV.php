<?php
  require_once("connection.php");
  require_once("accessControl.php");
  $conn=connectdb();
  if($_SERVER['REQUEST_METHOD']=='GET'){
    $query='SELECT * FROM tbl_vehiculo';
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

  if($_SERVER['REQUEST_METHOD']=='POST'){
    $datos= json_decode(file_get_contents("php://input"),true);
    $row = array("placa" => $datos["placa"], "vin"=>$datos["vin"], "linea_id"=>$datos["linea_id"],"cilindrada"=>$datos["cilindrada"],"color_id"=>$datos["color_id"],"chasis"=>$datos["chasis"],"tipo_vehiculo_id"=>$datos["tipo_vehiculo_id"]);
    $res = pg_insert($conn,'tbl_vehiculo',$row);
    if($res){
      $result=array(
        'status'=>'200',
        'msj'=>"success"
      );
      pg_close($conn);
      echo json_encode($result);
    }
    exit();
  }

  if($_SERVER['REQUEST_METHOD']=='PUT'){
    $datos= json_decode(file_get_contents("php://input"),true);
    $row = array("placa" => $datos["placa"], "vin"=>$datos["vin"], "linea_id"=>$datos["linea_id"],"cilindrada"=>$datos["cilindrada"],"color_id"=>$datos["color_id"],"chasis"=>$datos["chasis"],"tipo_vehiculo_id"=>$datos["tipo_vehiculo_id"]);
    $condition = array("id"=>intval($datos["id"]));
    $res = pg_update($conn,'tbl_vehiculo',$row,$condition);
    if($res){
      $result=array(
        'status'=>'200',
        'msj'=>"success"
      );
      pg_close($conn);
      echo json_encode($result);
    }
    exit();
  }

  if($_SERVER['REQUEST_METHOD']=='DELETE'){
    $condition = array("id"=>intval($_GET['id']));
    $res = pg_delete($conn,'tbl_vehiculo',$condition);
    if($res){
      $result=array(
        'status'=>'200',
        'msj'=>"success"
      );
      pg_close($conn);
      echo json_encode($result);
    }
    exit();
  }


 ?>
