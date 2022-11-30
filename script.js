// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada finibus ex, sit amet faucibus lorem. Fusce ligula augue, finibus sed arcu in, ornare scelerisque nisi. Duis sed urna ut purus consequat fringilla vitae vitae eros. Suspendisse ut vestibulum tortor...",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Nullam in scelerisque leo, id vestibulum orci. Vestibulum tempor eros a enim egestas, vel consectetur velit commodo. In id ipsum accumsan, sollicitudin urna sed, fermentum orci. Curabitur aliquet, neque ut viverra interdum, neque turpis fermentum mauris, id dapibus massa odio a ipsum.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Curabitur eu dolor dolor. Suspendisse et eleifend risus. Nam id imperdiet augue. Praesent magna leo, lobortis sed augue sit amet, vehicula porta risus. Quisque facilisis euismod tellus sit amet condimentum. Donec aliquet vestibulum diam, sed varius justo feugiat sed. Vivamus vel scelerisque neque.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Cras vulputate facilisis metus, vitae sagittis felis malesuada feugiat. Mauris condimentum velit vel massa mattis pretium. Praesent eleifend massa non molestie lobortis. Pellentesque et purus neque. Quisque vehicula sed odio ut sodales. Mauris faucibus lorem in ornare elementum. Quisque quis ante finibus lorem vulputate bibendum. . ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// value of 0 first item in array
// set starting item

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
