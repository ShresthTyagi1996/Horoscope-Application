// let a = prompt("Enter your age");
// a=+a;
// alert("You can " + (a>=18?"drive, if you know how to drive.":"not drive, get a bus/local transport to your location.")); // This is now working

function getName(){
    const inputField = document.getElementById('name');
    const name = inputField.value;
    console.log(name);
    let character = name.charAt(0);
    return character;
}

function getHoroscope(){
    let horoscope = document.getElementById('horoscope');
    let character = getName();
    character = character.toLowerCase();
    switch(character){
        case "a":
            horoscope.textContent = "Adventure awaits! Embrace new challenges with confidence and a positive mindset. Your determination will lead to success.";
            break;
        case "b":
            horoscope.textContent = "Balance is key. Take time to nurture both your personal and professional relationships. Trust your intuition.";
            break;
        case "c":
            horoscope.textContent = "Creativity will flow effortlessly. Channel your artistic energy into projects that bring you joy. Collaboration will be fruitful.";
            break;
        case "d":
            horoscope.textContent = "Determination drives you forward. Stay focused on your goals, and don't let minor setbacks discourage you. Success is within reach.";
            break;
        case 'e':
            horoscope.textContent = "Embrace change with open arms. New opportunities are on the horizon. Your adaptability will be your greatest asset.";
            break;
        case "f":
            horoscope.textContent = "Foster connections with those around you. Strong relationships will provide support and encouragement. Share your wisdom freely.";
            break;
        case "g":
            horoscope.textContent = "Growth is inevitable. Embrace learning experiences and be open to new perspectives. Your hard work will pay off.";
            break;
        case "h":
            horoscope.textContent = "Harmony is within your grasp. Strive for balance in all areas of your life. Take time for self-care and reflection.";
            break;
        case "i":
            horoscope.textContent = "Inspiration strikes when you least expect it. Keep an open mind and be ready to seize opportunities. Your creativity knows no bounds.";
            break;
        case "j":
            horoscope.textContent = "Journey ahead with optimism. New experiences and adventures await. Trust in your abilities and take bold steps forward.";
            break;
        case "k":
            horoscope.textContent = "Kindness will guide you. Offer support and compassion to those in need. Your generosity will be rewarded.";
            break;
        case "l":
            horoscope.textContent = "Love surrounds you. Strengthen your bonds with loved ones and cherish the moments you share. Your heart will lead the way.";
            break;
        case "m":
            horoscope.textContent = "Motivation fuels your endeavors. Stay focused on your ambitions and work diligently towards your goals. Success is on the horizon.";
            break;
        case 'n':
            horoscope.textContent = "New beginnings are coming. Embrace change and be open to fresh starts. Your resilience will see you through.";
            break;
        case "o":
            horoscope.textContent = "Opportunities abound. Keep your eyes open for chances to grow and learn. Your enthusiasm will attract positivity.";
            break;
        case "p":
            horoscope.textContent = "Patience is a virtue. Take your time and trust the process. Your perseverance will lead to rewarding outcomes.";
            break;
        case "q":
            horoscope.textContent = "Quest for knowledge. Seek out new learning experiences and expand your horizons. Your curiosity will be your guide.";
            break;
        case "r":
            horoscope.textContent = "Resilience is your strength. Overcome obstacles with grace and determination. Your inner power will carry you through.";
            break;
        case "s":
            horoscope.textContent = "Serenity is within reach. Find peace in the present moment and let go of past worries. Your calm demeanor will inspire others.";
            break;
        case "t":
            horoscope.textContent = "Triumph is near. Stay focused on your goals and celebrate your achievements. Your hard work will be recognized.";
            break;
        case "u":
            horoscope.textContent = "Unity brings strength. Collaborate with others and work towards common goals. Your team spirit will lead to success.";
            break;
        case "v":
            horoscope.textContent = "Vitality will energize you. Embrace a healthy lifestyle and take care of your well-being. Your positive energy will be contagious.";
            break;
        case 'w':
            horoscope.textContent = "Wisdom guides you. Trust in your experiences and share your insights with others. Your knowledge will be highly valued.";
            break;
        case "x":
            horoscope.textContent = "Excitement is in the air. Embrace new adventures and be open to unexpected surprises. Your spontaneity will lead to joy.";
            break;
        case "y":
            horoscope.textContent = "Yearn for growth. Pursue your passions and strive for self-improvement. Your dedication will bring you fulfillment.";
            break;
        case "z":
            horoscope.textContent = "Zeal drives you forward. Approach life with enthusiasm and a can-do attitude. Your positivity will inspire those around you.";
            break;
        default:
            horoscope.textContent = "Enter a valid name!";
        
    }

}

