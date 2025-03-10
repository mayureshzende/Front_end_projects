addEventListener("DOMContentLoaded", () => {
  console.log("starting JS Logic after the content is loaded");

  // grabing the html elements
  const userInputName = document.getElementById("user-input");
  const userSearchButton = document.getElementById("search-user");
  const easyQuestionType = document.getElementById("easy-question-type");
  const mediumQuestionType = document.getElementById("medium-question-type");
  const hardQuestionType = document.getElementById("hard-question-type");
  const statsGraph = document.querySelector(".statsGraph");
  const easyprogress = document.querySelector(".easy-progress");
  const mediumprogress = document.querySelector(".medium-progress");
  const hardprogress = document.querySelector(".hard-progress");
  const userInfo = document.querySelector(".user-info");
  statsGraph.style.setProperty("display", "None");
  // userInfo.style.setProperty("display", "None");
  userInfo.classList.remove("user-info");
  let userName = "";
  function validateUser() {
    console.log(!userInputName.value);
    if (!userInputName.value) {
      window.alert("user name should not be empty");
      return false;
    }
    return true;
  }

  function updateProgress(solved, total, circle) {
    const progressDegree = (solved / total) * 100;
    circle.style.setProperty("--p", `${progressDegree}`);
  }
  function userstats(solvequestions) {
    userInfo.classList.add("user-info");

    userInfo.innerHTML = solvequestions
      .map(
        (data) => `
        <div class="card">
        <h3> ${data.count}</h3>
        <p>${data.difficulty} </p>
        </div>
      `
      )
      .join("");
  }
  function showUserData(data) {
    if (data.msg) {
      console.log("no user found111");
      console.log(data.errors[0].message);
      userInfo.classList.remove("user-info");
      userInfo.innerHTML = `<p>${data.errors[0].message} <p>`;
      statsGraph.style.setProperty("display", "None");
      return;
    }
    statsGraph.style.setProperty("display", "flex");
    statsGraph.style.setProperty("gap", "10px");
    statsGraph.style.setProperty("justify-content", "space-evenly");
    const userdata = data.data;
    allQuestions = userdata.allQuestionsCount;
    totalQuestionsCount = allQuestions[0].count;
    easytotalquestion = allQuestions[1].count;
    mediumtotalquestion = allQuestions[2].count;
    hardtotalquestion = allQuestions[3].count;

    solveQuestions = userdata.matchedUser.submitStats.acSubmissionNum;
    totalSolveQuestion = solveQuestions[0].count;

    easySolved = solveQuestions[1].count;
    mediumSolved = solveQuestions[2].count;
    hardSolved = solveQuestions[3].count;

    easyQuestionType.textContent = `${easySolved} / ${easytotalquestion}`;
    updateProgress(easySolved, easytotalquestion, easyprogress);
    mediumQuestionType.textContent = `${mediumSolved} / ${mediumtotalquestion}`;
    updateProgress(mediumSolved, mediumtotalquestion, mediumprogress);
    hardQuestionType.textContent = `${hardSolved} / ${hardtotalquestion}`;
    updateProgress(hardSolved, hardtotalquestion, hardprogress);
    userstats(solveQuestions);
  }
  async function fetchUserData() {
    const Proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://leetcode.com/graphql/";
    const finalUrl = Proxy + url;
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    const graphql = JSON.stringify({
      query:
        "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
      variables: { username: `${userName}` },
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
    };

    try {
      userSearchButton.style.display = "None";
      const response = await fetch(finalUrl, requestOptions);
      const data = await response.json();
      console.log(data);

      if (!data.errors) {
        console.log(!data.errors);
        showUserData(data);
        // userstats(data);
      } else {
        // console.log("no user found");
        let errors = data.errors;
        showUserData({ msg: "No user found ", errors: errors });
      }
    } catch (error) {
      console.log("some error occured ", error);
    } finally {
      userSearchButton.style.display = "Block";
    }
  }
  userSearchButton.addEventListener("click", (event) => {
    console.log("button clicked");
    console.log(userInputName.value);
    if (validateUser()) {
      userName = userInputName.value.trim();
      fetchUserData(userName);
    } else {
      console.log("user name is empty");
    }
  });
});
