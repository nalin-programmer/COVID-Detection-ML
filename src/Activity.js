import React from "react";
import "./Activity.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const Activity = () => {
  const [image, setimage] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  var url = "";

  function PostData(e) {
    e.preventDefault();
    console.log("POSTING DATA...");
    const fileType = image["type"];
    const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validImageTypes.includes(fileType)) {
      // alert('invalid image format');
      toast.error("Invalid Image Type, Retry ?", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    var fileSize = image["size"];
    if (fileSize > 1000000) {
      //  alert('Photo Size Exceeds , Size must be less than 500Kb');
      toast.error("Photo Size Exceeds , Size must be less than 1MB", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    toast.info("Image Uploading ! Plese Wait !", {
      position: toast.POSITION.TOP_CENTER,
    });

    async function API() {
      const responce = await fetch("localhost/api", {
        method: "post",
        body: image,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success("Image Upload Sucessful ! Wait a Moment !", {
            position: toast.POSITION.TOP_CENTER,
          });
          // url = data.url;
          // console.log(url);
        })
        .catch((err) => {
          // console.log(err);
          toast.error("Image Upload Failed , Retry? ", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        });
    }
    API();
  }

  function handleChange(e) {
    setimage(e.target.files[0]);
    setimgUrl(URL.createObjectURL(e.target.files[0]));
    console.log("HHIII");
    console.log(image);
  }

  return (
    <div>
      <h2>Upload Image Here</h2>
      <p class="lead">{/* No Plugins <b>Just Javascript</b> */}</p>

      <form id="file-upload-form" class="uploader">
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          onChange={handleChange}
        />

        <label for="file-upload" id="file-drag">
          {imgUrl && (
            <div
              style={{
                textAlign: "center",
                margin: "auto",
                width: "220px",
                minHeight: "120px",
                maxHeight: "auto",
              }}
            >
              <img
                id="file-image"
                src={imgUrl}
                alt="Preview"
                style={{ width: "inherit" }}
              />
            </div>
          )}
          <div id="start">
            <i class="fa fa-download" aria-hidden="true"></i>
            <div>Select a file or drag here</div>
            <div id="notimage" class="hidden">
              Please select an image
            </div>
            <span id="file-upload-btn" class="btn btn-primary">
              Select a file
            </span>
          </div>
        </label>
        <span id="file-upload-btn" class="btn btn-primary" onClick={PostData}>
          Submit
        </span>
      </form>
      <br />
    </div>
  );
};
