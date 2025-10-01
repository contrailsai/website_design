"use server"

const write_message_to_slack = async (data) => {
    // --- Part 1: Find Writable Channels (Your code is already great here) ---
    const CONVERSATIONS_LIST_URL = "https://slack.com/api/conversations.list";

    const headers = {
        "Authorization": `Bearer ${process.env.SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json"
    };

    const params = {
        'types': 'public_channel,private_channel',
        'limit': 200 // Good practice to add a limit to get more channels if needed
    };

    const queryString = new URLSearchParams(params).toString();
    const urlWithParams = `${CONVERSATIONS_LIST_URL}?${queryString}`;

    try {
        const listResp = await fetch(urlWithParams, {
            method: 'GET',
            headers: headers
        });

        const listData = await listResp.json();

        if (!listData.ok) {
            console.error("Slack API Error (conversations.list):", listData.error);
            return { success: false, error: listData.error };
        }

        const writeable_channels = listData.channels.filter(channel => channel.is_member);
        
        if (writeable_channels.length === 0) {
            console.warn("Bot is not a member of any channels.");
            return { success: false, error: "Bot is not a member of any channels." };
        }

        console.log(`Found ${writeable_channels.length} channels to post to.`);

        // --- Part 2: Post a message to each channel (Corrected loop) ---
        const POST_MESSAGE_URL = "https://slack.com/api/chat.postMessage";

        for (const channel of writeable_channels) {
            const body = {
                "channel": channel.id,
                "text": data
            };

            const postResp = await fetch(POST_MESSAGE_URL, {
                // FIX 1: Method must be POST
                method: 'POST', 
                headers: headers,
                // FIX 2: Body must be a JSON string
                body: JSON.stringify(body) 
            });

            // FIX 3: Always check the response of your post request
            const postData = await postResp.json();
            if (!postData.ok) {
                console.error(`Failed to post to channel ${channel.name} (${channel.id}):`, postData.error);
                // You could choose to continue or stop here. We'll continue.
            } else {
                console.log(`Successfully posted message to channel: ${channel.name}`);
            }
        }

        return { success: true };

    } catch (error) {
        console.error("Failed to fetch from Slack API:", error);
        return { success: false, error: 'Network request failed' };
    }
}

export { write_message_to_slack };