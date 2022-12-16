import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts"

const BMI = () => {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [date, setDate] = useState(0)
    const [chartData, setChartData] = useState(null);

    const [bmiData, setBmiData] = useState([]);


    const onFormSubmit = (e) => {
        e.preventDefault()
        if (height === 0 && weight === 0) {
            alert('Please insert your height and weight')
        } else {
            setBmiData((prev) => ([...prev, {height: height, weight: weight, date: date, bmi: ((weight * 703) / Math.pow(height, 2)).toFixed(1)}]))
        }
    }

    useEffect(() => {
        if(bmiData.length !== 0) {
            let bmis = [];
            bmiData.forEach((item) => {
                bmis.push(item.bmi);
            })
            let bmiDates = [];
            bmiData.forEach((item) => {
                bmiDates.push(item.date);
            })
            setChartData(
                {
                    series: [{
                        name: "BMI",
                        data: bmis
                    }],
                    options: {
                    chart: {
                        height: 350,
                        type: 'line',
                        zoom: {
                        enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: 'BMI by day',
                        align: 'left'
                    },
                    grid: {
                        row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories: bmiDates,
                    }
                    },
                }
            )
        }
    }, [bmiData])



    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label>Date:
                    <input type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>Height:
                    <input type='number'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
                <label>Weight:
                    <input type='number'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <button type='submit'
                >Submit</button>

            </form>
            {
                bmiData.map((item, index) => {
                    return <div key={index}>Body Mass Index: {item.bmi}</div>
                })
            }
            {
                chartData && <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
            }
        </>
    )
}
export default BMI