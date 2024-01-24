import { ReactNode } from "react";

interface ModalStoreType {
  // modal: boolean | ReactNode;
  modal: boolean; // 모달 뜰지 말지 상태
  modalType: string; // 어떤 모달 뜰지
  cityName: string; // 지역 이름
  cityCode: string; // 지역 코드
  // date: Date; // 선택한 날짜
  date: string; // 선택한 날짜
  inputSchoolName: string; // 검색 버튼 눌렀을 때 input에 입력된 학교 이름
  schoolSearchBtn: boolean; // input 에서 검색버튼 눌렀는지 안눌렀는지
  chooseSchoolName: string; // 선택한 학교 이름
  chooseSchoolCode: string; // 선택한 학교 코드
  // date: string;
}

export default ModalStoreType;
