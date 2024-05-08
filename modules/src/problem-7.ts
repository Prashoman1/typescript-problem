{

    const logString = (input:unknown):void => {
        if (typeof input === "string") {
            console.log(input);
        } else {
            throw new Error("Input is not a string.");
        }
    }
    // sample input 1
    logString("Hello, TypeScript!");

    // sample input 2
    // logString(42)
    
  

}