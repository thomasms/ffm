function getControlText(input){
    var text = [];

    if(input.clobber){
        text.push("CLOBBER");
    }

    if(input.usejson){
        text.push("JSON");
    }

    if(input.group != null){
        var line = "GETXS 1 " + input.group;
        if(input.group === 0){
        line = "GETXS " + input.group;
        }
        text.push(line);
    }

    text.push("FISPACT");

    return text;
}

function getInitialText(input){
    var text = [];
    text.push("* " + input.name);

    return text;
}

function getInventoryText(input){
    var text = [];

    text.push("END");
    text.push("* end");

    return text;
}

function getRawText(input){
    const controltext = getControlText(input);
    const initialkeys = getInitialText(input);
    const inventorykeys =  getInventoryText(input);

    const rawtext = controltext.join("\n") + "\n" +
                    initialkeys.join("\n") + "\n" +
                    inventorykeys.join("\n");

    const rows = controltext.length + initialkeys.length + inventorykeys.length + 1;

    return [rawtext, rows];
}

export {getRawText}