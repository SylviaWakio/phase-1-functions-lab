let result = 0;
function distanceFromHqInBlocks(strnum) {
    
    if (strnum > 42) {
    return strnum - 42;
    }
    else {
    return 42 - strnum;
    }
    
    //return result;
}
function distanceFromHqInFeet(strnum) {
   
        return distanceFromHqInBlocks(strnum) * 264;
         
}
function distanceTravelledInFeet(start, destination){
    if (destination < start)
    { return (start - destination) * 264;
    }
    return (destination - start) *264; 
}
function calculatesFarePrice(start, destination) {
    const distance  = distanceTravelledInFeet(start, destination);
    
    if (distance > 400)
    {
        if (distance <= 2000) {
            return (distance - 400) * 0.02;
        }
        if (distance > 2000 && distance < 2500) {
            return 25;
        }
        if (distance > 2500){
            return ("cannot travel that far");
        }
    } 
    else {
        return 0;
    }