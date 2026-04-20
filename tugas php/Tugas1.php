<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>From Nilai</title>
</head>
<body>
    <form action="Tugas1.php" method="post">
        <label for="Nama">Masukkan Nama :</label>
        <input type="text" id="Nama" name="Nama" required><br><br>

        <label for="Email">Masukkan Email :</label>
        <input type="text" id="Email" name="Email" required><br><br>

        <label for="nilai">Masukkan Nilai  :</label>
        <input type="number" id="nilai" name="nilai" required><br><br>
        <input type="submit" value="Submit">
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $Nama = $_POST['Nama'];
            $Email = $_POST['Email'];
            $nilai = $_POST['nilai'];

            echo "<h2>Hasil Input:</h2>";
            echo "Nama: " . $Nama . "<br>";
            echo "Email: " . $Email . "<br>";
            echo "Nilai: " . $nilai . "<br>";

            if ($nilai > 70) {
                echo "Lulus";
            } else {
                echo "Tidak Lulus";
            }
        }
    ?>
</body>
</html>