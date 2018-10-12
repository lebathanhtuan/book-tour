import React, { Component } from 'react';

class TourDetailComments extends Component {
    render() {
        var { tourDetail, comments } = this.props;
        var showComments = comments.map((comment, index) => {
            if(comment.idTour === tourDetail.id){
                return(
                    <div className="media pt-2 pl-4 pr-4" key={index}>
                        <img src="https://png.icons8.com/ios/40/777777/user-male-circle-filled.png" className="material-icons mr-3 mt-1 rounded-circle" height="48x" width="48px" />
                        <div className="media-body">
                            <h5>{comment.name}&nbsp;&nbsp;&nbsp;<small><i>Đăng ngày {comment.time}</i></small></h5>
                            <p>{comment.cmt}</p>
                        </div>
                    </div>
                )
            }
        });
        return (
            <div className="scrollbar" id="displayComments" style={{ maxHeight: 1000 }}>
                {showComments}
            </div>
        );
    }
}

export default TourDetailComments;
