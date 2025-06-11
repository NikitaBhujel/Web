<?php
$cookie_name = "user";
$cookie_value = "Nicks";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // Expires in 30 days
if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set.<br>";
} else {
    echo "Cookie '" . $cookie_name . "' is set.<br>";
    echo "Value is: " . $_COOKIE[$cookie_name] . "<br>"; }
if (!isset($_COOKIE[$cookie_name])) {
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}
?>
