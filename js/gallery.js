// JavaScript for Gallery Component
    (function () {
      const wrapper = document.getElementById("gallery-wrapper-eg-q8n0d3a8t");
      if (!wrapper) return;

      const columns = wrapper.querySelectorAll(".gallery-column");

      columns.forEach((column) => {
        column.addEventListener("click", function (e) {
          const isExpanded = this.classList.contains("expanded");

          // Remove expanded from all columns
          columns.forEach((c) => c.classList.remove("expanded"));
          wrapper.classList.remove("has-expanded");

          // If this wasn't expanded, expand it (lock it open)
          if (!isExpanded) {
            this.classList.add("expanded");
            wrapper.classList.add("has-expanded");
            // Prevent link navigation on first click
            const link = this.querySelector("a");
            if (link) e.preventDefault();
          }
        });
      });
    })();
 