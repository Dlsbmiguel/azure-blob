<template>
  <main>
    <form @submit="upload">
      <input type="file" @change="onChange" />
      <button type="submit">Upload</button>
      <p v-if="success === true">{{ message }}</p>
    </form>
  </main>
</template>

<script>
import { ref } from "vue";
import UploadFilesService from "../UploadFilesService";
import SignalRConnection from "../signalR";

const connection = SignalRConnection.connect();
connection.start();

export default {
  name: "upload-image",
  setup() {
    const file = ref("");
    const success = ref(false);
    const message = ref("");

    const onChange = (e) => {
      file.value = e.target.files[0];
    };

    const getFile = () => {
      let data = new FormData();
      data.append("file", file.value);
      const request = {
        ImageExample: file.value,
      };
      if (file.value === "") {
        alert("file must not be empty");
        return;
      }
      return request;
    };

    const upload = async (e) => {
      e.preventDefault();
      const file = getFile();
      try {
        const response = await UploadFilesService.upload(file);
        connection.invoke("SendMessage", response.data.uri);
        message.value = "Blob uploaded successfully";
        success.value = true;
      } catch (error) {
        message.value = error.message;
      }
    };
    return {
      onChange,
      upload,
      success,
      message,
    };
  },
};
</script>
