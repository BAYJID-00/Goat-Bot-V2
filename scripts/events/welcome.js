const { getTime, drive } = global.utils;

if (!global.temp.welcomeEvent) global.temp.welcomeEvent = {};

module.exports = {
  config: {
    name: "welcome",
    version: "2.0",
    author: "BaYjid",
    category: "events",
  },

  langs: {
    vi: {
      session1: "☀ 𝗦𝗮́𝗻𝗴 𝗱𝗮̂̀𝘂 𝗻𝗴𝗮̀𝘆",
      session2: "⛅ 𝗧𝗿𝘂̛𝗮 𝗽𝗵𝗮̂̀𝗻 𝗯𝗮𝗻𝗴",
      session3: "🌆 𝗖𝗵𝗶𝗲̂̀𝘂 𝗮𝗻 𝗮̉𝗺",
      session4: "🌙 𝗧𝗼̂́𝗶 𝗮𝗻 𝗹𝗮̀𝗻𝗴",
      welcomeMessage:
        "✨ 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 𝗯𝗮̣𝗻 đ𝗲̂́𝗻 𝘃𝗼̛́𝗶 𝗻𝗵𝗼́𝗺 𝗰𝘂̉𝗮 𝗰𝗵𝘂́𝗻𝗴 𝘁𝗼̂𝗶!\n" +
        "⚡ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘁: %1\n" +
        "🔍 𝗗𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: %1help 𝗱𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘀𝗮̆̃𝗻",
      multiple1: "🔹 𝗕𝗮̣𝗻",
      multiple2: "🔹 𝗖𝗮́𝗰 𝗯𝗮̣𝗻 𝘂̛𝗮 𝗵𝗼̣",
      defaultWelcomeMessage:
        "🎉 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝗼𝘂𝗿 𝗚𝗿𝗼𝘂𝗽! 🎉\n\n" +
        "✨ 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 {userNameTag} 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 『 {boxName} 』\n\n" +
        "🌟 𝗛𝗮̃𝘆 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗯𝘂𝗼̂̉𝗶 {session} 𝘃𝘂𝗶 𝘃𝗲̉ 𝘃𝗮̀ 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰! 🌟\n\n" +
        "➕ 𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: {multiple}\n" +
        "📌 𝗧𝗵𝗲𝗺 𝗯𝗼̛̉𝗶: {adderName}\n\n" +
        "🌈 𝗖𝘂̀𝗻𝗴 𝗻𝗵𝗮𝘂 𝗯𝗮̉𝗼 𝘃𝗲̣̂ 𝗻𝗵𝗼́𝗺 𝘃𝗮̀ 𝘁𝗮̣𝗼 𝗻𝗲̂̀𝗻 𝗺𝗼̣̂𝘁 𝗺𝗮́𝘂 𝗹𝗮̣̂𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗸𝗵𝗶́ 𝘁𝘂𝘆𝗲̣̂𝘁 𝘃𝗼̛̀𝗶! 🌈",
    },
    en: {
      session1: "☀️ 𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴",
      session2: "⛅ 𝗛𝗮𝗽𝗽𝘆 𝗡𝗼𝗼𝗻",
      session3: "🌆 𝗖𝗵𝗶𝗹𝗹 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻",
      session4: "🌙 𝗦𝗲𝗿𝗲𝗻𝗲 𝗘𝘃𝗲𝗻𝗶𝗻𝗴",
      welcomeMessage:
        "✨ 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝗶𝗻𝘃𝗶𝘁𝗶𝗻𝗴 𝗺𝗲!\n" +
        "⚡ 𝗠𝘆 𝗯𝗼𝘁 𝗽𝗿𝗲𝗳𝗶𝘅: %1\n" +
        "🔎 𝗧𝘆𝗽𝗲 %1help 𝘁𝗼 𝘀𝗲𝗲 𝗮𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀.",
      multiple1: "🔹 𝗬𝗼𝘂",
      multiple2: "🔹 𝗬𝗼𝘂 𝗮𝗻𝗱 𝗳𝗿𝗶𝗲𝗻𝗱𝘀",
      defaultWelcomeMessage:
        "🎉 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 {userNameTag}! 🎉\n\n" +
        "🏠 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 『 {boxName} 』\n\n" +
        "🌟 𝗪𝗶𝘀𝗵𝗶𝗻𝗴 𝘆𝗼𝘂 𝗮 𝗳𝘂𝗻 𝗮𝗻𝗱 𝗯𝗿𝗶𝗴𝗵𝘁 {session}!\n\n" +
        "👥 𝗧𝗼𝘁𝗮𝗹 𝗺𝗲𝗺𝗯𝗲𝗿𝘀: {multiple}\n" +
        "➕ 𝗔𝗱𝗱𝗲𝗱 𝗯𝘆: {adderName}\n\n" +
        "🌈 𝗟𝗲𝘁’𝘀 𝗸𝗲𝗲𝗽 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗳𝗿𝗶𝗲𝗻𝗱𝗹𝘆 𝗮𝗻𝗱 𝗳𝘂𝗻! 🌈",
    },
  },

  onStart: async ({ threadsData, message, event, api, getLang }) => {
    if (event.logMessageType !== "log:subscribe") return;

    const { threadID, logMessageData, author } = event;
    const { addedParticipants } = logMessageData;
    const hours = parseInt(getTime("HH"));
    const prefix = global.utils.getPrefix(threadID);
    const nickNameBot = global.GoatBot.config.nickNameBot;

    // If bot joined
    if (addedParticipants.some(user => user.userFbId === api.getCurrentUserID())) {
      if (nickNameBot) await api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
      return message.send(getLang("welcomeMessage", prefix));
    }

    if (!global.temp.welcomeEvent[threadID]) {
      global.temp.welcomeEvent[threadID] = { joinTimeout: null, dataAddedParticipants: [] };
    }

    global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...addedParticipants);

    clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

    global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async () => {
      const threadData = await threadsData.get(threadID);
      if (threadData.settings.sendWelcomeMessage === false) return;

      const bannedUsers = threadData.data.banned_ban || [];
      const threadName = threadData.threadName;

      // Filter valid new members
      const newMembers = [];
      const mentions = [];
      const dataAdded = global.temp.welcomeEvent[threadID].dataAddedParticipants;
      const isMultiple = dataAdded.length > 1;

      for (const user of dataAdded) {
        if (bannedUsers.some(b => b.id === user.userFbId)) continue;
        newMembers.push(user.fullName);
        mentions.push({ tag: user.fullName, id: user.userFbId });
      }

      if (newMembers.length === 0) return;

      // Adder info
      const adderInfo = await api.getUserInfo(author);
      const adderName = adderInfo[author]?.name || "Someone";
      mentions.push({ tag: adderName, id: author });

      // Session text based on hour
      const sessionText =
        hours <= 10 ? getLang("session1") :
        hours <= 12 ? getLang("session2") :
        hours <= 18 ? getLang("session3") :
        getLang("session4");

      let welcomeMessage = threadData.data.welcomeMessage || getLang("defaultWelcomeMessage");

      // Replace placeholders & prefix
      welcomeMessage = welcomeMessage
        .replace(/\{userName\}|\{userNameTag\}/g, newMembers.join(", "))
        .replace(/\{boxName\}|\{threadName\}/g, threadName)
        .replace(/\{multiple\}/g, isMultiple ? getLang("multiple2") : getLang("multiple1"))
        .replace(/\{session\}/g, sessionText)
        .replace(/\{adderName\}/g, adderName)
        .replace(/%1/g, prefix);

      // Prepare form
      let form = { body: welcomeMessage, mentions };

      // Attachments if any
      if (threadData.data.welcomeAttachment) {
        const attachments = threadData.data.welcomeAttachment.map(f => drive.getFile(f, "stream"));
        const results = await Promise.allSettled(attachments);
        form.attachment = results.filter(r => r.status === "fulfilled").map(r => r.value);
      }

      await message.send(form);

      delete global.temp.welcomeEvent[threadID];
    }, 1500);
  },
};