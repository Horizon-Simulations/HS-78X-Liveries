const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './hs-78X-liveries/out/horizonsim-aircraft-787-10-livery-package',
            outDir: './hs-78X-liveries/out/build-modules',
            modules: [{
                name: 'Horizon_Simulations_House_Livery',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_HR_SIM'
            }, {
                name: 'British_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_BAW'
            }, {
                name: 'Saudia_1',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_SVA'
            }, {
                name: 'Saudia_2',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_SVA2'
            }, {
                name: 'Vietnam_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_HVN'
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
