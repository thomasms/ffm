function getPaths(input){
    var text = [];

    const spacing = " ";
    const sep = "/";
    const nd_path = input.base_dir;
    const group = input.group;

    if(input.options.eaf){
        const fis_groups = [66, 69];
        const flt_groups = [172, 211];

        var xs_str = "";
        if(fis_groups.includes(group)){
            xs_str = "fis";
        }
        else if(flt_groups.includes(group)){
            xs_str = "flt";
        }
        else{
            xs_str = "fus";
        }
        var xs_group = group.toString();
        if(xs_group.length == 2){
            xs_group = `0${xs_group}`;
        }

        text.push("# index file");
        text.push(`ind_nuc${spacing}${nd_path}${sep}EAF2010data${sep}eaf_index_20100\n`);

        text.push("# decay data");
        text.push(`decay${spacing}${nd_path}${sep}EAF2010data${sep}eaf_dec_20100.001\n`);

        text.push("# cross section data");
        text.push(`crossec${spacing}${nd_path}${sep}EAF2010data${sep}eaf_n_gxs_${xs_group}_${xs_str}_20100`);
        text.push(`crossunc${spacing}${nd_path}${sep}EAF2010data${sep}eaf_un_20100\n`);

        text.push("# fission data");
        text.push(`asscfy${spacing}${nd_path}${sep}EAF2010data${sep}eaf_n_asscfy_20100`);
        text.push(`fissyld${spacing}${nd_path}${sep}EAF2010data${sep}eaf_n_fis_20100\n`);

        text.push("# regulatory data");
        text.push(`hazards${spacing}${nd_path}${sep}EAF2010data${sep}eaf_haz_20100`);
        text.push(`clear${spacing}${nd_path}${sep}EAF2010data${sep}eaf_clear_20100`);
        text.push(`a2data${spacing}${nd_path}${sep}EAF2010data${sep}eaf_a2_20100\n`);
    }
    else{
        text.push("# index file");
        text.push(`ind_nuc${spacing}${nd_path}${sep}decay${sep}decay_2012_index_2012\n`);
    }

    if(input.files.fluxes.length > 0){
        text.push("# fluxes");
        text.push(`fluxes${spacing}${input.files.fluxes}`);
    }

    return text;
}

function getRawText(input){
    const data =  getPaths(input);
    const rawtext = data.join("\n");
    const rows = data.length + 3;

    return [rawtext, rows];
}

export { getRawText }