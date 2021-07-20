export interface buttonListType {
  id: number;
  title: string;
}

export interface studentListType {
  check: boolean;
  stdtNumber: number;
  stdName: string;
  eightState: string;
  nineState: string;
  tenState: string;
}

export interface studentItemProps {
  student: any;
  key: number;
}

export interface subMenuProps {
  disable?: boolean;
  setDisable?: any;
  setSelectValue?: any;
}

export interface classbuttonSubMenuType {
  id: number;
}
