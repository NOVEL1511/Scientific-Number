<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = $_POST['data'];
    $filename = $_POST['filename'] ? $_POST['filename'] : 'default.txt';
    
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Content-Length: ' . strlen($data));
    
    echo $data;
    exit;
}
?>
