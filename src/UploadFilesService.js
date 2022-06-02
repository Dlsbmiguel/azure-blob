/* eslint-disable no-debugger */
import http from "./http-commons";
class UploadFilesService {
  upload(file) {
    return http.post("Blob", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new UploadFilesService();
