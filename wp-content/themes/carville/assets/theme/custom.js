// alert("custom js");
document.addEventListener("DOMContentLoaded", function () {
    const newsletterInputID = document.getElementById("newsletterInputID");
    const tnp1 = document.getElementById("tnp-1");
    const newsletterSubmitID = document.getElementById("newsletterSubmitID");
    const newsletterFooter = document.getElementById("newsletterFooter");

    newsletterInputID.addEventListener("keyup", () => {
		tnp1.value = newsletterInputID.value;
    });

	newsletterSubmitID.addEventListener("click", () => {
		newsletterFooter.submit();
	});
});