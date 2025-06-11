<?php
session_start();
if (isset($_SESSION['views'])) {
    $_SESSION['views'] += 1; 
} else {
    $_SESSION['views'] = 1;  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page View Counter</title>
</head>
<body>
    <h2>Page View Counter</h2>
    <p>You have visited this page <strong><?php echo $_SESSION['views']; ?></strong> times in this session.</p>
    <form method="post">
        <button type="submit" name="reset">Reset Counter</button>
    </form>
    <?php
    if (isset($_POST['reset'])) {
        $_SESSION['views'] = 0;
        header("Location: " . $_SERVER['PHP_SELF']);
        exit();
    }
    ?>
</body>
</html>
