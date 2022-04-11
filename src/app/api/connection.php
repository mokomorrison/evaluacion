<?php
  function connectdb(){
    $conn_string= "host=localhost port=5432 dbname=dbgestionautos user=postgres password=Morrison3001*";

    $dbconn=pg_connect($conn_string) or die('Error: '. pg_last_error());

    if(!$dbconn){
      echo "Error: Could not connect";
    }else{
      return $dbconn;
    }
  }

?>
