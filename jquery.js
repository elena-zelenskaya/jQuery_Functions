jQuery(function () {
    $("#addClass").on("click", function () {
        $("#1").addClass("fancy");
    });
    $("#removeClass").on("click", function () {
        $("#1").removeClass("fancy");
    });
    $("#hideContent").on("click", function () {
        $("#2").hide();
    });

    $("#showContent").on("click", function () {
        $("#2").show();
    });
    $("#toggleContent").on("click", function () {
        $("#3").toggle();
    });
    $("#slideToggleContent").on("click", function () {
        $("#4").slideToggle(2000);
    });
    $("#slideDown").on("click", function () {
        $("#5").slideDown('slow', function () {
            $(this).css({
                "background-color": "blanchedalmond",
                "border": "2px dashed #00A6A6",
            });
        });
    });
    $("#slideUp").on("click", function () {
        $("#5").slideUp("slow");
    });
    $("#fadeIn").on("click", function () {
        $("#6").fadeIn(2000);
    });
    $("#fadeOut").on("click", function () {
        $("#6").fadeOut(2000);
    });

    $("#beforeContent").on("click", function () {
        $("#7 p:first").before("<p class='addition'>I was added before the first paragraph.</p>");
    });
    $("#afterContent").on("click", function () {
        $("#7 p:last-child").after("<p class='addition'>I was added after the last paragraph.</p>");
    });

    $("#prependContent").on("click", function () {
        $("#8 p:first").prepend("<span class='addition'>I was prepended to the first paragraph.</span>");
    });
    $("#appendContent").on("click", function () {
        $("#8 p:last-child").append("<span class='addition'>I was appended to the last paragraph.</span>");
    });
    $("#htmlContent").on("click", function () {
        $("#9 div:first-child").html("<p class='fancy'>I am a fancy paragraph.</p>");
    });
    $("#textContent").on("click", function () {
        $("#9 div:last-child").text("<p class='fancy'>I am a plain paragraph and my tags don't work!</p>");
    });
    $("#getAttr").on("click", function () {
        $("#10a .addition").text($("#10b").attr("title"));
    });
    $("#setAttr").on("click", function () {
        $("#10b").attr("src", "img/chocolate.jpg");
    });
    $("#getVal").on("click", function () {
        $("#11a .addition").text($("#11b").val());
    });
    $("#setVal").on("click", function () {
        $("#11b").val("So much greater value");
    });
});
