var sum = 0
var storyCount = 0

$(".ghx-selected").each(function() {

	$(this).find(".ghx-estimate").each(function () {
		
		$(this).find("aui-badge").each(function () {
			var spanTitle = $(this).attr("title")
			var spanText = $(this).text()

			if (spanTitle === "Story Points") {
				storyCount += 1

				if (!isNaN(spanText) && spanText.length !== 0) {
					var spanValue = parseFloat(spanText)

					if (!isNaN(spanValue)) {
						sum += spanValue;
					}
				}
			}
		})
		
	});
	
});

alert("Selected Stories: " + storyCount + "\n" + "Story Point Sum: " + sum)
