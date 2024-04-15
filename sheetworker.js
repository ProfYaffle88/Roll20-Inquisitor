on("chat:message", function(msg) {
    if (msg.type === "rollresult" && msg.rolltemplate === "rolltemplate-inq") {
        var rollResult = msg.content.diceroll;
        
        // Parse the roll result to extract the target value
        var targetMatch = rollResult.match(/\[\[(\d+)\]\]/);
        if (targetMatch) {
            var target = parseInt(targetMatch[1]);
            
            // Calculate the critical target (1/10th of the target)
            var critTarget = Math.ceil(target * 0.1);
            
            // Check if the character is wielding a ranged weapon
            var weaponType = getAttrByName(characterId, "weaponType");
            var critEffect = "";
            if (weaponType.toLowerCase() === "ranged") {
                // Set additional effect for ranged weapon
                critEffect = "Placed Shot = +/- 20% to location roll!";
            } else if (weaponType.toLowerCase() === "melee") {
                // Set additional effect for melee weapon
                critEffect = "Critical Melee = Double Damage after Damage Roll!";
            }
            
            // Append the critical effect to the roll result
            rollResult += " " + critEffect;
        }
        
        // Send the modified roll result back to the chat
        sendChat(msg.who, "/r " + rollResult);
    }
});
