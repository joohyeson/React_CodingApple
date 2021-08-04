import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {

    let { id } = useParams();//:id자리에 사용자가 입력한 값
    let 찾은상품 = props.shoesInfo.find(function (상품) {
        return 상품.id == id
    });//id로 상품 검색해서 보여주는 기능

    let history = useHistory();

    return (
        <div className="container">
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