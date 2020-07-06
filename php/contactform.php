<?php

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $subject = "Mail z portfolio";
    $mailTo="mrszaro2000@wp.pl";
    $headers = "From: ".$email;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt, $headers);
    header("Location: index.php?mailsend");
}