<?php

   
   $dbHost = 'Localhost';
   $dbUsername = 'root';
   $dbPassword ='senha';
   $dbName = 'usuarios';

   $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName)

   if($conexao->connect_errno)
   {
    echo "erro";
   }
   else
   {
    echo "tudo certo"
   }

   ?>

