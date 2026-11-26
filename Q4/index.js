 // Get the chessboard container
        var board = document.getElementById("chessboard");

        // Apply CSS properties using JavaScript
        board.style.width = "400px";
        board.style.height = "400px";
        board.style.display = "grid";
        board.style.gridTemplateColumns = "repeat(8, 1fr)";
        board.style.gridTemplateRows = "repeat(8, 1fr)";
        board.style.border = "2px solid black";
        board.style.margin = "auto";

        // Create 64 squares
        for (var i = 0; i < 64; i++) {

            var square = document.createElement("div");

            var row = Math.floor(i / 8);
            var col = i % 8;

            // Apply alternate colors
            if ((row + col) % 2 == 0) {
                square.style.backgroundColor = "white";
            }
            else {
                square.style.backgroundColor = "black";
            }

            // Add square to chessboard
            board.appendChild(square);
        }