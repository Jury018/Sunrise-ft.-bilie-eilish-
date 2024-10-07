document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const lyricsContainer = document.getElementById('lyrics');
   //jury the bonikid 
    const lyrics = [
        "Nothing left to lose without my baby",
        "Birds of a feather we should stick together I know",
        "I said I'd never think I wasn't better alone",
        "Can't change the weather might not be forever",
        "But if it's forever it's even better",
        "And I don't know what I'm crying for",
        "I don't think I could love you more",
        "It might not be long but baby I",
        "I'll love you 'til the day that I die",
        "Til the day that I die",
        "Til the light leaves my eyes",
        "Til the day that I die"
    ];
    
    let currentLyricIndex = 0;
    let lyricTimeout = null;

    function playMusic() {
        audio.currentTime = 0; 
        audio.play();
        displayLyric(); 
    }

    function displayLyric() {
        if (currentLyricIndex < lyrics.length) {
            const lyric = document.createElement('div');
            lyric.textContent = lyrics[currentLyricIndex];
            lyric.className = 'line';
            lyricsContainer.appendChild(lyric);
            
        // Fade in the lyric
            setTimeout(() => {
                lyric.style.opacity = 1; 
            setTimeout(() => {
       // Fade out the lyric
                    lyric.style.opacity = 0; 
            setTimeout(() => {
                        lyricsContainer.removeChild(lyric);
                        currentLyricIndex++;
                        displayLyric(); 
                    }, 1000);                 
                    }, 3000); 
                    }, 1000); 
    }
 }

function checkCurrentLyric() {
        const currentTime = audio.currentTime;
        const lyricDurations = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]; 
        for (let i = 0; i < lyricDurations.length; i++) {
            if (currentTime < lyricDurations[i]) {
                currentLyricIndex = i; 
                break;
            }
        }
}

    //  music stop when the user leaves the page
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            audio.pause(); 
            clearTimeout(lyricTimeout); 
        } else {
            if (audio.paused) {
                checkCurrentLyric(); 
                playMusic(); 
            }
        }
});

document.body.addEventListener('click', () => {
        if (audio.paused) {
            playMusic();
        }
    });
});