import React, {memo} from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import Table from '../components/Table';
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const TableEx = styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;

    .inputWrapper {
        padding: 0;
        position: relative;
        text-align: left;

        .field {
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label {
            margin-left: 7px;
            margin-right: 10px;

            input {
                margin-right: 10px;
            }
        }
    }
`;

const GradeEdit = memo(() => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [{data,loading, error}, refetch] = useAxios(`/grade/${id}`);

    const onSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;

        const name = current.name.value;
        const level = current.level.value;
        const sex = current.sex.value;
        const kor = current.kor.value;
        const eng = current.eng.value;
        const math = current.math.value;
        const sin = current.sin.value;

        let json = null;

        (async ()=>{
            try{
                const response = await refetch({
                    method: 'PUT',
                    data: {
                        name: name,
                        level: parseInt(level),
                        sex: sex,
                        kor: parseInt(kor),
                        eng: parseInt(eng),
                        math: parseInt(math),
                        sin: parseInt(sin),
                    }
                })

                json = response.data;
            } catch(e) {
                console.error(e);
                window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
            }

            if( json !== null) {
                window.alert("?????????????????????.");
                navigate('/');
            }
        })();
    }, [])

    return (
        <>
            <Spinner loading={loading} />
            {error ? (
                <div>
                    <h1>Oops~!!! {error.code} Error.</h1>
                </div>
            ):(data && (
            <form onSubmit={onSubmit}>
                <TableEx>
                    <colgroup>
                        <col width="120"/>
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'><input className="field" type="text" name="name" defaultValue={data.name}/></td>
                        </tr>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'>
                                <select name="level" className="field" defaultValue={data.level}>
                                    <option value="">----???????????????----</option>
                                    <option value="1">1??????</option>
                                    <option value="2">2??????</option>
                                    <option value="3">3??????</option>
                                    <option value="4">4??????</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'>
                                <label><input type="radio" name="sex" value="??????" defaultValue={data.sex === '??????'}/>??????</label>
                                <label><input type="radio" name="sex" value="??????"defaultValue={data.sex === '??????'}/>??????</label>
                            </td>
                        </tr>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'>
                                <input className='field' type="number" name="kor" placeholder='????????? ?????? (0~100)' defaultValue={data.kor}/>
                            </td>
                        </tr>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'>
                                <input className='field' type="number" name="eng" placeholder='????????? ?????? (0~100)' defaultValue={data.eng}/>
                            </td>
                        </tr>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'>
                                <input className='field' type="number" name="math" placeholder='????????? ?????? (0~100)' defaultValue={data.math}/>
                            </td>
                        </tr>
                        <tr>
                            <th>??????</th>
                            <td className='inputWrapper'>
                                <input className='field' type="number" name="sin" placeholder='????????? ?????? (0~100)' defaultValue={data.sin}/>
                            </td>
                        </tr>
                    </tbody>
                </TableEx>

                <div style={{textAlign:'center'}}>
                    <button type='submit'>????????????</button>
                </div>
            </form>)
            )}
            
        </>
       
    )
});

export default GradeEdit;