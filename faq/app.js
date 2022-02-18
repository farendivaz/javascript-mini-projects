const questions = document.querySelectorAll(".accordion-q");
const faq = document.querySelector(".faq-cards");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const height = question.nextElementSibling.scrollHeight;
    if (question.parentElement.classList.contains("active")) {
      question.parentElement.classList.remove("active");
      question.nextElementSibling.style.maxHeight = "0px";
      return;
    }
    questions.forEach((q) => {
      q.parentElement.classList.remove("active");
      q.nextElementSibling.style.maxHeight = "0px";
    });
    question.parentElement.classList.add("active");
    question.nextElementSibling.style.maxHeight = `${height}px`;
  });
});
