<?php
include_once '../db.php';

// Handle Delete
if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $sql = "DELETE FROM properties WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php?message=deleted");
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}

$sql = "SELECT * FROM properties";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1>Properties</h1>
            <a href="create.php" class="btn btn-primary">Add New Property</a>
        </div>

        <?php if(isset($_GET['message']) && $_GET['message'] == 'created'): ?>
            <div class="alert alert-success">Property created successfully!</div>
        <?php elseif(isset($_GET['message']) && $_GET['message'] == 'updated'): ?>
            <div class="alert alert-success">Property updated successfully!</div>
         <?php elseif(isset($_GET['message']) && $_GET['message'] == 'deleted'): ?>
            <div class="alert alert-success">Property deleted successfully!</div>
        <?php endif; ?>

        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($result->num_rows > 0): ?>
                    <?php while($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo $row["id"]; ?></td>
                            <td><?php echo $row["title"]; ?></td>
                            <td><?php echo $row["location"]; ?></td>
                            <td>
                                <a href="edit.php?id=<?php echo $row['id']; ?>" class="btn btn-sm btn-info">Edit</a>
                                <a href="index.php?delete=<?php echo $row['id']; ?>" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure you want to delete this item?');">Delete</a>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="4" class="text-center">No properties found</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
<?php
$conn->close();
?>
