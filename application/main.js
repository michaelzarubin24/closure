const historyTracker = (function () {
  const history = [];

  function recordClick(block) {
    const timestamp = new Date().toLocaleString();
    history.push(`${block}, at ${timestamp}`);
  }

  function showHistory() {
    alert("History:\n\n" + history.join("\n"));
  }

  return {
    recordClick,
    showHistory,
  };
})();

document.getElementById("aboutUs").onclick = function () {
  historyTracker.recordClick("About us");
};

document.getElementById("videos").onclick = function () {
  historyTracker.recordClick("Videos");
};

document.getElementById("music").onclick = function () {
  historyTracker.recordClick("Music");
};

document.getElementById("history").onclick = function () {
  historyTracker.showHistory();
};
