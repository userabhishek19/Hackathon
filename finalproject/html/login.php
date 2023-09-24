<?php
session_start();

$error_message = ""; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once('db.php');

    $username = $_POST["username"];

    $sql = "SELECT id, username FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $username);
        if ($stmt->fetch()) {
            $_SESSION['user_id'] = $user_id;
            header("Location: fin_goal.html");
            exit();
        }
    } else {
        $error_message = "Invalid username.";
    }
    $stmt->close();
}

if (!empty($error_message)) {
    echo '<p class="error">' . $error_message . '</p>';
}
?>