import { message } from "antd";
import { RcFile } from "antd/es/upload";

export const verifyFiletypeAndSize = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }

    const isFileOver2MB = file.size / 1024 / 1024 < 2;

    if (!isFileOver2MB) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isFileOver2MB;
  };
  