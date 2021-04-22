export default function () {
    const testConfig = {
        styling: {
            theme: ['light', 'bottom', 'left'],
        },
    };

    window.klaroConfig = { ...window.klaroConfig, ...testConfig };
}
