// Standard if/else
if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

// Standard ternary operator
let message = isAllowed ? "Welcome" : "Denied";

// Standard try/catch and throw
try {
    throw new Error("Panic!!!")
} catch(err) {
    console.error("oh noes!!!", err)
}



// Standard switch
switch (browser) {
    case "Chrome":
    case "Firefox": {
        return "Good";
    }
    case "Edge": 
      return "Eh..."
      break;
    case 'Safari':
    case 'Opera':
      return "Okay we support these browsers too"
      break;
    default:
      return "Well, hope that this page looks ok!";
  }
