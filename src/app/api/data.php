<?php
  require_once("connection.php");
  require_once("accessControl.php");
  $conn=connectdb();
  if($_SERVER['REQUEST_METHOD']=='GET'){
    $query='SELECT * FROM tbl_propietario';
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
    $row = array("nombre" => $datos["nombre"], "apellidos"=>$datos["apellidos"], "identificacion"=>$datos["identificacion"],"fecha_nacimiento"=>$datos["fecha_nacimiento"],"direccion"=>$datos["direccion"],"telefono"=>$datos["telefono"],"email"=>$datos["email"]);
    $res = pg_insert($conn,'tbl_propietario',$row);
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
    $row = array("nombre" => $datos["nombre"], "apellidos"=>$datos["apellidos"], "identificacion"=>$datos["identificacion"],"fecha_nacimiento"=>$datos["fecha_nacimiento"],"direccion"=>$datos["direccion"],"telefono"=>$datos["telefono"],"email"=>$datos["email"]);
    $condition = array("id"=>intval($datos["id"]));
    $res = pg_update($conn,'tbl_propietario',$row,$condition);
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
    $res = pg_delete($conn,'tbl_propietario',$condition);
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
