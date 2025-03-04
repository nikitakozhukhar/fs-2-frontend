import { create } from 'zustand';

interface IDocumentData {
  series: string,
  number: string,
}

interface IFormData {
  category: string,
  firstName: string,
  secondName: string,
  patronymic: string,
  gender: string,
  birthDate: string,
  mobility: boolean,
  documentType: string,
  documentData: IDocumentData
}

interface IPersonInfo {
  personData: IFormData,
  setPersonData: (data: IFormData) => void,
}

const usePersonInfoStore = create<IPersonInfo>((set) => ({
  personData: {
    category: 'adult',
    firstName: '',
    secondName: '',
    patronymic: '',
    gender: '',
    birthDate: '',
    mobility: false,
    documentType: 'passport',
    documentData: {
      series: '',
      number: '',
    },
  },
  setPersonData: (data) => set({ personData: data }),
}));

export default usePersonInfoStore;