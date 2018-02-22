<?php

function postCodeQuery($town, $limit) {
// Include config file
require_once 'config.php';

// Attempt select query execution
$sql = "call PostCodeQueryTown('$town', $limit);";
if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>PostCode</th>";
		echo "<th>By</th>";
            echo "</tr>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
                echo "<td>" . $row['PostCode'] . "</td>";
		echo "<td>" . $row['Town'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        // Free result set
        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
}

postCodeQuery('bi', 10);
?>