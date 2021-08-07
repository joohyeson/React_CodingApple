import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.div`
    font-size:25px;
    color: ${props => props.색상}
`

function Detail(props) {

    let { id } = useParams();//:id자리에 사용자가 입력한 값
    let 찾은상품 = props.shoesInfo.find(function (상품) {
        return 상품.id == id
    });//id로 상품 검색해서 보여주는 기능

    let history = useHistory();

    return (
        <div className="container">
            <박스>
                <제목 className="red">Detail</제목>
            </박스>
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>

        </div>
    )
}

export default Detail;