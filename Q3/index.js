function addTask() {

            var input = document.getElementById("taskInput");
            var task = input.value;

            if (task === "") {
                alert("Please enter a task");
                return;
            }

            var li = document.createElement("li");

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            var span = document.createElement("span");
            span.textContent = task;

            checkbox.onclick = function() {
                span.classList.toggle("completed");
            };

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.onclick = function() {
                li.remove();
            };

            var upBtn = document.createElement("button");
            upBtn.textContent = "↑";

            upBtn.onclick = function() {
                var previous = li.previousElementSibling;

                if (previous != null) {
                    li.parentNode.insertBefore(li, previous);
                }
            };

            var downBtn = document.createElement("button");
            downBtn.textContent = "↓";

            downBtn.onclick = function() {
                var next = li.nextElementSibling;

                if (next != null) {
                    li.parentNode.insertBefore(next, li);
                }
            };

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(upBtn);
            li.appendChild(downBtn);
            li.appendChild(deleteBtn);

            document.getElementById("taskList").appendChild(li);

            input.value = "";
        }