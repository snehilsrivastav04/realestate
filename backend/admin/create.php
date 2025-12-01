<?php
include_once '../db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $location = $_POST['location'];
    $sector = $_POST['sector'];
    $image = $_POST['image'];
    $beds = $_POST['beds'];
    $baths = $_POST['baths'];
    $sqft = $_POST['sqft'];
    $badges = $_POST['badges'];
    $rating = $_POST['rating'];
    $agent_name = $_POST['agent_name'];
    $agent_image = $_POST['agent_image'];

    $sql = "INSERT INTO properties (title, location, sector, image, beds, baths, sqft, badges, rating, agent_name, agent_image) 
            VALUES ('$title', '$location', '$sector', '$image', '$beds', '$baths', '$sqft', '$badges', '$rating', '$agent_name', '$agent_image')";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php?message=created");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Add New Property</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1>Add New Property</h1>
        <form method="post" class="mt-4">
            <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" name="location" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Sector</label>
                <input type="text" name="sector" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" name="image" class="form-control">
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label>Beds</label>
                    <input type="number" name="beds" class="form-control">
                </div>
                <div class="form-group col-md-4">
                    <label>Baths</label>
                    <input type="number" name="baths" class="form-control">
                </div>
                <div class="form-group col-md-4">
                    <label>Sqft</label>
                    <input type="number" name="sqft" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label>Badges (comma-separated)</label>
                <input type="text" name="badges" class="form-control">
            </div>
            <div class="form-group">
                <label>Rating</label>
                <input type="number" step="0.1" name="rating" class="form-control">
            </div>
            <div class="form-group">
                <label>Agent Name</label>
                <input type="text" name="agent_name" class="form-control">
            </div>
            <div class="form-group">
                <label>Agent Image URL</label>
                <input type="text" name="agent_image" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <a href="index.php" class="btn btn-secondary">Cancel</a>
        </form>
    </div>
</body>
</html>
<?php
$conn->close();
?>
