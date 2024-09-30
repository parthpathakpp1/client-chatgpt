const response = await fetch('https://server-chatgpt-cyan.vercel.app/', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_API_KEY`  // Add this if needed
    },
    body: JSON.stringify({
        message: chat.map((message) => message.message).join(" \n ")
    })
});

if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.message || response.statusText}`);
}

const data = await response.json();
return data;
