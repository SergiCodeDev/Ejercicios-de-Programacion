<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$nombre = $_POST['nombre'];
$numero1 = $_POST['numero1'];
$numero2 = $_POST['numero2'];
$resultado_num = $numero1 + $numero2;
$resultado = sprintf("%.2f",$resultado_num);

$iva = $resultado_num * 0.21;
$iva = sprintf("%.2f",$iva);
?><h3><?php echo "El nombre introducido es: " . $nombre . "<br>"; ?></h3>
<h3><?php echo "La suma de los numeros es: " . $resultado; ?></h3>
<h3><?php echo "El IVA del 21% es: " . $iva; ?></h3>
<?php
}
?>

<!-- Formulario HTML -->
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
<label for="numero1">Introduce primer numero:</label>
<input type="number" id="numero1" name="numero1" step="0.01">
<label for="numero2">Introduce segundo numero:</label>
<input type="number" id="numero2" name="numero2" step="0.01">
<input type="submit" value="Enviar">
</form>

</body>
</html>