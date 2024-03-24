function speedDetector(speed){
    let speedLimit=70;
    let demerits=5;
    let demeritPoints=1;
    let overSpeed=speed-speedLimit;
    let points=(overSpeed/demerits);
    let excess= 60;
    let highSpeed= speedLimit + excess

    if (speed<= speedLimit){
        console.log('Ok')
    }
    else if(speed >= highSpeed){
        console.log('Licence suspended')
    }
    else if(speed > speedLimit){
        console.log('Points', + points)
    }

    

    
}
speedDetector(240);