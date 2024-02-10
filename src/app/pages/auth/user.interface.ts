export interface UserRresponse extends LoginReq {
    id?: any;
    eamil: string;
    firstname: string;
    lastname: string;
    gender: string;
    images: string;
    token?: string;
    exp: number;
    iat: number;

}


export interface LoginReq {
    username: string;
    password: string;
}


