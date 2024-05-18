<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST['user_name'], FILTER_SANITIZE_STRING);
    $contact = filter_var($_POST['user_contact'], FILTER_SANITIZE_STRING);
    $request = filter_var($_POST['user_request'], FILTER_SANITIZE_STRING);

    $to = "okristin92@gmail.com"; // Вкажіть свою електронну адресу тут
    $subject = "New Form Submission";
    $message = "Name: $name\nContact: $contact\n\nMessage:\n$request";
    $headers = "From: $name <$contact>";

    if (mail($to, $subject, $message, $headers)) {
        echo "Ваше повідомлення успішно відправлено.";
    } else {
        echo "Виникла помилка під час відправки вашого повідомлення.";
    }
} else {
    echo "Invalid request.";
}
?>