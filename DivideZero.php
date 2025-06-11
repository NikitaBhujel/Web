<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Divide by Zero</title>
</head>
<body>
<h2>Divide by Zero</h2>
<form method="post" action="">
    <label>Enter Numerator:</label>
    <input type="number" name="numerator" required><br><br>
    <label>Enter Denominator:</label>
    <input type="number" name="denominator" required><br><br>
    <input type="submit" value="Divide">
</form>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numerator = $_POST['numerator'];
    $denominator = $_POST['denominator'];
    if ($denominator != 0) {
        $result = $numerator / $denominator;
        echo "<h3>Result: $result</h3>";
    } else {
        echo "<h3 style='color:red;'>Error: Cannot divide by zero!</h3>";    } }
?>
</body>
</html>
