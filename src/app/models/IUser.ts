export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    gender: string;
    height: number;
    image: string;
    address: IAddress;
    age: number;
    bank: IBank;
    birthDate: string;
    bloodGroup: string
    company: ICompany;
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    hair: IHair;
    ip: string;
    macAddress: string;
    maidenName: string;
    university: string;
    phone: string;
    ssn: string;
    weight: number;
    userAgent: string;

}

interface IAddress {
    address: string;
    city: string;
    coordinates: Icoordinates;
    postalCode: string;
    state: string;
}
interface IBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
interface ICompany {
    address: ICompanyAddress;
    department: string;
    name: string;
    title: string;
}
interface ICompanyAddress {
    address: string;
    city: string;
    coordinates: Icoordinates;
    postalCode: string;
    state: string;
}
interface IHair {
    color: string;
    type: string;
}
interface Icoordinates {
    lat: string;
    lng: string;
}