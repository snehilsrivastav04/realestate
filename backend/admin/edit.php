<?php
include_once '../db.php';

$id = $_GET['id'];

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

    $sql = "UPDATE properties SET 
            title = '$title', 
            location = '$location', 
            sector = '$sector', 
            image = '$image', 
            beds = '$beds', 
            baths = '$baths', 
            sqft = '$sqft', 
            badges = '$badges', 
            rating = '$rating', 
            agent_name = '$agent_name', 
            agent_image = '$agent_image' 
            WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php?message=updated");
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

$sql = "SELECT * FROM properties WHERE id = $id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Property</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1>Edit Property</h1>
        <form method="post" class="mt-4">
            <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" class="form-control" value="<?php echo $row['title']; ?>" required>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" name="location" class="form-control" value="<?php echo $row['location']; ?>" required>
            </div>
            <div class="form-group">
                <label>Sector</label>
                <input type="text" name="sector" class="form-control" value="<?php echo $row['sector']; ?>" required>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" name="image" class="form-control" value="<?php echo $row['image']; ?>">
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label>Beds</label>
                    <input type="number" name="beds" class="form-control" value="<?php echo $row['beds']; ?>">
                </div>
                <div class="form-group col-md-4">
                    <label>Baths</label>
                    <input type="number" name="baths" class="form-control" value="<?php echo $row['baths']; ?>">
                </div>
                <div class="form-group col-md-4">
                    <label>Sqft</label>
                    <input type="number" name="sqft" class="form-control" value="<?php echo $row['sqft']; ?>">
                </div>
            </div>
            <div class="form-group">
                <label>Badges (comma-separated)</label>
                <input type="text" name="badges" class="form-control" value="<?php echo $row['badges']; ?>">
            </div>
            <div class="form-group">
                <label>Rating</label>
                <input type="number" step="0.1" name="rating" class="form-control" value="<?php echo $row['rating']; ?>">
            </div>
            <div class="form-group">
                <label>Agent Name</label>
                <input type="text" name="agent_name" class="form-control" value="<?php echo $row['agent_name']; ?>">
            </div>
            <div class="form-group">
                <label>Agent Image URL</label>
                <input type="text" name="agent_image" class="form-control" value="<?php echo $row['agent_image']; ?>">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            <a href="index.php" class="btn btn-secondary">Cancel</a>
        </form>
    </div>
</body>
</html>
<?php
$conn->close();
?>
