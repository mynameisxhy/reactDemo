import React from 'react';
import ReactDom from 'react-dom';

require('./index.less')
 
class App extends React.Component {
    dataSource = () => {
        const result =  [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: {
                    name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
                },
                id: 100306660940 + i,
                time: 2000 + i
            });
        }
        return result;
    }
    rend = (record) => {
        return <a href="javascript:;">Remove({record.id})</a>
    }

    render() {
        return (
            <table className='wrap' border="1" cellspacing="0">
                <tr className='tableHead'>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Time</td>
                    <td>Remove</td>
                </tr>
                
                {
                    this.dataSource().map( item => {
                        return <tr className='tableInner'>
                            <td>{item.id}</td>
                            <td>{item.title.name}</td>
                            <td>{item.time}</td>
                            <td>{this.rend(item)}</td>
                            
                        </tr>
                    })
                }
            </table>
        )
    }
}
 
ReactDom.render(
    <App />,
    document.getElementById('app')
);