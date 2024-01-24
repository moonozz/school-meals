import { ReactNode } from "react";

interface ModalStoreType {
  // modal: boolean | ReactNode;
  modal: boolean;
  modalType: string;
  cityName: string;
  cityCode: string;
  date: Date;
  schoolName: string;
  // date: string;
}

export default ModalStoreType;
