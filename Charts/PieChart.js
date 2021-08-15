// STEP 1 - Include Dependencies
// Include react
import React from 'react';
import { useWindowSize } from './useWindowSize';
import { useGlobalContext } from '../context';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import FusionThemeD from 'fusioncharts/themes/fusioncharts.theme.candy';

// Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const PieChart = ({ dataPie }) => {
    const { width } = useWindowSize();

    let condition = width < 960 ? '50%' : '30%';

    let data = dataPie();
    const { isDark } = useGlobalContext();
    let Ftheme = isDark ? FusionThemeD : FusionTheme;

    ReactFC.fcRoot(FusionCharts, Chart, Ftheme);
    // STEP 3 - Creating the JSON object to store the chart configurations
    const chartConfigs = {
        type: 'pie3d', // The chart type
        width: '100%', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                //Set the chart caption
                caption: 'Languages',
                subCaption: 'All the languages used by user',
                pieRadius: `${condition}`,
                //Set the chart subcaption
                animation: 3,
                //Set the theme for your chart
                theme: isDark ? 'candy' : 'fusion',
            },
            // Chart Data
            data,
        },
    };

    return <ReactFC {...chartConfigs} />;
};

export default PieChart;
