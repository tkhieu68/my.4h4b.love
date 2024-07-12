function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }
}

document.getElementById('create-vps-btn').addEventListener('click', function() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="loader"></span>
        </div>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'flex';

    setTimeout(function() {
        popup.innerHTML = `
            <div class="popup-content">
                <p>VPS created successfully!</p>
                <button id="close-popup-btn">Close</button>
            </div>
        `;
        document.getElementById('close-popup-btn').addEventListener('click', function() {
            popup.style.display = 'none';
            document.body.removeChild(popup);
        });
    }, 4000);
});
