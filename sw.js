// Live API + Infinite Procedural Notification Engine

// 1. Live Online AI Quote Fetcher
async function fetchLiveOnlineQuote() {
    try {
        // Fetch from free, fast motivational quotes API
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (response.ok) {
            const data = await response.json();
            return `💡 "${data.quote}" — ${data.author}`;
        }
    } catch (err) {
        // Fallback to offline engine if offline
    }
    return null;
}

// 2. Offline Deep Procedural Engine (5-Tier Generator)
const OPENERS = [
    "🚨 Mindset Alert:", "⚡ Health Check:", "🧠 Brain Science:", "🛡️ Focus Shield:", 
    "🔥 Recovery Fact:", "👑 Streak Guard:", "🌊 Craving Wave:", "💎 Long-Term Vision:",
    "🍏 Metabolic Truth:", "📊 Science Check:", "🏆 Clean Life:", "💪 Discipline Note:"
];

const PHYSIOLOGY = [
    "Your blood glucose levels are stabilizing right now",
    "Your brain dopamine receptors are resetting their baseline sensitivity",
    "Your liver is burning stored fat for steady energy instead of quick sugar",
    "Your pancreas insulin response is taking a well-deserved rest",
    "Your skin cell turnover and collagen production are improving without glycation",
    "Your gut microbiome is actively shifting away from harmful yeast overgrowth"
];

const CRAVING_TRUTHS = [
    "a sugar craving is just a 10-minute temporary dopamine urge",
    "eating added sugar right now will cause a massive afternoon energy crash",
    "giving in now resets your hard-earned habit building progress",
    "cheap sweetness lasts 10 seconds, but your health streak lasts forever",
    "your body doesn't need sugar, it just needs clean hydration and sleep"
];

const ACTION_DIRECTIVES = [
    "Drink a large glass of ice-cold water immediately.",
    "Take 5 deep breath cycles and clear your mind.",
    "Eat a handful of nuts or protein if you are genuinely hungry.",
    "Open the app and log your clean streak progress right now!",
    "Walk around for 2 minutes to break the craving impulse."
];

function generateOfflineProceduralQuote() {
    const p1 = OPENERS[Math.floor(Math.random() * OPENERS.length)];
    const p2 = PHYSIOLOGY[Math.floor(Math.random() * PHYSIOLOGY.length)];
    const p3 = CRAVING_TRUTHS[Math.floor(Math.random() * CRAVING_TRUTHS.length)];
    const p4 = ACTION_DIRECTIVES[Math.floor(Math.random() * ACTION_DIRECTIVES.length)];
    
    return `${p1} ${p2}. Remember, ${p3}. ${p4}`;
}

// Main Notification Trigger Function
async function sendNotification() {
    // Try online live quote first; if offline, generate unique procedural quote
    let finalMessage = await fetchLiveOnlineQuote();
    if (!finalMessage) {
        finalMessage = generateOfflineProceduralQuote();
    }

    return self.registration.showNotification("SugarFree Life 🌿", {
        body: finalMessage,
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2'%3E%3Cpath d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7a9 9 0 0 1-10 11z'/%3E%3Cpath d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'/%3E%3C/svg%3E",
        tag: 'sugar-daily-reminder'
    });
}

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'daily-sugar-reminder') {
        event.waitUntil(sendNotification());
    }
});
