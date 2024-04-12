var nameList = [
      "Naruto", "Luffy", "Sasuke", "Zoro","Sakura", "Nami", "Kakashi", "Usopp","Hinata", "Sanji", "Shikamaru",
    "Chopper", "Gaara", "Robin", "Rock Lee", "Franky", "Neji", "Brook", "Tenten", "Jinbe",
    "Ino", "Ace", "Madara", "Trafalgar D. Law", "Reyligh", "Minato", "Hancock", "Itachi Uchiha",
    "Jiraiya", "Killer Bee"
];
export const generateRandomName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateRandomMessage = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomText += charset[randomIndex];
    }
  
    return randomText;
  }
  
   
