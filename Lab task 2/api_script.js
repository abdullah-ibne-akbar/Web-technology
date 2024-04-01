$(document).ready(function() {
    // Function to fetch data from the Chuck Norris Jokes API
    function fetchData() {
        $.get("https://api.chucknorris.io/jokes/random", function(data) {
            displayData(data);
        });
    }

    // Function to display data on the page
    function displayData(data) {
        var content = "<div class='joke'>";
        content += "<p>" + data.value + "</p>";
        content += "<button class='btn' id='new-joke'>Get Another Joke</button>";
        content += "</div>";
        $("#joke-container").html(content);

        // Add click event to fetch new joke
        $("#new-joke").click(function() {
            fetchData();
        });
    }

    // Fetch data when the page loads
    fetchData();
});
