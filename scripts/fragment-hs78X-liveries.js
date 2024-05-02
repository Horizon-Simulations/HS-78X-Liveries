const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './hs-78X-liveries/out/horizonsim-aircraft-787-10-livery-package',
            outDir: './hs-78X-liveries/out/build-modules',
            modules: [{
                name: 'All_Nippon_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ANA'
            }, {
                name: 'British_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_BAW'
            }, {
                name: 'Etihad',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ETD'
            }, {
                name: 'EVA_Air',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_EVA'
            }, {
                name: 'Vietnam_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_HVN'
            }, {
                name: 'KLM_Royal_Dutch_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_KLM'
            }, {
                name: 'Singapore_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_SIA'
            }, {
                name: 'Saudia',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_SVA'
            }, {
                name: 'Saudia_2',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_SVA2'
            }, {
                name: 'United',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_UAL'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hs-78X-liveries/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
