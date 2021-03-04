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
    calculateWindSpeed(){ //Skew the random number towards lower numbers
        this.windSpeed = Math.floor(Math.pow(Math.random(),2)*100);
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
        if(this.temperature < 32){ 
            while(this.windSpeed > 50){ //Winds cannot be too fast for winter
                this.calculateWindSpeed();
            }
        }else{
            this.calculateWindSpeed();
        }   

        this.calculateWindDirection();
        this.calculatePrecipitation();

        if(this.temperature > 75 && this.windSpeed > 39){ //Tropical storm/Hurricane i.e must be raining
            this.precipitation = 'Rain';
        }else if(this.temperature > 32){ //Too hot to snow or sleet
            while(this.precipitation === 'Snow' || this.precipitation === 'Sleet'){
                this.calculatePrecipitation();
            }
        }else if(this.temperature < 32){ //Too cold to rain
            while(this.precipitation === 'Rain'){
                this.calculatePrecipitation();
            }
        }else{
            this.calculatePrecipitation();
        }

    },
    formMessage(){
        let msg =  `On ${this.day} the temperature will be ${this.temperature}.`;
        if(this.windSpeed < 39){
            msg += `There will be winds at ${this.windSpeed}MPH from the ${this.windDirection}.`;
            console.log(this.precipitation);
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

        }else if(this.windSpeed > 38 && this.windSpeed < 74){ //Tropical storm, precipitation implied
            
            msg += `There will be a tropical storm with sustained winds of ${this.windSpeed}MPH.`;

        }else{//Hurricane, precipitation implied
         
            msg += `There will be a hurricane with sustained winds of ${this.windSpeed}MPH.`;
        }

        return msg;
    }
};

messageParts.calculateAspects();
console.log(messageParts.formMessage());