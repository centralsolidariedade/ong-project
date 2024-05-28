import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import './AdvancedView.css'

const AdvancedView = () => {
  return (
    <div>
        <div className='divEmBreve'>
            <h2 className='tituloCentralizado'>Em breve...</h2>
        </div>
        {/* <div className='backgroundDivGraphs'>
            <div className='graph01'>
                <h2>Título Linha 1</h2>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                        data: [1, 2, 3, 5, 8, 10],
                        },
                    ]}
                    width={500}
                    height={300}
                />  
            </div>
            <div className='graph02'>
                <h2>Título Barra 1</h2>
                <BarChart
                    xAxis={[
                        {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                        data: [2, 5, 3],
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </div>
        </div> */}
    </div>
  );
};

export default AdvancedView;
