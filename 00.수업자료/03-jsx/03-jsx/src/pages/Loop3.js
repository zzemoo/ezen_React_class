import React from 'react';

const Loop3 = () => {
    const seasons = ['봄', '여름', '가을', '겨울']

    return (
        <div>
            <h2>Loop3</h2>
            <table border='1'>
                <tbody>
                    <tr>{seasons.map((item, index)=> {
                        return <td key={index}>{item}</td>
                    })}</tr>
                </tbody>
            </table>
        </div>
    )
};

export default Loop3;