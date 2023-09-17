import React from 'react'

// ENUMIRATION IN TS
enum UserRole {
	CEO = "ceo",
	CTO = "cto",
	SUBORDINATE = "inferior-person",
}
type User = {
	firstName: string;
	age: number;
	isNice: boolean;
	role: UserRole;
	skills: string[];
	friends?: User[];
}
const user: User = {
	firstName: "Pat",
	age: 23,
	isNice: false,
	role: UserRole.CTO, // равняется "cto"
	skills: ["HTML", "CSS", "jQuery"],
}



// FUNCTION
// best practice for props component
type Usersth = {
	firstName: string;
	age: number;
	role: UserRole;
}
function fireUser({ firstName, age, role }: Usersth): Usersth {
	//  ...  //
	return { firstName, age, role }
}
//  //  //  //  //  //


// Различие interface и type 
// ::: интерфейс можно нативно расширять через extends




// REACT WITH TS

// Типизация useState через дженерик
const [names, setNames] = useState<string[]>([]);
setNames(["Pat", "Lisa"]);

