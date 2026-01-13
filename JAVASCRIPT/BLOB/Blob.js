// ? BLOB - a Blob (Binary Large Object) is an object that represents raw data, typically in the form of files, such as images, audio, or other binary data. Blobs are primarily used for handling file-like objects, allowing developers to read, manipulate, and store raw data in the browser.

// * Syntax - 
    const blob = new Blob(["Punit"], {type: "audio/mp3"});

    console.log(blob); 
    console.log(typeof blob); //Object
    
    // * 1. Reading Data from a Blob - You can read a Blob's content using the FileReader API:
    const reader = new FileReader();
    reader.onload = function(event){
        console.log(event.target.result);
    };
    reader.readAsText(blob);

    // * 2. Downloading a Blob - You can create a downloadable link for a Blob by using URL.createObjectURL. This method generates a URL that temporarily links to the Blob data:

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(blobUrl);

    // * 3. Pending...
    // fetch("image.jpg")
    // .then(response => response.blob())
    // .then(imageBlob => {
    //     const imgURL = URL.createObjectURL(imageBlob);
    //     document.getElementById("myImage").src = imgURL;  // Display the image
    // });
