import React from 'react';
import { useGlobalContext } from '../context';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import ColumnChart from './ColumnChart';

const useStyles = makeStyles({
    root: {
        marginTop: '3rem',
        marginBottom: '2rem',
    },
});

function Repos() {
    const classes = useStyles();
    const { repos } = useGlobalContext();

    // calculate pie chart
    const dataPie = () => {
        let results = [];
        const data = repos.reduce((total, item) => {
            const language = item.language;

            if (!language) return total;

            if (!total[language]) total[language] = 0;

            total[language] = total[language] + 1;

            return total;
        }, {});

        for (let key in data) {
            results.push({ label: `${key}`, value: `${data[key]}` });
        }
        return results;
    };

    // Calculate Bar Chart
    const dataChart = () => {
        let results = [];
        const data = repos.reduce((total, item) => {
            const language = item.language;
            const star = item.stargazers_count;

            if (!language) return total;

            if (!total[language]) total[language] = 0;

            total[language] = total[language] + star;

            return total;
        }, {});

        for (let key in data) {
            results.push({ label: `${key}`, value: `${data[key]}` });
        }

        return results.slice(0, 6);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box boxShadow={3}>
                        <PieChart dataPie={dataPie} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box boxShadow={3}>
                        <BarChart dataChart={dataChart} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box boxShadow={3}>
                        <DoughnutChart dataPie={dataChart} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box boxShadow={3}>
                        <ColumnChart dataChart={dataChart} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Repos;
