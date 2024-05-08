{

    // decalier the dynamic type of the array
    type GenricArr<T> = T[];

    // string type of array
    let arrString:GenricArr<string> = ["cherry", "banana", "apple"];
    // number type of array
    let arrNumber:GenricArr<number> = [10, 20, 30];

    let reverseArray  = <T> (num:T[]):T[]=>{
        return num.reverse();
    }
    let result = reverseArray<number>(arrNumber);
    console.log(result);
}