function getPaths(input){
    var text = [];

    const spacing = " ";
    const sep = "/";
    const nd_path = input.base_dir;
    const group = input.group;
    const particle = input.particle[0];

    var xs_group = "";
    if(group != null & group > 0){
        xs_group = group.toString();
        if(xs_group.length === 2){
            xs_group = `0${xs_group}`;
        }
    }

    if(input.eaf){
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

        text.push("# index file");
        text.push(`ind_nuc${spacing}${nd_path}${sep}EAF2010data${sep}eaf_index_20100\n`);

        text.push("# decay data");
        text.push(`decay${spacing}${nd_path}${sep}EAF2010data${sep}eaf_dec_20100.001\n`);

        if(xs_group){
            text.push("# cross section data");
            text.push(`crossec${spacing}${nd_path}${sep}EAF2010data${sep}eaf_n_gxs_${xs_group}_${xs_str}_20100`);
            text.push(`crossunc${spacing}${nd_path}${sep}EAF2010data${sep}eaf_un_20100\n`);
        }

        text.push("# fission data");
        text.push(`asscfy${spacing}${nd_path}${sep}EAF2010data${sep}eaf_n_asscfy_20100`);
        text.push(`fissyld${spacing}${nd_path}${sep}EAF2010data${sep}eaf_n_fis_20100\n`);

        text.push("# absorp data");
        text.push(`absorp${spacing}${nd_path}${sep}EAF2010data${sep}eaf_abs_20100\n`);

        text.push("# regulatory data");
        text.push(`hazards${spacing}${nd_path}${sep}EAF2010data${sep}eaf_haz_20100`);
        text.push(`clear${spacing}${nd_path}${sep}EAF2010data${sep}eaf_clear_20100`);
        text.push(`a2data${spacing}${nd_path}${sep}EAF2010data${sep}eaf_a2_20100\n`);
    }
    else{
        text.push("# index file");
        text.push(`ind_nuc${spacing}${nd_path}${sep}decay${sep}decay_2012_index_2012\n`);

        text.push("# decay data base directory");
        text.push(`dk_endf${spacing}${nd_path}${sep}decay${sep}decay_2012\n`);

        if(xs_group){
            text.push("# cross section data");
            text.push(`xs_endf${spacing}${nd_path}${sep}TENDL2015data${sep}tal2015-${particle}${sep}gxs-${xs_group}\n`);
        }

        text.push("# absorp data");
        text.push(`absorp${spacing}${nd_path}${sep}decay${sep}abs_2012\n`);

        text.push("# regulatory data");
        text.push(`hazards${spacing}${nd_path}${sep}decay${sep}hazards_2012`);
        text.push(`clear${spacing}${nd_path}${sep}decay${sep}clear_2012`);
        text.push(`a2data${spacing}${nd_path}${sep}decay${sep}a2_2012\n`);
    }

    if(input.files.fluxes.length > 0){
        text.push("# fluxes");
        text.push(`fluxes${spacing}${input.files.fluxes}\n`);
    }

    text.push("# collapsed cross section data (in and out)");
    text.push(`collapxi${spacing}COLLAPX`);
    text.push(`collapxo${spacing}COLLAPX\n`);

    text.push("# condensed decay and fission data (in and out)");
    text.push(`arrayx${spacing}ARRAYX\n`);

    return text;
}

function getRawText(input){
    const data =  getPaths(input);
    const rawtext = data.join("\n");
    const rows = data.length + 3;

    return [rawtext, rows];
}

export { getRawText }