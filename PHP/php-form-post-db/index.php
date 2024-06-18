<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nombredb";

// Crear conexión
$conexion = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

function agregarUsuario($conexion, $nombre)
{
    $sql = "INSERT INTO usuarios (nombre) VALUES (?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("s", $nombre);
    $stmt->execute();
    $stmt->close();
}

function obtenerUsuarios($conexion)
{
    $sql = "SELECT id, nombre FROM usuarios";
    $resultado = $conexion->query($sql);
    $usuarios = [];

    if ($resultado->num_rows > 0) {
        while ($fila = $resultado->fetch_assoc()) {
            $usuarios[] = $fila;
        }
    }

    return $usuarios;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    if (!empty($nombre)) {
        agregarUsuario($conexion, $nombre);
        // Redirigir para evitar el reenvío del formulario al recargar
        header("Location: " . $_SERVER['PHP_SELF']);
        exit();
    } else {
        $error = "El nombre no puede estar vacío";
    }
}

$usuarios = obtenerUsuarios($conexion);
$conexion->close();
?>

<!DOCTYPE html>
<html>

<head>
    <title>Gestión de Usuarios</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ul {
            list-style: none;
            padding: 0;
        }
    </style>
</head>

<body>

    <h2>Añadir Usuario</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre">
        <input type="submit" value="Añadir">
    </form>

    <?php
    if (isset($error)) {
        echo "<p style='color:red;'>$error</p>";
    }
    ?>

    <h2>Lista de Usuarios</h2>
    <ul>
        <?php foreach ($usuarios as $usuario): ?>
            <li>ID: <?php echo htmlspecialchars($usuario['id']); ?> - Nombre:
                <?php echo htmlspecialchars($usuario['nombre']); ?>
            </li>
        <?php endforeach; ?>
    </ul>

</body>

</html>