import topicsData from "./topicsData.js";

console.log(topicsData);
// select elements
const number = document.querySelector(".number");
const topicList = document.querySelector(".topicList");

// select buttons
const btnRoll = document.querySelector(".btn-roll");
const btnReset = document.querySelector(".btn-reset");

function renderList(topics) {
  topics.forEach((topicData, index) => {
    const listElement = document.createElement("li");
    listElement.className = "topic";
    listElement.innerHTML = `${index + 1}. ` + topicData["topic"];
    topicList.append(listElement);
  });
}
renderList(topicsData);

function removeSelectedTopic() {
  const removeSelectedTopic = document.querySelector(".topicList .selected");
  if (removeSelectedTopic) {
    removeSelectedTopic.classList.remove("selected");
  }
  return;
}
btnRoll.addEventListener("click", function (e) {
  const topics = document.querySelectorAll(".topic");
  const topicNumber = topics.length;

  e.preventDefault();
  const ranNum = Math.trunc(Math.random() * topicNumber); // 0 ~ 2
  const selectedTopic = document.querySelector(
    `.topicList li:nth-child(${ranNum + 1})`
  );

  //   const removeSelectedTopic = document.querySelector(".topicList .selected");
  //   if (removeSelectedTopic) {
  //     removeSelectedTopic.classList.remove("selected");
  //   }
  removeSelectedTopic();
  selectedTopic.classList.add("selected");
  number.innerHTML = ranNum + 1;
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  removeSelectedTopic();
  number.innerHTML = "-";
  //   const removeSelectedTopic = document.querySelector(".topicList .selected");
});
