function myDownloadFile() {
    const myFileUrl = 'img.jpg'; 
    const myAnchorElement = document.createElement('a');
    myAnchorElement.href = myFileUrl;
    myAnchorElement.download = 'file.zip'; 
    document.body.appendChild(myAnchorElement);
    myAnchorElement.click();
    document.body.removeChild(myAnchorElement);
  }
  