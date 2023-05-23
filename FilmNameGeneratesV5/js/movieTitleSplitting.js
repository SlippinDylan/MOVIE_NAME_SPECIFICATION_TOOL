$(document).ready(function() {
    $("#splitButton").click(function() {
        var inputString = $("#inputString").val().trim();
        var substrings = inputString.split(/[-_.\s]+/);
        $("#result").empty();
        $.each(substrings, function(index, value) {
            var span = $("<span>").text(value + " ");
            var copySpan = $("<span>").addClass("copyable").text("(复制)");
            copySpan.click(function() {
                copyTextToClipboard(value);
            });
            span.append(copySpan);
            $("#result").append(span);
        });
    });

    function copyTextToClipboard(text) {
        var $tempInput = $("<input>");
        $("body").append($tempInput);
        $tempInput.val(text).select();
        document.execCommand("copy");
        $tempInput.remove();
    }
});
