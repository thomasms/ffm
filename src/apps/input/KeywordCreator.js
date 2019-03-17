
function getControlText(input){
    var text = [];

    if(input.options.clobber){
        text.push("CLOBBER");
    }

    if(input.options.usejson){
        text.push("JSON");
    }

    if(input.options.spek){
        text.push("SPEK");
    }

    if(input.options.eaf){
        text.push("LIBVERSION 0");
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

    if(input.options.atwo){
        text.push("ATWO");
    }

    if(input.options.clear){
        text.push("CLEAR");
    }

    if(input.options.half){
        text.push("HALF");
    }

    if(input.selectedElements.length > 0){
        text.push("MASS " + input.selectedElements.length);
        for(var i = 0; i < input.selectedElements.length; i++) {
            text.push(input.selectedElements[i]);
        }
    }

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