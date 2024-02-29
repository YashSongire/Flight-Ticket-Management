export class User {

	userid !: number;
	username !: string;
    usertype !: UserType ;
    userpassword !: string;
    userphone !: string;
    useremail !: string;
}

enum UserType {
    "Admin",
    "Customer"
}
