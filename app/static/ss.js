
document.getElementById("sendBtn").onclick = sendMessage;
document.getElementById("inputBox").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});


function sendMessage() {
    let msg = document.getElementById("inputBox").value.trim();
    if (!msg) return;

    appendMessage(msg, "user");

    // --- Add Loading Animation ---
    let loadingDiv = appendLoading();

    fetch(`/chat/?message=${encodeURIComponent(msg)}`)
        .then(res => res.json())
        .then(data => {
            loadingDiv.remove();  // remove loading animation
            appendMessage(data.response, "bot");
        });

    document.getElementById("inputBox").value = "";
}

function appendMessage(text, sender) {
    let chatBox = document.getElementById("chat");

    let msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = text.replace(/\n/g, "<br>");

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    return msgDiv;
}

// --- Loading animation ---
function appendLoading() {
    let chatBox = document.getElementById("chat");

    let loadDiv = document.createElement("div");
    loadDiv.className = "loading-circle";

    loadDiv.innerHTML = `
        <div class="spinner"></div>
        <span class="loading-text">Typing...</span>
    `;

    chatBox.appendChild(loadDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    return loadDiv;
}
// Refresh