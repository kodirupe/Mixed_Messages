//Types of precipitation
const precipitation = ['Rain','Snow','Sleet','Hail','Cloudy','Sunny'];

//Days of the week
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//Direction of the wind
const windDirection = ['N','W','E','S','NW','NE','SW','SE'];

//Contains aspects of the message
const messageParts = {
    temperature : 0,
    windSpeed: 0,
    windDirection : '',
    precipitation : '',
    day : '',
    calculateTemperature(){
        this.temperature = Math.floor(Math.random() * 131); 
    },
    calculateWindSpeed(){
        this.windSpeed = Math.floor(Math.random() * 100);
    },
    calculateWindDirection(){
        this.windDirection = windDirection[Math.floor(Math.random()*windDirection.length)];
    },
    calculatePrecipitation(){
        this.precipitation = precipitation[Math.floor(Math.random()*precipitation.length)];
    },
    calculateDay(){
        this.day = daysOfWeek[Math.floor(Math.random()*daysOfWeek.length)];
    },
    calculateAspects(){ //Calculates all of aspects of the message
        this.calculateDay();
        this.calculateTemperature();
        this.calculateWindSpeed();
        this.calculateWindDirection();
        this.calculatePrecipitation()
    },
    formMessage(){
        let msg =  `On ${this.day} the temperature will be ${this.temperature}.`;
        if(this.windSpeed < 39){
            msg += `There will be winds at ${this.windSpeed}MPH from the ${this.windDirection}.`;
            
            switch(this.precipitation){ //Add precipitation to the message
                case 'Rain': msg += 'It will also be raining.';
                break;

                case 'Snow' : msg += 'It will also be snowing.';
                break;

                case 'Sleet' : msg += 'It will also be sleeting.';
                break;
                
                case 'Hail' : msg += 'It will also be hailing.';
                break;

                case 'Cloudy': msg += 'It will be cloudy.';
                break;

                case 'Sunny': msg += 'It will be bright and sunny outside.';
                break;

            }

        }else if(this.windSpeed > 39 && this.windSpeed < 74){ //Tropical storm, precipitation implied
            
            msg += `There will be a tropical storm with sustained winds of ${this.windSpeed}MPH.`;

        }else{//Hurricane, precipitation implied
         
            msg += `There will be a hurricane with sustained winds of ${this.windSpeed}MPH.`;
        }

        return msg;
    }
};

messageParts.calculateAspects();
console.log(messageParts.formMessage());