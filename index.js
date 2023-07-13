(function() {
    const code = "tstqgKhlwyU";
    const characterCount = 3;
    const possibleCharacters = "abcdefghijklmnopqrstuvwxyz";

    function getUrl(username) {
        return `https://secure.runescape.com/m=displaynames/c=${code}/check_name?displayname=${username}`;
    }

    function iterateThroughPossibleRSNS() {
        const possibleRSNs = [];
        for (let i = 0; i < possibleCharacters.length; i++) {
            for (let j = 0; j < possibleCharacters.length; j++) {
                for (let k = 0; k < possibleCharacters.length; k++) {
                    const firstChar = possibleCharacters.charAt(i);
                    const secondChar = possibleCharacters.charAt(j);
                    const thirdChar = possibleCharacters.charAt(k);
                    possibleRSNs.push(`${firstChar}${secondChar}${thirdChar}`);
                }
            }
        }
        return possibleRSNs;
    }

    const possibleNames = iterateThroughPossibleRSNS();

    async function fetchUsername(url) {
        const response = await fetch(url);
        const userResponse = await response.body;
        console.log(userResponse);
    }

    let counter = 0;
    setInterval(() => {
        const currentRSN = possibleNames[counter];
        console.log(currentRSN);
        fetchUsername(getUrl(currentRSN));
        counter++;
        if (counter > possibleNames.length) {
            clearInterval(this);
        }
    }, 3000)

})();
