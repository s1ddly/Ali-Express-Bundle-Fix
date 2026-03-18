//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// Bookmarklet Script
// v1.0: Sid Shardanand - 20260318
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
preText = "https://www.aliexpress.com/item/";
if (window.location.href.startsWith("https://www.aliexpress.com/ssr/")) {
	try {
		productId = window.location.href.split("productIds=")[1].split(":")[0];
		window.location.replace(preText + productId + ".html");
	} catch {
		alert("Error with parsing URL\nHelp: sidshardanand.com");
	}
} else {
	alert("Not an aliexpress bundle URL!");
}