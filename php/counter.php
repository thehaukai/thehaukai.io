<?php
$counterFile = 'counter.txt'; // Path to the file that stores the count

// Function to read the visitor count from the file
function readVisitorCount() {
  global $counterFile;
  if (file_exists($counterFile)) {
    return file_get_contents($counterFile);
  }
  return 0; // If the file doesn't exist, start from 0
}

// Function to increment the visitor count and save it to the file
function incrementVisitorCount() {
  global $counterFile;
  $count = readVisitorCount();
  $count++;
  file_put_contents($counterFile, $count);
  return $count;
}

// Main logic
$action = $_GET['action'] ?? '';

if ($action === 'increment') {
  $count = incrementVisitorCount();
} else {
  $count = readVisitorCount();
}

echo $count;
?>