<?php
$page = $_GET['page'] ?? 'home'; // Default to 'home' if no page is specified

switch ($page) {
    case 'home':
    default:
        include './../src/pages/home.php';
        break;
}