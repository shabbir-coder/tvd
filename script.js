const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

let currentChapter = 0;

const chapters = [
  {
    text: "You’ve lived in this neighborhood for years, and one day, a new boy moves in next door. You hear he’s a software developer starting his career. You decide to welcome him by bringing some homemade food to his place. What do you do?",
    choices: [
      { text: "Knock on his door and introduce yourself.", nextChapter: 1 },
      { text: "Leave the food at his doorstep with a note.", nextChapter: 2 },
    ],
    image: "./assets/1.jpeg"
  },
  {
    text: "You knock on his door, and he answers with a smile. You introduce yourself and give him the food. He seems nice and thanks you warmly. Later some 2-3 days, you get a friend request from him on Instagram. What do you do?",
    choices: [
      { text: "Accept the request and send him a message.", nextChapter: 3 },
      { text: "Ignore the request for now.", nextChapter: 4 },
    ],
    image: "./assets/2.jpeg"
  },
  {
    text: "You leave the food at his doorstep with a note. Later, he sends you a friend request on Instagram. What do you do?",
    choices: [
      { text: "Accept the request.", nextChapter: 3 },
      { text: "Ignore the request and keep your distance.", nextChapter: 5 },
    ],
    image: "./assets/3.jpeg"
  },
  {
    text: "You accept his request and start chatting. He’s funny, kind, and shares you reels. One day, he shares that he likes you. What do you do?",
    choices: [
      { text: "Give him chance.", nextChapter: 6 },
      { text: "Sorry I have a boyfriend.", nextChapter: 7 },
    ],
    image: "./assets/4.jpeg"
  },
  {
    text: "You ignore his request, but a week later, he shows up at your doorstep with a thank-you note for the food. He asks if you’d like to grab coffee sometime. What do you do?",
    choices: [
      { text: "Agree and go for coffee.", nextChapter: 8 },
      { text: "Politely decline.", nextChapter: 9 },
    ],
    image: "./assets/5.jpeg"
  },
  {
    text: "You ignore his request and keep your distance. However, he doesn’t give up. He starts leaving small gifts at your doorstep, like flowers and handwritten notes. What do you do?",
    choices: [
      { text: "Finally give in and message him.", nextChapter: 10 },
      { text: "Continue ignoring him.", nextChapter: 11 },
    ],
    image: "./assets/6.jpeg"
  },
  {
    text: "You go to his place to watch the movie. It’s a fun evening, and you both enjoy each other’s company. He confesses that he’s had a crush on you since the day you brought him food. What do you do?",
    choices: [
      { text: "Admit you feel the same way.", nextChapter: 12 },
      { text: "Tell him you need more time.", nextChapter: 13 },
    ],
    image: "./assets/7.jpeg"
  },
  {
    text: "You suggest watching the movie at a café instead. He agrees, and the two of you have a great time. He opens up about his life and dreams, and you feel a connection growing. What do you do?",
    choices: [
      { text: "Plan another date with him.", nextChapter: 14 },
      { text: "Take things slow and stay friends for now.", nextChapter: 15 },
    ],
    image: "./assets/8.jpeg"
  },
  {
    text: "You agree to go for coffee, and the two of you hit it off. He’s charming and makes you laugh. He asks if you’d like to go on a proper date. What do you do?",
    choices: [
      { text: "Say yes and go on the date.", nextChapter: 16 },
      { text: "Tell him you’d like to stay friends for now.", nextChapter: 17 },
    ],
    image: "./assets/9.jpeg"
  },
  {
    text: "You politely decline, but he doesn’t give up. He starts showing up at your favorite spots, coincidentally running into you. Eventually, you give in and agree to spend time with him. What do you do?",
    choices: [
      { text: "Go on a date with him.", nextChapter: 18 },
      { text: "Keep things casual but friendly.", nextChapter: 19 },
    ],
    image: "./assets/10.jpeg"
  },
  {
    text: "You finally message him, and he’s thrilled. He invites you to a picnic in the park. What do you do?",
    choices: [
      { text: "Go on the picnic.", nextChapter: 20 },
      { text: "Decline but suggest another activity.", nextChapter: 21 },
    ],
    image: "./assets/11.jpeg"
  },
  {
    text: "You continue ignoring him, but one day, he writes you a heartfelt letter about how much he admires you. It touches your heart, and you decide to give him a chance. What do you do?",
    choices: [
      { text: "Message him and start talking.", nextChapter: 22 },
      { text: "Meet him in person to talk.", nextChapter: 23 },
    ],
    image: "./assets/12.jpeg"
  },
  {
    text: "You admit you feel the same way, and the two of you start dating. He’s thoughtful, caring, and always makes you feel special. Years later, he proposes, and you say yes. You live happily ever after. 💖",
    choices: [],
    image: "./assets/13.jpeg"
  },
  {
    text: "You tell him you need more time, but he’s patient and continues to show his love. Eventually, you realize he’s the one for you, and you both start dating. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/14.jpeg"
  },
  {
    text: "You plan another date, and your relationship blossoms. He’s everything you’ve ever wanted, and you both decide to take the next step. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/14.jpeg"
  },
  {
    text: "You take things slow, but over time, your feelings grow stronger. He’s patient and understanding, and eventually, you both start dating. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/14.jpeg"
  },
  {
    text: "You go on the date, and it’s magical. He’s everything you’ve ever dreamed of, and you both decide to take the next step. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/14.jpeg"
  },
  {
    text: "You tell him you’d like to stay friends, but he’s persistent and continues to show his love. Eventually, you realize he’s the one for you, and you both start dating. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/14.jpeg"
  },
  {
    text: "You go on a date with him, and it’s everything you’ve ever wanted. He’s kind, funny, and makes you feel special. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/14.jpeg"
  },
  {
    text: "You keep things casual, but over time, your feelings grow stronger. He’s patient and understanding, and eventually, you both start dating. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/20.jpeg"
  },
  {
    text: "You go on the picnic, and it’s a beautiful day. He confesses his feelings for you, and you realize you feel the same way. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/21.jpeg"
  },
  {
    text: "You decline the picnic but suggest another activity. He agrees, and the two of you grow closer. Eventually, you start dating, and years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/22.jpeg"
  },
  {
    text: "You message him, and the two of you start talking. He’s kind, funny, and makes you feel special. Eventually, you start dating, and years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/23.jpeg"
  },
  {
    text: "You meet him in person to talk, and he pours his heart out to you. You realize how much he cares, and you decide to give him a chance. Years later, you get married and live happily ever after. 💖",
    choices: [],
    image: "./assets/24.jpeg"
  }
];

function showChapter(chapterIndex) {
  const chapter = chapters[chapterIndex];
  storyElement.innerHTML = `
    <p>${chapter.text}</p>
    ${chapter.image ? `<img src="${chapter.image}" alt="Story Image" style="width: 100%; border-radius: 10px; margin-top: 1rem;">` : ''}
  `;

  choicesElement.innerHTML = '';
  if (chapter.choices.length > 0) {
    chapter.choices.forEach(choice => {
      const button = document.createElement('button');
      button.innerText = choice.text;
      button.addEventListener('click', () => showChapter(choice.nextChapter));
      choicesElement.appendChild(button);
    });
  } else {
    const restartButton = document.createElement('button');
    restartButton.innerText = "Play Again";
    restartButton.addEventListener('click', () => showChapter(0));
    choicesElement.appendChild(restartButton);
  }
}

// Start the game
showChapter(currentChapter);