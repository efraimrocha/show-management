document.getElementById("app").innerHTML = `
<br>
<h4>Carrggue o arquivo de neca que deseja converter;</h4>
<div>
<input class="btn btn-primary" type="file" id="fileInput" />
</div>
`;



const fileInput = document.querySelector("#fileInput");

const uploadFile = file => {
  console.log("Uploading file...");
  const API_ENDPOINT = "https://file.io";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  formData.append("file", file);
  request.send(formData);
};

fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});