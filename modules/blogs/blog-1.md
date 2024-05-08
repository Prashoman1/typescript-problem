
<!-- intersection types -->
Intersection types are a way in TypeScript to combine multiple types into one.Its work kind of javascript Logical And operator. Javascript Logical And operator syntex is: (&&) but TypeScript intersection syntex is. (&) almost same but working same.

Typescript intersection type used multiple type condition, where all condition is fullfilp.We can combine different type definitions and utilize existing ones by using intersection types. Although intersection and union types in Typescript are similar, they are used in very different ways.

Instersection type syntex:

type Variable1 = Variable2 & Variable2;


Example:
As we can see in the below example, here we have created two type named “User” and “Profesonal”. Now inside the User, we have created two fields named “user_id”, which is of number type, and “user_name”, which is of string type. And inside the Profesonal, we have also created two fields named “designation”, which is of string type, and “salary”, which is of number type. Next, we intersected the User and Profesonal type and stored it into UserInfo. Finally, values are retrieved from an object of the intersection type created.

type User = {
   user_id: number;
   user_name: string;
}

type Profesonal = {
   designation: string;
   salary: number;
}

type UserInfo = User & Profesonal;

let userInfoObj:UserInfo = {
    user_id : 1,
    user_name : "Badhon",
    designation : "junior Software Engr.",
    salary : 18,000

}

console.log(`
User id :${userInfoObj.user_id} 
User Name :${userInfoObj.user_name} 
User designation :${userInfoObj.designation} 
User Salary :${userInfoObj.salary} 
`);    

