<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$servername = "localhost";
$username = "root"; // replace with your database username
$password = ""; // replace with your database password
$dbname = "engineering_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registrations (first_name, last_name, email, phone, degree, specialization, experience) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssi", $first_name, $last_name, $email, $phone, $degree, $specialization, $experience);

// Set parameters and execute
$first_name = $_POST['firstName'];
$last_name = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$degree = $_POST['degree'];
$specialization = $_POST['specialization'];
$experience = $_POST['experience'];

$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>
