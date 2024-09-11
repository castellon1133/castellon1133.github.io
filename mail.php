


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validación básica
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Hubo un problema con tu envío. Asegúrate de llenar todos los campos.";
        exit;
    }

    // Enviar correo
    $to = "castellon2160@gmail.com"; // Cambia esto por tu dirección de correo
    $subject = "Nuevo mensaje de contacto de $name";
    $email_content = "Nombre: $name\n";
    $email_content .= "Correo: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        echo "Hubo un error al enviar el mensaje. Inténtalo más tarde.";
    }
}
?>
