<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Operators</title>
</head>
<body>
<?php
$a = 3;
$b = 6;
// Arithmetic Operators
echo "<h3>Arithmetic Operators:</h3>";
echo "Addition: " . ($a + $b) . "<br>";
echo "Subtraction: " . ($a - $b) . "<br>";
echo "Multiplication: " . ($a * $b) . "<br>";
echo "Division: " . ($a / $b) . "<br>";
echo "Modulus: " . ($a % $b) . "<br>";
// Comparison Operators
echo "<h3>Comparison Operators:</h3>";
echo "Is \$a equal to \$b? " . ($a == $b ? "Yes" : "No") . "<br>";
echo "Is \$a greater than \$b? " . ($a > $b ? "Yes" : "No") . "<br>";
echo "Is \$a less than \$b? " . ($a < $b ? "Yes" : "No") . "<br>";
// Logical Operators
echo "<h3>Logical Operators:</h3>";
if($a > 0 && $b > 0) {
    echo "Both \$a and \$b are positive.<br>"; }
if($a > 0 || $b < 0) {
    echo "Either \$a is positive or \$b is negative.<br>"; }
if(!($a < 0)) {
    echo "\$a is not negative.<br>"; }
?>
</body>
</html>
