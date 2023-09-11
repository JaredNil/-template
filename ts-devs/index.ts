const user = {
	firstName: "Pat",
	age: 23,
	isNice: false,
	role: "CTO",
	skills: ["HTML", "CSS", "jQuery"]
}

type User = {
	firstName: string;
	age: number;
	isNice: boolean;
	role: string;
	skills: string[];
}

type User2 = {
	// ...
	friends: User[];
}

const user2 = {
	firstName: "Pat",
	age: 23,
	isNice: false,
	role: "CTO",
	skills: ["CSS", "HTML", "jQuery"],
	friends: undefined,
}


enum UserRole {
	CEO = "ceo",
	CTO = "cto",
	SUBORDINATE = "inferior-person",
}
type User3 = {
	firstName: string;
	age: number;
	isNice: boolean;
	role: UserRole;
	skills: string[];
	friends?: User[];
}

const user3 = {
	firstName: "Pat",
	age: 23,
	isNice: false,
	role: UserRole.CTO, // равняется "cto"
	skills: ["HTML", "CSS", "jQuery"],
}




const fireUser = (firstName: string, age: number, isNice: boolean) => {
	// ...
}
function fireUser2({ firstName, age, isNice }: {
	firstName: string;
	age: number;
	isNice: boolean;
}) {
	// ...
}


type User4 = {
	firstName: string;
	age: number;
	role: UserRole;
}

function fireUser3({ firstName, age, role }: User) {
	// ...
}

