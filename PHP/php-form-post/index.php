<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Frutas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>

<body>
    <h1>Frutas</h1>

    <?php
    // Paso 1: Inicialización del array de frutas con frutas predefinidas
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['frutas_originales'])) {
        // Si se envió el formulario, actualizamos el array de frutas
        $frutas = $_POST['frutas_originales'];
        // Mostrar mensaje de éxito solo si se han actualizado las frutas
        echo "<p>Frutas modificadas correctamente.</p>";
    } else {
        $frutas = ['Manzana', 'Plátano', 'Naranja', 'Uva', 'Pera'];
    }

    // Paso 2: Agregar dos frutas adicionales al array
    $frutas[] = 'Kiwi';
    $frutas[] = 'Melón';

    // Paso 3: Eliminar la primera fruta del array
    $fruta_eliminada = array_shift($frutas);
    ?>

    <p>Se eliminó la fruta: <?php echo $fruta_eliminada; ?></p>

    <div style="display: flex; gap: 30px;">
        <div>
            <!-- Paso 4: Mostrar las frutas en una lista HTML -->
            <h2>Lista de frutas:</h2>
            <ul>
                <?php foreach ($frutas as $fruta): ?>
                    <li><?php echo $fruta; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div>
            <?php
            // Ordenar el array alfabéticamente
            natcasesort($frutas);
            ?>


            <!-- Paso 5: Mostrar las frutas ordenadas alfabéticamente -->
            <h2>Frutas ordenadas:</h2>
            <ul>
                <?php foreach ($frutas as $fruta): ?>
                    <li><?php echo $fruta; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <!-- Formulario para modificar frutas -->
    <h2>Modificar frutas:</h2>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" style="
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ">
        <?php for ($i = 0; $i < 5; $i++): ?>
            <label for="fruta_<?php echo $i; ?>">Fruta <?php echo $i + 1; ?>:</label>
            <input type="text" id="fruta_<?php echo $i; ?>" name="frutas_originales[]" required><br>
        <?php endfor; ?>

        <button type="submit" style="margin-left: 52px;">Guardar cambios</button>
    </form>

</body>

</html>