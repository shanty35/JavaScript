const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'JavaScript.md');

function formatDate12Hour(date) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${hours}:${minutes} ${ampm}`;
}

const now = new Date();
const formatted = formatDate12Hour(now);

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(
    /<p style="text-align:center; font-size:12px; color:gray;">Last updated:.*<\/p>/,
    `<p style="text-align:center; font-size:12px; color:gray;">Last updated: ${formatted}</p>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Timestamp updated to:', formatted);
